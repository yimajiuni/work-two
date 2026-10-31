import { useEffect, useRef, useState } from "react";
import { MdLanguage } from "react-icons/md";
import { useLanguage } from "../i18n/LanguageContext";
import "./languageSwitcher.scss";

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
    <div ref={rootRef} className={`langSwitcher ${open ? "isOpen" : ""}`}>
      <button
        type="button"
        className="langTrigger flex"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.nav.language}
        onClick={() => setOpen((prev) => !prev)}
      >
        <MdLanguage className="icon" aria-hidden="true" />
        <span className="langLabel">{label}</span>
      </button>

      {open ? (
        <ul
          role="listbox"
          aria-label={t.nav.language}
          className="langMenu"
        >
          {Object.values(locales).map((item) => (
            <li key={item.code} role="option" aria-selected={locale === item.code}>
              <button
                type="button"
                className={`langOption ${locale === item.code ? "isActive" : ""}`}
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
