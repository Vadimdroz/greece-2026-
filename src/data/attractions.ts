import type { POI } from "./types";

export const attractions: POI[] = [
  // ---------- DELPHI ----------
  {
    id: "delphi-sanctuary",
    name: "Sanctuary of Apollo & Ancient Theatre",
    category: "attraction",
    region: "north",
    dayTripFrom: "stay-delphi-acropole",
    shortDescription: "The Oracle's temple, theatre, and stadium on the mountainside",
    description:
      "The archaeological heart of Delphi — the Sacred Way climbs past treasuries and the Temple of Apollo (seat of the Oracle) to a well-preserved ancient theatre, and further up, the stadium. Steep in places, uneven ancient stone underfoot, and very little shade — go early.",
    address: "Delphi Archaeological Site, 33054 Delfoi, Greece",
    coords: [38.4824, 22.5010],
    tags: ["culture", "view"],
    difficulty: "moderate",
    tips: [
      "Start before 10:00 — heat and tour-bus crowds both build fast",
      "Uneven stone paths — sturdy shoes over sandals",
      "The stadium is a further climb past the theatre — worth it if the kids still have energy"
    ],
    image: "./images/delphi-sanctuary.jpg",
    imageCredit: {
      author: "Skyring",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:Delphi_Temple_of_Apollo.jpg",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    id: "delphi-museum",
    name: "Delphi Archaeological Museum",
    category: "attraction",
    region: "north",
    dayTripFrom: "stay-delphi-acropole",
    shortDescription: "Air-conditioned museum — home of the Charioteer of Delphi",
    description:
      "One of Greece's finest archaeological museums, right below the main site. The bronze Charioteer of Delphi and the Sphinx of Naxos are the highlights — a good, cool midday break after the uphill walk through the sanctuary.",
    address: "Delphi Archaeological Museum, 33054 Delfoi, Greece",
    coords: [38.4831, 22.4998],
    tags: ["culture"],
    difficulty: "easy",
    tips: ["Air-conditioned — plan it for the hottest part of the day", "Compact enough for a focused visit with kids, ~45–60 min"],
    image: "./images/delphi-museum.jpg",
    imageCredit: {
      author: "Ricardo André Frantz (Tetraktys)",
      license: "CC BY-SA 2.5",
      source: "https://commons.wikimedia.org/wiki/File:Museuarqueologicodelfos.jpg",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.5"
    }
  },
  {
    id: "delphi-tholos",
    name: "Tholos at Marmaria",
    category: "attraction",
    region: "north",
    dayTripFrom: "stay-delphi-acropole",
    shortDescription: "The circular ruin — one of Greece's most photographed sites",
    description:
      "Part of the Sanctuary of Athena Pronaia, a short walk or drive from the main site. The circular Tholos, with three re-erected columns, is one of the most photographed ancient ruins in Greece and usually much quieter than the main sanctuary.",
    address: "Sanctuary of Athena Pronaia, 33054 Delfoi, Greece",
    coords: [38.4795, 22.5062],
    tags: ["culture", "view"],
    difficulty: "easy",
    image: "./images/delphi-tholos.jpg",
    imageCredit: {
      author: "Kufoleto, Antonio De Lorenzo and Marina Ventayol",
      license: "CC BY 3.0",
      source: "https://commons.wikimedia.org/wiki/File:Delphi_tholos_cazzul.JPG",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0"
    }
  },

  // ---------- LAKE PLASTIRAS ----------
  {
    id: "aliakmonas-rafting",
    name: "Aliakmonas River Rafting — Greek Adventure",
    category: "attraction",
    region: "north",
    dayTripFrom: "stay-plastiras",
    shortDescription: "Family-friendly grade 1–2 rafting near Grevena",
    description:
      "A 6–7 km stretch of the Aliakmonas — the longest river in Greece — run by Greek Adventure with certified guides. Grade 1–2 water, suitable for first-time family rafters. On-water time is roughly 1.5–2 hours; the full outing with transport, kitting up, and changing runs about 4 hours.",
    website: "https://www.greekadventure.com/",
    address: "Greek Adventure rafting base, Felli, Grevena, Greece",
    coords: [40.0167, 21.4167],
    tags: ["water", "extreme", "family"],
    bookingNote: "Booked and paid — Greek Adventure, booking ref 08.19-00 AN.Raft.Aliak.Drozdovski.4p (4 people, 19 Aug 2026). Meeting point at 10:00: https://maps.app.goo.gl/ELCePNxFKXrdzQTo7. Reservations contact: Litsa Koletsou — +30 2462 087999 / WhatsApp +30 6948 214871, reservations@greekadventure.com. Christos at Active Nature made the initial arrangements; Greek Adventure runs the trip on the day. Each of the 4 of you must complete Greek Adventure's online Participation Form before the day.",
    difficulty: "moderate",
    tips: [
      "Bring swimsuits under your clothes, a second pair of shoes or closed sandals, a full dry change, towels, and sun cream",
      "Old sports shoes or neoprene booties beat open sandals",
      "Suitable for kids Sophia and Thomas's ages — already confirmed with the operator for this water level",
      "Each participant fills out Greek Adventure's online Participation Form before the day — one form per person"
    ],
    image: "./images/aliakmonas-rafting.jpg",
    imageCredit: {
      author: "Unsplash",
      license: "Unsplash License",
      source: "https://unsplash.com/photos/photo-1599443380179-33737c17ca81",
      licenseUrl: "https://unsplash.com/license"
    }
  },
  {
    id: "plastiras-horses",
    name: "Horse riding, Lake Plastiras",
    category: "attraction",
    region: "north",
    dayTripFrom: "stay-plastiras",
    shortDescription: "Easy trail riding above the lake, beginner-friendly",
    description:
      "Gentle forested trail rides above Lake Plastiras, run by local stables used to beginners and kids. Ask ahead whether younger riders get a led/lead-rope option.",
    address: "Lake Plastiras area, Karditsa, Greece",
    coords: [39.3667, 21.6833],
    tags: ["nature", "family"],
    difficulty: "easy",
    tips: ["Confirm a day ahead — small operators, limited horses", "Closed shoes, long trousers if you have them"],
    image: "./images/plastiras-horses.jpg",
    imageCredit: {
      author: "Αλεξανδρής Αλέξης",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:Forest_Lake_Plastiras.jpg",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    id: "plastiras-archery",
    name: "Archery, Lake Plastiras",
    category: "attraction",
    region: "north",
    dayTripFrom: "stay-plastiras",
    shortDescription: "Kid-friendly archery session near the horse riding centre",
    description:
      "A short, structured archery session — a nice complement to the horse ride and popular with kids around Thomas's age.",
    address: "Lake Plastiras area, Karditsa, Greece",
    coords: [39.3650, 21.6900],
    tags: ["family"],
    difficulty: "easy",
    image: "./images/plastiras-archery.jpg",
    imageCredit: {
      author: "Lance Cpl. Jackeline Perez Rivera, U.S. Marine Corps",
      license: "Public Domain",
      source: "https://commons.wikimedia.org/wiki/File:Kids_take_aim_with_after_school_archery_program_120308-M-IY869-125.jpg"
    }
  },
  {
    id: "plastiras-watersports",
    name: "Kayaks, SUP & swimming, Lake Plastiras",
    category: "attraction",
    region: "north",
    dayTripFrom: "stay-plastiras",
    shortDescription: "Kayaks, paddleboards and pedal boats on the lake, plus a swim",
    description:
      "The lakeshore bases around Neochori and Lampero rent kayaks, stand-up paddleboards, and pedal boats by the hour, with calm, shallow-edged water that's easy for the kids. Best first thing in the morning, when the lake is glassiest and the paddling easiest — an early cool-off before the day warms up and the afternoon at the farm.",
    address: "Lake Plastiras waterfront (Neochori / Lampero), Karditsa, Greece",
    coords: [39.2900, 21.7300],
    tags: ["water", "family"],
    difficulty: "easy",
    tips: ["Water shoes or old trainers beat bare feet on the pebbly edges", "Little shade on the water — hats and high-SPF sunscreen", "Swimsuits on under clothes to skip the changing queue"],
    image: "./images/plastiras-horses.jpg",
    imageCredit: {
      author: "Αλεξανδρής Αλέξης",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:Forest_Lake_Plastiras.jpg",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },

  // ---------- TRANSIT ----------
  {
    id: "meteora-viewpoint",
    name: "Meteora — viewpoints",
    category: "attraction",
    region: "transit",
    enRouteBetween: ["stay-plastiras", "stay-pelion"],
    shortDescription: "Monasteries on sandstone pillars — a one-hour viewpoint stop",
    description:
      "The Meteora monasteries, perched on huge sandstone pillars above Kalambaka, are one of Greece's most striking sights even from the road. The plan for this trip is a one-hour viewpoint stop — drive the panoramic loop road and pull off at the main overlooks for photos of the pillars — not a full monastery tour (which needs its own half-day). If anyone wants to step inside a monastery, the dress code applies: shoulders and knees covered.",
    address: "Meteora, Kalambaka, Greece",
    coords: [39.7217, 21.6306],
    tags: ["view", "culture"],
    difficulty: "easy",
    tips: ["This trip's stop is in the afternoon, on the way from the Aliakmonas raft to Pelion — a calmer break after the morning's activity rather than a rushed one before it", "Pull off along the panoramic loop road above Kalambaka for the best photos", "Dress code to enter any monastery: shoulders AND knees covered — bring a light scarf/shawl and a longer layer, as door wraps aren't guaranteed"],
    image: "./images/meteora-viewpoint.jpg",
    imageCredit: {
      author: "Stathis floros",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:Meteora%27s_monastery_2.jpg",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    id: "waterland",
    name: "Waterland Water Park",
    category: "attraction",
    region: "transit",
    enRouteBetween: ["stay-thessaloniki-shotel", "stay-kamena-vourla"],
    shortDescription: "Slides, wave pool, and kids' areas near Thessaloniki",
    description:
      "A large water park on the coast near Thessaloniki, with big slides, a wave pool, and dedicated kids' areas — a good energy-burner between the long drive from Plastiras and checking into the city.",
    address: "Peraia, Thessaloniki, Greece",
    coords: [40.4667, 22.9333],
    tags: ["water", "family"],
    difficulty: "easy",
    bookingNote: "Tickets bought and paid online for 21 Aug — order #81358, €80 total (2× adult Day Pass at €22, 2× kids day pass at €18, one per family member). E-tickets with barcodes were emailed separately per person — have them ready on your phone at the gate.",
    tips: ["Swimsuits on under clothes saves a changing-room queue", "Bring your own towels — rentals add up fast"],
    image: "./images/waterland.jpg",
    imageCredit: {
      author: "Pavel Soro London",
      license: "CC0",
      source: "https://commons.wikimedia.org/wiki/File:Water_slide_at_H%C3%B4tel_Eden_Andalou_Aquapark_(234137179).jpg"
    }
  },
  {
    id: "thermopylae",
    name: "Thermopylae — Leonidas Monument",
    category: "attraction",
    region: "transit",
    enRouteBetween: ["stay-delphi-acropole", "stay-plastiras"],
    shortDescription: "Roadside stop at the 480 BC battle site",
    description:
      "The site of the famous last stand of Leonidas and the 300 Spartans against the Persian army in 480 BC. The Leonidas statue and the burial mound (Kolonos Hill) make a worthwhile 20–30 minute stop to stretch legs on the long drive south.",
    address: "Thermopylae, Fthiotida, Greece",
    coords: [38.7967, 22.5361],
    tags: ["culture"],
    difficulty: "easy",
    quizFacts: [
      {
        question: "Who led the Greek force at the Battle of Thermopylae?",
        correctAnswer: "King Leonidas of Sparta",
        distractors: ["King Xerxes", "Alexander the Great", "Pericles"]
      }
    ],
    image: "./images/thermopylae.jpg",
    imageCredit: {
      author: "Pimpinellus",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:Leonidas_Statue_01.jpg",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },

  // ---------- THESSALONIKI ----------
  {
    id: "ano-poli",
    name: "Ano Poli (Upper Town)",
    category: "attraction",
    region: "south",
    dayTripFrom: "stay-thessaloniki-shotel",
    shortDescription: "Steep, atmospheric old-town streets and Byzantine walls",
    description:
      "Thessaloniki's old town, climbing above the modern city to the Byzantine walls — narrow lanes, old houses, and views over the Thermaic Gulf. Uphill in places; comfortable shoes recommended.",
    address: "Ano Poli, Thessaloniki, Greece",
    coords: [40.6364, 22.9539],
    tags: ["culture", "view"],
    difficulty: "moderate",
    image: "./images/ano-poli.jpg",
    imageCredit: {
      author: "XeresNelro",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:Thessalonikki,_Macedonia,_Greece779.jpg",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    id: "white-tower",
    name: "White Tower & waterfront promenade",
    category: "attraction",
    region: "south",
    dayTripFrom: "stay-thessaloniki-shotel",
    shortDescription: "Thessaloniki's landmark, right on the seafront",
    description:
      "The White Tower is Thessaloniki's most recognisable landmark, sitting on a long, flat seafront promenade — an easy walk after Ano Poli's climb, with plenty of cafés for a frappé break.",
    address: "Leoforos Nikis, Thessaloniki 546 21, Greece",
    coords: [40.6264, 22.9490],
    tags: ["view", "culture"],
    difficulty: "easy",
    image: "./images/white-tower.jpg",
    imageCredit: {
      author: "CeeGee",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:WhiteTowerThessaloniki_(3).JPG",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },

  // ---------- PELION ----------
  {
    id: "pelion-agios-ioannis",
    name: "Agios Ioannis, Pelion",
    category: "attraction",
    region: "transit",
    enRouteBetween: ["stay-pelion", "stay-thessaloniki-shotel"],
    shortDescription: "Beach village on Pelion's east coast — where the boat trip departs",
    description:
      "A small resort village on Pelion's east coast, with a long beach and a small port. The Pelion Scout boat trip departs from here — just over a kilometer from Om Living Pelion, the family's hotel in nearby Agios Dimitrios.",
    address: "Agios Ioannis, Pelion, Magnesia, Greece",
    coords: [39.3608, 23.2242],
    tags: ["nature", "family"],
    difficulty: "easy",
    tips: ["Leave the hotel by 09:45 for the 10:00 boat departure — it's only a few minutes' drive", "The village is walkable — everything is close to the beach strip"],
    image: "./images/pelion-agios-ioannis.jpg",
    imageCredit: {
      author: "Mboesch",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:Pilion-agios-ioannis.JPG",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    id: "pelion-boat-trip",
    name: "\"Mamma Mia\" boat trip — Pelion Scout",
    category: "attraction",
    region: "transit",
    enRouteBetween: ["stay-pelion", "stay-thessaloniki-shotel"],
    shortDescription: "Family boat trip to sea caves and hidden beaches",
    description:
      "A 2–3 hour boat trip from Agios Ioannis (or Chorefto) along Pelion's east coast: the sea cave and beach at Fakistra, the postcard harbor of Damouchari (a Mamma Mia filming location), Mylopotamos beach, and a swim stop at the harder-to-reach Limnionas. Easy difficulty, minimum age 4, max 11 guests per boat.",
    website: "https://pelionscout.com/daily-activities-tours-pelion-greece/boat-trip-mamma-mia/",
    address: "Small port of Agios Ioannis, Pelion, Greece",
    coords: [39.3608, 23.2242],
    tags: ["water", "family"],
    bookingNote: "Book ahead — small boats, max 11 guests. Departures 10:00 / 13:00 / 16:00.",
    difficulty: "easy",
    tips: [
      "Minimum age 4 — fine for both Thomas and Sophia",
      "Wear swimsuits under clothes, bring sandals/flip-flops rather than closed shoes",
      "Sunscreen, hats, and sunglasses — most of the trip is out on open water"
    ],
    image: "./images/pelion-boat-trip.jpg",
    imageCredit: {
      author: "Eleni Alexiou",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:Damouchari_Pelion.jpg",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },

  // ---------- NAFPLIO ----------
  {
    id: "palamidi-view",
    name: "Palamidi Fortress (viewpoint)",
    category: "attraction",
    region: "south",
    dayTripFrom: "stay-nafplio",
    shortDescription: "Venetian fortress above Nafplio — admired from below on this trip",
    description:
      "A vast Venetian fortress on the hill above Nafplio's old town, reached by 900-odd steps or a short drive. On this trip's light last day, the plan is to admire it from the old town and harbour rather than climb it with the kids.",
    address: "Palamidi, Nafplio 21100, Greece",
    coords: [37.5660, 22.8020],
    tags: ["culture", "view"],
    difficulty: "challenging",
    tips: ["The 900 steps are a real climb — skip them on a light last day with young kids", "Old town views of the fortress are worth it on their own"],
    image: "./images/palamidi-view.jpg",
    imageCredit: {
      author: "Brastite",
      license: "CC BY-SA 3.0",
      source: "https://commons.wikimedia.org/wiki/File:Palamidi_fortress_(Nafplio,_Greece).jpg",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0"
    }
  }
];

export const getAttraction = (id: string) => attractions.find(a => a.id === id);
