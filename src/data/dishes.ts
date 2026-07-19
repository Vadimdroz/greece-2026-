import type { Dish } from "./types";

/** Greek dishes worth chasing on this trip, curated toward the family's
 *  actual tastes — plenty of shellfish and fresh fish for Irina, kid-easy
 *  options for Thomas and Sophia, and a couple of Delphi/Plastiras-region
 *  specialties. "greece" = found everywhere we'll be. */
export const dishes: Dish[] = [
  // ============== SEAFOOD — Irina's night in Thessaloniki ==============
  {
    id: "grilled-octopus",
    name: "Grilled octopus",
    italianName: "Χταπόδι σχάρας",
    region: "south",
    category: "main",
    description:
      "Char-grilled octopus, olive oil, lemon, oregano — a Mavri Thalassa signature and one of the best shellfish-adjacent dishes on the trip for Irina.",
    tryIt: "Mavri Thalassa, Kalamaria"
  },
  {
    id: "shrimp-saganaki",
    name: "Shrimp saganaki",
    italianName: "Γαρίδες σαγανάκι",
    region: "south",
    category: "starter",
    description:
      "Whole shrimp baked in a tomato sauce with feta — rich, easy to share, and a strong pick for a shellfish-loving pescatarian.",
    tryIt: "Mavri Thalassa, Kalamaria · most seafood tavernas"
  },
  {
    id: "mussels-saganaki",
    name: "Mussels saganaki",
    italianName: "Μύδια σαγανάκι",
    region: "greece",
    category: "starter",
    description: "Mussels in a spiced tomato-feta sauce — a classic Greek shellfish starter, found on nearly every taverna menu near the coast."
  },
  {
    id: "sea-bass-carpaccio",
    name: "Sea bass carpaccio",
    italianName: "Καρπάτσιο λαβράκι",
    region: "south",
    category: "starter",
    description: "Thin-sliced raw sea bass, citrus and olive oil — one of Mavri Thalassa's most talked-about dishes."
  },

  // ============== EVERYDAY GREEK — kid-friendly ==============
  {
    id: "souvlaki",
    name: "Souvlaki / gyro",
    italianName: "Σουβλάκι / Γύρος",
    region: "greece",
    category: "main",
    description:
      "Grilled skewered meat or a wrapped gyro with fries, tomato, and tzatziki — the reliable, fast, kid-approved option anywhere in Greece, including Vadim's no-fuss lunch pick.",
    tryIt: "Any souvlaki shop in Delphi village, Karditsa, or Thessaloniki"
  },
  {
    id: "greek-salad",
    name: "Greek salad",
    italianName: "Χωριάτικη σαλάτα",
    region: "greece",
    category: "starter",
    description: "Tomato, cucumber, onion, olives, a block of feta on top — the easiest, most reliable side on every menu."
  },
  {
    id: "moussaka",
    name: "Moussaka",
    italianName: "Μουσακάς",
    region: "greece",
    category: "main",
    description: "Layered eggplant, potato, spiced meat, and béchamel — comforting and filling after a long day of driving or hiking."
  },
  {
    id: "tzatziki",
    name: "Tzatziki",
    italianName: "Τζατζίκι",
    region: "greece",
    category: "starter",
    description: "Strained yogurt, cucumber, garlic — the everyday dip that shows up with almost every taverna order."
  },

  // ============== LAKE PLASTIRAS — mountain specialties ==============
  {
    id: "plastiras-trout",
    name: "Lake trout",
    italianName: "Πέστροφα",
    region: "north",
    category: "main",
    description:
      "Farmed trout from the streams feeding Lake Plastiras — a local specialty around Neochori and Kalyvia Pezoulas, usually grilled simply with lemon and herbs.",
    tryIt: "Lakeside tavernas around Neochori"
  },
  {
    id: "plastiras-honey",
    name: "Mountain honey & sideritis tea",
    italianName: "Μέλι & τσάι του βουνού",
    region: "north",
    category: "drink",
    description: "Local mountain honey and sideritis (Greek mountain tea) from the hills above the lake — a gentle, non-alcoholic afternoon pick."
  },

  // ============== SWEETS ==============
  {
    id: "loukoumades",
    name: "Loukoumades",
    italianName: "Λουκουμάδες",
    region: "greece",
    category: "dessert",
    description: "Warm fried dough balls drenched in honey syrup and cinnamon — a guaranteed hit with Thomas and Sophia."
  },
  {
    id: "baklava",
    name: "Baklava",
    italianName: "Μπακλαβάς",
    region: "greece",
    category: "dessert",
    description: "Layered filo, walnuts, and honey syrup — Thessaloniki is particularly known for its version, often with a touch of orange."
  }
];
