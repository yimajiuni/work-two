import { Link } from "react-scroll";
import OrderButton from "../layouts/OrderButton";
import aboutImg from "../assets/img/about.jpg";
import { useLanguage } from "../i18n/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="z-10 w-full">
      <div className="px-5 pb-10 pt-24 text-center lg:px-32">
        <p className="mb-3 text-sm uppercase tracking-[0.18em] text-brightColor">
          {t.about.eyebrow}
        </p>
        <h1 className="font-hedding heading-balanced text-4xl font-semibold md:text-5xl">
          {t.about.title}
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-lightText md:text-lg">
          {t.about.intro}
        </p>
      </div>

      <div className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden lg:min-h-0 lg:aspect-[16/9] lg:max-h-[90vh]">
        <div className="media-zoom absolute inset-0">
          <img
            src={aboutImg}
            alt={t.about.alt}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35" aria-hidden="true" />
        </div>

        <div className="relative z-10 my-16 w-full max-w-3xl px-5 lg:px-8">
          <div className="rounded-xl bg-backgroundColor/90 px-6 py-10 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] md:px-12 md:py-14">
            <h2 className="font-hedding pb-6 text-center text-xl font-bold md:text-2xl">
              {t.about.thisIsUs}
            </h2>
            <p className="pb-4 leading-relaxed">{t.about.p1}</p>
            <p className="leading-relaxed">{t.about.p2}</p>
            <div className="flex w-full justify-center pt-10">
              <Link to="menu" spy={true} smooth={true} duration={500}>
                <OrderButton title={t.about.cta} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
