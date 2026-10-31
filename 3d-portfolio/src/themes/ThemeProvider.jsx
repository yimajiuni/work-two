import React, { useCallback, useLayoutEffect, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  ACTIVE_THEME_ID,
  THEME_IDS,
  THEME_STORAGE_KEY,
  resolveTheme,
} from "./index.js";
import { ThemeContext } from "./useTheme.js";

function readStoredThemeId() {
  if (typeof window === "undefined") return null;
  try {
    let stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    // Migrate legacy theme id from early experiments
    if (stored === "next") {
      stored = "beige";
      window.localStorage.setItem(THEME_STORAGE_KEY, stored);
    }
    return THEME_IDS.includes(stored) ? stored : null;
  } catch {
    return null;
  }
}

function writeStoredThemeId(themeId) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, themeId);
  } catch {
    /* ignore quota / private mode */
  }
}

function applyDocumentTheme(themeId) {
  if (typeof document === "undefined") return;
  document.documentElement.dataset.theme = themeId;
}

/**
 * Applies site theme via data-theme + React context.
 * Priority: ?theme= → localStorage → ACTIVE_THEME_ID
 * Visitor toggle uses setThemeId (persists to localStorage).
 */
export default function ThemeProvider({ children }) {
  const [searchParams] = useSearchParams();
  const queryTheme = searchParams.get("theme");

  const resolveInitialId = () => {
    if (THEME_IDS.includes(queryTheme)) {
      return queryTheme;
    }
    return readStoredThemeId() ?? ACTIVE_THEME_ID;
  };

  const [themeId, setThemeIdState] = useState(resolveInitialId);

  useEffect(() => {
    if (THEME_IDS.includes(queryTheme) && queryTheme !== themeId) {
      setThemeIdState(queryTheme);
      writeStoredThemeId(queryTheme);
    }
  }, [queryTheme, themeId]);

  useLayoutEffect(() => {
    applyDocumentTheme(themeId);
  }, [themeId]);

  const setThemeId = useCallback((nextId) => {
    if (!THEME_IDS.includes(nextId)) return;
    setThemeIdState(nextId);
    writeStoredThemeId(nextId);
    applyDocumentTheme(nextId);
  }, []);

  const value = useMemo(
    () => ({
      themeId,
      theme: resolveTheme(themeId),
      setThemeId,
    }),
    [themeId, setThemeId],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
