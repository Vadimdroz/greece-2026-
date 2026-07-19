import type { EmergencyContact, EmergencyGroup } from "../types";

type EmergencyHEItem = Partial<Pick<EmergencyContact, "label" | "value" | "detail">>;

interface EmergencyHEGroup extends Partial<Pick<EmergencyGroup, "title">> {
  items?: EmergencyHEItem[];
}

/** Indexed by group order (0..n) — items in same order as the English data. */
export const emergencyHE: EmergencyHEGroup[] = [
  {
    title: "יוון — מספרי חירום",
    items: [
      { label: "מספר חירום אחיד (EU)", detail: "משטרה, אמבולנס, כיבוי — אנגלית זמינה" },
      { label: "משטרה" },
      { label: "אמבולנס (EKAV)" },
      { label: "מכבי אש" },
      { label: "משטרת תיירים", detail: "אנגלית זמינה, סיוע ייעודי לתיירים" },
      { label: "סיוע בדרכים (ELPA)" }
    ]
  },
  {
    title: "בתי חולים — אזור דלפי / אגם פלסטירה",
    items: [
      {
        label: "בית החולים הכללי של אמפיסה",
        value: "אמפיסה, 33100, יוון",
        detail: "חדר המיון הקרוב ביותר לדלפי, כ-30 דק'"
      },
      {
        label: "בית החולים הכללי של קרדיצה",
        value: "Tavropou 24, קרדיצה 43100, יוון",
        detail: "חדר המיון הקרוב ביותר לאגם פלסטירה, כ-40 דק'"
      }
    ]
  },
  {
    title: "בתי חולים — אזור תסלוניקי / נאפפליו",
    items: [
      {
        label: "בית החולים הכללי היפוקרטיו — תסלוניקי",
        value: "Konstantinoupoleos 49, תסלוניקי 546 42, יוון",
        detail: "בית חולים מרכזי עם חדר מיון, מרכז תסלוניקי"
      },
      {
        label: "בית החולים האוניברסיטאי AHEPA — תסלוניקי",
        value: "St. Kiriakidi 1, תסלוניקי 546 21, יוון",
        detail: "בית חולים אקדמי גדול, חדר מיון מלא כולל פדיאטרי"
      },
      {
        label: "בית החולים הכללי של נאפפליו (אסקלפיאו)",
        value: "Argous Ave, נאפפליו 21100, יוון",
        detail: "בית החולים הקרוב ביותר לעיר העתיקה של נאפפליו, כ-5 דק'"
      }
    ]
  },
  {
    title: "בתי מרקחת (תורנות 24 שעות)",
    items: [
      {
        label: "בית מרקחת, כפר דלפי",
        value: "דלפי, 33054, יוון",
        detail: "ברחוב הראשי; תורנות לילה מפורסמת על הדלת"
      },
      {
        label: "מאתר בתי מרקחת בתסלוניקי",
        value: "efimeries.gr",
        detail: "לחפש את בית המרקחת התורן הקרוב ביותר לכל אחת מאפשרויות המלון"
      }
    ]
  },
  {
    title: "שגרירות ישראל וסיוע קונסולרי (אתונה)",
    items: [
      {
        label: "שגרירות ישראל באתונה",
        value: "1 Marathonodromon St, 154 52 פסיכיקו, אתונה"
      },
      {
        label: "טלפון השגרירות",
        detail: "א'-ה', שעות קונסולריות"
      },
      {
        label: "אתר השגרירות"
      }
    ]
  }
];
