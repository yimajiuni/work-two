import React, { Suspense, lazy, useEffect, useState } from "react";
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
 */
function ScrollToTop() {
    const { pathname, hash } = useLocation();
    useEffect(() => {
        if (hash) return;
        window.scrollTo({ top: 0, behavior: "auto" });
    }, [pathname, hash]);
    return null;
}

function AppRoutes() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { pathname } = useLocation();
    const { theme } = useTheme();
    const isCroPage = pathname === "/cro";

    return (
        <>
            <ScrollToTop />
            <NavbarJump onMenuStateChange={setIsMobileMenuOpen} transparent={isCroPage} />
            {isMobileMenuOpen && (
                <div
                    aria-hidden="true"
                    className={[
                        "fixed inset-x-0 top-16 bottom-0 transition-opacity duration-300",
                        theme.chrome.menuOverlayClass,
                        isCroPage ? "lg:hidden" : "sm:hidden",
                    ].join(" ")}
                />
            )}
            <div
                aria-hidden="true"
                className={[
                    "transition-[height] duration-300",
                    isCroPage ? "lg:hidden" : "sm:hidden",
                    isMobileMenuOpen ? "h-16" : "h-0",
                ].join(" ")}
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
