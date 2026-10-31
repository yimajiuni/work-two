import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { LOCALES, translations } from "./translations";

const STORAGE_KEY = "travel-locale";
const LanguageContext = createContext(null);

const getInitialLocale = () => {
  if (typeof window === "undefined") return "en";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved && translations[saved]) return saved;
  return "en";
};

export const LanguageProvider = ({ children }) => {
  const [locale, setLocaleState] = useState(getInitialLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const setLocale = useCallback((next) => {
    if (translations[next]) setLocaleState(next);
  }, []);

  const t = useMemo(() => translations[locale], [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t,
      locales: LOCALES,
      label: LOCALES[locale].label,
    }),
    [locale, setLocale, t]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
};
