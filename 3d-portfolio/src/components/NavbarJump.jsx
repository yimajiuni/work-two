import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../components/LanguageSelector";
import * as Scroll from "react-scroll";
import { FaGlobe } from "react-icons/fa";
import { CRO_SECTION_ANCHORS } from "../constants/croNav";

const NavbarJump = ({ onMenuStateChange, transparent = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = useLocation().pathname;
  const location = path.split("/")[1];
  const navigate = useNavigate();
  const scroller = Scroll.scroller;
  const { t } = useTranslation();
  const isCroPage = path === "/cro";

  const routeMap = {
    about: "/about",
    works: "/works",
    contact: "/contact",
  };

  const HEADER_OFFSET = -5;

  const goToPageAndScroll = async (selector) => {
    try {
      const targetRoute = routeMap[selector] || "/";
      const needsNavigation = path !== targetRoute;

      if (needsNavigation) {
        await navigate(targetRoute);
        await new Promise((resolve) => setTimeout(resolve, 400));
      } else {
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      try {
        const targetElement = document.getElementById(selector);
        if (targetElement) {
          await scroller.scrollTo(selector, {
            duration: 500,
            smooth: true,
            offset: HEADER_OFFSET,
            spy: true,
          });
        } else {
          console.warn(`Target element with id "${selector}" not found on ${targetRoute}`);
        }
      } catch (scrollError) {
        console.warn(`Scroll error for selector "${selector}":`, scrollError);
      }
    } catch (navError) {
      console.warn(`Navigation error:`, navError);
    }
  };

  const scrollToCroSection = async (anchorId) => {
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

  const handleCroLogoClick = (event) => {
    if (!isCroPage) return;
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    onMenuStateChange?.(isMenuOpen);
  }, [isMenuOpen, onMenuStateChange]);

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
        closeMenu();
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
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            onClick={(e) => {
              e.preventDefault();
              goToPageAndScroll("works");
            }}
            className="cursor-pointer hover:text-blue-400 transition-colors"
            to="/works"
          >
            Works
          </NavLink>
          <NavLink
            to="/contact"
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
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            onClick={(e) => {
              e.preventDefault();
              goToPageAndScroll("works");
            }}
            className="cursor-pointer hover:text-blue-400 transition-colors"
            to="/works"
          >
            Works
          </NavLink>
          <NavLink
            to="/contact"
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
    location !== "contact" && location !== "service" ? (
      <>
        <NavLink
          to="/"
          onClick={closeMenu}
          className="cursor-pointer hover:text-blue-400 transition-colors py-2"
        >
          Services
        </NavLink>
        <NavLink
          onClick={(e) => {
            e.preventDefault();
            goToPageAndScroll("about");
            closeMenu();
          }}
          className="cursor-pointer hover:text-blue-400 transition-colors py-2"
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          onClick={(e) => {
            e.preventDefault();
            goToPageAndScroll("works");
            closeMenu();
          }}
          className="cursor-pointer hover:text-blue-400 transition-colors py-2"
          to="/works"
        >
          Works
        </NavLink>
        <NavLink
          to="/contact"
          onClick={(e) => {
            e.preventDefault();
            goToPageAndScroll("contact");
            closeMenu();
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
          to="/"
          onClick={closeMenu}
          className="cursor-pointer hover:text-blue-400 transition-colors py-2"
        >
          Services
        </NavLink>
        <NavLink
          onClick={(e) => {
            e.preventDefault();
            goToPageAndScroll("about");
            closeMenu();
          }}
          className="cursor-pointer hover:text-blue-400 transition-colors py-2"
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          onClick={(e) => {
            e.preventDefault();
            goToPageAndScroll("works");
            closeMenu();
          }}
          className="cursor-pointer hover:text-blue-400 transition-colors py-2"
          to="/works"
        >
          Works
        </NavLink>
        <NavLink
          to="/contact"
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
        "header gap-7",
        !transparent && "mist-header-colors",
        transparent && "!z-50",
      ]
        .filter(Boolean)
        .join(" ")}
      id="navigation"
    >
      <div className="flex items-center gap-7">
        {isCroPage ? (
          <>
            <NavLink
              to="/cro"
              onClick={handleCroLogoClick}
              className="hidden sm:flex h-10 px-3 rounded-lg bg-white items-center justify-center font-bold shadow-md shadow-pink-400/30 hover:shadow-lg hover:shadow-pink-400/30 transition-shadow"
            >
              {croLogoLabel}
            </NavLink>
            <button
              type="button"
              onClick={toggleMenu}
              className="sm:hidden h-10 px-2 rounded-lg bg-white items-center justify-center flex font-bold shadow-md shadow-pink-400/30 hover:shadow-lg hover:shadow-pink-400/30 transition-shadow"
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

        <nav className="hidden sm:flex text-lg gap-7 font-medium text-white items-center">
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

      <div className="text-blue-500 cursor-pointer flex items-center gap-2">
        <FaGlobe className="text-lg" />
        <LanguageSelector />
      </div>

      {isMenuOpen && (
        <div className="w-max mx-auto sm:hidden absolute top-full left-0 right-0 bg-[#f9c6e1]/60 backdrop-blur-sm border border-white/20 rounded-lg mt-2 p-4 z-50 shadow-lg shadow-pink-400/30">
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
                        closeMenu();
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
