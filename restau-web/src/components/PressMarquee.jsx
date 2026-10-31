import { useLanguage } from "../i18n/LanguageContext";

const PressMarquee = () => {
  const { t } = useLanguage();
  const loop = [...t.press.items, ...t.press.items];

  return (
    <section
      aria-label={t.press.aria}
      className="press-marquee relative z-20 overflow-hidden border-y border-brightColor/30 bg-black text-white"
    >
      <div className="press-marquee__track flex w-max items-center gap-10 py-2.5 text-lg tracking-wide md:text-xl">
        {loop.map((item, index) => (
          <span
            key={`${item.source}-${index}`}
            className="flex shrink-0 items-center gap-10"
          >
            <span className="flex whitespace-nowrap items-baseline gap-2 opacity-90">
              <span className="font-logo">{item.quote}</span>
              <span className="font-hedding text-sm md:text-base">
                — {item.source}
              </span>
            </span>
            <span className="font-hedding text-brightColor" aria-hidden="true">
              ◆
            </span>
          </span>
        ))}
      </div>
    </section>
  );
};

export default PressMarquee;
