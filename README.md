# Greece 2026 — The Drozdovski Road Trip

A static, mobile-first trip companion for our family road trip across mainland Greece, **15 – 23 August 2026**. Itinerary, interactive map, attractions, stays, restaurants/supermarkets/gas stations, weather, food & wine, packing/booking checklists, a standalone task tracker, an AI tour-guide chat (**Nikos**), and pre-generated audio narration in EN/HE/GR. Built to be opened on the phone during the trip.

Deployed to GitHub Pages: **https://vadimdroz.github.io/greece-2026-/**
Task tracker (open items before we leave): **https://vadimdroz.github.io/greece-2026-/tasks.html**

Travelling: Vadim, Irina, Thomas (8), Sophia (5.5). One rental car, picked up and dropped off at Athens Airport.

For the full design rationale and the playbook this repo was originally built from, see [`docs/HOW_TO_BUILD_A_VACATION_WEBSITE.md`](docs/HOW_TO_BUILD_A_VACATION_WEBSITE.md) — it documents the general pattern (the worked example in its appendix is from an earlier Tuscany build of the same template, not this trip).

## Where we're going

Nine days, four bases, one car — Athens Airport out and back, looping north through Delphi and the Pindus mountains before curling south through Thessaloniki and the Peloponnese.

**Delphi** (15–17 Aug) — In antiquity, the *omphalos*, the "navel of the world": the most important religious sanctuary in the Greek world for over a thousand years, seat of the Oracle of Apollo, whose priestess (the Pythia) delivered cryptic prophecies that swayed kings and city-states alike. Pilgrims and city-states built treasuries along the Sacred Way to house their offerings; the site also hosted the Pythian Games, second only to Olympia among the Panhellenic games. The Sanctuary of Apollo, the ancient theatre, and the stadium climb the slope of Mount Parnassus; the separate Tholos at Marmaria — a circular temple of unknown purpose in the Sanctuary of Athena Pronaia — is one of the most photographed ruins in Greece. UNESCO World Heritage Site since 1987.

**Lake Plastiras** (17–20 Aug) — A younger, quieter kind of history: an artificial lake created in 1959 by damming the Tavropos river for irrigation and hydroelectric power, set in the pine forests of the Pindus foothills in Karditsa. It's named for Nikolaos Plastiras, the general-turned-prime-minister born in a village nearby. No ancient ruins here — the draw is the mountain villages, the water, and the outdoor pace: rafting on the Aliakmonas, forest trail riding, archery, lakeside walks.

**Meteora** (20 Aug, en route to Thessaloniki) — "Suspended in the air." Monasteries perched on sheer sandstone pillars, built from the 14th century onward by monks seeking isolation from Ottoman-era raids and from the world itself — for centuries reachable only by rope ladder or a net hauled up by hand. Of roughly 24 monasteries at their peak, six remain active. A UNESCO World Heritage Site for both its natural rock formations and its Byzantine monastic art; we're passing through for the viewpoint drive, not a full site visit.

**Thessaloniki** (20–22 Aug) — Greece's second city, founded in 315 BC by Cassander of Macedon and named for his wife Thessalonike, Alexander the Great's half-sister. For a thousand years it was the Byzantine Empire's second city after Constantinople; later, roughly five centuries under Ottoman rule left it with one of the Mediterranean's largest Sephardic Jewish communities until the Holocaust. **Ano Poli** (the Upper Town) is the part of the city that escaped the Great Fire of 1917 — Byzantine walls, Ottoman-era houses, narrow lanes and views over the Thermaic Gulf. The **White Tower** on the waterfront started as an Ottoman fortification and prison before becoming the city's postcard symbol.

**Thermopylae** (22 Aug, en route to Nafplio) — The "Hot Gates," named for nearby hot springs, and the site of the 480 BC battle where Leonidas I of Sparta and a few thousand Greeks — his 300 Spartans foremost among them — held off Xerxes' Persian army for three days before being outflanked and annihilated to the last man. A last stand that became shorthand for defiance against impossible odds. A modern statue of Leonidas now stands at the site; a quick history stop en route south.

