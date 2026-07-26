import { createContext, useContext } from "react";

export type PlayerState = "idle" | "loading" | "playing" | "paused" | "error";

export interface Track {
  /** Primary audio URL — also the track's identity (two buttons pointing
   *  at the same URL are "the same track" for toggle/isActive purposes). */
  url: string;
  /** Tried once if `url` fails (e.g. missing Hebrew clip falls back to English). */
  fallbackUrl?: string | null;
  /** Shown in the persistent now-playing bar. */
  title: string;
}

export interface AudioPlayerContextValue {
  track: Track | null;
  state: PlayerState;
  currentTime: number;
  duration: number;
  /** Start (or restart) a track. */
  play: (track: Track) => void;
  /** Play if idle/different track; pause if it's the currently-playing track; resume if paused. */
  toggle: (track: Track) => void;
  seek: (time: number) => void;
  skip: (deltaSeconds: number) => void;
  /** Stop and hide the now-playing bar. */
  close: () => void;
  isActive: (url: string) => boolean;
}

export const AudioPlayerContext = createContext<AudioPlayerContextValue | null>(null);

export function useAudioPlayer() {
  const ctx = useContext(AudioPlayerContext);
  if (!ctx) throw new Error("useAudioPlayer must be used within AudioPlayerProvider");
  return ctx;
}
