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

const CroShowcase = lazy(() => import("./pages/CroShowcase"));
const Contact = lazy(() => import("./pages/Contact"));
const Content = lazy(() => import("./components/Content"));
const WorkDetails = lazy(() => import("./pages/WorkDetails"));

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

function AppRoutes() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [menuSpacerPx, setMenuSpacerPx] = useState(0);
    const [overlayTopPx, setOverlayTopPx] = useState(64);
    const { pathname } = useLocation();
    const { theme, themeId } = useTheme();
    const isCroPage = pathname === "/cro";
    // /works lands mid-page (below About) — skip spacer so open/close matches non-jump pages.
    const useMenuSpacer = pathname !== "/works";
    const showMenuOverlay = isMobileMenuOpen && themeId !== "pink";

    const handleMenuLayoutChange = useCallback(({ spacerPx, overlayTopPx: top }) => {
        setMenuSpacerPx(spacerPx);
        setOverlayTopPx(top);
    }, []);

    useEffect(() => {
        if (!isMobileMenuOpen) setMenuSpacerPx(0);
    }, [isMobileMenuOpen]);

    return (
        <>
            <ScrollToTop />
            <NavbarJump
                onMenuStateChange={setIsMobileMenuOpen}
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

    return (
        <div
            className={
                isCroPage
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