**Nafplio** (22–23 Aug) — The first capital of independent modern Greece (1829–1834), on the Argolic Gulf in the Peloponnese, with Venetian and Ottoman layers under its old town. **Palamidi**, the hilltop fortress above the town, was built by the Venetians in 1711–1714 and later used by the Greek state as a prison — the revolutionary hero Theodoros Kolokotronis was held there. One of the most-photographed old towns in Greece, and our last stop before flying home from Athens.

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4 (blue & white palette, gold accents — the tokens are still named after the template's original Tuscan scheme (`terracotta`, `olive`, `sienna`) but their values are Greek blues/gold; see `src/index.css`)
- Cormorant Garamond + Inter (LTR), Frank Ruhl Libre + Rubik (RTL) — Google Fonts
- React Leaflet + CartoDB Voyager tiles (no API key)
- Open-Meteo for live weather (no API key)
- Lucide icons + Framer Motion for subtle animation
- Gemini Live API for the in-app chat assistant (Nikos)
- Pre-generated TTS via Gemini Flash / Cloud Chirp 3 / ElevenLabs (scripts run locally only)

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the production build locally
npm run lint     # ESLint flat config
```

`vite.config.ts` switches the `base` path between local dev (`/`) and the GitHub Pages deploy (`/greece-2026-/`) automatically.

## Environment variables

Copy `.env.example` to `.env.local` and fill in the keys you need. None of these are required to boot the site, but the AI chat and TTS scripts need them.

| Variable | Used by | Notes |
| --- | --- | --- |
| `VITE_GEMINI_API_KEY` | In-app Nikos chat | Baked into the bundle at build time (set as a repo Actions secret for prod). Restrict by HTTP referrer in AI Studio. Leave blank to fall back to per-user pasted keys. |
| `GEMINI_API_KEY` | `npm run tts:*` scripts (local only) | **No `VITE_` prefix.** Defaults to Gemini Flash TTS for narration audio. Same key family as the one above; safe to reuse. |
| `ELEVEN_API_KEY` | `npm run tts:*:eleven` scripts | Optional — only needed when passing `--elevenlabs`. |
| `GOOGLE_APPLICATION_CREDENTIALS` | `npm run tts:* -- --google-chirp3` | Optional — Google Cloud service account for the Chirp 3 HD TTS fallback. |

## Updating content

All content lives in plain TypeScript files under `src/data/` — no CMS, no database. Edit the file, push to `main`, and GitHub Actions rebuilds and redeploys automatically.

| File | What's in it |
| --- | --- |
| `src/data/itinerary.ts` | The 9-day plan (`dayTips`, gear, drink/word of the day, etc.) |
| `src/data/attractions.ts` | All sights with description, coords, official link, image path |
| `src/data/stays.ts` | The Delphi / Lake Plastiras / Thessaloniki / Nafplio / Athens stays |
| `src/data/services.ts` | Restaurants, supermarkets, gas stations near each base |
| `src/data/dishes.ts` / `wineries.ts` | Food & wine catalog (own section + map layer) |
| `src/data/tips.ts` | Local know-how and warnings |
| `src/data/emergency.ts` | Emergency numbers, hospitals, embassy |
| `src/data/checklist.ts` | Pre-trip booking + packing checklists |
| `src/data/bookings.enc.ts` | Encrypted booking confirmations, PIN-gated in the Tickets section (see `src/lib/bookingsCrypto.ts`) |
| `src/data/i18n/*.he.ts` | Partial Hebrew overlays for every English data module |
| `src/lib/dict.ts` | UI strings (brand, nav, sections, install, Nikos) per language |
| `src/lib/tipsForDay.ts` | Maps which global `tips.ts` entries appear on which chapter detail page |
| `src/lib/gemininio/persona.ts` | AI guide persona, traveling party, trip facts, digests |
| `public/tasks.html` | Standalone task tracker (not part of the React app) — open decisions, bookings still to make, packing lists |

### Adding photos

Image fields point to `./images/<slug>.jpg`. Drop your own `.jpg` files into `public/images/` with matching names and they will appear automatically. Until then, each card shows a colour-coded fallback with the place name. Always use **relative** paths (`./images/...`, not `/images/...`) so they resolve correctly under the GH Pages base path.

## Helper scripts

`scripts/` holds local-only scripts for fetching photos and generating audio. Run from your machine, never from CI.

| Command | What it does |
| --- | --- |
| `node scripts/fetch-images.mjs` | Pulls POI/attraction/stay/dish/winery images from Wikipedia / Commons / Unsplash. |
| `node scripts/fetch-hero-images.mjs` | Same idea, scoped to home-page hero shots. |
| `npm run tts:greek-words` | Word-of-the-day MP3s in GR/EN/HE (Gemini Flash by default). |
| `npm run tts:greek-words:eleven` | Same, via ElevenLabs. Add `--examples-only` to rebuild just the example clips. |
| `node scripts/fetch-attraction-audio.mjs` | English attraction narration via ElevenLabs → `public/audio/attractions/<id>.mp3`. |
| `npm run tts:attractions-he` | Hebrew attraction narration (Gemini Flash by default; `:eleven` variant available) → `<id>.he.mp3`. |
| `npm run repair:greek-words-audio` | Re-encodes any partially-truncated MP3 returned by a TTS provider. |
| `node scripts/smoke-test-gemini-live.mjs` | Opens a one-shot Live WebSocket to verify your Gemini key works. |

See **"How the audio narration works"** below before running these — none of it has been generated yet for this trip.

## How the audio narration works

Nothing under `public/audio/` exists yet — this section is a plan, not a shipped feature. Two independent narration systems share the same playback machinery (`ListenButton.tsx` + `usePageAudio`):

1. **Attraction narration** — a short spoken description read aloud on each attraction's detail view (a headphone/play icon next to the title). Generated **once, offline**, as static MP3s (`public/audio/attractions/<id>.mp3`, plus `<id>.he.mp3` for Hebrew), not synthesized live in the visitor's browser. Reasoning: this is a static site with no backend, so a live TTS key in the browser would be extractable and abusable; pre-baking means no API latency, no per-visit cost, and it works offline once cached by the PWA.
2. **Word/drink-of-the-day audio** — the itinerary's daily "word of the day" gets a short trilingual clip (Greek word → pause → English → pause → Hebrew), stitched together from three separate TTS calls with `ffmpeg`. There's a second, longer clip per day for the example sentence.

Either way, you (or I) run a script locally with a TTS API key, it writes MP3s into `public/`, you commit those files, and the deployed site just plays static audio — visitors never need a key or hit an API. Three TTS backends are supported (Gemini Flash TTS by default, Cloud Chirp 3 HD, or ElevenLabs) — pick one based on voice quality vs. cost vs. setup effort. Nothing plays until those files exist; until then the Listen buttons simply don't render (`ListenButton` returns `null` when it can't resolve a URL).

If you want this for the trip, the practical next step is deciding: which of the two (or both), which voice/language mix, and whether to use a free-tier key (Gemini) or pay-per-character (ElevenLabs) — happy to help set it up once you've decided.

## Deploy (auto)

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main`.

1. Repo: `Vadimdroz/greece-2026-` (note the trailing hyphen — the GitHub repo name itself has one).
2. **Settings → Pages** is set to **Source = GitHub Actions**.
3. `VITE_GEMINI_API_KEY` is set as a repository secret (Settings → Secrets and variables → Actions) so the AI chat works for every visitor without them pasting a key.
4. Every push to `main` triggers the workflow; watch it under the repo's **Actions** tab.

## Project layout

```
src/
  components/      UI sections (Hero, Map, Itinerary, Stays, Gemininio, ...)
  data/            All trip content as typed TS data
    i18n/          Partial Hebrew overlays for every data module
  lib/             Helpers (i18n, dict, hash routing, install, swipe, audio bus)
    gemininio/     AI assistant — persona, Live WS, REST search, history, audio
  index.css        Tailwind + design tokens
public/
  images/          Drop-in attraction & stay photos
  audio/           Pre-generated narration MP3s (not yet generated — see above)
  tasks.html       Standalone task tracker, linked from the in-app Checklist section
  manifest.webmanifest, favicon.svg, og-cover.jpg
scripts/           Local-only image and audio generation scripts
docs/
  HOW_TO_BUILD_A_VACATION_WEBSITE.md   Full design playbook (general pattern, not trip-specific)
.github/workflows/
  deploy.yml       GitHub Pages CI
```

Καλό ταξίδι.
