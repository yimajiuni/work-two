import { useState, useEffect } from "react";
import OrderButton from "../layouts/OrderButton";
import { Link } from "react-scroll";
import heroImg from "../assets/img/hero1.jpg";
import movie1 from "../assets/mov/movie-1.mp4";
import { useLanguage } from "../i18n/LanguageContext";

const Home = () => {
  const [showContent, setShowContent] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setShowContent(window.scrollY < 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero-liquid relative z-10 flex items-center justify-center">
      <div className="hero-liquid__media">
        <video
          src={movie1}
          poster={heroImg}
          autoPlay
          muted
          loop
          playsInline
          aria-label={t.home.alt}
        />
        <div className="hero-liquid__shade" aria-hidden="true" />
      </div>

      <div className="relative z-10 flex w-full justify-center px-5 py-28 md:px-10 lg:px-32">
        {showContent && (
          <div className="max-w-3xl rounded-lg bg-black/35 px-6 py-8 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] backdrop-blur-md sm:px-10 sm:py-10">
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-backgroundColor">
              {t.home.eyebrow}
            </p>
            <h1 className="head-text font-semibold text-backgroundColor sm:!text-5xl md:!text-6xl">
              {t.home.title}
            </h1>
            <p className="font-body py-4 text-lg leading-relaxed text-backgroundColor md:text-xl lg:text-2xl">
              {t.home.body}
            </p>
            <div className="flex w-full justify-center">
              <Link
                to="menu"
                spy={true}
                smooth={true}
                duration={500}
                className="inline-block cursor-pointer"
              >
                <OrderButton title={t.home.cta} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
