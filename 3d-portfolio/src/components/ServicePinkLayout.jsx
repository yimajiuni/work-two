import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation, Trans } from "react-i18next";
import i18n from "i18next";
import AnimatedMetric from "./AnimatedMetric";

/** Theme meta + Service CSS for pink (also index.css [data-theme="pink"]). */
export const pinkTheme = {
  id: "pink",
  label: "Pink",
  structure: "pink-v1",
  shell: {
    rootClass: "pink-gradient_bg",
    rootExtraClass: "mt-14 sm:mt-0 transition-all",
  },
  motion: {
    timelineDefaultDuration: 0.6,
    timelineDefaultEase: "power2.out",
    glowDuration: 0.9,
    sectionMoveDuration: 0.8,
    resetBeforeShuffleMs: 700,
    navShuffleDelayMs: 400,
    autoScrollDelayMs: 600,
    navButtonDuration: 0.6,
    resetDuration: 0.6,
    scaleDuration: 0.3,
    glowColor: "0 0 30px rgba(4, 206, 251, 0.51)",
    sectionBorderRadius: "20px",
    scrollOffsetMain: 300,
    scrollOffsetShuffle: 100,
    // LCP block scroll after section-2 shuffle (px from top). Larger = lands higher.
    scrollOffsetLcp: 500,
  },
  chrome: {
    headerClass: "mist-header-colors",
    menuOverlayClass: "bg-pink-200/40",
  },
  /** Shared widgets (modals / language) — pink brand fills; blues use --theme-accent in components */
  uiChrome: {
    languageSelector: {
      trigger:
        "language-selector appearance-none border-none outline-none text-white text-sm font-medium cursor-pointer transition-opacity hover:opacity-90 shadow-sm shadow-pink-400/30 hover:shadow-md hover:shadow-pink-400/30 transition-shadow",
      menu: "language-selector-menu absolute right-0 top-[calc(100%+0.25rem)] z-[60] min-w-full overflow-hidden rounded-md border border-white/30 bg-pink-200/40 shadow-lg shadow-pink-400/20 backdrop-blur-sm",
      option:
        "language-selector-option w-full px-3 py-2 text-left text-sm font-medium bg-pink-200/40 text-blue-500 transition-colors hover:text-white hover:bg-blue-500",
      optionSelected: "bg-pink-300/40 text-blue-500 hover:text-white hover:bg-blue-500",
    },
    projectQuote: {
      dotAnswered: "bg-pink-400",
      radioInput: "w-4 h-4 accent-[color:var(--theme-accent,#2b77e7)]",
      gridButtonSelected:
        "bg-pink-300/50 border-white/50 text-gray-500 hover:bg-white/20 hover:border-white/40",
      gridButtonUnselected:
        "bg-pink-300/50 border-white/50 text-gray-500 hover:bg-white/20 hover:border-white/40",
      buttonDisabled: "bg-pink-200/40 text-white/70 cursor-not-allowed",
      buttonPrevious: "bg-white text-pink-400",
      buttonSubmitting: "bg-pink-300/40 text-white cursor-not-allowed",
      successContainer:
        "border border-gray-500 bg-pink-300/50 backdrop-blur-sm rounded-lg p-8 border border-white/20 max-w-md w-full text-center",
      successButtonSecondary:
        "px-6 py-3 bg-pink-300/40 text-white rounded-lg font-semibold hover:bg-white/30 transition-colors",
    },
    nextJsReport: {
      tableCellAccent: "px-4 py-2 text-pink-600 font-semibold",
    },
  },
};

