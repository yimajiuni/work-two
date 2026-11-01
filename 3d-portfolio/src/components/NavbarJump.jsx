import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../components/LanguageSelector";
import ThemeSelector from "../components/ThemeSelector";
import { CRO_SECTION_ANCHORS } from "../constants/croNav";
import { useTheme } from "../themes/useTheme";
import { VISITOR_THEME_TOGGLE } from "../themes";

/** Matches `mt-2` on the absolute mobile panel (gap under fixed header). */
const MOBILE_MENU_GAP_PX = 8;
/** App spacer uses transition-[height] duration-300 — wait before measuring scroll targets. */
const MENU_CLOSE_LAYOUT_MS = 320;

const NavbarJump = ({
  onMenuStateChange,
  /** ({ spacerPx, overlayTopPx }) — measured panel + header for App/CroApp spacers */
  onMenuLayoutChange,
  transparent = false,
  forceCroPage = false,
  mainSiteUrl = "",
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuPanelRef = useRef(null);
  const path = useLocation().pathname;
  const location = path.split("/")[1];
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { theme, themeId } = useTheme();
  const isCroPage = forceCroPage || path === "/cro";
  const normalizedMainSiteUrl = mainSiteUrl.replace(/\/$/, "");
  const getSiteHref = (route) =>
    normalizedMainSiteUrl ? `${normalizedMainSiteUrl}${route}` : route;

  const routeMap = {
    about: "/about",
    works: "/works",
    contact: "/contact",
  };

  const publishClosedLayout = () => {
    const headerH = document.getElementById("navigation")?.offsetHeight ?? 0;
    onMenuLayoutChange?.({ spacerPx: 0, overlayTopPx: headerH });
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    onMenuStateChange?.(false);
    publishClosedLayout();
  };

  const toggleMenu = () => {
    if (isMenuOpen) closeMenu();
    else {
      setIsMenuOpen(true);
      onMenuStateChange?.(true);
    }
  };

  /**
   * About / Contact: navigate (or stay) + scrollY=0; header clearance = max-container padding.
   * Works: mid-page jump only after menu/spacer close finishes (Content also scrolls on /works).
   */
  const goToPageAndScroll = async (selector) => {
    closeMenu();
    try {
      const targetRoute = routeMap[selector] || "/";

      if (normalizedMainSiteUrl) {
        window.location.assign(`${normalizedMainSiteUrl}${targetRoute}#${selector}`);
        return;
      }

      // Let spacer height transition settle before any scroll measurement.
      await new Promise((resolve) => setTimeout(resolve, MENU_CLOSE_LAYOUT_MS));

      const needsNavigation = path !== targetRoute;
      const landsAtDocumentTop = selector === "about" || selector === "contact";

      if (landsAtDocumentTop) {
        if (needsNavigation) {
          await navigate(targetRoute);
          // App ScrollToTop sets scrollY=0; padding handles fixed header.
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        }
        return;
      }

      // works (mid-page)
      if (needsNavigation) {
        await navigate(targetRoute);
        await new Promise((resolve) => setTimeout(resolve, 50));
      }

      const targetElement = document.getElementById(selector);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        console.warn(`Target element with id "${selector}" not found on ${targetRoute}`);
      }
    } catch (navError) {
      console.warn(`Navigation error:`, navError);
    }
  };

  const scrollToCroSection = async (anchorId) => {
    closeMenu();
    try {
      if (!isCroPage) {
        await navigate(`/cro#${anchorId}`);
        await new Promise((resolve) => setTimeout(resolve, 500));
      }

      const targetElement = document.getElementById(anchorId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } catch (error) {
      console.warn(`CRO scroll error for "${anchorId}":`, error);
    }
  };

  const serviceHomeHref = getSiteHref("/");

  useEffect(() => {
    onMenuStateChange?.(isMenuOpen);
  }, [isMenuOpen, onMenuStateChange]);

  // Close mobile menu on any route change (link / back / programmatic nav).
  useEffect(() => {
    setIsMenuOpen(false);
    publishClosedLayout();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only on path change
  }, [path]);

  // Report panel/header sizes for App/CroApp spacer + overlay.
  useEffect(() => {
    if (!onMenuLayoutChange) return;

    const headerEl = document.getElementById("navigation");

    const publish = () => {
      // Prefer measured header height; 0 if unmounted (no magic fallback).
      const overlayTopPx = headerEl?.offsetHeight ?? 0;
      const panelEl = menuPanelRef.current;
      if (!isMenuOpen || !panelEl) {
        onMenuLayoutChange({ spacerPx: 0, overlayTopPx });
        return;
      }
      onMenuLayoutChange({
        spacerPx: panelEl.offsetHeight + MOBILE_MENU_GAP_PX,
        overlayTopPx,
      });
    };

    publish();
    if (!isMenuOpen) return undefined;

    const panelEl = menuPanelRef.current;
    const ro = new ResizeObserver(publish);
    if (panelEl) ro.observe(panelEl);
    if (headerEl) ro.observe(headerEl);
    window.addEventListener("resize", publish);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", publish);
      onMenuLayoutChange({
        spacerPx: 0,
        overlayTopPx: headerEl?.offsetHeight ?? 0,
      });
    };
  }, [isMenuOpen, onMenuLayoutChange, isCroPage, themeId]);

  const croLogoLabel = (
    <p className="blue-gradient_text whitespace-nowrap">
      <span>{t("croShowcase.nav.logoMark")}</span>
      <span className="text-sm">{t("croShowcase.nav.logoSuffix")}</span>
    </p>
  );

  const croNavLinks = CRO_SECTION_ANCHORS.map((item) => (
    <button
      key={item.anchorId}
      type="button"
      onClick={(event) => {
        event.preventDefault();
        scrollToCroSection(item.anchorId);
      }}
      className="cursor-pointer hover:text-blue-400 transition-colors text-left"
    >
      {t(item.labelKey)}
    </button>
  ));

  const croMenuDivider = (
    <span
      className="text-xl font-extralight text-white/70 select-none pointer-events-none leading-none"
      aria-hidden="true"
    >
      /
    </span>
  );

  const standardNavLinks = (
    <>
      {location !== "contact" ? (
        <>
          <NavLink
            onClick={(e) => {
              e.preventDefault();
              goToPageAndScroll("about");
            }}
            className="cursor-pointer hover:text-blue-400 transition-colors"
            to={getSiteHref("/about")}
          >
            About
          </NavLink>
          <NavLink
            onClick={(e) => {
              e.preventDefault();
              goToPageAndScroll("works");
            }}
            className="cursor-pointer hover:text-blue-400 transition-colors"
            to={getSiteHref("/works")}
          >
            Works
          </NavLink>
          <NavLink
            to={getSiteHref("/contact")}
            onClick={(e) => {
              e.preventDefault();
              goToPageAndScroll("contact");
            }}
            className="cursor-pointer hover:text-blue-400 transition-colors"
          >
            Contact
          </NavLink>
        </>
      ) : (
        <>
          <NavLink
            onClick={(e) => {
              e.preventDefault();
              goToPageAndScroll("about");
            }}
            className="cursor-pointer hover:text-blue-400 transition-colors"
            to={getSiteHref("/about")}
          >
            About
          </NavLink>
          <NavLink
            onClick={(e) => {
              e.preventDefault();
              goToPageAndScroll("works");
            }}
            className="cursor-pointer hover:text-blue-400 transition-colors"
            to={getSiteHref("/works")}
          >
            Works
          </NavLink>
          <NavLink
            to={getSiteHref("/contact")}
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-white hover:text-blue-400 transition-colors"
            }
          >
            Contact
          </NavLink>
        </>
      )}
    </>
  );

  const mobileStandardNavLinks =
    normalizedMainSiteUrl || (location !== "contact" && location !== "service") ? (
      <>
        <NavLink
          to={normalizedMainSiteUrl || "/"}
          onClick={(event) => {
            if (normalizedMainSiteUrl) {
              event.preventDefault();
              window.location.assign(`${normalizedMainSiteUrl}/`);
            }
            closeMenu();
          }}
          className="cursor-pointer hover:text-blue-400 transition-colors py-2"
        >
          Services
        </NavLink>
        <NavLink
          onClick={(e) => {
            e.preventDefault();
            goToPageAndScroll("about");
          }}
          className="cursor-pointer hover:text-blue-400 transition-colors py-2"
          to={getSiteHref("/about")}
        >
          About
        </NavLink>
        <NavLink
          onClick={(e) => {
            e.preventDefault();
            goToPageAndScroll("works");
          }}
          className="cursor-pointer hover:text-blue-400 transition-colors py-2"
          to={getSiteHref("/works")}
        >
          Works
        </NavLink>
        <NavLink
          to={getSiteHref("/contact")}
          onClick={(e) => {
            e.preventDefault();
            goToPageAndScroll("contact");
          }}
          className={({ isActive }) =>
            `cursor-pointer transition-colors py-2 ${isActive
              ? "text-blue-500 active"
              : "text-white hover:text-blue-400"
            }`
          }
        >
          Contact
        </NavLink>
      </>
    ) : (
      <>
        <NavLink
          to={getSiteHref("/")}
          onClick={closeMenu}
          className="cursor-pointer hover:text-blue-400 transition-colors py-2"
        >
          Services
        </NavLink>
        <NavLink
          onClick={(e) => {
            e.preventDefault();
            goToPageAndScroll("about");
          }}
          className="cursor-pointer hover:text-blue-400 transition-colors py-2"
          to={getSiteHref("/about")}
        >
          About
        </NavLink>
        <NavLink
          onClick={(e) => {
            e.preventDefault();
            goToPageAndScroll("works");
          }}
          className="cursor-pointer hover:text-blue-400 transition-colors py-2"
          to={getSiteHref("/works")}
        >
          Works
        </NavLink>
        <NavLink
          to={getSiteHref("/contact")}
          className={({ isActive }) =>
            `cursor-pointer transition-colors py-2 ${isActive ? "text-blue-500 active" : "text-white hover:text-blue-400"
            }`
          }
          onClick={closeMenu}
        >
          Contact
        </NavLink>
      </>
    );

  return (
    <header
      className={[
        "header gap-7 !z-50",
        // CRO: themed gradient wash; other pages use theme chrome unless transparent
        isCroPage ? "theme-header-follow" : !transparent && theme.chrome.headerClass,
      ]
        .filter(Boolean)
        .join(" ")}
      id="navigation"
      data-nav-surface={isCroPage ? "cro" : "default"}
    >
      <div className="flex items-center gap-7">
        {isCroPage ? (
          <>
            {normalizedMainSiteUrl ? (
              <a
                href={serviceHomeHref}
                className="hidden lg:flex h-10 px-3 rounded-lg bg-white items-center justify-center font-bold shadow-md shadow-pink-400/30 hover:shadow-lg hover:shadow-pink-400/30 transition-shadow"
              >
                {croLogoLabel}
              </a>
            ) : (
              <NavLink
                to="/"
                onClick={closeMenu}
                className="hidden lg:flex h-10 px-3 rounded-lg bg-white items-center justify-center font-bold shadow-md shadow-pink-400/30 hover:shadow-lg hover:shadow-pink-400/30 transition-shadow"
              >
                {croLogoLabel}
              </NavLink>
            )}
            <button
              type="button"
              onClick={toggleMenu}
              className="lg:hidden h-10 px-2 rounded-lg bg-white items-center justify-center flex font-bold shadow-md shadow-pink-400/30 hover:shadow-lg hover:shadow-pink-400/30 transition-shadow"
            >
              {croLogoLabel}
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/"
              className="hidden sm:flex w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md shadow-pink-400/30 hover:shadow-lg hover:shadow-pink-400/30 transition-shadow"
            >
              <p className="blue-gradient_text">今</p>
            </NavLink>
            <button
              type="button"
              onClick={toggleMenu}
              className="sm:hidden w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md shadow-pink-400/30 hover:shadow-lg hover:shadow-pink-400/30 transition-shadow"
            >
              <p className="blue-gradient_text">今</p>
            </button>
          </>
        )}

        <nav
          className={[
            "text-lg gap-7 font-medium text-white items-center",
            isCroPage ? "hidden lg:flex" : "hidden sm:flex",
          ].join(" ")}
        >
          {isCroPage ? (
            <>
              {croNavLinks}
              {croMenuDivider}
              {standardNavLinks}
            </>
          ) : (
            standardNavLinks
          )}
        </nav>
      </div>

      {/* data-nav-chrome / z-[70]: above mobile drawer (z-60) */}
      <div
        data-nav-chrome
        className="relative z-[70] text-blue-500 cursor-pointer flex items-center gap-2"
      >
        <LanguageSelector />
        {VISITOR_THEME_TOGGLE && <ThemeSelector />}
      </div>

      {isMenuOpen && (
        <div
          ref={menuPanelRef}
          data-mobile-menu
          className={[
            "mx-auto absolute top-full left-0 right-0 backdrop-blur-sm border border-white/20 rounded-lg mt-2 p-4 z-[60] shadow-lg shadow-pink-400/30",
            themeId === "beige" ? "bg-[#F9EEEE]/60" : "bg-[#f9c6e1]/60",
            isCroPage
              ? "lg:hidden w-[calc(100%_-_2rem)] max-w-3xl"
              : "sm:hidden w-max",
          ].join(" ")}
        >
          <nav className="flex justify-between gap-4 text-lg font-medium text-white">
            {isCroPage ? (
              <div className="flex flex-col gap-2 w-full">
                <div className="flex flex-wrap justify-between gap-x-4 gap-y-2 w-full">
                  {mobileStandardNavLinks}
                </div>
                <span
                  className="text-xl font-extralight text-white/70 py-1 leading-none"
                  aria-hidden="true"
                >
                  /
                </span>
                <div className="flex flex-wrap justify-between gap-x-4 gap-y-2 w-full">
                  {CRO_SECTION_ANCHORS.map((item) => (
                    <button
                      key={item.anchorId}
                      type="button"
                      onClick={(event) => {
                        event.preventDefault();
                        scrollToCroSection(item.anchorId);
                      }}
                      className="cursor-pointer hover:text-blue-400 transition-colors py-2 text-left"
                    >
                      {t(item.labelKey)}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              mobileStandardNavLinks
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavbarJump;
