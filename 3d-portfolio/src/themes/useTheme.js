import { createContext, useContext } from "react";
import { resolveTheme } from "./index.js";

export const ThemeContext = createContext({
  themeId: "pink",
  theme: resolveTheme("pink"),
  setThemeId: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}
