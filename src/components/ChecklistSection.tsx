import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ExternalLink,
  AlertCircle,
  CalendarClock,
  MapPin,
  Globe,
  Hotel,
  UtensilsCrossed,
  FerrisWheel,
  Car,
  Luggage,
  ClipboardList
} from "lucide-react";
import {
  checklist,
  checklistByCategory,
  CHECKLIST_CATEGORY_ORDER
} from "../data/checklist";
import Section from "./Section";
import type { ChecklistCategory, ChecklistItem } from "../data/types";
import { useT } from "../lib/dict";
import type { DictKey } from "../lib/dict";
import { useLocalizeChecklistItem } from "../data/i18n";

const STORAGE_KEY = "tuscany-checklist-v1";

/** Items marked done in the data (e.g. already-booked reservations) start
 *  checked. A user toggle is remembered and overrides this default. */
const DEFAULT_DONE: Record<string, boolean> = Object.fromEntries(
  checklist.filter(i => i.done).map(i => [i.id, true])
);

const CATEGORY_META: Record<
  ChecklistCategory,
  { icon: LucideIcon; labelKey: DictKey }
> = {
  hotels: { icon: Hotel, labelKey: "checklist_cat_hotels" },
  restaurants: { icon: UtensilsCrossed, labelKey: "checklist_cat_restaurants" },
  attractions: { icon: FerrisWheel, labelKey: "checklist_cat_attractions" },
  car: { icon: Car, labelKey: "checklist_cat_car" },
  packing: { icon: Luggage, labelKey: "checklist_cat_packing" },
  logistics: { icon: ClipboardList, labelKey: "checklist_cat_logistics" }
};

/** Categories that actually have tasks, in the canonical chip order. */
const ACTIVE_CATEGORIES = CHECKLIST_CATEGORY_ORDER.filter(
  c => checklistByCategory(c).length > 0
);

function itemDone(id: string, checked: Record<string, boolean>): boolean {
  return id in checked ? checked[id] : !!DEFAULT_DONE[id];
}

function loadChecked(): Record<string, boolean> {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

/** Parse an ISO `YYYY-MM-DD` and format it for display in the active
 *  language. Returns null if the date is unparseable. */
function formatDue(iso: string): { label: string; overdue: boolean } | null {
  const d = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(d.getTime())) return null;
  // Compare on date only — a due date is "past" once today is a later day.
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const label = d.toLocaleDateString(undefined, {
    day: "numeric",
    month: "short"
  });
  return { label, overdue: d.getTime() < today.getTime() };
}

function DueDatePill({ dueBy }: { dueBy: string }) {
  const t = useT();
  const due = formatDue(dueBy);
  if (!due) return null;
  return (
    <span
      className={`pill ${
        due.overdue
          ? "bg-red-500/10 text-red-700"
          : "bg-ink-800/[0.06] text-ink-700"
      }`}
    >
      <CalendarClock size={10} />
      {due.overdue
        ? t("checklist_overdue", { date: due.label })
        : t("checklist_due_by", { date: due.label })}
    </span>
  );
}

