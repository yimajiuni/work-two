import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import NavbarJump from "./components/NavbarJump";
import CroShowcase from "./pages/CroShowcase";
import ThemeProvider from "./themes/ThemeProvider";

const MAIN_SITE_URL = "https://yimajiuni.com";

function CroStandaloneContent() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [menuSpacerPx, setMenuSpacerPx] = useState(0);
    const [overlayTopPx, setOverlayTopPx] = useState(64);

    const handleMenuLayoutChange = useCallback(({ spacerPx, overlayTopPx: top }) => {
        setMenuSpacerPx(spacerPx);
        setOverlayTopPx(top);
    }, []);

    useEffect(() => {
        if (!isMobileMenuOpen) setMenuSpacerPx(0);
    }, [isMobileMenuOpen]);

    return (
        <div className="min-h-[100dvh] h-full">
            <NavbarJump
                onMenuStateChange={setIsMobileMenuOpen}
                onMenuLayoutChange={handleMenuLayoutChange}
                transparent
                forceCroPage
                mainSiteUrl={MAIN_SITE_URL}
            />

            {isMobileMenuOpen ? (
                <div
                    aria-hidden="true"
                    className="lg:hidden fixed inset-x-0 bottom-0 z-[5] pointer-events-none bg-[color:var(--theme-accent,#382797)]/15 transition-opacity duration-300"
                    style={{ top: overlayTopPx }}
                />
            ) : null}

            <div
                aria-hidden="true"
                className="lg:hidden transition-[height] duration-300"
                style={{ height: isMobileMenuOpen ? menuSpacerPx : 0 }}
            />

            <CroShowcase />
        </div>
    );
}

export default function CroApp() {
    return (
        <HelmetProvider>
            <BrowserRouter>
                <ThemeProvider>
                    <CroStandaloneContent />
                </ThemeProvider>
            </BrowserRouter>
        </HelmetProvider>
    );
}
