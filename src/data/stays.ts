import type { Stay } from "./types";

export const stays: Stay[] = [
  {
    id: "stay-delphi-amalia",
    name: "Amalia Hotel Delphi",
    category: "stay",
    region: "north",
    shortDescription: "PENDING — one of two Delphi hotels booked for the same nights",
    description:
      "Classic Double/Twin room, breakfast included. Booked for 2 nights, 15–17 Aug. This is one of two Delphi bookings for the same dates — pick this one or Acropole Delphi City Hotel and cancel the other before the free-cancellation deadline.",
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
      "PENDING DECISION — duplicate booking with Acropole Delphi City Hotel, same dates. Cancel one before 12 Aug."
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
    id: "stay-delphi-acropole",
    name: "Acropole Delphi City Hotel",
    category: "stay",
    region: "north",
    shortDescription: "PENDING — one of two Delphi hotels booked for the same nights",
    description:
      "Booked for 2 nights, 15–17 Aug. The other half of the Delphi double-booking — compare against Amalia Hotel Delphi and keep one.",
    address: "13 Filellinon Str, Delfoi, 33054, Greece",
    coords: [38.4818, 22.4995],
    checkIn: "2026-08-15",
    checkOut: "2026-08-17",
    nights: 2,
    highlights: [
      "Booking.com confirmation 6091715929, PIN 9267",
      "2 rooms booked for 2 adults, 2 children"
    ],
    warnings: [
      "PENDING DECISION — duplicate booking with Amalia Hotel Delphi, same dates."
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
    shortDescription: "Confirmed — lake-view room, 3 nights, Lake Plastiras",
    description:
      "Superior Double/Twin Room with Lake View, in Kalyvia Fylaktis on Lake Plastiras. The one leg of the trip with no double-booking to resolve — this one's locked in.",
    address: "Kalivia Filaktis, Kalyvia Fylaktis, 43067, Greece",
    coords: [39.3625, 21.7028],
    checkIn: "2026-08-17",
    checkOut: "2026-08-20",
    nights: 3,
    highlights: [
      "Booking.com confirmation 5911663775, PIN 1975",
      "Free cancellation ended 26 July 2026 — locked in",
      "Base for the rafting, horse riding, and archery days"
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
    id: "stay-thessaloniki-september",
    name: "September Hotel Thessaloniki",
    category: "stay",
    region: "south",
    shortDescription: "PENDING — one of two Thessaloniki hotels booked for the same nights",
    description:
      "5* hotel, Junior Suite with Garden View, booked for 2 nights, 20–22 Aug. This is one of two Thessaloniki bookings for the same dates — pick this one or City Hotel Thessaloniki and cancel the other before 18 Aug.",
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
      "PENDING DECISION — duplicate booking with City Hotel Thessaloniki, same dates. Cancel one before 18 Aug."
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
    shortDescription: "PENDING — one of two Thessaloniki hotels booked for the same nights",
    description:
      "Junior Suite Inner View, booked for 2 nights, 20–22 Aug. The other half of the Thessaloniki double-booking. Note this booking was made for 2 adults + 1 child — double-check occupancy before keeping it.",
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
      "PENDING DECISION — duplicate booking with September Hotel Thessaloniki, same dates.",
      "Booked for 2 adults + 1 child only — confirm occupancy before keeping this one over the other"
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