/** Service shell chrome (main / nav / decorative) — used by Service.jsx */
export const pinkServiceChrome = {
  mainContainer: 'max-container pt-8 -mt-32 sm:-mt-24',
  navigation: 'fixed bottom-0 left-0 right-0 flex justify-center items-center h-[90px] sm:h-24 bg-white/10 backdrop-blur-sm border-t border-white/20 z-50',
  navigationContent: 'h-full flex items-center justify-center',
  navigationNav: 'flex gap-4 sm:gap-8 text-xs sm:text-base',
  navigationButton: 'sm:px-6 sm:py-3 px-2 py-4 rounded-lg font-semibold transition-all duration-300',
  navigationButtonActive: 'bg-blue-500 text-white shadow-lg',
  navigationButtonInactive: 'bg-white/20 border border-white/20 text-blue-500 hover:bg-white/30',
  navigationReset: 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 bg-white/20 border border-white/20 text-blue-500 hover:bg-white/30',
  navigationId: 'section-5',
  navSectionIds: [
    1,
    2,
    3,
    4
  ],
  decorativeContainer: 'fixed inset-0 w-full min-w-[24rem] top-[48%] sm:top-[58%] lg:top-[43%] max-w-[82rem] left-1/2 transform -translate-x-1/2 z-40 pointer-events-none',
  decorativeLeft: 'absolute left-0 sm:left-6 transform -translate-y-1/2 w-28 sm:w-44 lg:w-[250px] h-20 sm:h-20 lg:h-24',
  decorativeRight: 'absolute right-0 sm:right-6 transform -translate-y-1/2 w-32 sm:w-48 lg:w-[270px] h-24 sm:h-24 lg:h-32',
  decorativeQuoteLink: 'text-drop-shadow-white absolute text-[15px] sm:text-lg lg:text-lg right-[12%] sm:right-[18%] lg:right-[28%] bottom-[62%] sm:bottom-[60%] lg:bottom-[60%] text-blue-500 font-bold cursor-pointer hover:scale-110 transition-all duration-300 font-handwriting2 pointer-events-auto z-50 transform -rotate-3',
  decorativeContactLink: 'text-drop-shadow-white absolute text-[15px] sm:text-lg lg:text-lg left-[15%] sm:left-[20%] lg:left-[20%] bottom-[62%] sm:bottom-[60%] lg:bottom-[60%] text-blue-500 font-bold cursor-pointer hover:scale-110 transition-all duration-300 font-handwriting2 pointer-events-auto z-50 transform rotate-3',
  decorativeQuoteLinkRainbow: 'absolute text-[15px] sm:text-sm lg:text-lg right-[12%] sm:right-[25%] lg:right-[28%] bottom-[62%] sm:bottom-[60%] lg:bottom-[60%] text-blue-500 font-bold cursor-pointer hover:scale-110 transition-all duration-300 font-handwriting pointer-events-auto z-50 transform -rotate-3 bg-gradient-to-r from-[#00c6ff] via-purple-500 to-pink-500 bg-clip-text text-transparent',
  decorativeContactLinkRainbow: 'absolute text-[15px] sm:text-sm lg:text-lg left-[10%] sm:left-[20%] lg:left-[20%] bottom-[62%] sm:bottom-[65%] lg:bottom-[60%] text-blue-500 font-bold cursor-pointer hover:scale-110 transition-all duration-300 font-handwriting pointer-events-auto z-50 transform rotate-3 bg-gradient-to-r from-[#00c6ff] via-yellow-500 to-red-500 bg-clip-text text-transparent'
};


const classes = {
  section1: 'rounded-[20px] service-section-to-t backdrop-blur-sm border border-white/20 pt-10 mt-0 sm:mt-10 mb-20 flex items-center justify-center pb-20 px-4',
  section2: 'rounded-[20px] service-section-to-b backdrop-blur-sm border border-white/20 pt-10 mt-10 mb-20 flex items-center py-20 justify-center',
  section3: 'rounded-[20px] service-section-to-b backdrop-blur-sm border border-white/20 pt-10 mt-10 mb-20 flex items-center py-20 justify-center',
  section4: 'rounded-[20px] service-section-to-t backdrop-blur-sm border border-white/20 pt-10 mt-10 mb-10 flex items-center py-20 overflow-hidden justify-center',
  sectionContent: 'mx-8 max-w-6xl',
  sectionContent4: 'mx-8 max-w-4xl w-full mt-2',
  sectionTextCenter: 'text-center',
  title: 'tracking-tight text-4xl sm:text-6xl font-bold text-white mb-4 sm:mb-6',
  title2: 'tracking-tight text-4xl sm:text-6xl font-bold text-white mb-4 sm:mb-6',
  titleHighlight: 'blue-gradient_text text-[36px] sm:text-6xl drop-shadow block',
  subtitle: 'text-[28px] sm:text-4xl font-bold text-white mb-6',
  subtitleHighlight: 'text-[26px] font-bold sm:text-4xl text-white  block mb-3',
  sectionTitle: 'text-4xl font-bold text-white mb-6',
  description: 'text-lg text-white/80 max-w-3xl mx-auto mb-4',
  descriptionLarge: 'text-xl text-white/80 mb-4 sm:mb-6 max-w-2xl mx-auto',
  image: 'mx-auto w-[100%] sm:w-full h-60 sm:h-[80%] object-fit rounded-lg transition-transform duration-300',
  imageHover: 'w-full h-96 h-[100%] sm:h-max object-cover sm:object-fit rounded-lg hover:scale-105 hover:shadow-pink-400/30 transition-transform duration-300',
  ctaButton: 'inline-block octagon-gradient octagon-blue-gradient octagon-lg font-semibold text-lg hover:shadow-lg hover:shadow-pink-400/30 transition-all duration-300 hover:scale-105',
  demoButton: 'inline-block octagon-gradient octagon-blue-gradient octagon-md font-semibold text-lg hover:shadow-lg hover:shadow-pink-400/30 transition-all duration-300 hover:scale-105',
  performanceButton: 'inline-block octagon-gradient octagon-blue-gradient octagon-md font-semibold text-lg hover:shadow-lg hover:shadow-pink-400/30 transition-all duration-300 hover:scale-105',
  quoteButton: 'inline-block octagon-gradient octagon-blue-gradient octagon-lg font-semibold text-lg hover:shadow-lg hover:shadow-pink-400/30 transition-all duration-300 hover:scale-105',
  cardFlex: 'flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20',
  techCard: 'bg-white/10 backdrop-blur-sm p-8 border border-white/20 rounded-lg flex flex-col items-center justify-center text-center',
  techTitle: 'text-xl font-semibold text-white mb-4',
  techDescription: 'text-white/80',
  performanceContainer: 'bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20',
  performanceTitle: 'text-2xl font-bold text-white mb-1 text-center',
  performanceSubtitle: 'text-md font-bold text-white/80 mb-6 text-center',
  performanceGrid: 'grid md:grid-cols-3 gap-8 mb-6',
  performanceButtonContainer: 'text-center',
  quoteContainer: 'bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20',
  quoteTitle: 'text-2xl font-bold text-white mb-4',
  quoteButtonContainer: 'text-center',
};


