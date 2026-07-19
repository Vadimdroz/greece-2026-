import type { Winery } from "../types";

/** Hebrew overrides for wineries, keyed by id. */
export const wineriesHE: Record<
  string,
  Partial<Pick<Winery, "name" | "description" | "address" | "bookingNote">>
> = {
  "win-skouras": {
    name: "יקב Domaine Skouras",
    description:
      "אחד היקבים המכובדים ביותר בנמאה, מייצר יינות אגיורגיטיקו אדומים ומובנים לצד יין לבן מוסכופילרו מוכר (Zoe). יקב מודרני עם חדר טעימות; כ-40 דקות מנאפפליו דרך ארגוס.",
    address: "Argos-Sternas, Malandreni, 21200 ארגוס, יוון",
    bookingNote: "לתאם טעימה במייל או בטלפון מראש — פעילות קטנה, לא עצירת אוטובוסי תיירים."
  },
  "win-semeli": {
    name: "יקב Semeli Estate",
    description: "יצרן נמאה מוכר עם חדר טעימות נגיש ונוף לכרמים — אופציה טובה אם לבוקר האחרון בנאפפליו יש שעה פנויה במקום סטייה מלאה.",
    address: "נמאה, 20500, יוון",
    bookingNote: "לתאם חלון טעימה מראש — זו תוספת אופציונלית, לא חלק מהתוכנית המרכזית."
  }
};
