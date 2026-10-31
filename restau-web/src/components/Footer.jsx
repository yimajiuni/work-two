import { Link } from "react-scroll";
import { useLanguage } from "../i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="mt-2 rounded-t-3xl bg-black p-8 text-white sm:p-5 md:p-10">
      <div className="flex flex-col justify-between gap-8 px-0 md:flex-row md:px-32">
        <div className="w-full md:w-1/3">
          <div className="site-logo-mark pb-3">
            <span className="site-logo-mark__script text-3xl text-brightColor">
              Marea
            </span>
            <span className="site-logo-mark__note text-white/70">
              {t.footer.logoNote}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-white/80">{t.footer.blurb}</p>
        </div>
        <div>
          <h2 className="font-hedding pb-4 pt-2 text-xl font-medium md:pt-0">
            {t.footer.links}
          </h2>
          <nav className="flex flex-col gap-2">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer transition-all hover:text-brightColor"
            >
              {t.footer.ourStory}
            </Link>
            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer transition-all hover:text-brightColor"
            >
              {t.footer.omakase}
            </Link>
            <Link
              to="review"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer transition-all hover:text-brightColor"
            >
              {t.footer.reviews}
            </Link>
          </nav>
        </div>
        <div>
          <h2 className="font-hedding pb-3 pt-2 text-xl font-medium md:pt-0">
            {t.footer.menu}
          </h2>
          <nav className="flex flex-col gap-2">
            <Link
              to="dishes"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer transition-all hover:text-brightColor"
            >
              {t.footer.ourDishes}
            </Link>
            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer transition-all hover:text-brightColor"
            >
              {t.footer.creativeOmakase}
            </Link>
          </nav>
        </div>
        <div>
          <h2 className="font-hedding pb-4 pt-2 text-xl font-medium md:pt-0">
            {t.footer.contact}
          </h2>
          <nav className="flex flex-col gap-2 text-sm md:text-base">
            <a
              className="cursor-pointer transition-all hover:text-brightColor"
              href="mailto:hello@marea.example"
            >
              hello@marea.example
            </a>
            <a
              className="cursor-pointer transition-all hover:text-brightColor"
              href="tel:+810000000000"
            >
              +81 (0)00 0000 0000
            </a>
            <span className="text-white/60">{t.footer.social}</span>
          </nav>
        </div>
      </div>
      <p className="py-6 text-center text-sm text-white/70">
        © {new Date().getFullYear()}
        <span className="text-brightColor"> Marea </span>
        {t.footer.copyright}
      </p>
    </footer>
  );
};

export default Footer;
