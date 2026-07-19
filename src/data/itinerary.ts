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
        rideToNext: { duration: "2 h 30", note: "via GR-8A/E75 · ≈ 180 km, mountain road for the last stretch", departAt: "14:30" }
      },
      {
        time: "Evening",
        title: "Arrive in Delphi, settle in",
        description:
          "Check in — you have two Delphi hotels booked for these dates and haven't picked one yet (see Tickets & Stays below). Short walk through Delphi village for a first look at the gorge view before dinner."
      }
    ],
    driveNotes: "Athens Airport → Delphi ≈ 2 h 30 via GR-8A/E75",
    dayTips: [
      "Greek law: child seats mandatory for under-12 or under-150 cm — confirm both booster seats are in the car before leaving the lot",
      "You declined Record Go's own insurance at the desk — third-party cover is via Rentalcars.com (Zurich-backed)",
      "Download offline Google Maps for the Delphi–Plastiras mountain roads now, while you still have airport wifi",
      "Two Delphi hotels are booked for tonight — cancel one before 12 Aug (Amalia) / check Acropole's policy to avoid a no-show fee"
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
      }
    ],
    dayTips: [
      "Refillable water bottles — there's very little shade on the upper site",
      "The museum's AC makes it a good midday heat-break, not just an afterthought",
      "Confirm which Delphi hotel you're keeping before checkout tomorrow"
    ],
    gear: [
      { item: "Sun hats and reef-safe sunscreen", for: "delphi-sanctuary" },
      { item: "Sturdy shoes — the site paths are uneven ancient stone" },
      { item: "A light jacket for the museum's AC" }
    ],
    restaurants: ["rest-taverna-delphi"],
    drinkOfTheDay: {
      name: "Retsina",
      type: "wine",
      pairing: "Resin-scented white wine, native to central Greece — an easy, food-friendly match for a taverna dinner in Delphi village.",
      servingNote: "Chilled, small tumbler"
    }
  },
  {
    dayNumber: 3,
    date: "2026-08-17",
    weekday: "Monday",
    departureTime: "10:00",
    rideToFirst: { duration: "2 h 45", note: "Delphi → Lake Plastiras, via Karditsa" },
    region: "north",
    base: "Lake Plastiras",
    title: "Into the mountains: Lake Plastiras",
    subtitle: "Scenic drive, check into Kazarma Hotel",
    activities: [
      {
        time: "10:00",
        title: "Drive Delphi → Lake Plastiras",
        description:
          "Winding mountain road via Amfissa and Karditsa — one of the best scenic drives of the trip. Stop whenever a viewpoint looks good; there's no rush today.",
        rideToNext: { duration: "15 min", note: "around the lake to Kalyvia Fylaktis" }
      },
      {
        time: "15:00",
        title: "Check in — Kazarma Hotel, Kalyvia Fylaktis",
        description:
          "Superior Double/Twin room with lake view, 3 nights (17–20 Aug). Confirmation #5911663775, PIN 1975. Free cancellation ended 26 July, so this one's locked in — no double-booking here."
      },
      {
        time: "Evening",
        title: "Sunset walk along the lake",
        description: "Easy, flat lakeside path near Neochori or Kalyvia Pezoulas — a good re-set after a driving day.",
        tag: "nature"
      }
    ],
    driveNotes: "Delphi → Kalyvia Fylaktis ≈ 2 h 45 via Amfissa/Karditsa",
    dayTips: [
      "Offline maps essential here — signal drops in the mountain passes",
      "Fill the tank before leaving Delphi; fuel stations thin out in the mountains",
      "This is the one leg with no hotel double-booking — nothing to resolve here"
    ],
    drinkOfTheDay: {
      name: "Tsipouro",
      type: "digestif",
      pairing: "The mountains' answer to ouzo — unsweetened, often served with a small meze plate. Fits Plastiras' cooler, alpine-lake mood better than a beach cocktail would.",
      servingNote: "Small chilled glass, sipped slowly with olives or cheese"
    },
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
    departureTime: "08:30",
    rideToFirst: { duration: "1 h 15", note: "Kalyvia Fylaktis → Active Nature rafting base, Grevena" },
    region: "north",
    base: "Lake Plastiras",
    title: "Whitewater rafting on the Aliakmonas",
    subtitle: "Booked with Active Nature — suitable for the kids",
    activities: [
      {
        time: "10:00",
        title: "Rafting on the Aliakmonas River — Active Nature",
        description:
          "A 6–7 km, grade 1–2 stretch of Greece's longest river, near Grevena — gentle enough for families, with certified guides. The full outing (transport, kitting up, ~1.5–2 h on the water, changing) runs 4–5 hours. Bring swimsuits, towels, sunscreen, and a spare set of dry clothes for the drive back.",
        attractionId: "aliakmonas-rafting",
        tag: "water"
      },
      {
        time: "Afternoon",
        title: "Drive back to Lake Plastiras",
        description: "Relaxed return drive — dry off, warm up, and take it slow."
      },
      {
        time: "Evening",
        title: "Dinner by the lake",
        description: "Kalyvia Fylaktis or Neochori have a handful of lakeside tavernas — walk until something looks good.",
        tag: "food"
      }
    ],
    dayTips: [
      "Book confirmation and exact meeting point/time should be reconfirmed with Active Nature a few days before",
      "Sports shoes that can get wet, or neoprene booties, work better than sandals",
      "Personal electronics stay in the car — no dry bags mentioned in the booking"
    ],
    gear: [
      { item: "Swimsuits under regular clothes", for: "aliakmonas-rafting" },
      { item: "Old sports shoes you don't mind getting soaked", for: "aliakmonas-rafting" },
      { item: "Full dry change of clothes + towels for the ride back" }
    ],
    drinkOfTheDay: {
      name: "Frappé",
      type: "coffee",
      pairing: "Greece's iced-coffee ritual, shaken to a foam — the right pick-me-up after a wet, adrenaline morning on the river.",
      servingNote: "Tall glass, ice, straw, sweetness to taste (metrio = medium)"
    }
  },
  {
    dayNumber: 5,
    date: "2026-08-19",
    weekday: "Wednesday",
    departureTime: "10:00",
    region: "north",
    base: "Lake Plastiras",
    title: "Horses, archery, and the lake at its own pace",
    subtitle: "A slower day before the drive to Thessaloniki",
    activities: [
      {
        time: "10:30",
        title: "Horse riding at Lake Plastiras",
        description:
          "Easy trail riding suitable for beginners and kids, along forested paths above the lake. Confirm ahead whether Sophia (5.5) needs a led/lead-rope option.",
        attractionId: "plastiras-horses",
        tag: "family"
      },
      {
        time: "13:00",
        title: "Archery session",
        description: "Same activity centre area — a good complement to the morning ride, and popular with kids Thomas's age.",
        attractionId: "plastiras-archery",
        tag: "family"
      },
      {
        time: "Afternoon",
        title: "Free time — lake circuit or village wander",
        description: "Neochori, Kalyvia Pezoulas, or just sit by the water. No fixed plan — use it as a rest day before tomorrow's long drive.",
        tag: "nature",
        optional: true
      }
    ],
    dayTips: [
      "Confirm both the horse riding and archery bookings a day ahead — small operators, availability can shift",
      "Pack light layers; the lake's altitude (~750 m) keeps mornings cooler than the coast"
    ],
    drinkOfTheDay: {
      name: "Greek mountain tea",
      type: "other",
      pairing: "Sideritis, gathered from the surrounding hills — a gentle, honeyed herbal tea that fits Plastiras' quiet, alpine character better than anything stronger.",
      servingNote: "Hot, with a spoon of honey, at a lakeside café"
    }
  },
  {
    dayNumber: 6,
    date: "2026-08-20",
    weekday: "Thursday",
    departureTime: "09:00",
    rideToFirst: { duration: "1 h 30", note: "Lake Plastiras → Meteora" },
    region: "transit",
    base: "Thessaloniki",
    title: "Meteora, Waterland, and on to Thessaloniki",
    subtitle: "A long but varied driving day",
    activities: [
      {
        time: "10:30",
        title: "Meteora — viewpoint drive-through",
        description:
          "The monasteries perched on sandstone pillars are worth the stop even without going inside one — pull off at the main viewpoints (Agios Nikolaos Anapafsas / the road above Kalambaka) for photos. Not a full monastery visit today — that would need its own half-day.",
        attractionId: "meteora-viewpoint",
        tag: "view",
        rideToNext: { duration: "2 h 45", note: "Meteora → Waterland, near Thessaloniki" }
      },
      {
        time: "Afternoon",
        title: "Waterland Water Park",
        description: "Big slides, wave pool, and kids' areas — a good way to burn off car-time energy before checking into Thessaloniki.",
        attractionId: "waterland",
        tag: "water",
        rideToNext: { duration: "30 min", note: "to central Thessaloniki" }
      },
      {
        time: "Evening",
        title: "Check in — Thessaloniki",
        description:
          "You have two hotels booked for these dates (September Hotel and City Hotel Thessaloniki, both 20–22 Aug) — pick one before check-in and cancel the other (both cancel free until 18 Aug 23:59)."
      }
    ],
    driveNotes: "Plastiras → Meteora ≈ 1 h 30 · Meteora → Thessaloniki area ≈ 2 h 45 (via Waterland)",
    dayTips: [
      "Long day — keep the Meteora stop to photos and one short walk, not a full monastery tour",
      "Bring swimsuits already on under clothes for Waterland to save a changing-room queue",
      "Decide the Thessaloniki hotel before you're both tired and standing at a check-in desk"
    ],
    drinkOfTheDay: {
      name: "Ouzo",
      type: "aperitif",
      pairing: "The classic anise spirit — save it for arrival in Thessaloniki, Greece's unofficial food capital, poured alongside a first round of mezedes.",
      servingNote: "With water and ice, turns cloudy (louche) — sip slow with small plates"
    }
  },
  {
    dayNumber: 7,
    date: "2026-08-21",
    weekday: "Friday",
    departureTime: "09:30",
    region: "south",
    base: "Thessaloniki",
    title: "Thessaloniki: old town, waterfront, seafood",
    subtitle: "Priority dinner tonight — Mavri Thalassa",
    activities: [
      {
        time: "09:30",
        title: "Ano Poli (Upper Town) & the Byzantine walls",
        description: "Steep, atmospheric old-town streets above the modern city, with views over the Thermaic Gulf. Comfortable shoes — it's uphill.",
        attractionId: "ano-poli",
        tag: "culture"
      },
      {
        time: "12:30",
        title: "White Tower & the waterfront promenade",
        description: "Thessaloniki's landmark, right on the seafront — an easy, flat walk after the Ano Poli climb, with plenty of spots to stop for a frappé.",
        attractionId: "white-tower",
        tag: "view",
        rideToNext: { duration: "20 min", note: "to Kalamaria for dinner" }
      },
      {
        time: "20:30",
        title: "Dinner — Mavri Thalassa (booked)",
        description:
          "Seafood destination in Kalamaria, Nik. Plastira 3 — reserve ahead, especially for a Friday. Open 13:00–01:00 weekends, kitchen closes 23:30. Shellfish-forward menu — this is Irina's night.",
        tag: "food"
      }
    ],
    dayTips: [
      "Reserve Mavri Thalassa by phone (+30 231 093 2542) or online — same-day online bookings close at 15:00",
      "Ano Poli in the morning, waterfront in the heat of the day — the order matters for shade"
    ],
    restaurants: ["rest-mavri-thalassa"],
    drinkOfTheDay: {
      name: "Malagousia (white wine)",
      type: "wine",
      pairing: "An aromatic Greek white that pairs naturally with Mavri Thalassa's seafood — ask the table for a bottle to go with the shellfish.",
      servingNote: "Well chilled, wide glass"
    }
  },
  {
    dayNumber: 8,
    date: "2026-08-22",
    weekday: "Saturday",
    departureTime: "09:00",
    rideToFirst: { duration: "2 h 30", note: "Thessaloniki → Thermopylae" },
    region: "south",
    base: "Nafplio",
    title: "Thermopylae, then south to Nafplio",
    subtitle: "History stop, then the old town by the sea",
    activities: [
      {
        time: "11:30",
        title: "Thermopylae — Leonidas Monument",
        description:
          "A short, worthwhile roadside stop at the site of the 480 BC battle — the Leonidas statue and the burial mound (Kolonos Hill) are a 20–30 minute visit, good for stretching legs mid-drive.",
        attractionId: "thermopylae",
        tag: "culture",
        rideToNext: { duration: "2 h 45", note: "Thermopylae → Nafplio" }
      },
      {
        time: "Evening",
        title: "Check in — Nafplio old town",
        description:
          "Traditional house of 1898, in the heart of old Nafplio. Confirmation #5347700468, PIN 8001, 1 night (22–23 Aug). This is the leg with the Athens alternative still open — see Tickets below — but Nafplio is the plan."
      },
      {
        time: "Night",
        title: "Old town wander, waterfront dinner",
        description: "Nafplio's old town is made for an evening stroll — Venetian architecture, small squares, gelato. Easy on tired kids after a long driving day.",
        tag: "culture",
        optional: true
      }
    ],
    driveNotes: "Thessaloniki → Thermopylae ≈ 2 h 30 · Thermopylae → Nafplio ≈ 2 h 45",
    dayTips: [
      "Long drive day — Thermopylae is a short stretch-the-legs stop, not a destination",
      "Nafplio vs. Athens for tonight is still an open double-booking — see the flag on the Tickets card",
      "If you do end up in Athens instead, swap tonight's plan for a light Plaka wander"
    ],
    drinkOfTheDay: {
      name: "Agiorgitiko (Nemea red wine)",
      type: "wine",
      pairing: "Nemea, Greece's best-known red-wine region, is a short detour from Nafplio — a bottle of Agiorgitiko is the natural way to close the loop on the mainland leg of the trip.",
      servingNote: "Room temperature, decanted if you have 20 minutes"
    }
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
    }
  }
];
