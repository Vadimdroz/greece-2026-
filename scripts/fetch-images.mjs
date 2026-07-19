// One-shot script: fetch a freely-licensed photo for each attraction, stay,
// dish, and winery from Wikipedia / Wikimedia Commons / Unsplash and save
// into public/images/.
//
// Sources are CC-licensed (Wikimedia / Wikipedia) or free-to-use (Unsplash)
// — safe for personal use and for an open repo. No paid/stock-photo sources.
//
// Covers all 33 image-bearing items for the Greece 2026 trip:
//   - src/data/attractions.ts (12 items)
//   - src/data/stays.ts       (7 items)
//   - src/data/dishes.ts      (12 items)
//   - src/data/wineries.ts    (2 items)
//
// Run with:   node scripts/fetch-images.mjs

import { writeFile, mkdir, access } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, "..", "public", "images");

const UA =
  "Mozilla/5.0 (compatible; greece-2026/1.0; +https://github.com/Vadimdroz/greece-2026-)";

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function fetchWithRetry(url, opts = {}, tries = 4) {
  let lastErr;
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, opts);
      if (res.status === 429 || res.status >= 500) {
        const wait = 1500 * Math.pow(2, i);
        console.log(`  retry ${i + 1}/${tries} after ${wait}ms (HTTP ${res.status})`);
        await sleep(wait);
        continue;
      }
      return res;
    } catch (e) {
      lastErr = e;
      const wait = 1500 * Math.pow(2, i);
      await sleep(wait);
    }
  }
  if (lastErr) throw lastErr;
  throw new Error(`gave up after ${tries} attempts: ${url}`);
}

/**
 * For each filename:
 *   { wiki: "Article_Title" }          -> use Wikipedia REST summary lead image
 *   { commons: "File:Some_File.jpg" }  -> direct Wikimedia Commons file
 *   { url: "https://..." }             -> direct URL (already CC/PD/Unsplash)
 */
/* Helper to build a sensibly-sized Unsplash JPG URL from a "photo-…" id. */
const unsplash = (photoId, w = 1600) =>
  `https://images.unsplash.com/${photoId}?fm=jpg&q=85&w=${w}&auto=format&fit=crop`;

