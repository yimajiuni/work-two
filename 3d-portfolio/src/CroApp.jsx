import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import NavbarJump from "./components/NavbarJump";
import CroShowcase from "./pages/CroShowcase";
import ThemeProvider from "./themes/ThemeProvider";
// import MenuSpacerDebugHud from "./demos/MenuSpacerDebugHud";

const MAIN_SITE_URL = "https://yimajiuni.com";
// const SHOW_MENU_SPACER_HUD = true;
const SPACER_TOP_SLACK_PX = 8;

function CroStandaloneContent() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [menuSpacerPx, setMenuSpacerPx] = useState(0);
    const [overlayTopPx, setOverlayTopPx] = useState(0);
    const [scrollYAtMenuOpen, setScrollYAtMenuOpen] = useState(0);

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

    const nearTopAtOpen =
        scrollYAtMenuOpen <= Math.max(overlayTopPx, 48) + SPACER_TOP_SLACK_PX;
    const spacerHeight = isMobileMenuOpen && nearTopAtOpen ? menuSpacerPx : 0;

    return (
        <div className="min-h-[100dvh] h-full">
            <NavbarJump
                onMenuStateChange={handleMenuStateChange}
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
                style={{ height: spacerHeight }}
            />

            {/* {SHOW_MENU_SPACER_HUD ? (
                <MenuSpacerDebugHud
                    isOpen={isMobileMenuOpen}
                    spacerHeight={spacerHeight}
                    menuSpacerPx={menuSpacerPx}
                    overlayTopPx={overlayTopPx}
                    note={
                        nearTopAtOpen
                            ? "/cro standalone"
                            : "/cro standalone (spacer off: mid-scroll)"
                    }
                />
            ) : null} */}

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
