import {
  useCallback,
  useEffect,
  useMemo,
  useState
} from "react";
import type { ReactNode } from "react";
import { bookingsCipher } from "../data/bookings.enc";
import { decryptBookings } from "./bookingsCrypto";
import type { BookingsData } from "./bookingsTypes";
import { Ctx } from "./bookingsContext";

const PIN_KEY = "tuscany-unlock-v1";

export function BookingsProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<BookingsData | null>(null);

  // Attempt a remembered PIN so it's a once-per-device prompt.
  useEffect(() => {
    let cancelled = false;
    const stored = localStorage.getItem(PIN_KEY);
    if (!stored) return;
    (async () => {
      const d = await decryptBookings<BookingsData>(bookingsCipher, stored);
      if (d && !cancelled) setData(d);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const unlock = useCallback(async (pin: string) => {
    const d = await decryptBookings<BookingsData>(bookingsCipher, pin.trim());
    if (d) {
      localStorage.setItem(PIN_KEY, pin.trim());
      setData(d);
      return true;
    }
    return false;
  }, []);

  const value = useMemo(() => ({ data, unlock }), [data, unlock]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
