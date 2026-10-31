import { useEffect, useRef, useState } from "react";
import { MdLanguage } from "react-icons/md";
import { useLanguage } from "../i18n/LanguageContext";

const LanguageSwitcher = () => {
  const { locale, setLocale, label, locales, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    const onPointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div ref={rootRef} className="relative z-50 inline-flex">
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded px-1 py-1 text-lightText transition-colors hover:text-brightColor"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.nav.language}
        onClick={() => setOpen((prev) => !prev)}
      >
        <MdLanguage size={22} aria-hidden="true" />
        <span className="whitespace-nowrap font-hedding text-sm md:text-base">
          {label}
        </span>
      </button>

      {open ? (
        <ul
          role="listbox"
          aria-label={t.nav.language}
          className="absolute left-0 top-full z-50 mt-1 w-full min-w-full overflow-hidden rounded-lg border border-gray-200 bg-white py-1 shadow-[0_3px_10px_rgb(0,0,0,0.15)]"
        >
          {Object.values(locales).map((item) => (
            <li key={item.code} role="option" aria-selected={locale === item.code}>
              <button
                type="button"
                className={`block w-full whitespace-nowrap px-3 py-2 text-left font-hedding text-sm transition-colors hover:bg-backgroundColor/50 hover:text-brightColor ${
                  locale === item.code ? "text-brightColor" : "text-lightText"
                }`}
                onClick={() => {
                  setLocale(item.code);
                  setOpen(false);
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default LanguageSwitcher;
