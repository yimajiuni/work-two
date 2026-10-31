import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-scroll";

import { MdOutlineTravelExplore, MdOutlinePersonOutline } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import LanguageSwitcher from "../LanguageSwitcher";
import { useLanguage } from "../../i18n/LanguageContext";

const Navbar = () => {
  const { t } = useLanguage();
  const [active, setActive] = useState("navBar");
  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  const removeNav = () => {
    setActive("navBar");
  };

  return (
    <section className="navbarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="/" className="logo flex">
            <h1>
              <MdOutlineTravelExplore className="icon" />
              Travel.
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <Link
                className="navLink"
                to="coupons"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={removeNav}
              >
                {t.nav.coupons}
              </Link>
            </li>
            <li className="navItem">
              <Link
                className="navLink"
                to="main"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={removeNav}
              >
                {t.nav.packages}
              </Link>
            </li>
            <li className="navItem">
              <Link
                className="navLink"
                to="hashtags"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={removeNav}
              >
                {t.nav.recommended}
              </Link>
            </li>
            <li className="navItem">
              <Link
                className="navLink"
                to="footer"
                spy={true}
                smooth={true}
                duration={500}
                onClick={removeNav}
              >
                {t.nav.contact}
              </Link>
            </li>
            <button className="btn">
              <a href="/">{t.nav.bookNow}</a>
            </button>
            <a href="/" className="loginLink flex">
              <MdOutlinePersonOutline className="icon" aria-hidden="true" />
              {t.nav.logIn}
            </a>
            <LanguageSwitcher />
          </ul>
          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
