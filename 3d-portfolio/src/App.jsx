import React, {
    Suspense,
    lazy,
    useCallback,
    useEffect,
    useLayoutEffect,
    useState,
} from "react";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import NavbarJump from "./components/NavbarJump";
import Service from "./pages/Service";
import ThemeProvider from "./themes/ThemeProvider";
import { useTheme } from "./themes/useTheme";
// import MenuSpacerDebugHud from "./demos/MenuSpacerDebugHud";

const CroShowcase = lazy(() => import("./pages/CroShowcase"));
const Contact = lazy(() => import("./pages/Contact"));
const Content = lazy(() => import("./components/Content"));
const WorkDetails = lazy(() => import("./pages/WorkDetails"));
const MenuSpacerDemo = lazy(() => import("./demos/MenuSpacerDemo"));

/** Floating spacer metrics HUD (dev). */
// const SHOW_MENU_SPACER_HUD = true;

const RouteFallback = () => (
    <div
        className="min-h-[40dvh] flex items-center justify-center"
        aria-hidden="true"
        role="presentation"
    />
);

/** Reset window scroll on route change (e.g. /works → /details/:id).
 *  If the URL has a hash (#works), leave scroll to Content / native hash handling.
 *
 *  Gallery→detail used to land near the bottom: history.scrollRestoration kept the
 *  deep Works scroll offset, and ScrollToTop ran before lazy WorkDetails painted.
 */
function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }
    }, []);

    useLayoutEffect(() => {
        if (hash) return;
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, [pathname, hash]);

    // Lazy routes: scroll again after Suspense swaps in the real page.
    useEffect(() => {
        if (hash) return;
        const id = requestAnimationFrame(() => {
            window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        });
        return () => cancelAnimationFrame(id);
    }, [pathname, hash]);

    return null;
}

/** Spacer only helps when its band can sit under the header in-view (near document top). */
const SPACER_TOP_SLACK_PX = 8;

function AppRoutes() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [menuSpacerPx, setMenuSpacerPx] = useState(0);
    const [overlayTopPx, setOverlayTopPx] = useState(0);
    /** scrollY frozen at menu-open — mid-page open skips flow spacer (overlay only). */
    const [scrollYAtMenuOpen, setScrollYAtMenuOpen] = useState(0);
    const { pathname } = useLocation();
    const { theme, themeId } = useTheme();
    const isCroPage = pathname === "/cro";
    const isMenuSpacerDemo = pathname === "/demo/menu-spacer";
    const nearTopAtOpen =
        scrollYAtMenuOpen <= Math.max(overlayTopPx, 48) + SPACER_TOP_SLACK_PX;
    // /works is always mid-page; other routes skip spacer when opened mid-scroll.
    const useMenuSpacer = pathname !== "/works" && nearTopAtOpen;
    const showMenuOverlay = isMobileMenuOpen && themeId !== "pink";

    const handleMenuLayoutChange = useCallback(({ spacerPx, overlayTopPx: top }) => {
        setMenuSpacerPx(spacerPx);
        setOverlayTopPx(top);
    }, []);

    const handleMenuStateChange = useCallback((open) => {
        if (open) setScrollYAtMenuOpen(window.scrollY);
        setIsMobileMenuOpen(open);
    }, []);

    useEffect(() => {
        if (!isMobileMenuOpen) setMenuSpacerPx(0);
    }, [isMobileMenuOpen]);

    // Isolated demo page — own header/spacer; skip site NavbarJump chrome.
    if (isMenuSpacerDemo) {
        return (
            <>
                <ScrollToTop />
                <Suspense fallback={<RouteFallback />}>
                    <Routes>
                        <Route path="/demo/menu-spacer" element={<MenuSpacerDemo />} />
                    </Routes>
                </Suspense>
            </>
        );
    }

    return (
        <>
            <ScrollToTop />
            <NavbarJump
                onMenuStateChange={handleMenuStateChange}
                onMenuLayoutChange={handleMenuLayoutChange}
                transparent={isCroPage}
            />
            {showMenuOverlay && (
                <div
                    aria-hidden="true"
                    className={[
                        "fixed inset-x-0 bottom-0 z-[5] pointer-events-none transition-opacity duration-300",
                        theme.chrome.menuOverlayClass,
                        isCroPage ? "lg:hidden" : "sm:hidden",
                    ].join(" ")}
                    style={{ top: overlayTopPx }}
                />
            )}
            <div
                aria-hidden="true"
                className={[
                    "transition-[height] duration-300",
                    isCroPage ? "lg:hidden" : "sm:hidden",
                ].join(" ")}
                style={{ height: useMenuSpacer && isMobileMenuOpen ? menuSpacerPx : 0 }}
            />
            {/* {SHOW_MENU_SPACER_HUD ? (
                <MenuSpacerDebugHud
                    isOpen={isMobileMenuOpen}
                    spacerHeight={useMenuSpacer && isMobileMenuOpen ? menuSpacerPx : 0}
                    menuSpacerPx={menuSpacerPx}
                    overlayTopPx={overlayTopPx}
                    note={
                        pathname === "/works"
                            ? `${pathname} (spacer off: works)`
                            : useMenuSpacer
                              ? pathname
                              : `${pathname} (spacer off: mid-scroll)`
                    }
                />
            ) : null} */}
            <Suspense fallback={<RouteFallback />}>
                <Routes>
                    <Route path="/cro" element={<CroShowcase />} />
                    <Route path="/about" element={<Content id="about" />} />
                    <Route path="/works" element={<Content id="works" />} />
                    <Route path="/details/:id" element={<WorkDetails />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Service />} />
                </Routes>
            </Suspense>
        </>
    );
}

function App() {
    return (
        <HelmetProvider>
            <Router>
                <ThemeProvider>
                    <AppShell />
                </ThemeProvider>
            </Router>
        </HelmetProvider>
    );
}

function AppShell() {
    const { pathname } = useLocation();
    const { theme } = useTheme();
    const isCroPage = pathname === "/cro";
    const isMenuSpacerDemo = pathname === "/demo/menu-spacer";

    return (
        <div
            className={
                isCroPage || isMenuSpacerDemo
                    ? "min-h-[100dvh] h-full"
                    : [
                        theme.shell.rootClass,
                        "min-h-[100dvh] h-full",
                        theme.shell.rootExtraClass,
                    ]
                        .filter(Boolean)
                        .join(" ")
            }
        >
            <AppRoutes />
        </div>
    );
}

export default App;
