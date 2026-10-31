import React, { useMemo, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import NavbarJump from "./components/NavbarJump";
import CroShowcase from "./pages/CroShowcase";
import { resolveTheme } from "./themes";
import { ThemeContext } from "./themes/useTheme";

const MAIN_SITE_URL = "https://yimajiuni.com";

function CroStandaloneContent() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-[100dvh] h-full">
            <NavbarJump
                onMenuStateChange={setIsMobileMenuOpen}
                transparent
                forceCroPage
                mainSiteUrl={MAIN_SITE_URL}
            />

            {isMobileMenuOpen ? (
                <div
                    aria-hidden="true"
                    className="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-[color:var(--theme-accent,#382797)]/15 transition-opacity duration-300"
                />
            ) : null}

            <div
                aria-hidden="true"
                className={[
                    "lg:hidden transition-[height] duration-300",
                    isMobileMenuOpen ? "h-16" : "h-0",
                ].join(" ")}
            />

            <CroShowcase />
        </div>
    );
}

export default function CroApp() {
    const beigeThemeValue = useMemo(
        () => ({
            themeId: "beige",
            theme: resolveTheme("beige"),
            setThemeId: () => {},
        }),
        [],
    );

    return (
        <HelmetProvider>
            <BrowserRouter>
                <ThemeContext.Provider value={beigeThemeValue}>
                    <CroStandaloneContent />
                </ThemeContext.Provider>
            </BrowserRouter>
        </HelmetProvider>
    );
}
