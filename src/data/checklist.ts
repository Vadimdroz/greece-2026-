import type { ChecklistItem } from "./types";

export const bookingChecklist: ChecklistItem[] = [
  {
    id: "book-car",
    text: "Rental car — Record Go, MG ZS (Athens Airport)",
    detail: "Booking #782539337. Pickup Sat 15 Aug 13:00, drop-off Sun 23 Aug 13:00. Third-party insurance via Rentalcars.com/Zurich already arranged — decline Record Go's own insurance at the desk.",
    done: true
  },
  {
    id: "resolve-delphi-hotel",
    text: "Pick one Delphi hotel, cancel the other",
    detail: "Amalia Hotel Delphi (conf. 6091713128, free cancel until 12 Aug) vs. Acropole Delphi City Hotel (conf. 6091715929). Both booked for 15–17 Aug.",
    urgent: true
  },
  {
    id: "resolve-thessaloniki-hotel",
    text: "Pick one Thessaloniki hotel, cancel the other",
    detail: "September Hotel (conf. 5559705389) vs. City Hotel Thessaloniki (conf. 5066676607, booked for 2 adults + 1 child only — check occupancy). Both booked 20–22 Aug, free cancel until 18 Aug.",
    urgent: true
  },
  {
    id: "resolve-last-night",
    text: "Nafplio or Athens for the last night?",
    detail: "Traditional house of 1898, Nafplio (conf. 5347700468, free cancel until 7 Aug) vs. Philia Boutique Hotel, Athens (conf. 5911625902, free cancel until 14 Aug). Both booked for 22–23 Aug.",
    urgent: true
  },
  {
    id: "book-rafting-reconfirm",
    text: "Reconfirm Aliakmonas rafting with Active Nature",
    detail: "Exact meeting time and point for 18 Aug — reconfirm a few days ahead of the trip."
  },
  {
    id: "book-horses-archery",
    text: "Confirm horse riding + archery at Lake Plastiras",
    detail: "Small local operators — confirm availability a day or two ahead, and ask about a lead-rope option for Sophia (5.5)."
  },
  {
    id: "book-mavri-thalassa",
    text: "Reserve Mavri Thalassa (21 Aug dinner)",
    detail: "Kalamaria, Thessaloniki. Reserve by phone (+30 231 093 2542) or online — same-day online bookings close 15:00. Especially important for a Friday.",
    link: "https://mavri-thalassa.gr/en/"
  },
  {
    id: "book-waterland-tickets",
    text: "Waterland Water Park tickets",
    detail: "Check whether buying online ahead is cheaper than at the gate for 20 Aug."
  },
  {
    id: "offline-maps",
    text: "Download offline Google Maps for central Greece",
    detail: "Delphi–Plastiras and Plastiras–Meteora mountain roads lose signal."
  },
  {
    id: "esim",
    text: "Sort out a Greek/EU eSIM",
    detail: "Airalo / Holafly / Nomad — activate at the airport before you lose wifi."
  }
];

export const packingChecklist: ChecklistItem[] = [
  {
    id: "booster-seats",
    text: "Two booster/child seats — confirm they're actually in the car",
    detail: "Mandatory under Greek law for under-12 or under-150cm. €350 fine if missing. Check before leaving the Record Go lot."
  },
  {
    id: "water-shoes",
    text: "Closed-toe water shoes or neoprene booties — for everyone",
    detail: "Aliakmonas rafting and Waterland both call for them over sandals."
  },
  {
    id: "dry-bag",
    text: "Dry bag or waterproof pouch",
    detail: "Phones, wallet, car key for the rafting day — no dry bags mentioned in the Active Nature booking."
  },
  {
    id: "swim-gear",
    text: "Swimsuits + swim goggles per person",
    detail: "Waterland, plus any hotel pool along the way."
  },
  {
    id: "sturdy-shoes",
    text: "Sturdy walking shoes",
    detail: "Delphi's site paths are uneven ancient stone; Ano Poli in Thessaloniki is a steep climb."
  },
  {
    id: "reef-sunscreen",
    text: "High-SPF reef-safe sunscreen + sun hats",
    detail: "Delphi and Thermopylae have very little shade in August."
  },
  {
    id: "first-aid",
    text: "Mini first-aid kit",
    detail: "Plasters, antiseptic, kids' paracetamol, antihistamine, anti-diarrheal."
  },
  {
    id: "swim-towels",
    text: "Quick-dry microfibre towels",
    detail: "For rafting and Waterland — hotel towels won't travel with you."
  },
  {
    id: "reusable-bottles",
    text: "Reusable water bottles",
    detail: "Refill often on the Delphi site and Thermopylae stop — very little shade."
  },
  {
    id: "power-adapter",
    text: "EU power adapters + multi-port USB charger",
    detail: "Greek sockets are type F, same as most of continental Europe."
  },
  {
    id: "kids-snacks",
    text: "Kids' snack stash",
    detail: "First night's arrival in Delphi is in the evening after a long drive — no time for proper shopping."
  },
  {
    id: "cash-tolls",
    text: "Cash or a card for motorway tolls",
    detail: "GR-8A/E75 and the routes near Thessaloniki/Nafplio have toll booths."
  }
];
