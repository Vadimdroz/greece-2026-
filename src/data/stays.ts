import type { Stay } from "./types";

export const stays: Stay[] = [
  {
    id: "stay-delphi-acropole",
    name: "Acropole Delphi City Hotel",
    category: "stay",
    region: "north",
    shortDescription: "Confirmed — 2 nights, 15–17 Aug",
    description:
      "Booked for 2 nights, 15–17 Aug, €256.88 total. The Delphi base for the sanctuary, museum and tholos.",
    address: "13 Filellinon Str, Delfoi, 33054, Greece",
    coords: [38.4818, 22.4995],
    checkIn: "2026-08-15",
    checkOut: "2026-08-17",
    nights: 2,
    highlights: [
      "Booking.com confirmation 6091715929, PIN 9267",
      "2 rooms booked for 2 adults, 2 children",
      "€256.88 total"
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
    name: "Om Living Pelion — P 03, Deluxe Apartment Sea View",
    category: "stay",
    region: "transit",
    shortDescription: "Confirmed — 1 night, 19–20 Aug, Agios Dimitrios",
    description:
      "Ground-floor apartment in Agios Dimitrios, a small hillside village just 1 km southwest of Agios Ioannis — a couple of minutes from where the \"Mamma Mia\" boat trip departs. Booked to replace Faros, Milopotamos: Faros couldn't move its check-in from 20 to 19 Aug (needed so the night after Kazarma's new checkout wasn't left unbooked), so that booking was cancelled and this one took its place. Self-catered, reception-free contactless check-in — the property sends a door code the day before arrival. The specific unit is P 03, a sea-view ground-floor apartment, 1 bedroom, sleeps up to 4.",
    address: "Agios Dimitrios, Agios Dimitrios, 37012, Greece",
    coords: [39.3544, 23.2160],
    checkIn: "2026-08-19",
    checkOut: "2026-08-20",
    nights: 1,
    highlights: [
      "Booking.com confirmation 6584233490, PIN 2645",
      "Apartment, ground floor, 2 adults + 2 children (5 and 8)",
      "€196.24 total — no meal plan, self-catered",
      "Free cancellation until 4 August 2026 23:59 — after that, full price if cancelled or no-show",
      "Host phone +30 231 028 0125 — door code sent one day before arrival",
      "Unit P 03 | Deluxe Apartment Sea View Ground Floor, property code 20576"
    ],
    warnings: [
      "Contactless check-in — no reception. Confirm your arrival time with the property ahead so the door code arrives in time.",
      "Property doesn't accommodate hen/stag parties; guests under 18 need a parent or guardian to check in"
    ],
    website: "https://guests.loggia.net/en/19696/overview/1424607",
    image: "./images/stay-pelion.jpg",
    imageCredit: {
      author: "Anaximander",
      license: "CC BY-SA 3.0",
      source: "https://commons.wikimedia.org/wiki/File:Mouresi_Agia_Triatha.jpg",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0"
    }
  },
  {
    id: "stay-thessaloniki-shotel",
    name: "S Hotel Boutique Thessaloniki",
    category: "stay",
    region: "south",
    shortDescription: "Confirmed — 1 night, 20–21 Aug",
    description:
      "Junior Suite, 1 night (20–21 Aug), €272.21 total. Matches the plan's single Thessaloniki night exactly.",
    address: "Kalapothaki 5, Thessaloniki, 54624, Greece",
    coords: [40.6320, 22.9440],
    checkIn: "2026-08-20",
    checkOut: "2026-08-21",
    nights: 1,
    highlights: [
      "Booking.com confirmation 5365254420, PIN 9179",
      "Junior Suite, €272.21 total",
      "Free cancellation until 16 August 2026 23:59",
      "Matches the plan's 1-night Thessaloniki stay"
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
    ],
    image: "./images/stay-kamena-vourla.jpg",
    imageCredit: {
      author: "Tns",
      license: "CC BY-SA 3.0",
      source: "https://commons.wikimedia.org/wiki/File:Καμένα_Βούρλα.jpg",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0"
    }
  },
  {
    id: "stay-nafplio",
    name: "Traditional house of 1898",
    category: "stay",
    region: "south",
    shortDescription: "Confirmed — 1 night, 22–23 Aug, old-town Nafplio",
    description:
      "Apartment in the heart of old Nafplio, 1 night (22–23 Aug) — the trip's final night, in the old town a short walk from the harbour and within view of Palamidi fortress.",
    address: "Σπηλιαδου 2, Nafplio, 21100, Greece",
    coords: [37.5685, 22.7970],
    checkIn: "2026-08-22",
    checkOut: "2026-08-23",
    nights: 1,
    highlights: [
      "Booking.com confirmation 5347700468, PIN 8001",
      "Someone will meet you on arrival with the keys — host phone +30 697 287 8529",
      "Last night in the old town, a short walk from the harbour"
    ],
    image: "./images/stay-nafplio.jpg",
    imageCredit: {
      author: "Nikolaos Kyriakakis",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:Neoclassical_buildings_in_Nafplion.jpg",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0"
    }
  }
];
