import type { Stay } from "./types";

export const stays: Stay[] = [
  {
    id: "stay-delphi-acropole",
    name: "Acropole Delphi City Hotel",
    category: "stay",
    region: "north",
    shortDescription: "The pick — 2 nights, 15–17 Aug",
    description:
      "Booked for 2 nights, 15–17 Aug, €256.88 total. This is the one to keep — cancel Amalia Hotel Delphi (below) before its free-cancellation deadline.",
    address: "13 Filellinon Str, Delfoi, 33054, Greece",
    coords: [38.4818, 22.4995],
    checkIn: "2026-08-15",
    checkOut: "2026-08-17",
    nights: 2,
    highlights: [
      "Booking.com confirmation 6091715929, PIN 9267",
      "2 rooms booked for 2 adults, 2 children",
      "€256.88 total — the cheaper of the two Delphi bookings"
    ],
    image: "./images/stay-delphi-acropole.jpg",
    imageCredit: {
      author: "Angela Monika Arnold, Berlin",
      license: "CC BY 3.0",
      source: "https://commons.wikimedia.org/wiki/File:GR_08-04-24_Delphi_Hauptstrasse.jpg",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0"
    }
  },
  {
    id: "stay-delphi-amalia",
    name: "Amalia Hotel Delphi",
    category: "stay",
    region: "north",
    routeStatus: "alternate",
    shortDescription: "TO CANCEL — superseded by Acropole",
    description:
      "Classic Double/Twin room, breakfast included. Booked for 2 nights, 15–17 Aug, €467.51 total. Acropole Delphi City Hotel is the one being kept — cancel this one before the free-cancellation deadline.",
    address: "Apollonos Street 1, Delfoi, 33054, Greece",
    coords: [38.4824, 22.5010],
    checkIn: "2026-08-15",
    checkOut: "2026-08-17",
    nights: 2,
    highlights: [
      "Booking.com confirmation 6091713128, PIN 6078",
      "2 rooms booked, breakfast included",
      "Free cancellation until 12 August 2026 23:59 — after that, first night's cost as a fee"
    ],
    warnings: [
      "TO CANCEL — Acropole Delphi City Hotel is the kept booking. Cancel this one before 12 Aug 23:59."
    ],
    image: "./images/stay-delphi-amalia.jpg",
    imageCredit: {
      author: "Angela Monika Arnold, Berlin",
      license: "CC BY 3.0",
      source: "https://commons.wikimedia.org/wiki/File:GR_08-04-23_Delphi_Hauptstrasse.JPG",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0"
    }
  },
  {
    id: "stay-plastiras",
    name: "Kazarma Hotel",
    category: "stay",
    region: "north",
    shortDescription: "Confirmed — lake-view room, 2 nights, Lake Plastiras",
    description:
      "Superior Double/Twin Room with Lake View, in Kalyvia Fylaktis on Lake Plastiras. Shortened from 3 to 2 nights on 26 July to make room for Meteora/Pelion moving up a day — the horse riding/archery day was cut.",
    address: "Kalivia Filaktis, Kalyvia Fylaktis, 43067, Greece",
    coords: [39.3625, 21.7028],
    checkIn: "2026-08-17",
    checkOut: "2026-08-19",
    nights: 2,
    highlights: [
      "Booking.com confirmation 5911663775, PIN 1975",
      "Modified 26 July 2026: departure moved from 20 Aug to 19 Aug, €428 (was €642)",
      "Base for the rafting day"
    ],
    image: "./images/stay-plastiras.jpg",
    imageCredit: {
      author: "SXRomeo",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:Lake_Plastiras.jpg",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    id: "stay-pelion",
    name: "Faros, Milopotamos",
    category: "stay",
    region: "transit",
    shortDescription: "PENDING date change — awaiting hotel confirmation",
    description:
      "A small, family-run hillside hotel above Mylopotamos beach, one of East Pelion's most beautiful. Rated 9.8 across hundreds of reviews — home-cooked meals from the owners' own farm, sea views, and a genuinely secluded feel. Two rooms booked. A request to move check-in from Thu 20 Aug to Wed 19 Aug is in with the property (Kazarma's new checkout is 19 Aug, so 20 Aug would leave a night unbooked) — still waiting to hear back. Note: cash-only property, and the access road is rough (manageable, but not a smooth drive-up) — worth knowing before arrival.",
    address: "Pilio, Milopotamos, 37012, Greece",
    coords: [39.3520, 23.1050],
    checkIn: "2026-08-20",
    checkOut: "2026-08-21",
    nights: 1,
    highlights: [
      "Booking.com confirmation 5209377665, PIN 7030",
      "2 rooms, total €166",
      "9.8 rating — home-cooked farm-to-table meals, sea-view rooms, quiet hillside setting",
      "Message the property ahead about check-in/out times and the access road"
    ],
    warnings: [
      "PENDING — awaiting confirmation from the hotel on moving check-in from 20 Aug to 19 Aug. Still shows 20 Aug as of this update; call ahead if it hasn't been confirmed by the time you leave Plastiras.",
      "Cash only — no cards accepted on site",
      "Access road is rough — fine for any car per reviews, but not paved smooth; drive carefully with the family"
    ]
  },
  {
    id: "stay-thessaloniki-shotel",
    name: "S Hotel Boutique Thessaloniki",
    category: "stay",
    region: "south",
    shortDescription: "Confirmed — 1 night, 20–21 Aug",
    description:
      "Junior Suite, 1 night (20–21 Aug), €272.21 total. Booked to replace the old September Hotel / City Hotel double-booking, which had the wrong number of nights for the current plan — this one matches the itinerary exactly.",
    address: "Kalapothaki 5, Thessaloniki, 54624, Greece",
    coords: [40.6320, 22.9440],
    checkIn: "2026-08-20",
    checkOut: "2026-08-21",
    nights: 1,
    highlights: [
      "Booking.com confirmation 5365254420, PIN 9179",
      "Junior Suite, €272.21 total",
      "Free cancellation until 16 August 2026 23:59",
      "Matches the plan's actual 1-night Thessaloniki stay — no date fix needed"
    ],
    image: "./images/stay-thessaloniki-september.jpg",
    imageCredit: {
      author: "Unsplash",
      license: "Unsplash License",
      source: "https://unsplash.com/photos/photo-1763717630658-d8fa5fa754e9",
      licenseUrl: "https://unsplash.com/license"
    }
  },
  {
    id: "stay-thessaloniki-september",
    name: "September Hotel Thessaloniki",
    category: "stay",
    region: "south",
    routeStatus: "alternate",
    shortDescription: "TO CANCEL — superseded by S Hotel Boutique",
    description:
      "5* hotel, Junior Suite with Garden View, booked for 2 nights, 20–22 Aug, €674.40 total. S Hotel Boutique Thessaloniki is the one being kept — cancel this before 18 Aug.",
    address: "Asklipiou 16-18, Thessaloniki, 55535, Greece",
    coords: [40.6260, 22.9500],
    checkIn: "2026-08-20",
    checkOut: "2026-08-22",
    nights: 2,
    highlights: [
      "Booking.com confirmation 5559705389, PIN 3040",
      "5-star property, Junior Suite with Garden View",
      "Free cancellation until 18 August 2026 23:59"
    ],
    warnings: [
      "TO CANCEL — S Hotel Boutique Thessaloniki is the kept booking. Cancel this before 18 Aug 23:59."
    ],
    image: "./images/stay-thessaloniki-september.jpg",
    imageCredit: {
      author: "Unsplash",
      license: "Unsplash License",
      source: "https://unsplash.com/photos/photo-1763717630658-d8fa5fa754e9",
      licenseUrl: "https://unsplash.com/license"
    }
  },
  {
    id: "stay-thessaloniki-city",
    name: "City Hotel Thessaloniki",
    category: "stay",
    region: "south",
    routeStatus: "alternate",
    shortDescription: "TO CANCEL — superseded by S Hotel Boutique",
    description:
      "Junior Suite Inner View, booked for 2 nights, 20–22 Aug, booked for 2 adults + 1 child only. S Hotel Boutique Thessaloniki is the one being kept — cancel this before 18 Aug.",
    address: "Komninon 11, Thessaloniki, 546 24, Greece",
    coords: [40.6320, 22.9430],
    checkIn: "2026-08-20",
    checkOut: "2026-08-22",
    nights: 2,
    highlights: [
      "Booking.com confirmation 5066676607, PIN 2882",
      "Free cancellation until 18 August 2026 23:59"
    ],
    warnings: [
      "TO CANCEL — S Hotel Boutique Thessaloniki is the kept booking. Cancel this before 18 Aug 23:59.",
      "Was also booked for 2 adults + 1 child only, wrong occupancy for the family"
    ],
    image: "./images/stay-thessaloniki-city.jpg",
    imageCredit: {
      author: "Unsplash",
      license: "Unsplash License",
      source: "https://unsplash.com/photos/a-modern-hotel-room-with-elegant-furnishings-Qvn9nTldQgc",
      licenseUrl: "https://unsplash.com/license"
    }
  },
  {
    id: "stay-kamena-vourla",
    name: "Mitsis Galini Wellness Spa Resort",
    category: "stay",
    region: "south",
    shortDescription: "Confirmed — 1 night, 21–22 Aug, Kamena Vourla",
    description:
      "New stop, added to split the old direct Thessaloniki–Nafplio drive (5–6 hours) into two manageable days. 1 night, 2 rooms, breakfast + dinner included. The resort's outdoor thermal pool is fed by Kamena Vourla's natural radon/mineral springs. Plan is to rest the evening of the 21st and use the thermal pool the morning of the 22nd before driving on to Nafplio.",
    address: "5 Ger. Vassiliadi, Kamena Vourla, 35008, Greece",
    coords: [38.7760, 22.7780],
    checkIn: "2026-08-21",
    checkOut: "2026-08-22",
    nights: 1,
    highlights: [
      "Booking.com confirmation 6652799478, PIN 4393",
      "2 rooms, €444 total, breakfast and dinner included",
      "Natural thermal spring pool — same source as the town's free public baths, with resort loungers and changing rooms",
      "Free cancellation until 13 August 2026 23:59"
    ],
    warnings: [
      "Confirm thermal-pool access hours ahead — some spa resorts reserve windows for treatments vs. general guest use",
      "Confirm ahead whether children can use the thermal (not just freshwater) pool — some hot-spring pools have age/temperature restrictions"
    ]
  },
  {
    id: "stay-nafplio",
    name: "Traditional house of 1898",
    category: "stay",
    region: "south",
    shortDescription: "PENDING — competing with an Athens hotel for the same last night",
    description:
      "Apartment in the heart of old Nafplio, 1 night (22–23 Aug). This is the trip's plan — but there's also a Philia Boutique Hotel booking in Athens for the exact same night. Resolve before 7 Aug (this one's free-cancellation deadline) or 14 Aug (Philia's).",
    address: "Σπηλιαδου 2, Nafplio, 21100, Greece",
    coords: [37.5685, 22.7970],
    checkIn: "2026-08-22",
    checkOut: "2026-08-23",
    nights: 1,
    highlights: [
      "Booking.com confirmation 5347700468, PIN 8001",
      "Someone will meet you on arrival with the keys — host phone +30 697 287 8529",
      "Free cancellation until 7 August 2026 23:59",
      "Keeps the last-night plan in the old town instead of near the airport"
    ],
    warnings: [
      "PENDING DECISION — duplicate booking with Philia Boutique Hotel, Athens, same night (22–23 Aug)."
    ],
    image: "./images/stay-nafplio.jpg",
    imageCredit: {
      author: "Nikolaos Kyriakakis",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:Neoclassical_buildings_in_Nafplion.jpg",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    id: "stay-athens-philia",
    name: "Philia Boutique Hotel, Athens",
    category: "stay",
    region: "south",
    routeStatus: "alternate",
    shortDescription: "PENDING — alternate to the Nafplio last night, in Psyrri, Athens",
    description:
      "Junior Suite with Garden View, 1 night (22–23 Aug), in Psyrri near central Athens. The alternate plan to Nafplio's Traditional house of 1898 for the last night — closer to the airport, but trades away the old-town evening.",
    address: "16 Agiou Dimitriou, Psyrri, Athens, 10554, Greece",
    coords: [37.9773, 23.7256],
    checkIn: "2026-08-22",
    checkOut: "2026-08-23",
    nights: 1,
    highlights: [
      "Booking.com confirmation 5911625902, PIN 6418",
      "Free cancellation until 14 August 2026 23:59",
      "Shorter drive to the airport the next morning than from Nafplio"
    ],
    warnings: [
      "PENDING DECISION — duplicate booking with Traditional house of 1898, Nafplio, same night."
    ],
    image: "./images/stay-athens-philia.jpg",
    imageCredit: {
      author: "Pavlos1988",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:Psyrri,_Athens.jpg",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0"
    }
  }
];
