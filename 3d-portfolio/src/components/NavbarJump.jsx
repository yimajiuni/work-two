import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import LanguageSelector from "../components/LanguageSelector";
import { Link as ScrollLink } from "react-scroll";
import * as Scroll from "react-scroll";
import { FaGlobe } from "react-icons/fa";

const NavbarJump = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = useLocation().pathname;
  const location = path.split("/")[1];
  const navigate = useNavigate();
  const scroller = Scroll.scroller;

  const goToPageAndScroll = async (selector) => {
    await navigate("/");
    await scroller.scrollTo(selector, {
      duration: 500,
      smooth: true,
      offset: 10,
      spy: true,
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header gap-7" id="navigation">
      <div className="flex items-center gap-7">
        {/* 今 button - always visible, links to service on desktop/tablet, hamburger on mobile */}
        <NavLink
          to="/service"
          className="hidden sm:flex w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md shadow-pink-400/30 hover:shadow-lg transition-shadow"
        >
          <p className="blue-gradient_text">今</p>
        </NavLink>

        {/* Mobile: 今 button as hamburger */}
        <button
          onClick={toggleMenu}
          className="sm:hidden w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md shadow-pink-400/30 hover:shadow-lg transition-shadow"
        >
          <p className="blue-gradient_text">今</p>
        </button>

        {/* Desktop/Tablet navigation - hidden on mobile */}
        <nav className="hidden sm:flex text-lg gap-7 font-medium text-white items-center">
          {location !== "contact" ? (
            <>
              <ScrollLink
                onClick={() => goToPageAndScroll("about")}
                className="cursor-pointer hover:text-blue-400 transition-colors"
                activeclass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
              >
                About
              </ScrollLink>
              <ScrollLink
                onClick={() => goToPageAndScroll("works")}
                className="cursor-pointer hover:text-blue-400 transition-colors"
                activeclass="active"
                to="works"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
              >
                Works
              </ScrollLink>

              <NavLink
                to="/contact"
                onClick={() => goToPageAndScroll("contact")}
                className="cursor-pointer hover:text-blue-400 transition-colors"
                spy={true}
              >
                Contact
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                onClick={() => goToPageAndScroll("about")}
                className="cursor-pointer hover:text-blue-400 transition-colors"
                activeclass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
              >
                About
              </NavLink>
              <NavLink
                onClick={() => goToPageAndScroll("works")}
                className="cursor-pointer hover:text-blue-400 transition-colors"
                activeclass="active"
                to="works"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
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
      <div className="text-blue-500 cursor-pointer flex items-center gap-2 hover:text-blue-400 transition-colors">
        <FaGlobe className="text-lg" />
        <LanguageSelector />
      </div>

      {/* Mobile dropdown menu - only on mobile */}
      {isMenuOpen && (
        <div className="w-max mx-auto sm:hidden absolute top-full left-0 right-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg mt-2 p-4 z-50 shadow-lg">
          <nav className="flex justify-between gap-4 text-lg font-medium text-white">
            {location !== "contact" ? (
              <>
                <ScrollLink
                  onClick={() => {
                    goToPageAndScroll("works");
                    closeMenu();
                  }}
                  className="cursor-pointer hover:text-blue-400 transition-colors py-2"
                  activeclass="active"
                  to="/"
                  spy={true}
                  smooth={true}
                  offset={10}
                  duration={500}
                >
                  Works
                </ScrollLink>
                <ScrollLink
                  onClick={() => {
                    goToPageAndScroll("about");
                    closeMenu();
                  }}
                  className="cursor-pointer hover:text-blue-400 transition-colors py-2"
                  activeclass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={10}
                  duration={500}
                >
                  About
                </ScrollLink>
                <NavLink
                  to="/contact"
                  onClick={() => {
                    goToPageAndScroll("contact");
                    closeMenu();
                  }}
                  className="cursor-pointer hover:text-blue-400 transition-colors py-2"
                  spy={true}
                >
                  Contact
                </NavLink>
                <NavLink
                  to="/service"
                  onClick={closeMenu}
                  className="cursor-pointer hover:text-blue-400 transition-colors py-2"
                >
                  Services
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  onClick={() => {
                    goToPageAndScroll("works");
                    closeMenu();
                  }}
                  className="cursor-pointer hover:text-blue-400 transition-colors py-2"
                  activeclass="active"
                  to="works"
                  spy={true}
                  smooth={true}
                  offset={10}
                  duration={500}
                >
                  Works
                </NavLink>
                <NavLink
                  onClick={() => {
                    goToPageAndScroll("about");
                    closeMenu();
                  }}
                  className="cursor-pointer hover:text-blue-400 transition-colors py-2"
                  activeclass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={10}
                  duration={500}
                >
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500 py-2" : "text-white hover:text-blue-400 transition-colors"
                  }
                  onClick={closeMenu}
                >
                  Contact
                </NavLink>
                <NavLink
                  to="/service"
                  onClick={closeMenu}
                  className="cursor-pointer hover:text-blue-400 transition-colors py-2"
                >
                  Services
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
