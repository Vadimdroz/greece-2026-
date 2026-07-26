/**
 * The trip's route topology, kept separate from exact stay picks so
 * that resolving a pending double-booking (see `Stay.routeStatus`) is
 * a one-line edit here, not a rewrite of the map component.
 *
 * `ROUTE_ANCHORS` is the numbered sequence of stops (Athens Airport,
 * then each "primary" stay in order — see MapView for how the loop's
 * return leg reuses anchor 1 instead of minting a redundant final
 * number). `ROUTE_TRANSITIONS` are the drives between consecutive
 * anchors; `bend` is a purely cosmetic waypoint or two so the line
 * follows the mountain roads instead of cutting a straight line — it
 * has no bearing on which stay is "the" stop, only `ROUTE_ANCHORS` does.
 */

export interface RouteAnchor {
  /** `Stay.id`, or `"ath"` for Athens Airport. */
  poiId: string;
  order: number;
}

export interface RouteTransition {
  id: string;
  from: string;
  to: string;
  bend?: [number, number][];
}

export const ROUTE_ANCHORS: RouteAnchor[] = [
  { poiId: "ath", order: 1 },
  { poiId: "stay-delphi-acropole", order: 2 },
  { poiId: "stay-plastiras", order: 3 },
  { poiId: "stay-pelion", order: 4 },
  { poiId: "stay-thessaloniki-shotel", order: 5 },
  { poiId: "stay-kamena-vourla", order: 6 },
  { poiId: "stay-nafplio", order: 7 }
];

export const ROUTE_TRANSITIONS: RouteTransition[] = [
  { id: "t1", from: "ath", to: "stay-delphi-acropole", bend: [[38.1, 23.2]] },
  // Bends route through Thermopylae's own coords — the family drives
  // there and back on the way to Plastiras (see itinerary Day 3).
  { id: "t2", from: "stay-delphi-acropole", to: "stay-plastiras", bend: [[38.7967, 22.5361]] },
  // Bends through Meteora's coords, the viewpoint stop en route to Pelion.
  { id: "t3", from: "stay-plastiras", to: "stay-pelion", bend: [[39.7217, 21.6306]] },
  // Bends through Agios Ioannis / the boat-trip departure point.
  { id: "t4", from: "stay-pelion", to: "stay-thessaloniki-shotel", bend: [[39.3608, 23.2242]] },
  // Bends through Waterland, visited on the way to Kamena Vourla.
  { id: "t5", from: "stay-thessaloniki-shotel", to: "stay-kamena-vourla", bend: [[40.4667, 22.9333]] },
  { id: "t6", from: "stay-kamena-vourla", to: "stay-nafplio" },
  { id: "t7", from: "stay-nafplio", to: "ath" }
];
