import { Play, Pause, RotateCcw, RotateCw, X, Loader2 } from "lucide-react";
import { useAudioPlayer } from "../lib/audioPlayer";
import { useT } from "../lib/dict";

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

/** Persistent playback bar for attraction narration — lives at the app
 *  root (see App.tsx), outside the hash-router's page content, so it
 *  survives navigating between pages/chapters. Shows progress, lets you
 *  scrub to any point, and skip ±10s. */
export default function NowPlayingBar() {
  const { track, state, currentTime, duration, toggle, seek, skip, close } = useAudioPlayer();
  const t = useT();

  if (!track) return null;

  const progressPct = duration > 0 ? Math.min(100, (currentTime / duration) * 100) : 0;

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    seek(Number(e.target.value));
  };

  return (
    <div
      className="fixed bottom-16 md:bottom-0 inset-x-0 z-[7999] bg-ink-900/95 backdrop-blur-md text-cream-50 border-t border-cream-50/10 shadow-[0_-4px_24px_rgba(0,0,0,0.25)]"
      role="region"
      aria-label={track.title}
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-6 py-2 flex items-center gap-3">
        <button
          type="button"
          onClick={() => toggle(track)}
          aria-label={state === "playing" ? t("listen_pause") : t("listen_play")}
          className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-terracotta-500 hover:bg-terracotta-600 transition-colors"
        >
          {state === "loading" ? (
            <Loader2 size={16} className="animate-spin" />
          ) : state === "playing" ? (
            <Pause size={16} strokeWidth={2.2} />
          ) : (
            <Play size={16} strokeWidth={2.2} />
          )}
        </button>

        <button
          type="button"
          onClick={() => skip(-10)}
          aria-label={t("player_back_10")}
          title={t("player_back_10")}
          className="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full text-cream-50/85 hover:text-cream-50 hover:bg-cream-50/10 transition-colors"
        >
          <RotateCcw size={16} strokeWidth={2} />
        </button>

        <div className="flex-1 min-w-0">
          <p className="text-[11px] uppercase tracking-[0.14em] text-cream-50/70 truncate mb-1">
            {track.title}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[10px] tabular-nums text-cream-50/70 w-8 text-right shrink-0">
              {formatTime(currentTime)}
            </span>
            <input
              type="range"
              min={0}
              max={duration || 0}
              step={0.1}
              value={Math.min(currentTime, duration || 0)}
              onChange={handleSeek}
              disabled={!duration}
              aria-label={t("listen_play")}
              className="flex-1 h-1.5 accent-terracotta-500 cursor-pointer"
              style={{
                background: `linear-gradient(to right, var(--color-terracotta-500) ${progressPct}%, rgba(251,247,236,0.2) ${progressPct}%)`
              }}
            />
            <span className="text-[10px] tabular-nums text-cream-50/70 w-8 shrink-0">
              {formatTime(duration)}
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => skip(10)}
          aria-label={t("player_forward_10")}
          title={t("player_forward_10")}
          className="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full text-cream-50/85 hover:text-cream-50 hover:bg-cream-50/10 transition-colors"
        >
          <RotateCw size={16} strokeWidth={2} />
        </button>

        <button
          type="button"
          onClick={close}
          aria-label={t("player_close")}
          title={t("player_close")}
          className="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full text-cream-50/60 hover:text-cream-50 hover:bg-cream-50/10 transition-colors"
        >
          <X size={16} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
