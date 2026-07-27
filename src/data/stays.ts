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
      "Bed configuration confirmed by the property: 1 extra-large double bed + 2 separate sofa beds, no extra charge",
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
      "Ground-floor apartment in Agios Dimitrios, a small hillside village just 1 km southwest of Agios Ioannis — a couple of minutes from where the \"Mamma Mia\" boat trip departs. Booked to replace Faros, Milopotamos: Faros couldn't move its check-in from 20 to 19 Aug (needed so the night after Kazarma's new checkout wasn't left unbooked), so that booking was cancelled and this one took its place. Self-catered, reception-free contactless check-in. Confirmed by the property: one bedroom with a double bed, plus a sofa bed in the living area that comfortably fits both kids. The specific unit is P 03, a sea-view ground-floor apartment, 1 bedroom, sleeps up to 4.",
    address: "Agios Dimitrios, Agios Dimitrios, 37012, Greece",
    coords: [39.3544, 23.2160],
    checkIn: "2026-08-19",
    checkOut: "2026-08-20",
    nights: 1,
    highlights: [
      "Booking.com confirmation 6584233490, PIN 2645",
      "Apartment, ground floor, 1 bedroom + 1 bathroom, 2 adults + 2 children (5 and 8)",
      "€196.24 total — no meal plan, self-catered",
      "Free cancellation until 4 August 2026 23:59 — after that, full price if cancelled or no-show",
      "Host phone +30 231 028 0125",
      "Unit P 03 | Deluxe Apartment Sea View Ground Floor, property code 20576",
      "Pre-Check-In Form completed via the guest portal (guests.loggia.net) — unit P 03 confirmed, 1 bed / 1 bath / 4 guests",
      "Door code arrives by email at 12:00 PM on arrival day (19 Aug), valid from 15:00 onward — no need to message the property about arrival time"
    ],
    warnings: [
      "Contactless check-in — no reception. Pre-Check-In Form is done; just wait for the door code by email on arrival day.",
      "Property doesn't accommodate hen/stag parties; guests under 18 need a parent or guardian to check in",
      "Official contact is info@omliving.gr — the property warned against responding to any other source about personal data or payment"
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
      "Junior Suite, 1 night (20–21 Aug), €272.21 total. Booked to replace the old September Hotel / City Hotel double-booking, which had the wrong number of nights for the current plan — this one matches the itinerary exactly.",
    address: "Kalapothaki 5, Thessaloniki, 54624, Greece",
    coords: [40.6320, 22.9440],
    checkIn: "2026-08-20",
    checkOut: "2026-08-21",
    nights: 1,
    highlights: [
      "Booking.com confirmation 5365254420, PIN 9179",
      "Junior Suite, €272.21 total",
      "Confirmed by the property: junior suite is suitable for 4, sofa beds prepared for the kids",
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
      "Confirmed by the property: both rooms are singles, each with one queen bed",
      "Check-in time approved for 17:00–18:00 (special request, no extra charge)",
      "Dinner served 19:00–22:00, buffet at the main restaurant — cold plates sent to the room if arriving later",
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
    shortDescription: "Confirmed — 1 night, 22–23 Aug, old town Nafplio",
    description:
      "Apartment in the heart of old Nafplio, 1 night (22–23 Aug). This is the kept last-night booking — the duplicate Philia Boutique Hotel booking in Athens has been cancelled.",
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
    shortDescription: "CANCELLED — Nafplio is the kept last night",
    description:
      "Junior Suite with Garden View, 1 night (22–23 Aug), in Psyrri near central Athens. Was the alternate to Nafplio's Traditional house of 1898 for the last night — cancelled now that Nafplio is confirmed as the plan.",
    address: "16 Agiou Dimitriou, Psyrri, Athens, 10554, Greece",
    coords: [37.9773, 23.7256],
    checkIn: "2026-08-22",
    checkOut: "2026-08-23",
    nights: 1,
    highlights: [
      "Booking.com confirmation 5911625902, PIN 6418",
      "Free cancellation until 14 August 2026 23:59"
    ],
    warnings: [
      "CANCELLED — Traditional house of 1898, Nafplio is the kept booking for this night."
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