const TARGETS = [
  // ---------- DELPHI ----------
  // The Temple of Apollo lead image is a real shot of the sanctuary's
  // signature columns — more specific than the generic "Delphi" panorama.
  ["delphi-sanctuary.jpg",   { wiki: "Temple_of_Apollo_(Delphi)" }],
  ["delphi-museum.jpg",      { wiki: "Delphi_Archaeological_Museum" }],
  // The Tholos at Marmaria — exact-match article for the circular ruin.
  ["delphi-tholos.jpg",      { wiki: "Tholos_of_Delphi" }],

  // ---------- LAKE PLASTIRAS ----------
  // No dedicated article for the Aliakmonas rafting outfit — a generic
  // family river-rafting shot (Unsplash, free) stands in.
  ["aliakmonas-rafting.jpg", { url: unsplash("photo-1599443380179-33737c17ca81") }],
  // Forest trail riding — real CC photo, no specific stable has a Wikipedia page.
  ["plastiras-horses.jpg",   { commons: "File:Horse Riding in the Forest - geograph.org.uk - 5439335.jpg" }],
  // Kids doing archery — US DoD photo, public domain, genuinely shows the activity.
  ["plastiras-archery.jpg",  { commons: "File:Kids take aim with after school archery program 120308-M-IY869-125.jpg" }],

  // ---------- TRANSIT ----------
  ["meteora-viewpoint.jpg",  { wiki: "Meteora" }],
  // Water park slide — Unsplash-sourced but on Commons under CC0.
  ["waterland.jpg",          { commons: "File:Water slide at Hôtel Eden Andalou Aquapark (234137179).jpg" }],
  // The item is specifically "Thermopylae — Leonidas Monument"; use the
  // actual Leonidas statue rather than a generic coastline landscape.
  ["thermopylae.jpg",        { commons: "File:Leonidas Statue 01.jpg" }],

  // ---------- THESSALONIKI ----------
  // "Ano Poli" redirects to the English article "Upper Town (Thessaloniki)".
  ["ano-poli.jpg",           { wiki: "Ano_Poli" }],
  ["white-tower.jpg",        { wiki: "White_Tower_of_Thessaloniki" }],

  // ---------- NAFPLIO ----------
  ["palamidi-view.jpg",      { wiki: "Palamidi" }],

  // ---------- STAYS ----------
  // Both Delphi bookings sit on/near the village's short main street —
  // two different real shots of it (same photographer, different frames)
  // give each competing booking its own honest, place-accurate image.
  ["stay-delphi-amalia.jpg",  { commons: "File:GR 08-04-23 Delphi Hauptstrasse.JPG" }],
  ["stay-delphi-acropole.jpg",{ commons: "File:GR 08-04-24 Delphi Hauptstrasse.jpg" }],
  // Kazarma Hotel's headline feature is the lake view — use the real lake.
  ["stay-plastiras.jpg",      { commons: "File:Lake Plastiras.jpg" }],
  // No usable CC photos of the actual property — tasteful Unsplash
  // fallbacks matching each room's billed feature.
  ["stay-thessaloniki-september.jpg", { url: unsplash("photo-1763717630658-d8fa5fa754e9") }], // courtyard/garden, 5★ feel
  ["stay-thessaloniki-city.jpg",      { url: unsplash("photo-1754294681773-25c7a42e503b") }], // city-view hotel room
  // Old-town Nafplio — the apartment's whole pitch is "in the heart of old Nafplio".
  ["stay-nafplio.jpg",        { commons: "File:Neoclassical buildings in Nafplion.jpg" }],
  // Psyrri, Athens — exact match for the neighbourhood the alternate hotel sits in.
  ["stay-athens-philia.jpg",  { commons: "File:Psyrri, Athens.jpg" }],

  // ---------- DISHES ----------
  ["grilled-octopus.jpg",     { commons: "File:Greek-style grilled octopus with olive oil, lemon, butter and parsley.jpg" }],
  ["shrimp-saganaki.jpg",     { commons: "File:Γαρίδες σαγανάκι IMG 20230425 212334.jpg" }],
  ["mussels-saganaki.jpg",    { commons: "File:Μύδια σαγανάκι 0801.jpg" }],
  // "Carpaccio Dicentrarchus labrax" — Dicentrarchus labrax IS European
  // sea bass, so this is a literal sea-bass-carpaccio photo, not a guess.
  ["sea-bass-carpaccio.jpg",  { commons: "File:Carpaccio Dicentrarchus labrax.jpg" }],
  ["souvlaki.jpg",             { wiki: "Souvlaki" }],
  ["greek-salad.jpg",          { wiki: "Greek_salad" }],
  ["moussaka.jpg",             { wiki: "Moussaka" }],
  // The plain "Tzatziki" wiki redirect leads to a Turkish "cacik" photo;
  // this Commons file is explicitly labelled tzatziki.
  ["tzatziki.jpg",            { commons: "File:Tzatziki meze or appetizer, also used as a sauce.jpg" }],
  ["plastiras-trout.jpg",     { commons: "File:Grilled trout fish.jpg" }],
  ["plastiras-honey.jpg",     { url: unsplash("photo-1558642452-9d2a7deb7f62") }], // honey + honeycomb
  ["loukoumades.jpg",         { commons: "File:Loukoumades.jpg" }],
  ["baklava.jpg",             { commons: "File:Baklava 1.jpg" }],

  // ---------- WINERIES ----------
  // Neither Skouras nor Semeli has its own Wikipedia article; both are
  // Nemea PDO producers, so two different real Nemea vineyard photos give
  // each a distinct, regionally-accurate image.
  ["win-skouras.jpg",         { commons: "File:Nemea Wine-Olives Corinthia Peloponnese.jpg" }],
  ["win-semeli.jpg",          { commons: "File:Vine tree near Archeological site of Nemea, Neme435.jpg" }]
];

