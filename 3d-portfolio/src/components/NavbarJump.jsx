import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import LanguageSelector from "../components/LanguageSelector";
import { Link as ScrollLink } from "react-scroll";
import * as Scroll from "react-scroll";
import { FaGlobe } from "react-icons/fa";

const NavbarJump = ({ onMenuStateChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = useLocation().pathname;
  const location = path.split("/")[1];
  const navigate = useNavigate();
  const scroller = Scroll.scroller;

  // Route map: maps section selectors to their correct routes
  // This ensures we navigate to the right page before scrolling
  const routeMap = {
    about: "/about",
    works: "/works",
    contact: "/contact",
  };

  // Fixed header offset to account for the fixed navigation bar
  const HEADER_OFFSET = -5; // Adjust based on your header height

  const goToPageAndScroll = async (selector) => {
    try {
      // Get the target route for this selector
      const targetRoute = routeMap[selector] || "/";

      // Check if we need to navigate to a different page
      const needsNavigation = path !== targetRoute;

      if (needsNavigation) {
        // Navigate to the correct page first
        await navigate(targetRoute);
        // Wait for navigation and DOM to be ready
        await new Promise((resolve) => setTimeout(resolve, 400));
      } else {
        // Already on the correct page, just wait a bit for elements to be ready
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      // Now scroll to the target element
      try {
        const targetElement = document.getElementById(selector);
        if (targetElement) {
          await scroller.scrollTo(selector, {
            duration: 500,
            smooth: true,
            offset: HEADER_OFFSET, // Account for fixed header
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

  const scrollToTop = () => {
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

  return (
    <header className="header gap-7" id="navigation">
      <div className="flex items-center gap-7">
        {/* 今 button - always visible, links to service on desktop/tablet, hamburger on mobile */}
        <NavLink
          to=""
          className="hidden sm:flex w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md shadow-pink-400/30 hover:shadow-lg hover:shadow-pink-400/30 transition-shadow"
        >
          <p className="blue-gradient_text">今</p>
        </NavLink>

        {/* Mobile: 今 button as hamburger */}
        <button
          onClick={toggleMenu}
          className="sm:hidden w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md shadow-pink-400/30 hover:shadow-lg hover:shadow-pink-400/30 transition-shadow"
        >
          <p className="blue-gradient_text">今</p>
        </button>

        {/* Desktop/Tablet navigation - hidden on mobile */}
        <nav className="hidden sm:flex text-lg gap-7 font-medium text-white items-center">
          {location !== "contact" ? (
            <>
              <NavLink
                onClick={(e) => {
                  e.preventDefault();
                  goToPageAndScroll("about");
                }}
                className="cursor-pointer hover:text-blue-400 transition-colors"
                to="about"
              >
                About
              </NavLink>
              <NavLink
                onClick={(e) => {
                  e.preventDefault();
                  goToPageAndScroll("works");
                }}
                className="cursor-pointer hover:text-blue-400 transition-colors"
                to="works"
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
                to="about"
              >
                About
              </NavLink>
              <NavLink
                onClick={(e) => {
                  e.preventDefault();
                  goToPageAndScroll("works");
                }}
                className="cursor-pointer hover:text-blue-400 transition-colors"
                to="works"
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
        </nav>
      </div>

      {/* Language selector - always visible on top right */}
      <div className="text-blue-500 cursor-pointer flex items-center gap-2">
        <FaGlobe className="text-lg" />
        <LanguageSelector />
      </div>

      {/* Mobile dropdown menu - only on mobile */}
      {isMenuOpen && (
        <div className="w-max mx-auto sm:hidden absolute top-full left-0 right-0 bg-[#f9c6e1]/60 backdrop-blur-sm border border-white/20 rounded-lg mt-2 p-4 z-50 shadow-lg shadow-pink-400/30">
          <nav className="flex justify-between gap-4 text-lg font-medium text-white">
            {location !== "contact" && location !== "service" ? (
              <>
                <NavLink
                  to=""
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
                  to="about"
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
                  to="works"
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
                  to=""
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
                  to="about"
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
                  to="works"
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
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavbarJump;
