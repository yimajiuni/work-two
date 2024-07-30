import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import LanguageSelector from "../components/LanguageSelector";
import { Link as ScrollLink } from "react-scroll";
import * as Scroll from "react-scroll";
import { FaGlobe } from "react-icons/fa";

const NavbarJump = () => {
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

  return (
    <header className="header" id="navigation">
      <NavLink
        to="/details"
        onClick={scrollToTop}
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">今</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium text-white">
        {location !== "contact" ? (
          location === "home" ? ( //homeの時
            <>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/designs">Designs</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </>
          ) : (
            //contactでもhomeでもない時
            <>
              <ScrollLink
                className="cursor-pointer"
                activeclass="active"
                to="/"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
              >
                About
              </ScrollLink>
              <ScrollLink
                onClick={() => goToPageAndScroll("projects")}
                className="cursor-pointer"
                activeclass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
              >
                Projects
              </ScrollLink>
              <ScrollLink
                onClick={() => goToPageAndScroll("designs")}
                className="cursor-pointer"
                activeclass="active"
                to="designs"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
              >
                Designs
              </ScrollLink>
              <NavLink
                to="/contact"
                onClick={() => goToPageAndScroll("contact")}
                className="ncursor-pointer"
                activeclass="active"
                spy={true}
              >
                Contact
              </NavLink>
            </>
          )
        ) : (
          //contactの時
          <>
            <NavLink
              className="cursor-pointer"
              activeclass="active"
              to="/"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
            >
              About
            </NavLink>
            <NavLink
              className="cursor-pointer"
              activeclass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
            >
              Projects
            </NavLink>
            <NavLink to="/designs">Designs</NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-white"
              }
            >
              Contact
            </NavLink>
          </>
        )}
        <div className="text-blue-500">
          <div>language</div>
          <div className="active">
            <ul className="navLists flex">
              <LanguageSelector />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarJump;