function ChecklistList({
  items,
  checked,
  onToggle
}: {
  items: ChecklistItem[];
  checked: Record<string, boolean>;
  onToggle: (id: string) => void;
}) {
  const t = useT();
  const localizeChecklistItem = useLocalizeChecklistItem();
  return (
    <ul className="space-y-3">
      {items.map(rawItem => {
        const item = localizeChecklistItem(rawItem);
        const isDone = itemDone(item.id, checked);
        return (
          <li
            key={item.id}
            className={`card-paper p-4 transition-opacity ${isDone ? "opacity-60" : ""}`}
          >
            <div className="flex gap-3 items-start">
              <input
                type="checkbox"
                checked={isDone}
                onChange={() => onToggle(item.id)}
                aria-label={item.text}
                className="mt-1 w-4 h-4 accent-terracotta-500 cursor-pointer shrink-0"
              />
              <div className="flex-1 min-w-0">
                <label className="flex items-start gap-2 flex-wrap cursor-pointer">
                  <span
                    className={`font-medium ${isDone ? "line-through text-ink-700/60" : "text-ink-900"}`}
                    onClick={() => onToggle(item.id)}
                  >
                    {item.text}
                  </span>
                  {item.urgent && !isDone && (
                    <span className="pill pill-terracotta">
                      <AlertCircle size={10} /> {t("checklist_urgent")}
                    </span>
                  )}
                  {item.dueBy && !isDone && <DueDatePill dueBy={item.dueBy} />}
                </label>
                {item.detail && (
                  <p className="text-xs text-ink-700/80 mt-1 leading-relaxed">{item.detail}</p>
                )}
                {(item.mapsUrl || item.website || item.link) && (
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-2">
                    {item.mapsUrl && (
                      <a
                        href={item.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-link"
                      >
                        <MapPin size={11} /> {t("checklist_map")}
                      </a>
                    )}
                    {item.website && (
                      <a
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-link"
                      >
                        <Globe size={11} /> {t("checklist_website")}
                      </a>
                    )}
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-link"
                      >
                        <ExternalLink size={11} /> {t("open_external")}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default function ChecklistSection() {
  const t = useT();
  const [tab, setTab] = useState<ChecklistCategory>(ACTIVE_CATEGORIES[0]);
  const [checked, setChecked] = useState<Record<string, boolean>>(() => loadChecked());

  const toggle = (id: string) => {
    setChecked(prev => {
      const next = { ...prev, [id]: !itemDone(id, prev) };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  };

  const list = checklistByCategory(tab);
  const doneCount = list.filter(i => itemDone(i.id, checked)).length;

  return (
    <Section
      id="checklist"
      eyebrow={t("checklist_eyebrow")}
      title={t("checklist_title")}
      kicker={t("checklist_kicker")}
    >
      <div className="-mx-4 sm:mx-0 px-4 sm:px-0 overflow-x-auto scrollbar-hide mb-2">
        <div className="flex gap-2 min-w-max sm:min-w-0 sm:flex-wrap">
          {ACTIVE_CATEGORIES.map(cat => {
            const { icon: Icon, labelKey } = CATEGORY_META[cat];
            const catItems = checklistByCategory(cat);
            const catDone = catItems.filter(i => itemDone(i.id, checked)).length;
            const active = tab === cat;
            return (
              <button
                key={cat}
                onClick={() => setTab(cat)}
                className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 whitespace-nowrap min-h-11 ${
                  active
                    ? "bg-ink-900 text-cream-50"
                    : "bg-cream-50 border border-cream-300 text-ink-800 hover:border-terracotta-500/40"
                }`}
              >
                <Icon size={14} />
                {t(labelKey)}
                <span className={`text-xs ${active ? "text-cream-200" : "text-ink-700/60"}`}>
                  {catDone}/{catItems.length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mb-6 flex items-center gap-3">
        {/* progress ring */}
        <div className="relative w-10 h-10 shrink-0" aria-hidden>
          <svg viewBox="0 0 36 36" className="w-10 h-10 -rotate-90">
            <circle
              cx="18"
              cy="18"
              r="15.9"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-cream-300/80"
            />
            <circle
              cx="18"
              cy="18"
              r="15.9"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              className="text-terracotta-500 transition-[stroke-dasharray] duration-500"
              strokeDasharray={`${
                list.length === 0 ? 0 : (doneCount / list.length) * 100
              } 100`}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-ink-900">
            {Math.round((doneCount / Math.max(1, list.length)) * 100)}%
          </div>
        </div>
        <div className="text-sm text-ink-700/85">
          {t("checklist_progress", { done: doneCount, total: list.length })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.22 }}
        >
          <ChecklistList items={list} checked={checked} onToggle={toggle} />
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
