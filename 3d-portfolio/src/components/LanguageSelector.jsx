import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";
import { useTheme } from "../themes/useTheme";

const languages = [
  { code: "en", lang: "English" },
  { code: "jp", lang: "日本語" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const { theme } = useTheme();
  const chrome = theme.uiChrome?.languageSelector;
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

  if (!chrome) return null;

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className={` flex items-center justify-center w-8 h-8 text-xl`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Select language"
        onClick={() => setIsOpen((open) => !open)}
      >
        <FaGlobe className="text-lg" />
        {/* {current.lang} */}
      </button>

      {isOpen && (
        <ul
          role="listbox"
          aria-label="Languages"
          className={`${chrome.menu} backdrop-blur-sm`}
        >
          {languages.map((lng) => {
            const isSelected = lng.code === i18n.language;
            return (
              <li key={lng.code} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  className={`${chrome.option} ${isSelected ? chrome.optionSelected : ""}`}
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
