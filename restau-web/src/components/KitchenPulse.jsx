import VideoPlaceholder from "./VideoPlaceholder";
import aboutImg from "../assets/img/about.jpg";
import movie2 from "../assets/mov/movie-2.mp4";
import { useLanguage } from "../i18n/LanguageContext";

const KitchenPulse = () => {
  const { t } = useLanguage();

  return (
    <section
      id="kitchen"
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden lg:min-h-0 lg:aspect-[16/9] lg:max-h-[90vh]"
    >
      <VideoPlaceholder
        variant="background"
        src={movie2}
        poster={aboutImg}
        caption={t.about.videoCaption}
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      <div className="relative z-10 my-16 w-full max-w-3xl px-5 lg:px-8">
        <div className="rounded-xl bg-black/55 px-6 py-10 text-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] backdrop-blur-md md:px-12 md:py-14">
          <p className="mb-3 text-center text-sm uppercase tracking-[0.18em] text-brightColor">
            {t.about.kitchenEyebrow}
          </p>
          <h2 className="font-hedding pb-4 text-center text-2xl font-semibold md:text-3xl">
            {t.about.kitchenTitle}
          </h2>
          <p className="leading-relaxed text-white/90">{t.about.kitchenBody}</p>
        </div>
      </div>
    </section>
  );
};

export default KitchenPulse;
