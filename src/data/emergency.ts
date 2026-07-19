import type { EmergencyGroup } from "./types";

export const emergencyGroups: EmergencyGroup[] = [
  {
    title: "Greece — emergency numbers",
    items: [
      { label: "Single emergency number (EU)", value: "112", type: "phone", detail: "Police, ambulance, fire — English available" },
      { label: "Police", value: "100", type: "phone" },
      { label: "Ambulance (EKAV)", value: "166", type: "phone" },
      { label: "Fire brigade", value: "199", type: "phone" },
      { label: "Tourist police", value: "1571", type: "phone", detail: "English-speaking, tourist-specific help" },
      { label: "Road assistance (ELPA)", value: "10400", type: "phone" }
    ]
  },
  {
    title: "Hospitals — Delphi / Lake Plastiras area",
    items: [
      {
        label: "Amfissa General Hospital",
        value: "Amfissa, 33100, Greece",
        detail: "Closest hospital ER to Delphi, ≈ 30 min",
        type: "address",
        link: "https://www.google.com/maps/dir/?api=1&destination=38.5231,22.3789"
      },
      {
        label: "Karditsa General Hospital",
        value: "Tavropou 24, Karditsa 43100, Greece",
        detail: "Closest hospital ER to Lake Plastiras, ≈ 40 min",
        type: "address",
        link: "https://www.google.com/maps/dir/?api=1&destination=39.3644,21.9231"
      }
    ]
  },
  {
    title: "Hospitals — Thessaloniki / Nafplio area",
    items: [
      {
        label: "Ippokrateio General Hospital — Thessaloniki",
        value: "Konstantinoupoleos 49, Thessaloniki 546 42, Greece",
        detail: "Major hospital with ER, central Thessaloniki",
        type: "address",
        link: "https://www.google.com/maps/dir/?api=1&destination=40.6234,22.9548"
      },
      {
        label: "AHEPA University Hospital — Thessaloniki",
        value: "St. Kiriakidi 1, Thessaloniki 546 21, Greece",
        detail: "Major teaching hospital, full ER incl. pediatric",
        type: "address",
        link: "https://www.google.com/maps/dir/?api=1&destination=40.6296,22.9553"
      },
      {
        label: "Nafplio General Hospital (Asklipieio)",
        value: "Argous Ave, Nafplio 21100, Greece",
        detail: "Closest hospital to old-town Nafplio, ≈ 5 min",
        type: "address",
        link: "https://www.google.com/maps/dir/?api=1&destination=37.5717,22.7975"
      }
    ]
  },
  {
    title: "Pharmacies (24h-rotation)",
    items: [
      {
        label: "Delphi village pharmacy",
        value: "Delphi, 33054, Greece",
        detail: "On the main street; night-shift rotation posted on the door",
        type: "address"
      },
      {
        label: "Thessaloniki pharmacy locator",
        value: "efimeries.gr",
        detail: "Look up the night-shift (open) pharmacy nearest either hotel option",
        type: "website",
        link: "https://www.efimeries.gr/"
      }
    ]
  },
  {
    title: "Israeli embassy & consular help (Athens)",
    items: [
      {
        label: "Embassy of Israel in Athens",
        value: "1 Marathonodromon St, 154 52 Psychiko, Athens",
        type: "address",
        link: "https://www.google.com/maps/dir/?api=1&destination=37.9590,23.7674"
      },
      {
        label: "Embassy phone",
        value: "+30 21 0670 5500",
        type: "phone",
        detail: "Mon–Fri, consular hours"
      },
      {
        label: "Embassy website",
        value: "embassies.gov.il/athens",
        type: "website",
        link: "https://embassies.gov.il/athens"
      }
    ]
  }
];
