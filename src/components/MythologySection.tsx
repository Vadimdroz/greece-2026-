import { mythologyStories } from "../data/mythology";
import Section from "./Section";
import ListenButton from "./ListenButton";
import { useT } from "../lib/dict";

export default function MythologySection() {
  const t = useT();
  return (
    <Section
      id="mythology"
      eyebrow={t("mythology_eyebrow")}
      title={t("mythology_title")}
      kicker={t("mythology_kicker")}
      intro={t("mythology_intro")}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {mythologyStories.map(myth => (
          <div key={myth.id} className="card-paper p-5 flex flex-col">
            <div className="flex items-start gap-3">
              <span
                className="text-2xl leading-none shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-terracotta-500/10"
                aria-hidden
              >
                {myth.emoji}
              </span>
              <div className="min-w-0">
                <h3 className="font-serif text-lg text-ink-900 leading-snug">
                  {myth.name}
                </h3>
                <p className="text-[11px] uppercase tracking-[0.16em] text-terracotta-700/80 font-medium mt-0.5">
                  {myth.role}
                </p>
              </div>
            </div>
            <p dir="auto" className="mt-3 text-sm text-ink-700/85 leading-relaxed flex-1">
              {myth.story}
            </p>
            <div className="mt-4">
              <ListenButton
                audioAssetPath={`mythology/${myth.id}`}
                title={`${myth.name} — русский рассказ`}
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
