import { useEffect, useImperativeHandle, useMemo, useRef, useState, forwardRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";
import L from "leaflet";
import { Home, Star, Utensils, ShoppingCart, Fuel, Plane, ExternalLink, Maximize2, Locate, X, Grape } from "lucide-react";
import { attractions } from "../data/attractions";
import { stays } from "../data/stays";
import { services } from "../data/services";
import { wineries } from "../data/wineries";
import { ROUTE_ANCHORS, ROUTE_TRANSITIONS } from "../data/route";
import type { POI, Category } from "../data/types";
import Section from "./Section";
import NavigateLinks from "./NavigateLinks";
import { useT, type DictKey } from "../lib/dict";
import { useLang } from "../lib/i18n";
import { useLocalizePoi, useLocalizeWinery } from "../data/i18n";

delete (L.Icon.Default.prototype as unknown as { _getIconUrl: unknown })._getIconUrl;

interface CategoryConfig {
  id: Category;
  labelKey: DictKey;
  color: string;
  bg: string;
  Icon: typeof Home;
}

/* "Tuscan terra & sea" palette — earth tones throughout with one
   calmed dusk-blue accent for the airport. Designed to sit on top of
   the Stamen Watercolor base without clashing. */
const CATEGORY_CONFIG: Record<Category, CategoryConfig> = {
  stay:        { id: "stay",        labelKey: "cat_stay",        color: "#A23E2A", bg: "#A23E2A", Icon: Home },         // warm brick
  attraction:  { id: "attraction",  labelKey: "cat_attraction",  color: "#C68A2A", bg: "#C68A2A", Icon: Star },         // burnished bronze
  restaurant:  { id: "restaurant",  labelKey: "cat_restaurant",  color: "#5C7244", bg: "#5C7244", Icon: Utensils },     // cypress green
  supermarket: { id: "supermarket", labelKey: "cat_supermarket", color: "#587A8E", bg: "#587A8E", Icon: ShoppingCart }, // soft slate
  gas:         { id: "gas",         labelKey: "cat_gas",         color: "#8B6F4A", bg: "#8B6F4A", Icon: Fuel },         // caramel sienna
  airport:     { id: "airport",     labelKey: "cat_airport",     color: "#3D4F65", bg: "#3D4F65", Icon: Plane },        // twilight indigo
  hospital:    { id: "hospital",    labelKey: "cat_hospital",    color: "#8C2E25", bg: "#8C2E25", Icon: Plane },        // deep oxblood
  winery:      { id: "winery",      labelKey: "cat_winery",      color: "#7A2E3F", bg: "#7A2E3F", Icon: Grape }         // deep burgundy
};

/* Route styling — two colors only, per the map's "the number carries
   the progression" design: brick for the thick between-stays drives,
   olive for the thin day-trip out-and-backs. En-route pass-through
   stops (Thermopylae, Meteora, Waterland) get their own small muted
   marker, distinct from both numbered stops and day-trip pins. */
const TRANSITION_COLOR = "#A23E2A";
const DAYTRIP_COLOR = "#5C7244";
const ENROUTE_COLOR = "#8B6F4A";

/* Category chips shown in the secondary-layers row — restaurants,
   wineries, supermarkets, gas. Stays/attractions/airport aren't part
   of this toggle any more: stays+airport are always the numbered
   route, attractions are revealed contextually. */
const SECONDARY_CATS: Category[] = ["restaurant", "winery", "supermarket", "gas"];

function shade(hex: string, percent: number): string {
  const num = parseInt(hex.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const R = Math.max(0, Math.min(255, (num >> 16) + amt));
  const G = Math.max(0, Math.min(255, ((num >> 8) & 0xff) + amt));
  const B = Math.max(0, Math.min(255, (num & 0xff) + amt));
  return "#" + (0x1000000 + (R << 16) + (G << 8) + B).toString(16).slice(1);
}

function makeIcon(cat: Category, isHero = false): L.DivIcon {
  const cfg = CATEGORY_CONFIG[cat];
  const size = isHero ? 38 : 30;
  const html = `
    <div style="
      position:relative;
      width:${size}px;height:${size}px;
    ">
      <div style="
        position:absolute;inset:0;
        border-radius:50% 50% 50% 0;
        transform:rotate(-45deg);
        background:linear-gradient(135deg, ${cfg.bg} 0%, ${shade(cfg.bg, -15)} 100%);
        border:2px solid #FBF7EC;
        box-shadow:0 6px 14px rgba(42,31,26,0.4);
        display:flex;align-items:center;justify-content:center;
      ">
        <div style="transform:rotate(45deg);color:#FBF7EC;font-size:${isHero ? 16 : 13}px;line-height:1;font-weight:700;">
          ${categoryGlyph(cat)}
        </div>
      </div>
      ${isHero ? `<div style="position:absolute;top:-6px;right:-6px;width:14px;height:14px;border-radius:50%;background:#FBF7EC;border:2px solid #C45A3D;box-shadow:0 2px 4px rgba(0,0,0,0.2);"></div>` : ""}
    </div>`;
  return L.divIcon({
    html,
    className: "tuscany-marker",
    iconSize: [size, size],
    iconAnchor: [size / 2, size - 2],
    popupAnchor: [0, -size + 4]
  });
}

/* Numbered route-stop pin (Athens Airport + each primary stay). One
   consistent color throughout — the number carries the "which stop is
   this" information, not the color, per the redesign brief. */
function makeStopIcon(n: number, isSelected: boolean): L.DivIcon {
  const size = 40;
  const color = TRANSITION_COLOR;
  return L.divIcon({
    html: `
      <div style="position:relative;width:${size}px;height:${size}px;">
        <div style="
          position:absolute;inset:0;
          border-radius:50% 50% 50% 0;
          transform:rotate(-45deg);
          background:linear-gradient(135deg, ${color} 0%, ${shade(color, -15)} 100%);
          border:${isSelected ? 3 : 2}px solid #FBF7EC;
          box-shadow:0 6px 16px rgba(42,31,26,0.45)${isSelected ? ", 0 0 0 3px rgba(162,62,42,0.35)" : ""};
          display:flex;align-items:center;justify-content:center;
        ">
          <div style="transform:rotate(45deg);color:#FBF7EC;font-weight:700;font-size:15px;line-height:1;">${n}</div>
        </div>
      </div>`,
    className: "tuscany-marker",
    iconSize: [size, size],
    iconAnchor: [size / 2, size - 2],
    popupAnchor: [0, -size + 4]
  });
}

/* Small unnumbered marker shared by en-route stops and day-trip
   attractions — a plain dot, colored per context, no house/star glyph
   so it reads as secondary to the numbered stops. */
function makeSmallDotIcon(color: string): L.DivIcon {
  const size = 16;
  return L.divIcon({
    html: `
      <div style="
        width:${size}px;height:${size}px;border-radius:50%;
        background:${color};
        border:2px solid #FBF7EC;
        box-shadow:0 3px 8px rgba(42,31,26,0.4);
      "></div>`,
    className: "tuscany-marker",
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2]
  });
}

/* Generous bounding box for "is the device currently in Greece?".
   Covers the whole country (not just the mainland route) and a safety
   margin so we don't accidentally reject a user near the border. */
const GREECE_BBOX = { south: 34.5, north: 41.8, west: 19.0, east: 29.7 };

function isInGreece(lat: number, lon: number): boolean {
  return (
    lat >= GREECE_BBOX.south &&
    lat <= GREECE_BBOX.north &&
    lon >= GREECE_BBOX.west &&
    lon <= GREECE_BBOX.east
  );
}

/* "You are here" marker — Apple-Maps-style blue dot with a soft pulsing
   ring. The keyframes live in index.css. */
function makeUserLocationIcon(): L.DivIcon {
  const html = `
    <div style="position:relative;width:18px;height:18px;">
      <div style="
        position:absolute;
        top:50%;left:50%;
        width:18px;height:18px;
        margin:-9px 0 0 -9px;
        border-radius:50%;
        background:rgba(58,124,235,0.35);
        animation:user-location-pulse 2.2s ease-out infinite;
        pointer-events:none;
      "></div>
      <div style="
        position:absolute;inset:0;
        border-radius:50%;
        background:#3A7CEB;
        border:3px solid #FBF7EC;
        box-shadow:0 2px 6px rgba(0,0,0,0.3);
      "></div>
    </div>`;
  return L.divIcon({
    html,
    className: "tuscany-user-marker",
    iconSize: [18, 18],
    iconAnchor: [9, 9],
    popupAnchor: [0, -10]
  });
}

function categoryGlyph(cat: Category): string {
  switch (cat) {
    case "stay": return "&#8962;";
    case "attraction": return "&#9733;";
    case "restaurant": return "&#127860;";
    case "supermarket": return "&#128722;";
    case "gas": return "&#9981;";
    case "airport": return "&#9992;";
    case "winery": return "&#127815;"; // grapes
    default: return "&#9679;";
  }
}

const AIRPORT_POI: POI = {
  id: "ath",
  name: "Athens International Airport — ATH",
  category: "airport",
  region: "transit",
  description: "Eleftherios Venizelos International Airport. Arrival 15 Aug 13:00, departure 23 Aug.",
  shortDescription: "Arrival & departure airport.",
  coords: [37.9364, 23.9445]
};

const AIRPORT_POI_HE: POI = {
  ...AIRPORT_POI,
  name: "שדה התעופה הבינלאומי של אתונה — ATH",
  description: "נמל התעופה הבינלאומי אלפתריוס וניזלוס. נחיתה ב-15.8 בשעה 13:00, המראה ב-23.8.",
  shortDescription: "שדה התעופה — נחיתה והמראה."
};

interface FlyHandle {
  flyToId: (id: string) => void;
  fitAll: () => void;
  flyToCoords: (coords: [number, number], zoom?: number) => void;
}

const MapController = forwardRef<
  FlyHandle,
  { pois: POI[]; markersRef: React.MutableRefObject<Record<string, L.Marker | null>> }
>(function MapController({ pois, markersRef }, ref) {
  const map = useMap();
  useImperativeHandle(
    ref,
    () => ({
      flyToId: (id: string) => {
        const poi = pois.find(p => p.id === id);
        if (!poi) return;
        map.flyTo(poi.coords, Math.max(map.getZoom(), 12), { duration: 1.0 });
        const m = markersRef.current[id];
        if (m) {
          setTimeout(() => m.openPopup(), 700);
        }
      },
      fitAll: () => {
        if (pois.length === 0) return;
        const bounds = L.latLngBounds(pois.map(p => p.coords));
        map.flyToBounds(bounds, { padding: [40, 40], duration: 1.1, maxZoom: 11 });
      },
      flyToCoords: (coords, zoom = 12) => {
        map.flyTo(coords, Math.max(map.getZoom(), zoom), { duration: 1.0 });
      }
    }),
    [map, pois, markersRef]
  );
  return null;
});

interface Props {
  registerFocus: (fn: (id: string) => void) => void;
}

export default function MapView({ registerFocus }: Props) {
  const t = useT();
  const { lang } = useLang();
  const localizePoi = useLocalizePoi();
  const localizeWinery = useLocalizeWinery();

  /* Wineries live in their own data file (not as POIs) — project the
     ones with coords onto the map under category "winery". The
     appellation doubles as the popup short-description. We localize
     here (rather than via localizePoi) since wineries have their own
     translation dictionary. */
  const wineryPOIs: POI[] = useMemo(
    () =>
      wineries
        .filter(w => w.coords)
        .map(raw => {
          const w = localizeWinery(raw);
          return {
            id: w.id,
            name: w.name,
            category: "winery" as const,
            region: w.region,
            description: w.description,
            shortDescription: w.appellation,
            image: w.image,
            imageCredit: w.imageCredit,
            website: w.website,
            address: w.address,
            coords: w.coords as [number, number]
          };
        }),
    [localizeWinery]
  );

  const allPOIs: POI[] = useMemo(
    () => [...stays, ...attractions, ...services, ...wineryPOIs, AIRPORT_POI],
    [wineryPOIs]
  );
  const localizedPOIs = useMemo(
    () =>
      allPOIs.map(p => {
        if (p.id === "ath") return lang === "he" ? AIRPORT_POI_HE : p;
        return localizePoi(p);
      }),
    [allPOIs, localizePoi, lang]
  );
  const poiById = useMemo(() => {
    const map = new Map<string, POI>();
    for (const p of localizedPOIs) map.set(p.id, p);
    return map;
  }, [localizedPOIs]);

  // Secondary layers — restaurants/supermarkets/gas/wineries. Off by
  // default so the default view is the route, undistracted. Stays,
  // attractions and the airport aren't part of this toggle set any
  // more: stays+airport are always the numbered route, attractions are
  // revealed contextually (day-trip on stop click, en-route always on).
  const [activeCats, setActiveCats] = useState<Set<Category>>(new Set<Category>());
  const [selectedStayId, setSelectedStayId] = useState<string | null>(null);

  // Geolocation: live "you are here" dot. We use watchPosition so the
  // marker stays current as we drive around during the trip; centering
  // the map on it only happens the first time we detect we're inside
  // Greece (so the pre-trip view doesn't snap the map away unexpectedly).
  const [userLocation, setUserLocation] = useState<[number, number] | null>(
    null
  );
  const [geolocBlocked, setGeolocBlocked] = useState(false);
  const userIcon = useMemo(() => makeUserLocationIcon(), []);
  const hasAutoCentered = useRef(false);

  useEffect(() => {
    if (typeof navigator === "undefined" || !navigator.geolocation) return;
    const watchId = navigator.geolocation.watchPosition(
      pos => {
        const coords: [number, number] = [
          pos.coords.latitude,
          pos.coords.longitude
        ];
        setUserLocation(coords);
        setGeolocBlocked(false);
        if (!hasAutoCentered.current && isInGreece(coords[0], coords[1])) {
          hasAutoCentered.current = true;
          // Small delay so the map has finished its initial render and
          // isn't fighting our flyTo with its own center transition.
          setTimeout(() => flyRef.current?.flyToCoords(coords, 11), 350);
        }
      },
      err => {
        // Permission denied / unavailable / timeout — silently ignore;
        // the map still works, the user-location dot just won't show.
        if (err.code === err.PERMISSION_DENIED) setGeolocBlocked(true);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 30000 }
    );
    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  const handleLocateClick = () => {
    if (typeof navigator === "undefined" || !navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      pos => {
        const coords: [number, number] = [
          pos.coords.latitude,
          pos.coords.longitude
        ];
        setUserLocation(coords);
        setGeolocBlocked(false);
        // Manual button still respects the "only auto-centre in Greece"
        // rule — clicking it before the trip would otherwise zoom out
        // of the trip area, which isn't useful pre-trip.
        if (isInGreece(coords[0], coords[1])) {
          flyRef.current?.flyToCoords(coords, 13);
        }
      },
      err => {
        if (err.code === err.PERMISSION_DENIED) setGeolocBlocked(true);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
    );
  };

  // The numbered route stops — Athens Airport + each "primary" stay,
  // resolved from route.ts so a future routeStatus swap is a one-line
  // data edit, not a component change.
  const routeStops = useMemo(
    () =>
      ROUTE_ANCHORS.map(a => ({ ...a, poi: poiById.get(a.poiId) }))
        .filter((a): a is typeof a & { poi: POI } => !!a.poi),
    [poiById]
  );

  // Transition lines between consecutive stops, resolved to actual
  // stop coordinates (only the cosmetic mid-route bend is hardcoded).
  const transitions = useMemo(
    () =>
      ROUTE_TRANSITIONS.map(seg => {
        const from = poiById.get(seg.from);
        const to = poiById.get(seg.to);
        if (!from || !to) return null;
        return {
          id: seg.id,
          to,
          positions: [from.coords, ...(seg.bend ?? []), to.coords] as [number, number][]
        };
      }).filter((s): s is NonNullable<typeof s> => !!s),
    [poiById]
  );

  // En-route attractions (Meteora, Waterland, Thermopylae) — always
  // visible, unnumbered, sitting on their transition's line.
  const enRouteAttractions = useMemo(
    () => localizedPOIs.filter(p => p.category === "attraction" && p.enRouteBetween),
    [localizedPOIs]
  );

  // Day-trip attractions for the currently-selected stop only — this
  // is the fix for the Lake Plastiras bug: each attraction now points
  // at its real base stay, not a crude north/south region guess.
  const dayTripAttractions = useMemo(
    () =>
      selectedStayId
        ? localizedPOIs.filter(p => p.category === "attraction" && p.dayTripFrom === selectedStayId)
        : [],
    [localizedPOIs, selectedStayId]
  );

  const markersRef = useRef<Record<string, L.Marker | null>>({});
  const flyRef = useRef<FlyHandle>(null);

  useEffect(() => {
    registerFocus((id: string) => {
      const poi = allPOIs.find(p => p.id === id);
      if (poi && SECONDARY_CATS.includes(poi.category) && !activeCats.has(poi.category)) {
        setActiveCats(prev => new Set(prev).add(poi.category));
      }
      // Attractions hidden behind a stay selection need that stay
      // selected first so their marker/line actually exist to fly to.
      if (poi?.category === "attraction" && poi.dayTripFrom) {
        setSelectedStayId(poi.dayTripFrom);
      }
      setTimeout(() => {
        flyRef.current?.flyToId(id);
        const el = document.getElementById("map");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    });
  }, [registerFocus, allPOIs, activeCats]);

  const visibleSecondary = localizedPOIs.filter(p => activeCats.has(p.category));

  const toggle = (c: Category) => {
    setActiveCats(prev => {
      const next = new Set(prev);
      if (next.has(c)) next.delete(c);
      else next.add(c);
      return next;
    });
  };

  return (
    <Section
      id="map"
      eyebrow={t("map_eyebrow")}
      title={t("map_title")}
      kicker={t("map_kicker")}
      intro={t("map_intro")}
    >
      <div className="-mx-4 sm:mx-0 px-4 sm:px-0 overflow-x-auto scrollbar-hide mb-3">
        <div className="flex gap-2 min-w-max sm:min-w-0 sm:flex-wrap">
          {SECONDARY_CATS.map(
            c => {
              const cfg = CATEGORY_CONFIG[c];
              const on = activeCats.has(c);
              const Icon = cfg.Icon;
              return (
                <button
                  key={c}
                  onClick={() => toggle(c)}
                  className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-medium transition-all whitespace-nowrap min-h-9 ${
                    on
                      ? "text-cream-50 shadow-sm"
                      : "bg-cream-50 text-ink-700 border-cream-300 opacity-60 hover:opacity-100 active:opacity-100"
                  }`}
                  style={
                    on ? { backgroundColor: cfg.color, borderColor: cfg.color } : undefined
                  }
                >
                  <Icon size={13} />
                  {t(cfg.labelKey)}
                  <span
                    className={`text-[10px] ${
                      on ? "text-cream-200" : "text-ink-700/60"
                    }`}
                  >
                    {allPOIs.filter(p => p.category === c).length}
                  </span>
                </button>
              );
            }
          )}
        </div>
      </div>

      {/* Legend + selection state */}
      <div className="flex items-center justify-between gap-3 mb-3 px-1 flex-wrap">
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
          <span className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] font-medium text-ink-800">
            <span className="block w-6 h-[3px] rounded-full" style={{ background: `repeating-linear-gradient(90deg, ${TRANSITION_COLOR} 0 5px, transparent 5px 9px)` }} />
            {t("map_legend_between")}
          </span>
          <span className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] font-medium text-ink-800">
            <span className="block w-6 h-[2px] rounded-full" style={{ background: `repeating-linear-gradient(90deg, ${DAYTRIP_COLOR} 0 3px, transparent 3px 6px)` }} />
            {t("map_legend_daytrip")}
          </span>
        </div>
        {selectedStayId ? (
          <button
            onClick={() => setSelectedStayId(null)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] uppercase tracking-[0.16em] font-medium transition-colors min-h-9 text-cream-50"
            style={{ backgroundColor: DAYTRIP_COLOR }}
          >
            <X size={12} /> {t("map_clear_selection")}
          </button>
        ) : (
          <span className="text-[11px] text-ink-700/60 italic">{t("map_tap_hint")}</span>
        )}
      </div>

      <div className="relative card-paper overflow-hidden -mx-4 sm:mx-0 rounded-none sm:rounded-2xl">
        <MapContainer
          center={[39.0, 22.6]}
          zoom={7}
          scrollWheelZoom={true}
          className="h-[70svh] sm:h-[600px] w-full"
        >
          {/* CartoDB Voyager — warm, editorial off-cream tiles that pair
              nicely with the Tuscan palette. Free for low-traffic personal
              use, no API key required. */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            subdomains="abcd"
            maxZoom={20}
          />
          <MapController pois={allPOIs} markersRef={markersRef} ref={flyRef} />

          {/* Transition lines — thick, always on, one per leg between
              consecutive numbered stops. Clicking anywhere on the line
              pops up directions to that leg's destination stop. */}
          {transitions.map(seg => (
            <Polyline
              key={seg.id}
              positions={seg.positions}
              pathOptions={{
                color: TRANSITION_COLOR,
                weight: 5,
                opacity: 0.85,
                dashArray: "12 9",
                lineCap: "round",
                lineJoin: "round"
              }}
            >
              <Popup>
                <div className="font-sans p-1">
                  <div className="font-serif text-sm text-ink-900 leading-tight mb-1.5">
                    {seg.to.name}
                  </div>
                  <NavigateLinks name={seg.to.name} coords={seg.to.coords} address={seg.to.address} size={11} />
                </div>
              </Popup>
            </Polyline>
          ))}

          {/* Day-trip lines — thin, only for the selected stop's
              attractions, resolved from real dayTripFrom links (this is
              the fix for the Lake Plastiras / Kazarma Hotel bug: each
              attraction now points at its actual base stay). Clicking
              the line, like the thick transitions, pops up directions —
              here to the attraction, since that's the "destination" of
              a day trip. */}
          {selectedStayId &&
            dayTripAttractions.map(a => {
              const base = poiById.get(selectedStayId);
              if (!base) return null;
              return (
                <Polyline
                  key={`daytrip-${a.id}`}
                  positions={[base.coords, a.coords]}
                  pathOptions={{
                    color: DAYTRIP_COLOR,
                    weight: 2,
                    opacity: 0.75,
                    dashArray: "3 6",
                    lineCap: "round"
                  }}
                >
                  <Popup>
                    <div className="font-sans p-1">
                      <div className="font-serif text-sm text-ink-900 leading-tight mb-1.5">
                        {a.name}
                      </div>
                      <NavigateLinks name={a.name} coords={a.coords} address={a.address} size={11} />
                    </div>
                  </Popup>
                </Polyline>
              );
            })}

          {/* "You are here" — soft pulsing blue dot. Sits above all
              other markers via Leaflet's default z-index handling. */}
          {userLocation && (
            <Marker position={userLocation} icon={userIcon} keyboard={false}>
              <Popup>
                <div className="font-sans p-2">
                  <div className="font-serif text-base text-ink-900 leading-tight">
                    {t("map_you_here")}
                  </div>
                  <div className="text-[11px] text-ink-700/65 mt-0.5">
                    {userLocation[0].toFixed(4)}, {userLocation[1].toFixed(4)}
                  </div>
                </div>
              </Popup>
            </Marker>
          )}

          {/* En-route attractions — always visible, unnumbered, small
              muted dot on the transition they belong to. */}
          {enRouteAttractions.map(poi => (
            <Marker
              key={poi.id}
              position={poi.coords}
              icon={makeSmallDotIcon(ENROUTE_COLOR)}
              ref={ref => {
                markersRef.current[poi.id] = ref;
              }}
            >
              <Popup>
                <PoiPopupBody poi={poi} t={t} />
              </Popup>
            </Marker>
          ))}

          {/* Day-trip attraction pins — only for the selected stop. */}
          {dayTripAttractions.map(poi => (
            <Marker
              key={poi.id}
              position={poi.coords}
              icon={makeSmallDotIcon(DAYTRIP_COLOR)}
              ref={ref => {
                markersRef.current[poi.id] = ref;
              }}
            >
              <Popup>
                <PoiPopupBody poi={poi} t={t} />
              </Popup>
            </Marker>
          ))}

          {/* Numbered route stops — Athens Airport + each primary stay,
              in travel order. Clicking one opens its own card and
              toggles its day trips on. */}
          {routeStops.map(({ order, poi }) => {
            const isSelected = selectedStayId === poi.id;
            return (
              <Marker
                key={poi.id}
                position={poi.coords}
                icon={makeStopIcon(order, isSelected)}
                eventHandlers={{
                  click: () => {
                    if (poi.category !== "stay") return;
                    setSelectedStayId(cur => (cur === poi.id ? null : poi.id));
                  }
                }}
                ref={ref => {
                  markersRef.current[poi.id] = ref;
                }}
              >
                <Popup>
                  <PoiPopupBody poi={poi} t={t} />
                </Popup>
              </Marker>
            );
          })}

          {/* Secondary layers — restaurants, wineries, supermarkets, gas.
              Off by default; unrelated to the route redesign. */}
          {visibleSecondary.map(poi => (
            <Marker
              key={poi.id}
              position={poi.coords}
              icon={makeIcon(poi.category)}
              ref={ref => {
                markersRef.current[poi.id] = ref;
              }}
            >
              <Popup>
                <PoiPopupBody poi={poi} t={t} />
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        {/* Floating Fit-All button */}
        <button
          type="button"
          onClick={() => flyRef.current?.fitAll()}
          aria-label={t("map_zoom_fit")}
          className="absolute top-3 end-3 z-[400] w-10 h-10 rounded-full bg-cream-50/95 backdrop-blur ring-1 ring-cream-300/70 shadow-md hover:bg-terracotta-500 hover:text-cream-50 hover:ring-terracotta-500 transition flex items-center justify-center text-ink-800"
        >
          <Maximize2 size={16} />
        </button>

        {/* Floating Locate-me button — request / refresh user location.
            Lights up blue once we have a fix; greyed-out (but still
            tappable) if permission was denied so the user can retry. */}
        <button
          type="button"
          onClick={handleLocateClick}
          aria-label={t("map_locate_me")}
          aria-pressed={!!userLocation}
          className={`absolute top-[60px] end-3 z-[400] w-10 h-10 rounded-full backdrop-blur ring-1 shadow-md transition flex items-center justify-center ${
            userLocation
              ? "bg-[#3A7CEB] text-cream-50 ring-[#3A7CEB]/60"
              : geolocBlocked
                ? "bg-cream-50/80 text-ink-700/40 ring-cream-300/70"
                : "bg-cream-50/95 text-ink-800 ring-cream-300/70 hover:bg-[#3A7CEB] hover:text-cream-50 hover:ring-[#3A7CEB]/60"
          }`}
        >
          <Locate size={16} strokeWidth={1.9} />
        </button>
      </div>

    </Section>
  );
}

/* Shared popup body for every marker on the map — cover image, name,
   short description, and Google Maps / Waze deep links (plus website
   when known). Used by numbered stops, en-route stops, day-trip
   attractions, and the secondary-layer pins alike. */
function PoiPopupBody({ poi, t }: { poi: POI; t: ReturnType<typeof useT> }) {
  return (
    <div className="font-sans">
      {poi.image && (
        <div
          className="w-full h-28 bg-cream-200 bg-cover bg-center"
          style={{ backgroundImage: `url(${poi.image})` }}
        />
      )}
      <div className="p-3">
        <div className="font-serif text-base text-ink-900 leading-tight">
          {poi.name}
        </div>
        {poi.shortDescription && (
          <p className="text-xs text-ink-700/85 mt-1 leading-snug">
            {poi.shortDescription}
          </p>
        )}
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
          <NavigateLinks name={poi.name} coords={poi.coords} address={poi.address} size={11} />
          {poi.website && (
            <a
              href={poi.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-olive-600 hover:text-olive-700"
            >
              <ExternalLink size={11} /> {t("website")}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
