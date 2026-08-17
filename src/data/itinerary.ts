import type { Day } from "./types";

export const itinerary: Day[] = [
  {
    dayNumber: 1,
    date: "2026-08-15",
    weekday: "Saturday",
    region: "north",
    base: "Delphi",
    title: "Land in Athens, drive to Delphi",
    subtitle: "Pick up the car at the airport, head for the mountains",
    activities: [
      {
        time: "13:00",
        title: "Pick up the car — Record Go, Athens Airport",
        description:
          "Booking #782539337, MG ZS (compact, 5 seats). Walk ~250 m right of exit B5 to the mini-van parking area for the free shuttle to the Record Go office. Bring: driving licence, passport/ID, credit card in Vadim's name, and the voucher.",
        rideToNext: { duration: "2 h 10", note: "via GR-8A/E75 toward Arachova · ≈ 165 km, mountain road for the last stretch", departAt: "14:30" }
      },
      {
        time: "Late afternoon",
        title: "Clock Tower & Agios Georgios Church, Arachova",
        description:
          "A stone mountain village right on the way into Delphi. Climb the spiral staircase up the Clock Tower for a quick panoramic view over the valley — 10–15 minutes, an easy stretch after the drive. If everyone still has energy, 264 stone steps lead further up to Agios Georgios Church for an even bigger view.",
        attractionId: "arachova-viewpoint",
        tag: "view",
        rideToNext: { duration: "5 min", note: "walk to the tavernas" }
      },
      {
        time: "Evening",
        title: "Dinner — Taverna Christos, Arachova",
        description:
          "A long-running local taverna with a view over the Livadi valley — try the cheese bread and pumpkin soup. An easy, scenic dinner stop before the short final drive into Delphi.",
        tag: "food",
        rideToNext: { duration: "10 min", note: "Arachova → Delphi, the final stretch" }
      },
      {
        time: "Night",
        title: "Arrive in Delphi, settle in",
        description:
          "Check in at Acropole Delphi City Hotel — the pick between the two Delphi bookings (Amalia Hotel Delphi is being cancelled). After dinner in Arachova, it's just a short final stretch into the village to settle in for the night."
      }
    ],
    driveNotes: "Athens Airport → Arachova ≈ 2 h 10 via GR-8A/E75 · Arachova → Delphi ≈ 10 min",
    restaurants: ["rest-taverna-christos"],
    gear: [
      { item: "Comfortable shoes for Arachova's cobblestones and stairs", for: "arachova-viewpoint" }
    ],
    dayTips: [
      "Greek law: child seats mandatory for under-12 or under-150 cm — confirm both booster seats are in the car before leaving the lot",
      "You declined Record Go's own insurance at the desk — third-party cover is via Rentalcars.com (Zurich-backed)",
      "Download offline Google Maps for the Delphi–Plastiras mountain roads now, while you still have airport wifi",
      "Acropole Delphi City Hotel is the pick for tonight — Amalia Hotel Delphi is being cancelled before 12 Aug to avoid a stray charge",
      "Arachova's Clock Tower is the quick win; treat the 264 steps up to Agios Georgios as optional depending on everyone's energy after the flight",
      "Taverna Christos is a small, popular local spot with no online booking — arrive a little early in peak season in case it's full"
    ],
    drinkOfTheDay: {
      name: "Metaxa",
      type: "digestif",
      pairing: "Greek brandy-and-wine blend — a good 'we made it' pour for the first night, sipped slow while the sun drops behind the gorge.",
      servingNote: "Neat, small glass, room temperature"
    },
    italianWords: [
      {
        word: "Γεια σας (Yassas)",
        pronounce: "YAH-sas",
        meaning: "Hello (formal/plural)",
        example: "Γεια σας, καλησπέρα!",
        exampleMeaning: "Hello, good evening!"
      },
      {
        word: "Ευχαριστώ (Efcharisto)",
        pronounce: "ef-kha-ree-STOH",
        meaning: "Thank you",
        example: "Ευχαριστώ πολύ!",
        exampleMeaning: "Thank you very much!"
      },
      {
        word: "Καλώς ήρθατε (Kalos irthate)",
        pronounce: "kah-LOS EER-tha-teh",
        meaning: "Welcome",
        example: "Καλώς ήρθατε στους Δελφούς!",
        exampleMeaning: "Welcome to Delphi!"
      }
    ],
    leadImage: "./images/athens-acropolis.jpg",
    leadImageCredit: {
      author: "Giles Laurent",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:1029_Acropolis_of_Athens_in_Greece_at_night_Photo_by_Giles_Laurent.jpg",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    dayNumber: 2,
    date: "2026-08-16",
    weekday: "Sunday",
    departureTime: "09:00",
    region: "north",
    base: "Delphi",
    title: "Sanctuary of Apollo & the Oracle",
    subtitle: "Delphi's archaeological site and museum",
    activities: [
      {
        time: "09:00",
        title: "Sanctuary of Apollo & the Ancient Theatre",
        description:
          "Go early to beat both the heat and the tour buses. The path climbs past the Temple of Apollo (home of the Oracle) to the well-preserved theatre and, further up, the stadium. Shade is scarce — start this before 10:00 in August.",
        attractionId: "delphi-sanctuary",
        tag: "culture",
        rideToNext: { duration: "5 min", note: "walk down to the museum" }
      },
      {
        time: "11:00",
        title: "Delphi Archaeological Museum",
        description:
          "Air-conditioned relief from the site — the Charioteer of Delphi bronze is the highlight, plus the Sphinx of Naxos. Good pacing for kids after the uphill walk.",
        attractionId: "delphi-museum",
        tag: "culture"
      },
      {
        time: "Afternoon",
        title: "Tholos at Marmaria (Sanctuary of Athena Pronaia)",
        description:
          "A short drive or 20-minute walk from the main site — the circular Tholos is one of the most photographed ruins in Greece and usually near-empty.",
        attractionId: "delphi-tholos",
        tag: "view",
        optional: true
      },
      {
        time: "Late afternoon",
        title: "Optional: beach at Itea or Kirra",
        description:
          "If there's time and energy left after the sanctuary, museum, and Tholos, Itea and Kirra sit side by side on the Gulf of Corinth, about 15–20 minutes downhill from Delphi. Itea's entry is gentle and shallow — good for the kids — with loungers and beachfront bars; Kirra next door is quieter. Water runs a touch cooler than the Aegean (~25°C in August) but is still very swimmable.",
        attractionId: "itea-kirra-beach",
        tag: "water",
        optional: true
      }
    ],
    dayTips: [
      "Refillable water bottles — there's very little shade on the upper site",
      "The museum's AC makes it a good midday heat-break, not just an afterthought",
      "Confirm which Delphi hotel you're keeping before checkout tomorrow",
      "If you have afternoon energy left after the Tholos, Itea/Kirra beach is an easy 15–20 min add-on down the hill — just budget the drive back up for dinner"
    ],
    gear: [
      { item: "Sun hats and reef-safe sunscreen", for: "delphi-sanctuary" },
      { item: "Sturdy shoes — the site paths are uneven ancient stone" },
      { item: "A light jacket for the museum's AC" },
      { item: "Swimsuits + towels, in case you add the Itea/Kirra beach stop", for: "itea-kirra-beach" }
    ],
    restaurants: ["rest-taverna-delphi"],
    drinkOfTheDay: {
      name: "Retsina",
      type: "wine",
      pairing: "Resin-scented white wine, native to central Greece — an easy, food-friendly match for a taverna dinner in Delphi village.",
      servingNote: "Chilled, small tumbler"
    },
    italianWords: [
      {
        word: "Ναι (Ne)",
        pronounce: "NEH",
        meaning: "Yes",
        example: "Ναι, είναι όμορφο εδώ!",
        exampleMeaning: "Yes, it's beautiful here!"
      },
      {
        word: "Όχι (Ochi)",
        pronounce: "OH-hee",
        meaning: "No",
        example: "Όχι, ευχαριστώ.",
        exampleMeaning: "No, thank you."
      },
      {
        word: "Ωραίο! (Oreo!)",
        pronounce: "oh-REH-oh",
        meaning: "Nice!/Beautiful!",
        example: "Ωραίο μουσείο!",
        exampleMeaning: "Nice museum!"
      }
    ]
  },
  {
    dayNumber: 3,
    date: "2026-08-17",
    weekday: "Monday",
    departureTime: "09:30",
    rideToFirst: { duration: "1 h 10", note: "Delphi → Thermopylae, via Amfissa/Lamia" },
    region: "north",
    base: "Lake Plastiras",
    title: "Thermopylae, then into the mountains: Lake Plastiras",
    subtitle: "History stop on the way, then a scenic drive and check-in at Kazarma Hotel",
    activities: [
      {
        time: "09:30",
        title: "Drive Delphi → Thermopylae",
        description:
          "Thermopylae sits right on the standard road toward Karditsa via Lamia, so this is barely a detour — same route you'd drive anyway.",
        rideToNext: { duration: "5 min", note: "roadside stop" }
      },
      {
        time: "10:40",
        title: "Thermopylae — Leonidas Monument",
        description:
          "A short, worthwhile roadside stop at the site of the 480 BC battle — the Leonidas statue and the burial mound (Kolonos Hill) are a 20–30 minute visit, good for stretching legs mid-drive.",
        attractionId: "thermopylae",
        tag: "culture",
        rideToNext: { duration: "2 min", note: "across the road" }
      },
      {
        time: "11:00",
        title: "Thermopylae Hot Springs",
        description:
          "Right across the road from the Leonidas statue — the natural sulfur springs the site is named for (\"Thermopylae\" means \"Hot Gates\"). Free, open year-round, a constant 40°C. Easy to just dip your feet in the warm stream for a few minutes; legend has it Hephaestus created the springs at Athena's request to heal the wounds of Hercules.",
        attractionId: "thermopylae-hot-springs",
        tag: "nature",
        rideToNext: { duration: "1 h 15", note: "Thermopylae → Keramario, near Drakotrypa/Filia (Karditsa area)" }
      },
      {
        time: "12:45",
        title: "Lunch — Keramario, Drakotrypa",
        description:
          "A family-run mountain taverna set in an oak forest with a small live-animal sanctuary — deer, peacocks, and ponies wander fenced enclosures around the grounds. Grilled meats, local pites, homemade pasta, and traditional dishes from the Agrafa mountains. About 25–30 minutes before Lake Plastiras — worth slowing the drive down for rather than pushing straight through.",
        tag: "food",
        rideToNext: { duration: "25–30 min", note: "Keramario → Kazarma, Lake Plastiras" }
      },
      {
        time: "15:00",
        title: "Check in — Kazarma Hotel, Kalyvia Fylaktis",
        description:
          "Superior Double/Twin room with lake view, 2 nights (17–19 Aug). Confirmation #5911663775, PIN 1975 — modified 26 July to drop the 3rd night, €428 total. Bed configuration confirmed by the property: 1 extra-large double bed + 2 separate sofa beds, no extra charge."
      },
      {
        time: "Evening",
        title: "Sunset walk along the lake",
        description: "Easy, flat lakeside path near Neochori or Kalyvia Pezoulas — a good re-set after a driving day.",
        tag: "nature"
      }
    ],
    driveNotes: "Delphi → Thermopylae ≈ 1 h 10 · Thermopylae → Keramario ≈ 1 h 15 · Keramario → Kazarma ≈ 25–30 min",
    restaurants: ["rest-keramario"],
    dayTips: [
      "Thermopylae used to be a Day 8 stop, wedged into the Thessaloniki → Nafplio marathon — moving it here costs almost no extra driving and turns that day into two sane ones instead",
      "The hot springs are literally across the road from the Leonidas statue — free, no set hours, worth the extra 10 minutes",
      "Keramario's animal enclosures (deer, peacocks, ponies) are a good reason to make lunch here rather than a quick stop — budget more like 45–60 min than a fast bite",
      "Offline maps essential here — signal drops in the mountain passes",
      "Fill the tank before leaving Delphi; fuel stations thin out in the mountains",
      "Kazarma is down to 2 nights now, not 3 — Plastiras Day 5 (horses/archery) was cut to make room for the Meteora/Pelion/Kamena Vourla changes"
    ],
    drinkOfTheDay: {
      name: "Tsipouro",
      type: "digestif",
      pairing: "The mountains' answer to ouzo — unsweetened, often served with a small meze plate. Fits Plastiras' cooler, alpine-lake mood better than a beach cocktail would.",
      servingNote: "Small chilled glass, sipped slowly with olives or cheese"
    },
    italianWords: [
      {
        word: "Παρακαλώ (Parakalo)",
        pronounce: "pa-ra-ka-LOH",
        meaning: "Please / You're welcome",
        example: "Νερό, παρακαλώ.",
        exampleMeaning: "Water, please."
      },
      {
        word: "Συγγνώμη (Signomi)",
        pronounce: "see-GHNO-mee",
        meaning: "Sorry / Excuse me",
        example: "Συγγνώμη, πού είναι η τουαλέτα;",
        exampleMeaning: "Excuse me, where is the toilet?"
      },
      {
        word: "Πού είναι...; (Pou ine...?)",
        pronounce: "poo EE-neh",
        meaning: "Where is...?",
        example: "Πού είναι το ξενοδοχείο;",
        exampleMeaning: "Where is the hotel?"
      }
    ],
    leadImage: "./images/plastiras-horses.jpg",
    leadImageCredit: {
      author: "Αλεξανδρής Αλέξης",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:Forest_Lake_Plastiras.jpg",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    dayNumber: 4,
    date: "2026-08-18",
    weekday: "Tuesday",
    departureTime: "09:30",
    region: "north",
    base: "Lake Plastiras",
    title: "A day at Lake Plastiras",
    subtitle: "On the water in the morning, the farm in the late afternoon",
    activities: [
      {
        time: "09:30",
        title: "Kayaks, SUP & a swim on the lake",
        description:
          "Start on the water while the lake is still glassy — mornings are the calmest, easiest time to paddle. Rent kayaks, stand-up paddleboards, or pedal boats from one of the lakeshore bases (Neochori / Lampero) and cool off with a swim. Shallow-edged and easy for the kids. Swimsuits, towels, and water shoes.",
        attractionId: "plastiras-watersports",
        tag: "water"
      },
      {
        time: "13:00",
        title: "Trout lunch by the lake",
        description:
          "Break for lunch between the water and the farm. Trout is the Lake Plastiras specialty — a lakeside taverna in Neochori or Kalyvia Fylaktis is the local thing to do. Shade and a long sit-down through the hottest part of the day.",
        tag: "food"
      },
      {
        time: "Late afternoon",
        title: "Horse riding above the lake",
        description:
          "Gentle forested trail rides above Lake Plastiras with a local stable used to beginners and kids. Late afternoon dodges the peak heat — better for the riders and the horses, and the light through the firs is at its best. Closed shoes and long trousers work best. Confirm a day ahead (small operators, limited horses) and ask whether Sophia needs a led/lead-rope option.",
        attractionId: "plastiras-horses",
        tag: "family"
      },
      {
        time: "After the ride",
        title: "Archery session",
        description:
          "A short, structured archery session near the stables — an easy add-on to the ride and a hit with kids around Thomas's age. Ask the stable whether they run both so it slots straight after the horses.",
        attractionId: "plastiras-archery",
        tag: "family",
        optional: true
      }
    ],
    dayTips: [
      "The relaxed day at Plastiras — no long drives, so let the kids set the pace",
      "Rafting has moved to tomorrow (bundled with Meteora and the drive to Pelion), so today stays local to the lake",
      "On the water in the morning while it's glassy; the ride's late afternoon once the heat eases — most stables prefer it that way too",
      "Confirm the horses — and archery, if you want it — a day ahead; small operators with limited slots",
      "Water shoes or old trainers beat bare feet on the pebbly lake edges"
    ],
    gear: [
      { item: "Closed shoes + long trousers for riding", for: "plastiras-horses" },
      { item: "Swimsuits, towels, and water shoes for the lake", for: "plastiras-watersports" },
      { item: "Sun hats and high-SPF sunscreen — little shade on the water" }
    ],
    drinkOfTheDay: {
      name: "Frappé",
      type: "coffee",
      pairing: "Greece's iced-coffee ritual, shaken to a foam — the right thing to sip lakeside between the morning paddle and the late-afternoon ride.",
      servingNote: "Tall glass, ice, straw, sweetness to taste (metrio = medium)"
    },
    italianWords: [
      {
        word: "Νερό (Nero)",
        pronounce: "neh-ROH",
        meaning: "Water",
        example: "Το νερό είναι κρύο!",
        exampleMeaning: "The water is cold!"
      },
      {
        word: "Άλογο (Alogo)",
        pronounce: "AH-loh-goh",
        meaning: "Horse",
        example: "Το άλογο είναι μεγάλο.",
        exampleMeaning: "The horse is big."
      },
      {
        word: "Νόστιμο! (Nostimo!)",
        pronounce: "NOS-tee-moh",
        meaning: "Delicious!",
        example: "Το ψάρι είναι νόστιμο!",
        exampleMeaning: "The fish is delicious!"
      }
    ]
  },
  {
    dayNumber: 5,
    date: "2026-08-19",
    weekday: "Wednesday",
    departureTime: "07:45",
    rideToFirst: { duration: "2 h 15", note: "Kazarma / Lake Plastiras → Greek Adventure raft base, Grevena (via Kalambaka, no stop)" },
    region: "transit",
    base: "Pelion (Agios Dimitrios)",
    title: "Rafting, then Meteora, on to Pelion",
    subtitle: "Kazarma checkout, the Aliakmonas raft at 10:00, Meteora on the way east, then the coast",
    activities: [
      {
        time: "10:00",
        title: "Rafting on the Aliakmonas — Greek Adventure",
        description:
          "The family grade 1–2 stretch of Greece's longest river near Grevena — roughly 1.5–2 h on the water with certified guides. Booked and paid — Greek Adventure, booking ref 08.19-00 AN.Raft.Aliak.Drozdovski.4p (4 people, 19 Aug). Christos at Active Nature made the initial arrangements; Greek Adventure is the operator running the trip on the day. Meeting point at 10:00: https://maps.app.goo.gl/ELCePNxFKXrdzQTo7. The whole outing (transport, kitting up, the river, changing) runs about 4 hours. Kids from 6 are fine at this water level so late in August. Swimsuits under clothes, a second pair of shoes or closed sandals, a full dry change, towels, and sun cream. Each of the 4 of you needs to fill out Greek Adventure's online Participation Form before the day.",
        attractionId: "aliakmonas-rafting",
        tag: "water",
        rideToNext: { duration: "45 min", note: "Grevena raft base → Kalambaka (Meteora)" }
      },
      {
        time: "14:45",
        title: "Quick lunch in Kalambaka",
        description:
          "Straight off the river, the kids will be starving well before a sit-down taverna could feed them — grab something fast in Kalambaka instead of a separate stop. The town's main street (right where you already are for the Meteora viewpoints) is lined with souvlaki and gyro grill houses geared to exactly this Meteora day-trip crowd — quick turnaround, no reservation, and everyone's fed within 30–45 minutes.",
        tag: "food"
      },
      {
        time: "Mid-afternoon",
        title: "Meteora — viewpoint stop on the way east",
        description:
          "Drive the panoramic loop road above Kalambaka and pull off at the main overlooks (Agios Nikolaos Anapafsas, the road above the town) for photos of the monasteries on their sandstone pillars — a calm stop after the morning's rafting and lunch, not squeezed in beforehand. Keep it to about 45 minutes to an hour: photos and one short walk, not a full monastery tour. Change into dry clothes here before continuing, if you haven't already at lunch. If anyone does want to duck into a monastery, mind the dress code (see today's tips).",
        attractionId: "meteora-viewpoint",
        tag: "view",
        rideToNext: { duration: "1 h 45", note: "Meteora → Pelion (Agios Ioannis / Agios Dimitrios)" }
      },
      {
        time: "Evening",
        title: "Check in — Om Living Pelion, Agios Dimitrios",
        description:
          "Ground-floor apartment, booked to replace Faros — Faros couldn't move its check-in to today, so that booking was cancelled and this one took its place. Booking.com confirmation 6584233490, PIN 2645. Contactless check-in — Pre-Check-In Form already completed (unit P 03, 1 bed / 1 bath / 4 guests confirmed); the door code arrives by email at 12:00 PM today, valid from 15:00 onward — so a late-afternoon arrival (roughly 18:00–18:15) after the raft, lunch, and Meteora stop is fine. One bedroom with a double bed plus a sofa bed for the kids, confirmed by the property. Just 1 km from Agios Ioannis, where tomorrow's boat trip departs.",
        tag: "nature"
      },
      {
        time: "Night",
        title: "Beach evening, easy dinner",
        description: "After a big day — a morning on the river, lunch and an hour at Meteora, and the drive east — an unstructured evening on the beach or a seafront taverna in Agios Ioannis is the right pace.",
        tag: "food",
        optional: true
      }
    ],
    driveNotes: "Kazarma / Plastiras → Grevena raft base ≈ 2 h 15 (direct, via Kalambaka) · Grevena → Kalambaka (lunch + Meteora) ≈ 45 min · Meteora → Pelion (Agios Ioannis) ≈ 1 h 45 · about 4 h 45 driving across the day, plus the lunch/viewpoint stop in Kalambaka",
    dayTips: [
      "Leave Kazarma by 07:45 for the confirmed 10:00 raft meeting — no stop on the way in, since the drive alone takes the full 2 h 15. Rafting runs to about 14:00 with transport, then a quick lunch and Meteora in Kalambaka, and into Pelion by late afternoon (roughly 18:00–18:15)",
      "Raft first, Meteora after: it's a calmer sightseeing stop once the kids have had their big activity, rather than an early-morning stop under time pressure before it",
      "Lunch is folded into the Kalambaka stop rather than a separate location — the kids will be hungry straight off the river, and Kalambaka's grill houses (souvlaki/gyro) are fast and right where you're already stopping for the viewpoints. Skip a sit-down taverna here; it'll eat into the drive to Pelion.",
      "Aliakmonas rafting is booked and paid — Greek Adventure, booking ref 08.19-00 AN.Raft.Aliak.Drozdovski.4p, 10:00 meeting, ~4 hours total with transport. Still to do: each of the 4 of you fills out Greek Adventure's Participation Form before the 19th",
      "METEORA DRESS CODE: to step inside any monastery, shoulders AND knees must be covered — remind Irina (and everyone) to wear or pack a light scarf/shawl and a longer layer. Wraps are sometimes lent at the door, but don't count on it.",
      "Om Living Pelion is contactless with no reception — door code arrives by email at 12:00 today, valid from 15:00, so a late-afternoon arrival is fine",
      "This one long transit day replaces the old two-day split (raft one day, Meteora + Pelion the next) — yesterday at Plastiras is now the easy horses-and-lake day"
    ],
    gear: [
      { item: "Swimsuits under your clothes + a second pair of shoes or closed sandals (Greek Adventure's requirement)", for: "aliakmonas-rafting" },
      { item: "Sun cream — Greek Adventure asks everyone to bring their own", for: "aliakmonas-rafting" },
      { item: "A quick snack for the car (fruit, granola bars) — the 45-min drive from the raft to Kalambaka will feel long to hungry kids otherwise" },
      { item: "Full dry change of clothes + towels — change right after the raft, at lunch or at the latest before Meteora" },
      { item: "Light scarf/shawl + a knee-covering layer for the Meteora monasteries", for: "meteora-viewpoint" }
    ],
    drinkOfTheDay: {
      name: "Tsipouro (Pelion-style)",
      type: "digestif",
      pairing: "Pelion is one of tsipouro's home regions — a seafront taverna in Agios Ioannis is a good place to try a local producer's bottle with fresh-caught fish.",
      servingNote: "Small chilled glass, with a meze plate"
    },
    italianWords: [
      {
        word: "Ποτάμι (Potami)",
        pronounce: "po-TA-mee",
        meaning: "River",
        example: "Κάνουμε ράφτινγκ στο ποτάμι!",
        exampleMeaning: "We're rafting on the river!"
      },
      {
        word: "Γρήγορα! (Grigora!)",
        pronounce: "GHREE-ghoh-rah",
        meaning: "Fast!/Quickly!",
        example: "Το ποτάμι είναι γρήγορο!",
        exampleMeaning: "The river is fast!"
      },
      {
        word: "Πάμε! (Pame!)",
        pronounce: "PA-meh",
        meaning: "Let's go!",
        example: "Πάμε για ράφτινγκ!",
        exampleMeaning: "Let's go rafting!"
      }
    ]
  },
  {
    dayNumber: 6,
    date: "2026-08-20",
    weekday: "Thursday",
    departureTime: "09:30",
    region: "transit",
    base: "Thessaloniki",
    title: "Pelion sea caves, then Thessaloniki",
    subtitle: "Boat trip in the morning, White Tower and Mavri Thalassa by evening",
    activities: [
      {
        time: "09:30",
        title: "Drive to Agios Ioannis",
        description: "Short hop from Om Living Pelion in Agios Dimitrios to the Agios Ioannis port for the boat departure — roughly 5 minutes, just over a kilometer.",
        rideToNext: { duration: "5 min", note: "Agios Dimitrios → Agios Ioannis" }
      },
      {
        time: "10:00",
        title: "\"Mamma Mia\" boat trip — Pelion Scout",
        description:
          "A 2–3 hour family boat trip from Agios Ioannis (or Chorefto): Fakistra beach and its sea cave, the postcard harbor of Damouchari, Mylopotamos beach, and a swim stop at Limnionas. Easy difficulty, minimum age 4 — fits Sophia. Max 11 guests per boat, departures at 10:00 / 13:00 / 16:00.",
        attractionId: "pelion-boat-trip",
        tag: "water",
        rideToNext: { duration: "2 h", note: "Agios Ioannis → Thessaloniki" }
      },
      {
        time: "14:00",
        title: "Drive to Thessaloniki",
        description: "A straightforward run up the coast — grab lunch on the way or in the car, since the afternoon in Thessaloniki is short."
      },
      {
        time: "16:00",
        title: "Check in — S Hotel Boutique Thessaloniki, then White Tower",
        description:
          "Junior Suite, 1 night (20–21 Aug). Confirmation #5365254420, PIN 9179, €272.21 — booked to replace the old September Hotel / City Hotel double-booking, which should both be cancelled (free until 18 Aug). Property confirmed the junior suite fits 4, with sofa beds prepared for the kids. Once settled, it's a short walk to the White Tower and waterfront.",
        attractionId: "white-tower",
        tag: "view"
      },
      {
        time: "18:00",
        title: "Pirate ship cruise on the Thermaic Gulf",
        description:
          "Several pirate-themed boats depart right from the White Tower every ~90 minutes. A 20–30 minute loop around the bay — free to ride, just pay for a drink once aboard. No booking needed.",
        tag: "family",
        rideToNext: { duration: "20 min", note: "to Kalamaria for dinner" }
      },
      {
        time: "19:30",
        title: "Dinner — Mavri Thalassa (confirmed)",
        description:
          "Seafood destination in Kalamaria, Nik. Plastira 3. Table for 4, confirmed for 19:30 — booking reference 39t-2T8rSc20jz1cHv6uyQ, call +30 231 093 2542 to make changes. Open 13:00–01:00 weekends, kitchen closes 23:30. Shellfish-forward menu — this is Irina's night.",
        tag: "food"
      }
    ],
    driveNotes: "Agios Ioannis → Thessaloniki ≈ 2 h",
    dayTips: [
      "Ano Poli and its Byzantine walls are dropped from the plan entirely to make room for Waterland the next morning — it's the one trade-off of fitting everything in",
      "Book the Pelion Scout boat trip ahead — max 11 guests per departure",
      "Mavri Thalassa is confirmed for 19:30, table for 4 — call +30 231 093 2542 if you need to change it",
      "S Hotel Boutique replaces both old Thessaloniki bookings — cancel September Hotel and City Hotel before 18 Aug to avoid confusion or a stray charge"
    ],
    restaurants: ["rest-mavri-thalassa"],
    drinkOfTheDay: {
      name: "Malagousia (white wine)",
      type: "wine",
      pairing: "An aromatic Greek white that pairs naturally with Mavri Thalassa's seafood — ask the table for a bottle to go with the shellfish.",
      servingNote: "Well chilled, wide glass"
    },
    italianWords: [
      {
        word: "Θάλασσα (Thalassa)",
        pronounce: "THA-la-sa",
        meaning: "Sea",
        example: "Η θάλασσα είναι γαλάζια!",
        exampleMeaning: "The sea is blue!"
      },
      {
        word: "Βάρκα (Varka)",
        pronounce: "VAR-ka",
        meaning: "Boat",
        example: "Μπαίνουμε στη βάρκα!",
        exampleMeaning: "We're getting on the boat!"
      },
      {
        word: "Ψάρι (Psari)",
        pronounce: "PSA-ree",
        meaning: "Fish",
        example: "Θέλω ψάρι για βραδινό.",
        exampleMeaning: "I want fish for dinner."
      }
    ]
  },
  {
    dayNumber: 7,
    date: "2026-08-21",
    weekday: "Friday",
    departureTime: "08:30",
    rideToFirst: { duration: "30 min", note: "Thessaloniki → Waterland, Peraia" },
    region: "south",
    base: "Kamena Vourla",
    title: "Waterland, then Kamena Vourla",
    subtitle: "Water park morning, then a genuine rest night halfway to Nafplio",
    activities: [
      {
        time: "09:00",
        title: "Waterland Water Park",
        description:
          "Slides, a wave pool, a lazy/crazy river, and a kids' area, in Peraia — on your way south out of Thessaloniki, not a detour. Reviews call it solid and clean rather than spectacular: expect a good half-day, not a full one. Free shuttle exists from central Thessaloniki if you ever needed it, but you'll drive straight there. Tickets are already bought and paid — order #81358, 2 adult Day Passes and 2 kids day passes, €80 total. Bring up the e-tickets with barcodes from email (one per person) at the gate.",
        attractionId: "waterland",
        tag: "water",
        rideToNext: { duration: "3 h 20", note: "Waterland → Kamena Vourla" }
      },
      {
        time: "13:00",
        title: "Drive to Kamena Vourla",
        description:
          "This replaces the old direct run all the way to Nafplio. Kamena Vourla sits almost exactly halfway on the Thessaloniki–Nafplio road, and splitting the drive here means tomorrow lands in Nafplio at midday instead of after a 5–6 hour slog.",
        rideToNext: { duration: "5 min", note: "hotel check-in" }
      },
      {
        time: "17:00",
        title: "Check in — Mitsis Galini Wellness Spa Resort",
        description:
          "1 night (21–22 Aug), 2 rooms, breakfast + dinner included. Confirmation #6652799478, PIN 4393, €444 total. Check-in time approved for 17:00–18:00, no extra charge — both rooms are singles with one queen bed each. Dinner is a buffet at the main restaurant, 19:00–22:00 (cold plates sent to the room if you arrive later). The resort's outdoor thermal pool draws on Kamena Vourla's natural radioactive/radon springs — same source as the town's free public baths, just with loungers and changing rooms attached. Free cancellation ended 13 Aug. Plan is a genuine rest night here — no excursions.",
        tag: "nature"
      }
    ],
    driveNotes: "Thessaloniki → Waterland ≈ 30 min · Waterland → Kamena Vourla ≈ 3 h 20",
    dayTips: [
      "This is a brand-new stop, swapped in to break up what used to be a single brutal 5–6 hour drive straight to Nafplio",
      "Bring swimsuits already on under clothes to save a changing-room queue at Waterland",
      "Waterland tickets are already bought and paid (order #81358, €80 for all 4) — pull up each person's e-ticket/barcode from email at the gate, no need to queue for tickets",
      "Deliberately unstructured evening — the point of this stop is rest before tomorrow's shorter drive",
      "If you want the natural springs without the resort setting, Kamena Vourla also has free public thermal pools (Kouniaviti/Asklipios) a short drive from the hotel"
    ],
    drinkOfTheDay: {
      name: "Greek coffee",
      type: "coffee",
      pairing: "An easy, unhurried cup by the thermal pool — tonight is about resting, not a destination drink.",
      servingNote: "Small cup, metrio (medium sweet) is the easy default"
    },
    italianWords: [
      {
        word: "Κολύμπι (Kolimbi)",
        pronounce: "koh-LEEM-bee",
        meaning: "Swimming",
        example: "Πάμε για κολύμπι!",
        exampleMeaning: "Let's go swimming!"
      },
      {
        word: "Ζεστό (Zesto)",
        pronounce: "zes-TOH",
        meaning: "Hot",
        example: "Το νερό είναι ζεστό.",
        exampleMeaning: "The water is hot."
      },
      {
        word: "Διασκέδαση! (Diaskedasi!)",
        pronounce: "dee-ah-SKEH-da-see",
        meaning: "Fun!",
        example: "Πολλή διασκέδαση σήμερα!",
        exampleMeaning: "Lots of fun today!"
      }
    ]
  },
  {
    dayNumber: 8,
    date: "2026-08-22",
    weekday: "Saturday",
    departureTime: "11:00",
    region: "south",
    base: "Nafplio",
    title: "Spa morning at Kamena Vourla, then south to Nafplio",
    subtitle: "A relaxed thermal-pool morning, then a shorter drive that lands you in Nafplio with the afternoon still ahead",
    activities: [
      {
        time: "09:00",
        title: "Thermal pool morning — Mitsis Galini",
        description:
          "Check the resort's thermal-pool access hours when you book — some spa resorts reserve certain windows for treatments rather than general guest use. Worth confirming ahead whether children can use the thermal (vs. freshwater) pool, since some hot-spring pools carry age or temperature restrictions.",
        tag: "nature",
        rideToNext: { duration: "3 h 10", note: "Kamena Vourla → Nafplio" }
      },
      {
        time: "12:00",
        title: "Drive Kamena Vourla → Nafplio",
        description: "Roughly half the distance of the old direct Thessaloniki–Nafplio run — you should land in Nafplio around midday with a real afternoon left, not just an evening.",
      },
      {
        time: "Afternoon",
        title: "Check in — Nafplio old town",
        description:
          "Traditional house of 1898, in the heart of old Nafplio. Confirmation #5347700468, PIN 8001, 1 night (22–23 Aug). The duplicate Athens booking (Philia Boutique Hotel) has been cancelled — Nafplio is the confirmed plan."
      },
      {
        time: "Evening",
        title: "Old town wander, waterfront dinner",
        description: "Nafplio's old town is made for an evening stroll — Venetian architecture, small squares, gelato. With a full afternoon in hand, this can be unhurried instead of a tired arrival after dark.",
        tag: "culture"
      }
    ],
    driveNotes: "Kamena Vourla → Nafplio ≈ 3 h 10",
    dayTips: [
      "This is the day that used to carry Waterland + Thermopylae + a 5–6 hour drive all in one go — splitting the Kamena Vourla stop off yesterday is what makes today light",
      "Thermopylae has moved to Day 3 (Delphi → Plastiras), so there's no history stop to fit in today — just the pool and the drive"
    ],
    drinkOfTheDay: {
      name: "Agiorgitiko (Nemea red wine)",
      type: "wine",
      pairing: "Nemea, Greece's best-known red-wine region, is a short detour from Nafplio — a bottle of Agiorgitiko is the natural way to close the loop on the mainland leg of the trip.",
      servingNote: "Room temperature, decanted if you have 20 minutes"
    },
    italianWords: [
      {
        word: "Όμορφο (Omorfo)",
        pronounce: "OH-mor-foh",
        meaning: "Beautiful",
        example: "Το Ναύπλιο είναι όμορφο!",
        exampleMeaning: "Nafplio is beautiful!"
      },
      {
        word: "Παγωτό (Pagoto)",
        pronounce: "pa-ghoh-TOH",
        meaning: "Ice cream",
        example: "Θέλω παγωτό, παρακαλώ.",
        exampleMeaning: "I want ice cream, please."
      },
      {
        word: "Καληνύχτα (Kalinychta)",
        pronounce: "ka-lee-NEEKH-ta",
        meaning: "Good night",
        example: "Καληνύχτα, τα λέμε αύριο!",
        exampleMeaning: "Good night, see you tomorrow!"
      }
    ]
  },
  {
    dayNumber: 9,
    date: "2026-08-23",
    weekday: "Sunday",
    departureTime: "10:00",
    rideToFirst: { duration: "2 h", note: "Nafplio → Athens Airport" },
    region: "south",
    base: "Nafplio",
    title: "Easy morning in Nafplio, fly home",
    subtitle: "Last day — kept deliberately light",
    activities: [
      {
        time: "09:00",
        title: "Slow morning — old town, harbour, a good breakfast",
        description:
          "No excursions today on purpose — a coffee by the water, a last wander through the Venetian old town, maybe the view up to Palamidi fortress from below (skip the 900 steps with the kids). Check out by 11:00.",
        attractionId: "palamidi-view",
        tag: "culture"
      },
      {
        time: "13:00",
        title: "Drop off the car — Athens Airport",
        description:
          "Record Go, booking #782539337 — same shuttle/counter as pickup. Return by 13:00 to match the booking; allow buffer for fuel and a final walk-through.",
        rideToNext: { duration: "flight time", note: "check in for your flight home" }
      }
    ],
    driveNotes: "Nafplio → Athens Airport ≈ 2 h",
    dayTips: [
      "Deliberately no big excursion today — last-day rule: keep it light before a travel day",
      "Fill the tank near the airport before drop-off to avoid the rental's fuel surcharge",
      "Double-check the car's glovebox and boot for booster seats and chargers before the shuttle"
    ],
    drinkOfTheDay: {
      name: "Greek coffee",
      type: "coffee",
      pairing: "A short, unhurried cup on the old-town waterfront — the right note to end the trip on before a day of travel.",
      servingNote: "Small cup, let the grounds settle, metrio (medium sweet) is the easy default"
    },
    italianWords: [
      {
        word: "Καλό ταξίδι (Kalo taxidi)",
        pronounce: "ka-LOH tak-SEE-dee",
        meaning: "Have a good trip",
        example: "Καλό ταξίδι στο σπίτι!",
        exampleMeaning: "Have a good trip home!"
      },
      {
        word: "Αντίο (Adio)",
        pronounce: "an-DEE-oh",
        meaning: "Goodbye",
        example: "Αντίο, Ελλάδα!",
        exampleMeaning: "Goodbye, Greece!"
      },
      {
        word: "Θα τα ξαναπούμε! (Tha ta xanapoume!)",
        pronounce: "tha ta ksa-na-POO-meh",
        meaning: "See you again!",
        example: "Ελλάδα, θα τα ξαναπούμε!",
        exampleMeaning: "Greece, we'll see you again!"
      }
    ]
  }
];
