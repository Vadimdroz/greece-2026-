import type { Tip } from "./types";

export const tips: Tip[] = [
  {
    id: "child-seats",
    title: "Child seats are mandatory — €350 fine for non-compliance",
    body:
      "Greek law requires an appropriate child seat/booster for anyone under 12 or under 150 cm. Confirm both booster seats are actually in the MG ZS before leaving the Record Go lot at the airport — non-compliance carries a €350 fine if you're stopped.",
    severity: "critical"
  },
  {
    id: "double-bookings",
    title: "Three legs have duplicate hotel bookings — resolve before each cancellation deadline",
    body:
      "Delphi (Amalia vs Acropole, cancel by 12 Aug), Thessaloniki (September vs City Hotel, cancel by 18 Aug), and the last night (Nafplio vs Philia Boutique Hotel Athens, deadlines 7 Aug and 14 Aug respectively) are all double-booked for the same dates. Pick one on each leg and cancel the other before its free-cancellation window closes.",
    severity: "critical"
  },
  {
    id: "rental-insurance",
    title: "Decline Record Go's own insurance at the desk",
    body:
      "Cover is already arranged through Rentalcars.com (Zurich-backed third-party insurance) — decline any insurance upsell Record Go offers at the pickup counter.",
    severity: "warning"
  },
  {
    id: "mountain-roads-offline-maps",
    title: "Download offline maps before the mountain legs",
    body:
      "Signal drops out on the Delphi–Plastiras and Plastiras–Meteora mountain roads. Download the offline Google Maps region for central Greece while you still have wifi at the airport or hotel.",
    severity: "warning"
  },
  {
    id: "august-heat",
    title: "August heat — front-load outdoor sightseeing",
    body:
      "Delphi's site and Thermopylae have very little shade. Start archaeological visits before 10:00 and treat midday (12:00–16:00) as pool/water-park/AC-museum time, especially with the kids.",
    severity: "warning"
  },
  {
    id: "sunday-closures",
    title: "Some shops and services close Sunday or midday",
    body:
      "Smaller-town shops, especially in Delphi and around Lake Plastiras, often close Sundays or take an afternoon break. Stock up on essentials the day before in bigger towns like Karditsa or Thessaloniki.",
    severity: "info"
  },
  {
    id: "tipping-greece",
    title: "Tipping — round up, or 5–10% for a meal you loved",
    body:
      "Greek restaurants don't expect US-style tipping. Rounding up the bill is fine for a casual meal; 5–10% in cash is a generous, well-received tip for a great dinner like Mavri Thalassa.",
    severity: "info"
  },
  {
    id: "toll-roads",
    title: "Tolls on the motorways",
    body:
      "The Athens–Delphi and Thessaloniki–Nafplio route both use tolled motorways (GR-8A/E75, A1). Keep small cash or a card handy at toll booths; most accept both.",
    severity: "info"
  }
];
