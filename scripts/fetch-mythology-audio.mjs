// Pre-generate simple, warm Russian narration for kids (ages ~5-8) for each
// Greek mythology story — text lives in src/data/mythology.ts. Writes
// public/audio/mythology/<id>.mp3. Same voice/approach as
// fetch-attraction-audio-ru-kids.mjs, just a different content source and
// output path (this whole section is Russian-only, so no `.ru-kids` suffix
// needed to disambiguate from an EN/HE track).
//
// Default: Gemini Flash TTS (`GEMINI_API_KEY`, loaded from .env.local if
// present). Optional overrides: `GEMINI_TTS_MODEL`, `GEMINI_TTS_VOICE_RU_KIDS`
// (falls back to `GEMINI_TTS_VOICE_NAME`, then "Kore").
//
//   node scripts/fetch-mythology-audio.mjs
//   node scripts/fetch-mythology-audio.mjs --force

import { writeFile, mkdir, access, rm } from "node:fs/promises";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { randomUUID } from "node:crypto";
import { loadProjectEnvLocal } from "./lib/google-tts.mjs";
import { geminiTtsToMp3Buffer, getGeminiTtsModel } from "./lib/gemini-tts.mjs";
import { mythologyStories } from "../src/data/mythology.ts";

const execFileP = promisify(execFile);

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, "..");
const OUT_DIR = resolve(REPO_ROOT, "public", "audio", "mythology");

function voiceName() {
  return (
    process.env.GEMINI_TTS_VOICE_RU_KIDS?.trim() ||
    process.env.GEMINI_TTS_VOICE_NAME?.trim() ||
    "Kore"
  );
}

function prompt(text) {
  return (
    "Speak in Russian, warmly and simply, like a kind narrator reading a " +
    "short myth aloud to young children (ages 5 and 8) at bedtime. Gentle, " +
    "unhurried pace, playful and a little wondering — not a tour-guide " +
    "register. Read the following naturally:\n\n" +
    text.replace(/\r\n/g, "\n")
  );
}

/** Re-encode to 44.1 kHz stereo 128k to match the other narration clips. */
async function normalizeMp3ToAttractionStandard(rawMp3Path, outPath) {
  await execFileP("ffmpeg", [
    "-y",
    "-i",
    rawMp3Path,
    "-c:a",
    "libmp3lame",
    "-ar",
    "44100",
    "-ac",
    "2",
    "-b:a",
    "128k",
    outPath
  ]);
}

async function fileExists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  await loadProjectEnvLocal(REPO_ROOT);
  const force = process.argv.includes("--force");

  const apiKey = process.env.GEMINI_API_KEY?.trim();
  if (!apiKey) {
    console.error("Set GEMINI_API_KEY (or add it to .env.local).");
    process.exit(1);
  }

  try {
    await execFileP("ffmpeg", ["-version"]);
  } catch {
    console.error("ffmpeg is required on PATH (normalize MP3 output).");
    process.exit(1);
  }

  console.log(`TTS: Gemini Flash TTS | model=${getGeminiTtsModel()} | voice=${voiceName()}`);

  await mkdir(OUT_DIR, { recursive: true });
  console.log(`Found ${mythologyStories.length} entries in mythology.ts`);

  let generated = 0;
  let skipped = 0;

  const tmpDir = resolve(OUT_DIR, ".tmp-tts-mythology");
  await mkdir(tmpDir, { recursive: true });

  try {
    for (const { id, story } of mythologyStories) {
      const outPath = resolve(OUT_DIR, `${id}.mp3`);
      if (!force && (await fileExists(outPath))) {
        console.log(`  skip   ${id}.mp3 (exists)`);
        skipped++;
        continue;
      }
      console.log(`  fetch  ${id}.mp3  (${story.length} chars)`);
      try {
        const rawBuf = await geminiTtsToMp3Buffer(apiKey, tmpDir, {
          text: prompt(story),
          voiceName: voiceName()
        });
        const rawPath = join(tmpDir, `raw-${id}-${randomUUID()}.mp3`);
        await writeFile(rawPath, rawBuf);
        await normalizeMp3ToAttractionStandard(rawPath, outPath);
        await rm(rawPath, { force: true });
        generated++;
        await new Promise(r => setTimeout(r, 230));
      } catch (e) {
        console.error(`  FAIL   ${id}.mp3 — ${e.message}`);
      }
    }
  } finally {
    await rm(tmpDir, { recursive: true, force: true });
  }

  console.log(`\nDone. Generated ${generated}, skipped ${skipped}.`);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