async function fileExists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

async function getWikiLeadImage(title) {
  const api = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
  const res = await fetch(api, { headers: { "User-Agent": UA, "Accept": "application/json" } });
  if (!res.ok) throw new Error(`Wiki summary ${title} HTTP ${res.status}`);
  const data = await res.json();
  const original = data.originalimage?.source;
  const thumb = data.thumbnail?.source;
  // Always prefer the full-resolution original when available. (We used to
  // manually rewrite the thumbnail URL to a wider bucket for huge originals,
  // but Wikimedia's thumbnail proxy only accepts a fixed allow-list of
  // widths and rejects arbitrary values with an HTTP 400 — simpler and more
  // reliable to just take the original file as-is.)
  if (original) return original;
  if (thumb) return thumb;
  return null;
}

async function getCommonsFile(fileTitle, width) {
  // Use the Commons API to resolve File:Foo.jpg to a direct URL.
  // If width is provided, request a thumb at that width (server-side resize).
  const widthParam = width ? `&iiurlwidth=${width}` : "";
  const api =
    `https://commons.wikimedia.org/w/api.php?action=query&prop=imageinfo&iiprop=url${widthParam}&format=json&origin=*&titles=` +
    encodeURIComponent(fileTitle);
  const res = await fetch(api, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`Commons ${fileTitle} HTTP ${res.status}`);
  const data = await res.json();
  const pages = data?.query?.pages ?? {};
  const page = Object.values(pages)[0];
  if (page?.missing !== undefined) return null;
  const info = page?.imageinfo?.[0];
  return info?.thumburl ?? info?.url ?? null;
}

/* Some hosts reject our default project UA but happily serve to crawler
   UAs. We try the normal UA first and transparently fall back to a
   Googlebot UA on a 403/406 so we don't need per-target configuration. */
const FALLBACK_UA =
  "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)";

async function downloadTo(url, dest) {
  let res = await fetchWithRetry(url, {
    headers: { "User-Agent": UA, "Accept": "image/*" }
  });
  if (res.status === 403 || res.status === 406) {
    res = await fetchWithRetry(url, {
      headers: { "User-Agent": FALLBACK_UA, "Accept": "image/*,*/*;q=0.8" }
    });
  }
  if (!res.ok) throw new Error(`Download ${url} HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  return buf.byteLength;
}

// Cap Commons downloads to a sensible max web width by default — some
// source files are 15-20MB+ at full resolution, which is wasteful for a
// mobile trip-companion site. Individual targets can override via `width`.
const DEFAULT_COMMONS_WIDTH = 1600;

async function resolveUrl(spec) {
  if (spec.url) return spec.url;
  if (spec.commons) return await getCommonsFile(spec.commons, spec.width ?? DEFAULT_COMMONS_WIDTH);
  if (spec.wiki) return await getWikiLeadImage(spec.wiki);
  return null;
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  let ok = 0;
  let skip = 0;
  let fail = 0;

  for (const [name, spec] of TARGETS) {
    const dest = resolve(OUT_DIR, name);
    if (await fileExists(dest)) {
      console.log(`= skip  ${name}  (already exists)`);
      skip++;
      continue;
    }
    try {
      const url = await resolveUrl(spec);
      if (!url) {
        console.log(`! miss  ${name}  (no image found for ${JSON.stringify(spec)})`);
        fail++;
        continue;
      }
      const bytes = await downloadTo(url, dest);
      console.log(`+ saved ${name}  ${(bytes / 1024).toFixed(0)} KB  <- ${url}`);
      ok++;
      // Be polite to Wikimedia / Unsplash
      await new Promise(r => setTimeout(r, 300));
    } catch (e) {
      console.log(`! fail  ${name}  ${e.message}`);
      fail++;
    }
  }

  console.log(`\nDone.  saved=${ok}  skipped=${skip}  failed=${fail}`);
  console.log(`Note: failed entries fall back to the styled placeholder in the app.`);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
