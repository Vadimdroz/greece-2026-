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
        rideToNext: { duration: "1 h 25", note: "Thermopylae → Kalyvia Fylaktis, via Karditsa" }
      },
      {
        time: "11:30",
        title: "Drive Thermopylae → Lake Plastiras",
        description:
          "Winding mountain road via Karditsa — one of the best scenic drives of the trip. Stop whenever a viewpoint looks good."
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
    driveNotes: "Delphi → Thermopylae ≈ 1 h 10 · Thermopylae → Kalyvia Fylaktis ≈ 1 h 25 via Karditsa",
    dayTips: [
      "Thermopylae used to be a Day 8 stop, wedged into the Thessaloniki → Nafplio marathon — moving it here costs almost no extra driving and turns that day into two sane ones instead",
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
    subtitle: "Horseback riding in the morning, the lake all afternoon",
    activities: [
      {
        time: "10:00",
        title: "Horse riding above the lake",
        description:
          "Gentle forested trail rides above Lake Plastiras with a local stable used to beginners and kids — the anchor of an easy, no-long-drives day. Closed shoes and long trousers work best. Confirm a day ahead (small operators, limited horses) and ask whether Sophia needs a led/lead-rope option.",
        attractionId: "plastiras-horses",
        tag: "family"
      },
      {
        time: "Late morning",
        title: "Archery session",
        description:
          "A short, structured archery session near the stables — an easy add-on to the morning ride and a hit with kids around Thomas's age. Ask the stable whether they run both so it slots straight after the horses.",
        attractionId: "plastiras-archery",
        tag: "family",
        optional: true
      },
      {
        time: "Afternoon",
        title: "Kayaks, SUP & a swim on the lake",
        description:
          "Spend the hottest part of the day on the water — rent kayaks, stand-up paddleboards, or pedal boats from one of the lakeshore bases (Neochori / Lampero) and cool off with a swim. Calm, shallow-edged, and easy for the kids. Swimsuits, towels, and water shoes.",
        attractionId: "plastiras-watersports",
        tag: "water"
      },
      {
        time: "Evening",
        title: "Dinner by the lake",
        description: "Kalyvia Fylaktis or Neochori have a handful of lakeside tavernas — walk until something looks good.",
        tag: "food"
      }
    ],
    dayTips: [
      "The relaxed day at Plastiras — no long drives, so let the kids set the pace",
      "Rafting has moved to tomorrow (bundled with Meteora and the drive to Pelion), so today stays local to the lake",
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
      pairing: "Greece's iced-coffee ritual, shaken to a foam — the right thing to sip lakeside between the morning ride and an afternoon swim.",
      servingNote: "Tall glass, ice, straw, sweetness to taste (metrio = medium)"
    }
  },
  {
    dayNumber: 5,
    date: "2026-08-19",
    weekday: "Wednesday",
    departureTime: "07:30",
    rideToFirst: { duration: "1 h 30", note: "Kazarma / Lake Plastiras → Meteora" },
    region: "transit",
    base: "Pelion (Agios Dimitrios)",
    title: "Meteora at dawn, rafting, then Pelion",
    subtitle: "Kazarma checkout, an hour at Meteora, the Aliakmonas raft, and on to the coast",
    activities: [
      {
        time: "09:00",
        title: "Meteora — one-hour viewpoint stop",
        description:
          "An early start pays off: drive the panoramic loop road above Kalambaka and pull off at the main overlooks (Agios Nikolaos Anapafsas, the road above the town) for photos of the monasteries on their sandstone pillars — before the tour buses arrive. Keep it to about an hour: photos and one short walk, not a full monastery tour. If anyone wants to duck inside a monastery, mind the dress code (see today's tips).",
        attractionId: "meteora-viewpoint",
        tag: "view",
        rideToNext: { duration: "45 min", note: "Meteora → Active Nature raft base, Grevena" }
      },
      {
        time: "11:00",
        title: "Rafting on the Aliakmonas — Active Nature",
        description:
          "The family grade 1–2 stretch of Greece's longest river near Grevena — roughly 1.5–2 h on the water with certified guides. Ask Active Nature for the leanest late-morning/midday slot so the whole outing (kitting up, water, changing) stays around 3.5–4 hours and leaves the afternoon for the drive east. Swimsuits under clothes, a full dry change, and towels for the car.",
        attractionId: "aliakmonas-rafting",
        tag: "water",
        rideToNext: { duration: "2 h 30", note: "Grevena → Pelion (Agios Ioannis / Agios Dimitrios)" }
      },
      {
        time: "Evening",
        title: "Check in — Om Living Pelion, Agios Dimitrios",
        description:
          "Ground-floor apartment, booked to replace Faros — Faros couldn't move its check-in to today, so that booking was cancelled and this one took its place. Booking.com confirmation 6584233490, PIN 2645. Contactless check-in — Pre-Check-In Form already completed (unit P 03, 1 bed / 1 bath / 4 guests confirmed); the door code arrives by email at 12:00 PM today, valid from 15:00 onward — so a late-afternoon arrival after the raft is fine. One bedroom with a double bed plus a sofa bed for the kids, confirmed by the property. Just 1 km from Agios Ioannis, where tomorrow's boat trip departs.",
        tag: "nature"
      },
      {
        time: "Night",
        title: "Beach evening, easy dinner",
        description: "After a big day — an hour at Meteora, a morning on the river, and the drive east — an unstructured evening on the beach or a seafront taverna in Agios Ioannis is the right pace.",
        tag: "food",
        optional: true
      }
    ],
    driveNotes: "Kazarma / Plastiras → Meteora ≈ 1 h 30 · Meteora → Grevena raft base ≈ 45 min · Grevena → Pelion (Agios Ioannis) ≈ 2 h 30 · about 4 h 45 driving across the day",
    dayTips: [
      "Leave Kazarma by 07:30 — the full day (Meteora hour + raft + two big drives) only works with an early checkout, and early Meteora buys cool light and no crowds",
      "METEORA DRESS CODE: to step inside any monastery, shoulders AND knees must be covered — remind Irina (and everyone) to wear or pack a light scarf/shawl and a longer layer. Wraps are sometimes lent at the door, but don't count on it.",
      "Reconfirm the raft with Active Nature a few days ahead — ask specifically for a late-morning/midday departure so you're off the water by mid-afternoon for the drive to Pelion",
      "Om Living Pelion is contactless with no reception — door code arrives by email at 12:00 today, valid from 15:00, so arriving late afternoon is fine",
      "This one long transit day replaces the old two-day split (raft one day, Meteora + Pelion the next) — yesterday at Plastiras is now the easy horses-and-lake day"
    ],
    gear: [
      { item: "Light scarf/shawl + a knee-covering layer for the Meteora monasteries", for: "meteora-viewpoint" },
      { item: "Swimsuits under your clothes + old shoes that can get soaked", for: "aliakmonas-rafting" },
      { item: "Full dry change of clothes + towels for the drive to Pelion" }
    ],
    drinkOfTheDay: {
      name: "Tsipouro (Pelion-style)",
      type: "digestif",
      pairing: "Pelion is one of tsipouro's home regions — a seafront taverna in Agios Ioannis is a good place to try a local producer's bottle with fresh-caught fish.",
      servingNote: "Small chilled glass, with a meze plate"
    }
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
    }
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
          "Slides, a wave pool, a lazy/crazy river, and a kids' area, in Peraia — on your way south out of Thessaloniki, not a detour. Reviews call it solid and clean rather than spectacular: expect a good half-day, not a full one. Free shuttle exists from central Thessaloniki if you ever needed it, but you'll drive straight there.",
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
      "Deliberately unstructured evening — the point of this stop is rest before tomorrow's shorter drive",
      "If you want the natural springs without the resort setting, Kamena Vourla also has free public thermal pools (Kouniaviti/Asklipios) a short drive from the hotel"
    ],
    drinkOfTheDay: {
      name: "Greek coffee",
      type: "coffee",
      pairing: "An easy, unhurried cup by the thermal pool — tonight is about resting, not a destination drink.",
      servingNote: "Small cup, metrio (medium sweet) is the easy default"
    }
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
