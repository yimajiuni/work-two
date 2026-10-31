import React, { useEffect, useRef, useState } from "react";
import { /* FaAngellist, */ FaBurst /* , FaConnectdevelop */ } from "react-icons/fa6";
// Alternatives:
// import { FaConnectdevelop } from "react-icons/fa6";
// import { FaBurst } from "react-icons/fa6";
import { THEME_IDS, THEME_REGISTRY } from "../themes";
import { useTheme } from "../themes/useTheme";

// const ThemeIcon = FaAngellist;
// const ThemeIcon = FaConnectdevelop;
const ThemeIcon = FaBurst;

const ThemeSelector = () => {
  const { themeId, theme, setThemeId } = useTheme();
  const chrome = theme.uiChrome?.languageSelector;
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef(null);

  const current = THEME_REGISTRY[themeId] ?? THEME_REGISTRY[THEME_IDS[0]];

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

  const selectTheme = (id) => {
    setThemeId(id);
    setIsOpen(false);
  };

  if (!chrome) return null;

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className={`flex items-center justify-center w-8 h-8 text-xl`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Select site theme"
        onClick={() => setIsOpen((open) => !open)}
      >
        <ThemeIcon className="text-xl" aria-hidden />
        {/* {current?.id === "pink" ? "Pink" : current?.id === "beige" ? "Beige" : current?.id} */}
      </button>

      {isOpen && (
        <ul
          role="listbox"
          aria-label="Themes"
          className={chrome.menu}
        >
          {THEME_IDS.map((id) => {
            const pack = THEME_REGISTRY[id];
            const isSelected = id === themeId;
            const label =
              id === "pink" ? "Pink" : id === "beige" ? "Beige" : pack?.label ?? id;
            return (
              <li key={id} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  className={`${chrome.option} ${isSelected ? chrome.optionSelected : ""}`}
                  onClick={() => selectTheme(id)}
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ThemeSelector;
