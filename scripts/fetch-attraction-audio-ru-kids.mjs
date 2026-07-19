// Pre-generate simple, warm Russian narration for kids (ages ~5-8) for each
// attraction — text lives in src/data/i18n/attractions.ru-kids.ts, NOT a
// translation of attractions.ts, a short story in easy words. Writes
// public/audio/attractions/<id>.ru-kids.mp3. Offered as an extra "listen in
// Russian" track regardless of the app's display language (EN/HE).
//
// Default: Gemini Flash TTS (`GEMINI_API_KEY`, loaded from .env.local if
// present). Optional overrides: `GEMINI_TTS_MODEL`, `GEMINI_TTS_VOICE_RU_KIDS`
// (falls back to `GEMINI_TTS_VOICE_NAME`, then "Kore").
//
//   node scripts/fetch-attraction-audio-ru-kids.mjs
//   node scripts/fetch-attraction-audio-ru-kids.mjs --force

import { writeFile, mkdir, access, rm } from "node:fs/promises";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { randomUUID } from "node:crypto";
import { loadProjectEnvLocal } from "./lib/google-tts.mjs";
import { geminiTtsToMp3Buffer, getGeminiTtsModel } from "./lib/gemini-tts.mjs";
import { attractionsRuKids } from "../src/data/i18n/attractions.ru-kids.ts";

const execFileP = promisify(execFile);

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, "..");
const OUT_DIR = resolve(REPO_ROOT, "public", "audio", "attractions");

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
    "short story aloud to young children (ages 5 and 8) at bedtime. Gentle, " +
    "unhurried pace, playful and a little wondering — not a tour-guide " +
    "register. Read the following naturally:\n\n" +
    text.replace(/\r\n/g, "\n")
  );
}

/** Re-encode to 44.1 kHz stereo 128k to match the other attraction clips. */
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
  const entries = Object.entries(attractionsRuKids);
  console.log(`Found ${entries.length} entries in attractions.ru-kids.ts`);

  let generated = 0;
  let skipped = 0;

  const tmpDir = resolve(OUT_DIR, ".tmp-tts-ru-kids");
  await mkdir(tmpDir, { recursive: true });

  try {
    for (const [id, text] of entries) {
      const outPath = resolve(OUT_DIR, `${id}.ru-kids.mp3`);
      if (!force && (await fileExists(outPath))) {
        console.log(`  skip   ${id}.ru-kids.mp3 (exists)`);
        skipped++;
        continue;
      }
      console.log(`  fetch  ${id}.ru-kids.mp3  (${text.length} chars)`);
      try {
        const rawBuf = await geminiTtsToMp3Buffer(apiKey, tmpDir, {
          text: prompt(text),
          voiceName: voiceName()
        });
        const rawPath = join(tmpDir, `raw-${id}-${randomUUID()}.mp3`);
        await writeFile(rawPath, rawBuf);
        await normalizeMp3ToAttractionStandard(rawPath, outPath);
        await rm(rawPath, { force: true });
        generated++;
        await new Promise(r => setTimeout(r, 230));
      } catch (e) {
        console.error(`  FAIL   ${id}.ru-kids.mp3 — ${e.message}`);
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
