import { ACTIVE_THEME_ID } from "./activeTheme.js";
import { pinkTheme } from "../components/ServicePinkLayout";
import { beigeTheme /* , orangeTheme */ } from "../components/ServiceBeigeLayout";

export const THEME_REGISTRY = {
  [pinkTheme.id]: pinkTheme,
  [beigeTheme.id]: beigeTheme,
  // Orange theme temporarily disabled
  // [orangeTheme.id]: orangeTheme,
};

export const THEME_IDS = Object.keys(THEME_REGISTRY);

export function resolveTheme(themeId = ACTIVE_THEME_ID) {
  return THEME_REGISTRY[themeId] ?? THEME_REGISTRY[ACTIVE_THEME_ID] ?? pinkTheme;
}

export {
  ACTIVE_THEME_ID,
  THEME_STORAGE_KEY,
  VISITOR_THEME_TOGGLE,
} from "./activeTheme.js";
export { pinkTheme } from "../components/ServicePinkLayout";
export { beigeTheme /* , orangeTheme */ } from "../components/ServiceBeigeLayout";
