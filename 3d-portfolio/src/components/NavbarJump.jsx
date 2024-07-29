import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import LanguageSelector from "../components/LanguageSelector";

const NavbarJump = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">今</p>
      </NavLink>
      <Link
        to="/"
        spy={true}
        smooth={true}
        duration={500}
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">今</p>
      </Link>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-white"
          }
        >
          about
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-white"
          }
        >
          devs
        </NavLink>
        <NavLink
          to="/designs"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-white"
          }
        >
          designs
        </NavLink>

        <NavLink className="text-blue-500">
          <div>language</div>
          <div className="active">
            <ul className="navLists flex">
              <LanguageSelector />
            </ul>
          </div>
        </NavLink>
      </nav>
    </header>
  );
};

export default NavbarJump;
