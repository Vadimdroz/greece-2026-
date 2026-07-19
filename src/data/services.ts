import type { Service } from "./types";

export const services: Service[] = [
  // ==================== NORTH — Delphi / Lake Plastiras ====================
  {
    id: "rest-taverna-delphi",
    name: "Village taverna, Delphi",
    category: "restaurant",
    region: "north",
    base: "north",
    shortDescription: "Easy taverna dinner with a gorge view",
    description:
      "Delphi village is small and walkable — several tavernas along the main street have terraces looking over the Pleistos gorge. No single reservation needed; walk until a view and a menu look right, and ask for the fresh fish given Irina's pescatarian/shellfish preference.",
    address: "Delphi village, 33054 Delfoi, Greece",
    coords: [38.4820, 22.4990],
    hours: "Lunch & dinner"
  },
  {
    id: "market-delphi",
    name: "Supermarket, Delphi village",
    category: "supermarket",
    region: "north",
    base: "north",
    shortDescription: "Snacks, water, and picnic supplies before the drive",
    description: "Small local market on Delphi's main street — stock up on water and snacks before the long mountain drive to Lake Plastiras.",
    address: "Delphi village, 33054 Delfoi, Greece",
    coords: [38.4822, 22.4988],
    hours: "Daily, standard shop hours"
  },
  {
    id: "gas-karditsa",
    name: "Fuel stop, Karditsa",
    category: "gas",
    region: "north",
    base: "north",
    shortDescription: "Last reliable fuel before the Plastiras mountain roads",
    description: "Fill up in Karditsa on the way to Lake Plastiras — stations thin out once you're up in the mountains.",
    address: "Karditsa, Greece",
    coords: [39.3644, 21.9231]
  },

  // ==================== SOUTH — Thessaloniki / Nafplio ====================
  {
    id: "rest-mavri-thalassa",
    name: "Mavri Thalassa",
    category: "restaurant",
    region: "south",
    base: "south",
    shortDescription: "Priority booking — seafood destination in Kalamaria",
    description:
      "Thessaloniki's best-known seafood restaurant, family-run since 1926, now on the Kalamaria waterfront. Fresh fish, shellfish, and a 300-label wine list — the priority dinner reservation for this trip, and a strong pick for Irina's pescatarian/shellfish preferences.",
    website: "https://mavri-thalassa.gr/en/",
    address: "Nik. Plastira 3, Kalamaria, Thessaloniki 551 32, Greece",
    coords: [40.5794, 22.9497],
    hours: "Tue–Fri 14:00–01:00, Sat–Sun 13:00–01:00, kitchen closes 23:30, closed Mondays",
    bookingNote: "Reserve ahead — especially for a Friday. Online same-day bookings close at 15:00. Phone +30 231 093 2542."
  },
  {
    id: "market-thessaloniki",
    name: "Supermarket, central Thessaloniki",
    category: "supermarket",
    region: "south",
    base: "south",
    shortDescription: "Convenient stop near either Thessaloniki hotel option",
    description: "Central Thessaloniki has supermarkets within walking distance of both the September Hotel and City Hotel options — useful once the hotel decision is made.",
    address: "Central Thessaloniki, Greece",
    coords: [40.6320, 22.9430]
  },
  {
    id: "gas-thermopylae",
    name: "Fuel stop, near Thermopylae",
    category: "gas",
    region: "south",
    base: "south",
    shortDescription: "Convenient stop on the long Thessaloniki → Nafplio drive",
    description: "A natural fuel and coffee break near the Thermopylae monument, roughly the midpoint of the day's long drive south.",
    address: "Near Thermopylae, Fthiotida, Greece",
    coords: [38.7950, 22.5400]
  }
];

export const getService = (id: string) => services.find(s => s.id === id);