/**
 * Pink-theme Service layout.
 * Section classes + pinkServiceChrome live here; pink CSS rules in index.css [data-theme="pink"].
 * Copy / images / CTAs come from shared props + i18n.
 */
export default function ServicePinkLayout({
  refs,
  images,
  handlers,
  isPerformanceSectionVisible,
}) {
  const { t } = useTranslation();
  const yimajiuniTitle = (
    <Trans
      i18nKey="service.section1.yimajiuni"
      components={{
        punct: <span className="title-punct" />,
        after: <span className="title-after" />,
      }}
    />
  );
  const {
    section1Ref,
    section2Ref,
    section3Ref,
    section4Ref,
    performanceSectionRef,
  } = refs;
  const { yimajiuniPark, nextEcomShopify, lcpPO } = images;
  const {
    openLcpImprovementModal,
    openNextJsReportModal,
    openProjectQuoteModal,
    runLcpImprovementWarmup,
  } = handlers;

  return (
    <>
      {/* Section 1: Main Visual + Copy and CTA */}
      <section id="section-1" ref={section1Ref} className={classes.section1}>
        <div className="text-center max-w-4xl">
          <h1 className={classes.title}>
            {t("service.section1.title")}
            <span className="responsive-br" />
            <span className={classes.title2}>{t("service.section1.title2")}</span>
            <span className={classes.titleHighlight}>
              {t("service.section1.titleHighlight")}
            </span>
          </h1>

          <div className="w-full rounded-lg mb-6">
            <img
              src={yimajiuniPark}
              alt="Yimajiuni Park - Creative Workspace"
              className={classes.image}
              fetchpriority="high"
              width="1200"
              height="949"
            />
          </div>
          <p className="text-xl font-bold text-white mb-4">
            {yimajiuniTitle}
          </p>

          <p className={classes.descriptionLarge}>
            {t("service.section1.description")}
          </p>

          <ScrollLink
            to="section-4"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className={classes.ctaButton}
          >
            {t("service.section1.cta")}
          </ScrollLink>
        </div>
      </section>

      {/* Section 2: Product Introduction */}
      <section id="section-2" ref={section2Ref} className={classes.section2}>
        <div className={classes.sectionContent}>
          <div className={classes.sectionTextCenter}>
            <div className="flex flex-col gap-10">
              <div>
                <h2 className={classes.subtitle}>{t("service.section2.title")}</h2>
                <span className={classes.subtitleHighlight}>
                  {t("service.section2.titleHighlight")}
                </span>

                <div className="w-full rounded-lg mb-6">
                  <img
                    src={nextEcomShopify}
                    alt="Next.js E-commerce Shopify Demo Site"
                    className={classes.imageHover}
                    loading="lazy"
                    width="800"
                    height="400"
                  />
                </div>

                <div className={classes.cardFlex}>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {t("service.section2.demo.description")}
                  </h3>

                  <a
                    href="https://next-shopify.yimajiuni.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.demoButton}
                  >
                    {t("service.section2.demo.button")}
                  </a>
                </div>
              </div>

              <div
                id="section-2-lcp"
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <div className="w-full rounded-lg">
                  <img
                    src={lcpPO}
                    alt={t("service.section2.lcp.imageAlt")}
                    className="w-full h-auto max-h-[420px] object-cover rounded-lg hover:scale-[1.02] hover:shadow-pink-400/30 transition-transform duration-300"
                    loading="lazy"
                    width="800"
                    height="400"
                  />
                </div>

                <div className={classes.cardFlex}>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {t("service.section2.lcp.description")}
                  </h3>
                  <p className="text-lg text-white mb-4">
                    {t("service.section2.lcp.description2")}
                  </p>

                  <button
                    type="button"
                    onClick={openLcpImprovementModal}
                    onMouseEnter={runLcpImprovementWarmup}
                    onFocus={runLcpImprovementWarmup}
                    className={classes.demoButton}
                  >
                    {t("service.section2.lcp.button")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Service Details */}
      <section
        id="section-3"
        ref={section3Ref}
        className={`${classes.section3} relative overflow-hidden`}
      >
        <div className="relative z-10">
          <div className={classes.sectionContent}>
            <div className={classes.sectionTextCenter}>
              <h2 className={classes.sectionTitle}>{t("service.section3.title")}</h2>
              <p className={classes.description}>{t("service.section3.description")}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className={classes.techCard}>
                <h3 className={classes.techTitle}>
                  {t("service.section3.technologies.nextjs.title")}
                </h3>
                <p className={classes.techDescription}>
                  {t("service.section3.technologies.nextjs.description")}
                </p>
              </div>
              <div className={classes.techCard}>
                <h3 className={classes.techTitle}>
                  {t("service.section3.technologies.shopify.title")}
                </h3>
                <p className={classes.techDescription}>
                  {t("service.section3.technologies.shopify.description")}
                </p>
              </div>
              <div className={classes.techCard}>
                <h3 className={classes.techTitle}>
                  {t("service.section3.technologies.branding.title")}
                </h3>
                <p className={classes.techDescription}>
                  {t("service.section3.technologies.branding.description")}
                </p>
              </div>
            </div>

            <div ref={performanceSectionRef} className={classes.performanceContainer}>
              <h3 className={classes.performanceTitle}>
                {t("service.section3.performance.title")}
              </h3>
              <h4 className={classes.performanceSubtitle}>
                {t("service.section3.performance.subtitle")}
              </h4>
              <div className={classes.performanceGrid}>
                <AnimatedMetric
                  label={t("service.section3.performance.labels.imageSpeed")}
                  labelKey="imageSpeed"
                  startValue="1.2sec"
                  endValue="0.5sec"
                  duration={4000}
                  delay={0}
                  shouldStart={isPerformanceSectionVisible}
                />
                <AnimatedMetric
                  label={t("service.section3.performance.labels.conversionRate")}
                  labelKey="conversionRate"
                  startValue="1.9%"
                  endValue="1.3%"
                  duration={4000}
                  delay={300}
                  shouldStart={isPerformanceSectionVisible}
                />
                <AnimatedMetric
                  label={t("service.section3.performance.labels.mobileBounce")}
                  labelKey="mobileBounce"
                  startValue="65%"
                  endValue="20%"
                  duration={4000}
                  delay={600}
                  shouldStart={isPerformanceSectionVisible}
                />
              </div>
              <div className={classes.performanceGrid}>
                <AnimatedMetric
                  label={t("service.section3.performance.labels.organicTraffic")}
                  labelKey="organicTraffic"
                  startValue="rank 22"
                  endValue="rank 15"
                  duration={4000}
                  delay={900}
                  shouldStart={isPerformanceSectionVisible}
                />
                <AnimatedMetric
                  label={t("service.section3.performance.labels.operationHours")}
                  labelKey="operationHours"
                  startValue="25 hours"
                  endValue="15 hours"
                  duration={4000}
                  delay={1200}
                  shouldStart={isPerformanceSectionVisible}
                />
                <AnimatedMetric
                  label={t("service.section3.performance.labels.serverCost")}
                  labelKey="serverCost"
                  startValue={i18n.language === "jp" ? "43万円" : "$4000"}
                  endValue={i18n.language === "jp" ? "20万円" : "$2000"}
                  duration={4000}
                  delay={1500}
                  shouldStart={isPerformanceSectionVisible}
                />
              </div>

              <div className={classes.performanceButtonContainer}>
                <button
                  type="button"
                  onClick={openNextJsReportModal}
                  className={classes.performanceButton}
                >
                  {t("service.section3.performance.button")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Quotation App */}
      <section id="section-4" ref={section4Ref} className={classes.section4}>
        <div className={classes.sectionContent4}>
          <div className={classes.sectionTextCenter}>
            <h2 className={classes.sectionTitle}>{t("service.section4.title")}</h2>
            <p className={classes.description}>{t("service.section4.description")}</p>
          </div>

          <div id="quote" className={classes.quoteContainer}>
            <div className={classes.quoteButtonContainer}>
              <h3 className={classes.quoteTitle}>
                {t("service.section4.calculator.title")}
              </h3>

              <button
                type="button"
                onClick={openProjectQuoteModal}
                className={classes.quoteButton}
              >
                {t("service.section4.calculator.button")}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
