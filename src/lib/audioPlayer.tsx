import {
  useCallback,
  useMemo,
  useRef,
  useState,
  type ReactNode
} from "react";
import {
  AudioPlayerContext,
  type AudioPlayerContextValue,
  type PlayerState,
  type Track
} from "./audioPlayerContext";

/** Single shared `<audio>` element for the whole app, held here rather than
 *  in any one component's tree — this is what lets playback survive
 *  navigating between pages (the hash router swaps whole subtrees, which
 *  would otherwise unmount whatever owned the element and kill playback). */
export function AudioPlayerProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fallbackUrlRef = useRef<string | null>(null);
  const fallbackTriedRef = useRef(false);
  const [track, setTrack] = useState<Track | null>(null);
  const [state, setState] = useState<PlayerState>("idle");
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const ensureAudio = useCallback(() => {
    if (audioRef.current) return audioRef.current;
    const a = new Audio();
    a.preload = "metadata";
    a.addEventListener("playing", () => setState("playing"));
    a.addEventListener("pause", () =>
      setState(s => (s === "loading" || s === "idle" ? s : "paused"))
    );
    a.addEventListener("waiting", () =>
      setState(s => (s === "playing" ? "playing" : "loading"))
    );
    a.addEventListener("timeupdate", () => setCurrentTime(a.currentTime));
    a.addEventListener("loadedmetadata", () => setDuration(a.duration || 0));
    a.addEventListener("durationchange", () => setDuration(a.duration || 0));
    a.addEventListener("ended", () => {
      setState("idle");
      setCurrentTime(0);
    });
    a.addEventListener("error", () => {
      if (a.error?.code === MediaError.MEDIA_ERR_ABORTED) return;
      if (!fallbackTriedRef.current && fallbackUrlRef.current) {
        fallbackTriedRef.current = true;
        const fb = fallbackUrlRef.current;
        a.src = fb;
        a.load();
        a.play().catch(() => setState("error"));
        return;
      }
      setState("error");
    });
    audioRef.current = a;
    return a;
  }, []);

  const play = useCallback(
    (t: Track) => {
      const a = ensureAudio();
      fallbackTriedRef.current = false;
      fallbackUrlRef.current = t.fallbackUrl ?? null;
      setTrack(t);
      setCurrentTime(0);
      setDuration(0);
      setState("loading");
      a.src = t.url;
      a.load();
      a.play().catch(() => {
        if (t.fallbackUrl && !fallbackTriedRef.current) {
          fallbackTriedRef.current = true;
          a.src = t.fallbackUrl;
          a.load();
          a.play().catch(() => setState("error"));
        } else {
          setState("error");
        }
      });
    },
    [ensureAudio]
  );

  const toggle = useCallback(
    (t: Track) => {
      const a = ensureAudio();
      const isCurrent = track?.url === t.url;
      if (isCurrent && !a.paused) {
        a.pause();
        return;
      }
      if (isCurrent && a.paused && a.src) {
        a.play().catch(() => setState("error"));
        return;
      }
      play(t);
    },
    [ensureAudio, play, track]
  );

  const seek = useCallback((time: number) => {
    const a = audioRef.current;
    if (!a) return;
    a.currentTime = time;
    setCurrentTime(time);
  }, []);

  const skip = useCallback((delta: number) => {
    const a = audioRef.current;
    if (!a) return;
    const max = Number.isFinite(a.duration) ? a.duration : Infinity;
    const next = Math.min(Math.max(0, a.currentTime + delta), max);
    a.currentTime = next;
    setCurrentTime(next);
  }, []);

  const close = useCallback(() => {
    const a = audioRef.current;
    if (a) {
      a.pause();
      a.removeAttribute("src");
      a.load();
    }
    setTrack(null);
    setState("idle");
    setCurrentTime(0);
    setDuration(0);
  }, []);

  const isActive = useCallback((url: string) => track?.url === url, [track]);

  const value = useMemo<AudioPlayerContextValue>(
    () => ({ track, state, currentTime, duration, play, toggle, seek, skip, close, isActive }),
    [track, state, currentTime, duration, play, toggle, seek, skip, close, isActive]
  );

  return <AudioPlayerContext.Provider value={value}>{children}</AudioPlayerContext.Provider>;
}
