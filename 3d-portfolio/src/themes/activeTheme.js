/**
 * Default theme for first-time visitors (no localStorage yet).
 * Visitors can override via Navbar ThemeSelector; choice persists in localStorage.
 * Shareable preview: ?theme=pink | ?theme=beige
 * (orange temporarily disabled)
 */
export const ACTIVE_THEME_ID = "beige";

/** Show public theme toggle in the header (visitor experiment). */
export const VISITOR_THEME_TOGGLE = true;

export const THEME_STORAGE_KEY = "yimajiuni-site-theme";
