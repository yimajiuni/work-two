import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "jp", lang: "日本語" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef(null);

  const current =
    languages.find((lng) => lng.code === i18n.language) ?? languages[0];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  useEffect(() => {
    if (!isOpen) return;

    const onPointerDown = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className="language-selector appearance-none border-none outline-none text-white text-sm font-medium cursor-pointer transition-opacity hover:opacity-90 shadow-sm shadow-pink-400/30 hover:shadow-md hover:shadow-pink-400/30 transition-shadow"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Select language"
        onClick={() => setIsOpen((open) => !open)}
      >
        {current.lang}
      </button>

      {isOpen && (
        <ul
          role="listbox"
          aria-label="Languages"
          className="language-selector-menu absolute right-0 top-[calc(100%+0.25rem)] z-[60] min-w-full overflow-hidden rounded-md border border-white/30 bg-pink-200/40 shadow-lg shadow-pink-400/20 backdrop-blur-sm"
        >
          {languages.map((lng) => {
            const isSelected = lng.code === i18n.language;
            return (
              <li key={lng.code} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  className={`language-selector-option w-full px-3 py-2 text-left text-sm font-medium bg-pink-200/40 text-gray-800 transition-colors hover:text-white hover:bg-blue-500 ${isSelected ? "bg-pink-300/40 text-gray-800 hover:text-white hover:bg-blue-500" : ""
                    }`}
                  onClick={() => changeLanguage(lng.code)}
                >
                  {lng.lang}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
