import { createContext, useContext } from "react";
import type { Booking, BookingsData } from "./bookingsTypes";

/**
 * Which itinerary days have a booking. Kept UNencrypted on purpose so day
 * cards can show a "tickets booked" hint before the PIN is entered — this
 * leaks only *that a day has a ticket*, never any booking detail. Keep in
 * sync with the encrypted packet's dayNumbers.
 */
export const BOOKED_DAY_NUMBERS = new Set<number>([1, 3, 5, 6, 7, 8, 9]);

export interface BookingsCtx {
  /** Decrypted packet, or null while still locked. */
  data: BookingsData | null;
  /** Try a PIN; on success stores it (per device) and reveals the data. */
  unlock: (pin: string) => Promise<boolean>;
}

export const Ctx = createContext<BookingsCtx>({
  data: null,
  unlock: async () => false
});

export function useBookings(): BookingsCtx {
  return useContext(Ctx);
}

/** Decrypted bookings for one itinerary day (empty while locked). */
export function useBookingsForDay(dayNumber: number): Booking[] {
  const { data } = useBookings();
  if (!data) return [];
  return data.activities.filter(b => b.dayNumber === dayNumber);
}
