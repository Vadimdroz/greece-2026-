import type { ChecklistCategory, ChecklistItem } from "./types";

/** Build a Google Maps "search" deep-link from a plain query string. */
const maps = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

/**
 * Every pre-trip task lives in one flat list now — the old standalone task
 * tracker (public/tasks.html) has been folded in here so there's a single
 * source of truth. The Lists screen groups these by `category` into chips.
 */
export const checklist: ChecklistItem[] = [
  /* ---------------- Hotels ---------------- */
  {
    id: "resolve-delphi-hotel",
    category: "hotels",
    text: "Pick one Delphi hotel, cancel the other",
    detail:
      "Amalia Hotel Delphi (conf. 6091713128, free cancel until 12 Aug) vs. Acropole Delphi City Hotel (conf. 6091715929). Both booked for 15–17 Aug.",
    urgent: true,
    dueBy: "2026-08-12",
    mapsUrl: maps("Amalia Hotel Delphi Greece"),
    website: "https://www.amaliahotels.com/delphi/"
  },
  {
    id: "resolve-thessaloniki-hotel",
    category: "hotels",
    text: "Pick one Thessaloniki hotel, cancel the other",
    detail:
      "September Hotel (conf. 5559705389) vs. City Hotel Thessaloniki (conf. 5066676607, booked for 2 adults + 1 child only — check occupancy). Both booked 20–22 Aug, free cancel until 18 Aug.",
    urgent: true,
    dueBy: "2026-08-18",
    mapsUrl: maps("September Hotel Thessaloniki"),
    website: "https://septemberhotel.reserve-online.net/"
  },
  {
    id: "resolve-last-night",
    category: "hotels",
    text: "Nafplio or Athens for the last night?",
    detail:
      "Traditional house of 1898, Nafplio (conf. 5347700468, free cancel until 7 Aug) vs. Philia Boutique Hotel, Athens (conf. 5911625902, free cancel until 14 Aug). Both booked for 22–23 Aug. Current plan assumes Nafplio.",
    urgent: true,
    dueBy: "2026-08-07",
    mapsUrl: maps("Traditional house of 1898 Spiliadou 2 Nafplio")
  },

  /* ---------------- Restaurants ---------------- */
  {
    id: "book-mavri-thalassa",
    category: "restaurants",
    text: "Reserve Mavri Thalassa (21 Aug dinner)",
    detail:
      "Kalamaria, Thessaloniki. Reserve by phone (+30 231 093 2542) or online — same-day online bookings close 15:00. Especially important for a Friday night.",
    dueBy: "2026-08-20",
    mapsUrl: maps("Mavri Thalassa Kalamaria Thessaloniki"),
    website: "https://mavri-thalassa.gr/en/"
  },
  {
    id: "book-delphi-dinner",
    category: "restaurants",
    text: "Pick a Delphi dinner spot for the first nights",
    detail:
      "No reservation strictly needed (small village, several tavernas with gorge views), but worth picking one and confirming it's open — especially arrival night, 15 Aug.",
    dueBy: "2026-08-14",
    mapsUrl: maps("tavernas Delphi Greece gorge view")
  },
  {
    id: "book-nafplio-dinner",
    category: "restaurants",
    text: "Pick a Nafplio last-night dinner",
    detail:
      "The old town has plenty of options for 22 Aug — worth booking ahead if you want a specific waterfront spot on an August Saturday night.",
    dueBy: "2026-08-20",
    mapsUrl: maps("restaurants Nafplio old town waterfront")
  },

  /* ---------------- Parks & Attractions ---------------- */
  {
    id: "book-rafting-reconfirm",
    category: "attractions",
    text: "Reconfirm Aliakmonas rafting with Active Nature",
    detail:
      "Exact meeting time and point for 18 Aug — reconfirm a few days ahead of the trip.",
    dueBy: "2026-08-15",
    mapsUrl: maps("Active Nature rafting base Felli Grevena Greece"),
    website:
      "https://www.active-nature.gr/en/activities/rafting/rafting-in-aliakmonas-river/"
  },
  {
    id: "book-horses-archery",
    category: "attractions",
    text: "Confirm horse riding + archery at Lake Plastiras",
    detail:
      "Small local operators — confirm availability a day or two ahead, and ask about a lead-rope option for Sophia (5.5).",
    dueBy: "2026-08-16",
    mapsUrl: maps("Lake Plastiras horse riding Karditsa Greece")
  },
  {
    id: "book-waterland-tickets",
    category: "attractions",
    text: "Waterland Water Park tickets",
    detail:
      "Check whether buying online ahead is cheaper than at the gate for 20 Aug.",
    dueBy: "2026-08-19",
    mapsUrl: maps("Waterland Water Park Tagarades Thessaloniki"),
    website: "https://www.waterland.gr/en/"
  },

  /* ---------------- Car hire ---------------- */
  {
    id: "book-car",
    category: "car",
    text: "Rental car — Record Go, MG ZS (Athens Airport)",
    detail:
      "Booking #782539337. Pickup Sat 15 Aug 13:00, drop-off Sun 23 Aug 13:00. Third-party insurance via Rentalcars.com/Zurich already arranged — decline Record Go's own insurance at the desk.",
    done: true,
    mapsUrl: maps("Record Go car rental Athens International Airport")
  },
  {
    id: "booster-seats",
    category: "car",
    text: "Confirm both booster/child seats are in the car",
    detail:
      "Mandatory under Greek law for under-12 or under-150cm. €350 fine if missing. Check at the Record Go desk before leaving the lot on 15 Aug.",
    dueBy: "2026-08-15"
  },

  /* ---------------- Packing ---------------- */
  {
    id: "water-shoes",
    category: "packing",
    text: "Closed-toe water shoes or neoprene booties — for everyone",
    detail: "Aliakmonas rafting and Waterland both call for them over sandals."
  },
  {
    id: "dry-bag",
    category: "packing",
    text: "Dry bag or waterproof pouch",
    detail:
      "Phones, wallet, car key for the rafting day — no dry bags mentioned in the Active Nature booking."
  },
  {
    id: "swim-gear",
    category: "packing",
    text: "Swimsuits + swim goggles per person",
    detail: "Waterland, plus any hotel pool along the way."
  },
  {
    id: "sturdy-shoes",
    category: "packing",
    text: "Sturdy walking shoes",
    detail:
      "Delphi's site paths are uneven ancient stone; Ano Poli in Thessaloniki is a steep climb."
  },
  {
    id: "reef-sunscreen",
    category: "packing",
    text: "High-SPF reef-safe sunscreen + sun hats",
    detail: "Delphi and Thermopylae have very little shade in August."
  },
  {
    id: "first-aid",
    category: "packing",
    text: "Mini first-aid kit",
    detail: "Plasters, antiseptic, kids' paracetamol, antihistamine, anti-diarrheal."
  },
  {
    id: "swim-towels",
    category: "packing",
    text: "Quick-dry microfibre towels",
    detail: "For rafting and Waterland — hotel towels won't travel with you."
  },
  {
    id: "reusable-bottles",
    category: "packing",
    text: "Reusable water bottles",
    detail:
      "Refill often on the Delphi site and Thermopylae stop — very little shade."
  },
  {
    id: "power-adapter",
    category: "packing",
    text: "EU power adapters + multi-port USB charger",
    detail: "Greek sockets are type F, same as most of continental Europe."
  },
  {
    id: "kids-snacks",
    category: "packing",
    text: "Kids' snack stash",
    detail:
      "First night's arrival in Delphi is in the evening after a long drive — no time for proper shopping."
  },
  {
    id: "cash-tolls",
    category: "packing",
    text: "Cash or a card for motorway tolls",
    detail:
      "GR-8A/E75 and the routes near Thessaloniki/Nafplio have toll booths."
  },

  /* ---------------- Pre-trip logistics ---------------- */
  {
    id: "passport-check",
    category: "logistics",
    text: "Check passport validity for all 4 travelers",
    detail:
      "Most of Europe wants 3+ months validity beyond the return date — worth a 2-minute check now.",
    dueBy: "2026-08-01"
  },
  {
    id: "travel-insurance",
    category: "logistics",
    text: "Travel insurance — family of 4, 15–23 Aug",
    detail:
      "Make sure the policy covers the activity days: whitewater rafting and horse riding are sometimes excluded or need an add-on — check before buying.",
    dueBy: "2026-08-10"
  },
  {
    id: "home-care",
    category: "logistics",
    text: "Arrange home / pet / plant care for the away dates",
    detail: "Covers the full stretch you're away, back-to-back with the days before.",
    dueBy: "2026-08-08"
  },
  {
    id: "esim",
    category: "logistics",
    text: "Sort out a Greek/EU eSIM (phone plan)",
    detail:
      "Airalo / Holafly / Nomad — activate at the airport before you lose wifi. One eSIM on the main phone is usually enough for offline maps + hotspot.",
    dueBy: "2026-08-14"
  },
  {
    id: "notify-bank",
    category: "logistics",
    text: "Notify your credit card / bank of the travel dates",
    detail:
      "Avoids a card freeze mid-trip, especially for the car-rental deposit.",
    dueBy: "2026-08-14"
  },
  {
    id: "offline-maps",
    category: "logistics",
    text: "Download offline Google Maps for central Greece",
    detail: "Delphi–Plastiras and Plastiras–Meteora mountain roads lose signal.",
    dueBy: "2026-08-14"
  }
];

/** Chip order + which categories actually render (a category with no items
 *  is skipped by the UI). */
export const CHECKLIST_CATEGORY_ORDER: ChecklistCategory[] = [
  "hotels",
  "restaurants",
  "attractions",
  "car",
  "packing",
  "logistics"
];

export const checklistByCategory = (category: ChecklistCategory) =>
  checklist.filter(i => i.category === category);
