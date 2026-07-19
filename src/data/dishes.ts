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
    tryIt: "Mavri Thalassa, Kalamaria",
    image: "./images/grilled-octopus.jpg",
    imageCredit: {
      author: "Gatorfan252525",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:Greek-style_grilled_octopus_with_olive_oil,_lemon,_butter_and_parsley.jpg",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    id: "shrimp-saganaki",
    name: "Shrimp saganaki",
    italianName: "Γαρίδες σαγανάκι",
    region: "south",
    category: "starter",
    description:
      "Whole shrimp baked in a tomato sauce with feta — rich, easy to share, and a strong pick for a shellfish-loving pescatarian.",
    tryIt: "Mavri Thalassa, Kalamaria · most seafood tavernas",
    image: "./images/shrimp-saganaki.jpg",
    imageCredit: {
      author: "C messier",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:%CE%93%CE%B1%CF%81%CE%AF%CE%B4%CE%B5%CF%82_%CF%83%CE%B1%CE%B3%CE%B1%CE%BD%CE%AC%CE%BA%CE%B9_IMG_20230425_212334.jpg",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    id: "mussels-saganaki",
    name: "Mussels saganaki",
    italianName: "Μύδια σαγανάκι",
    region: "greece",
    category: "starter",
    description: "Mussels in a spiced tomato-feta sauce — a classic Greek shellfish starter, found on nearly every taverna menu near the coast.",
    image: "./images/mussels-saganaki.jpg",
    imageCredit: {
      author: "C messier",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:%CE%9C%CF%8D%CE%B4%CE%B9%CE%B1_%CF%83%CE%B1%CE%B3%CE%B1%CE%BD%CE%AC%CE%BA%CE%B9_0801.jpg",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    id: "sea-bass-carpaccio",
    name: "Sea bass carpaccio",
    italianName: "Καρπάτσιο λαβράκι",
    region: "south",
    category: "starter",
    description: "Thin-sliced raw sea bass, citrus and olive oil — one of Mavri Thalassa's most talked-about dishes.",
    image: "./images/sea-bass-carpaccio.jpg",
    imageCredit: {
      author: "Yoruno",
      license: "CC BY 3.0",
      source: "https://commons.wikimedia.org/wiki/File:Carpaccio_Dicentrarchus_labrax.jpg",
      licenseUrl: "https://creativecommons.org/licenses/by/3.0"
    }
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
    tryIt: "Any souvlaki shop in Delphi village, Karditsa, or Thessaloniki",
    image: "./images/souvlaki.jpg",
    imageCredit: {
      author: "Miyagawa",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:Souvlaki_in_Athens.JPG",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    id: "greek-salad",
    name: "Greek salad",
    italianName: "Χωριάτικη σαλάτα",
    region: "greece",
    category: "starter",
    description: "Tomato, cucumber, onion, olives, a block of feta on top — the easiest, most reliable side on every menu.",
    image: "./images/greek-salad.jpg",
    imageCredit: {
      author: "Jpatokal",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:Greece_Food_Horiatiki.JPG",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    id: "moussaka",
    name: "Moussaka",
    italianName: "Μουσακάς",
    region: "greece",
    category: "main",
    description: "Layered eggplant, potato, spiced meat, and béchamel — comforting and filling after a long day of driving or hiking.",
    image: "./images/moussaka.jpg",
    imageCredit: {
      author: "Robert Kindermann (RobertK)",
      license: "CC BY-SA 2.5",
      source: "https://commons.wikimedia.org/wiki/File:MussakasMeMelitsanesKePatates01.JPG",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.5"
    }
  },
  {
    id: "tzatziki",
    name: "Tzatziki",
    italianName: "Τζατζίκι",
    region: "greece",
    category: "starter",
    description: "Strained yogurt, cucumber, garlic — the everyday dip that shows up with almost every taverna order.",
    image: "./images/tzatziki.jpg",
    imageCredit: {
      author: "Nikodem Nijaki",
      license: "CC BY-SA 3.0",
      source: "https://commons.wikimedia.org/wiki/File:Tzatziki_meze_or_appetizer,_also_used_as_a_sauce.jpg",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0"
    }
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
    tryIt: "Lakeside tavernas around Neochori",
    image: "./images/plastiras-trout.jpg",
    imageCredit: {
      author: "Amanbedi1",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:Grilled_trout_fish.jpg",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    id: "plastiras-honey",
    name: "Mountain honey & sideritis tea",
    italianName: "Μέλι & τσάι του βουνού",
    region: "north",
    category: "drink",
    description: "Local mountain honey and sideritis (Greek mountain tea) from the hills above the lake — a gentle, non-alcoholic afternoon pick.",
    image: "./images/plastiras-honey.jpg",
    imageCredit: {
      author: "Unsplash",
      license: "Unsplash License",
      source: "https://unsplash.com/photos/photo-1558642452-9d2a7deb7f62",
      licenseUrl: "https://unsplash.com/license"
    }
  },

  // ============== SWEETS ==============
  {
    id: "loukoumades",
    name: "Loukoumades",
    italianName: "Λουκουμάδες",
    region: "greece",
    category: "dessert",
    description: "Warm fried dough balls drenched in honey syrup and cinnamon — a guaranteed hit with Thomas and Sophia.",
    image: "./images/loukoumades.jpg",
    imageCredit: {
      author: "Flickr user \"avlxyz\"",
      license: "CC BY-SA 2.0",
      source: "https://commons.wikimedia.org/wiki/File:Loukoumades.jpg",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0"
    }
  },
  {
    id: "baklava",
    name: "Baklava",
    italianName: "Μπακλαβάς",
    region: "greece",
    category: "dessert",
    description: "Layered filo, walnuts, and honey syrup — Thessaloniki is particularly known for its version, often with a touch of orange.",
    image: "./images/baklava.jpg",
    imageCredit: {
      author: "Challiyan",
      license: "CC BY-SA 4.0",
      source: "https://commons.wikimedia.org/wiki/File:Baklava_1.jpg",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0"
    }
  }
];
