import { useState } from "react";
import { Link } from "react-scroll";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { CiMenuBurger } from "react-icons/ci";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../i18n/LanguageContext";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const { t } = useLanguage();

  const handleChange = () => {
    setMenu(!menu);
  };
  const closeMenu = () => {
    setMenu(false);
  };

  const mobileLinks = [
    ["home", t.nav.home],
    ["dishes", t.nav.dishes],
    ["about", t.nav.story],
    ["menu", t.nav.omakase],
    ["review", t.nav.reviews],
  ];

  return (
    <header className="header fixed z-40 w-full font-hedding">
      <div className="flex flex-row items-center justify-between gap-3 bg-white p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:px-8 lg:px-32">
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="site-logo-mark cursor-pointer"
        >
          <span className="site-logo-mark__script text-3xl text-brightColor md:text-4xl">
            Marea
          </span>
          <span className="site-logo-mark__note">{t.nav.logoNote}</span>
        </Link>

        <nav className="hidden flex-1 flex-row items-center justify-center gap-8 text-xl font-medium md:flex lg:text-2xl">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer transition-all hover:text-brightColor"
          >
            {t.nav.home}
          </Link>
          <div className="group relative z-30">
            <div className="flex items-center gap-1">
              <Link
                to="dishes"
                spy={true}
                smooth={true}
                duration={500}
                className="cursor-pointer transition-all hover:text-brightColor"
              >
                {t.nav.dishes}
              </Link>
              <BiChevronDown className="cursor-pointer" size={25} />
            </div>
            {/* pt-2 = hover bridge (avoids closing across the old mt-2 gap) */}
            <div className="absolute left-0 top-full z-40 hidden pt-2 group-hover:block">
              <ul className="min-w-max whitespace-nowrap rounded-lg border border-gray-300 bg-white p-4 text-left shadow-[0_3px_10px_rgb(0,0,0,0.12)] [writing-mode:horizontal-tb]">
                <li className="py-1">
                  <Link
                    to="seasonal"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-120}
                    className="block cursor-pointer transition-all hover:text-brightColor"
                  >
                    {t.nav.seasonal}
                  </Link>
                </li>
                <li className="py-1">
                  <Link
                    to="juicy"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-120}
                    className="block cursor-pointer transition-all hover:text-brightColor"
                  >
                    {t.nav.sharePlates}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer transition-all hover:text-brightColor"
          >
            {t.nav.story}
          </Link>
          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer transition-all hover:text-brightColor"
          >
            {t.nav.omakase}
          </Link>
          <Link
            to="review"
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer transition-all hover:text-brightColor"
          >
            {t.nav.reviews}
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <LanguageSwitcher />
          <div className="flex items-center md:hidden">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <CiMenuBurger size={25} onClick={handleChange} />
            )}
          </div>
        </div>
      </div>

      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } absolute left-0 top-full flex h-fit w-full flex-col gap-6 bg-black pb-6 pt-8 text-center text-2xl font-semibold text-white transition-transform duration-300 md:hidden`}
      >
        {mobileLinks.map(([to, label]) => (
          <Link
            key={to}
            to={to}
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer transition-all hover:text-brightColor"
            onClick={closeMenu}
          >
            {label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
