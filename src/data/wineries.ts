import type { Winery } from "./types";

/** Nemea is Greece's best-known red-wine region (Agiorgitiko grape),
 *  a short detour from Nafplio via Argos. Not on the core itinerary —
 *  an optional stop if the last morning allows, or a bottle to pick
 *  up in Nafplio's old town instead of visiting in person. */
export const wineries: Winery[] = [
  {
    id: "win-skouras",
    name: "Domaine Skouras",
    region: "south",
    appellation: "Nemea PDO",
    description:
      "One of the most respected estates in Nemea, making structured Agiorgitiko reds alongside a well-known Moschofilero white (Zoe). Modern winery with a tasting room; roughly 40 minutes from Nafplio via Argos.",
    website: "https://www.skouras.gr/",
    address: "Argos-Sternas, Malandreni, 21200 Argos, Greece",
    coords: [37.5828, 22.7561],
    bookingNote: "Email or call ahead for a tasting — small operation, not a drop-in tour bus stop."
  },
  {
    id: "win-semeli",
    name: "Semeli Estate",
    region: "south",
    appellation: "Nemea PDO",
    description:
      "A well-regarded Nemea producer with an approachable tasting room and vineyard views — a good option if the last morning in Nafplio has an hour to spare instead of a full detour.",
    website: "https://www.semeliwines.gr/",
    address: "Nemea, 20500, Greece",
    coords: [37.8175, 22.6600],
    bookingNote: "Book a tasting slot ahead — this is an optional add-on, not on the core plan."
  }
];
