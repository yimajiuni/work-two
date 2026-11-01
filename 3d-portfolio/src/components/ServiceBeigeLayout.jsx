import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation, Trans } from "react-i18next";
import i18n from "i18next";
import AnimatedMetric from "./AnimatedMetric";
import { pinkTheme } from "./ServicePinkLayout";
import waPtnDia from "../assets/images/wa-ptn-dia.webp";
import waPtnWave from "../assets/images/wa-ptn-wave.webp";

const MD_UP_QUERY = "(min-width: 768px)";
const LG_UP_QUERY = "(min-width: 1024px)";

/** Match Tailwind `md` (768). SPA-safe; updates on resize. */
function useIsMdUp() {
  const [isMdUp, setIsMdUp] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(MD_UP_QUERY).matches : true,
  );

  useEffect(() => {
    const mql = window.matchMedia(MD_UP_QUERY);
    const onChange = () => setIsMdUp(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isMdUp;
}

/** Match Tailwind `lg` (1024) — desktop band above tablet. */
function useIsLgUp() {
  const [isLgUp, setIsLgUp] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(LG_UP_QUERY).matches : true,
  );

  useEffect(() => {
    const mql = window.matchMedia(LG_UP_QUERY);
    const onChange = () => setIsLgUp(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isLgUp;
}

/** Theme meta + Service CSS for beige (also index.css [data-theme="beige"]). */
export const beigeTheme = {
  ...pinkTheme,
  id: "beige",
  label: "Beige",
  structure: "beige-v1",
  motion: {
    ...pinkTheme.motion,
    // LCP block scroll after section-2 shuffle (px from top). Larger = lands higher.
    scrollOffsetLcp: 400,
    // Mobile stack: exact height swap (no pink-style margin overlap).
    secondRowShuffleGap: 0,
    secondRowShuffleGapLong: 0,
  },
  chrome: {
    ...pinkTheme.chrome,
    menuOverlayClass: "bg-[color:var(--theme-accent,#382797)]/15",
  },
  /** Shared widgets — beige accent; pink brand fills live only in pinkTheme.uiChrome */
  uiChrome: {
    languageSelector: {
      trigger:
        "language-selector whitespace-nowrap appearance-none border-none outline-none text-white text-sm font-medium cursor-pointer transition-opacity hover:opacity-90 shadow-sm shadow-[color:var(--theme-accent-shadow)] hover:shadow-md hover:shadow-[color:var(--theme-accent-shadow)] transition-shadow",
      menu: "language-selector-menu absolute left-1/2 -translate-x-1/2 top-[calc(100%+0.25rem)] z-[60] w-max min-w-full overflow-hidden rounded-md border border-[color:var(--theme-accent,#382797)]/30 bg-[color:var(--theme-section-bg,#F9EEEE)]/40 shadow-lg shadow-[color:var(--theme-accent-shadow)]",
      option:
        "bg-white/40 backdrop-blur-sm language-selector-option w-full px-3 py-2 text-left text-sm font-bold text-[color:var(--theme-accent,#382797)] transition-colors hover:text-white hover:bg-[color:var(--theme-accent,#382797)]",
      optionSelected:
        "!bg-[#CBA7A7] text-[color:var(--theme-accent,#382797)] hover:text-white hover:!bg-[color:var(--theme-accent,#382797)]",
    },
    projectQuote: {
      headerTitle: "text-2xl font-bold text-[#382797]",
      dotAnswered: "bg-[color:var(--theme-accent,#382797)]",
      dotCurrent: "bg-[#ADA7CB] scale-125",
      gridButtonSelected:
        "bg-[color:var(--theme-accent,#382797)]/15 border-[color:var(--theme-accent,#382797)]/40 text-gray-500 hover:bg-white/40 hover:border-[color:var(--theme-accent,#382797)]/50",
      gridButtonUnselected:
        "bg-[color:var(--theme-accent,#382797)]/10 border-[color:var(--theme-accent,#382797)]/30 text-gray-500 hover:bg-white/40 hover:border-[color:var(--theme-accent,#382797)]/40",
      buttonDisabled: "bg-[#CBA7A7]/40 text-white/70 cursor-not-allowed",
      buttonPrevious: "bg-[#CBA7A7] text-white",
      buttonSubmitting: "bg-[color:var(--theme-accent,#382797)]/25 text-white cursor-not-allowed",
      radioInput: "w-4 h-4 accent-[#382797]",
      successContainer:
        "border border-gray-500 bg-[color:var(--theme-section-bg,#F9EEEE)]/90 backdrop-blur-sm rounded-lg p-8 border border-[color:var(--theme-accent,#382797)]/30 max-w-md w-full text-center",
      successButtonSecondary:
        "px-6 py-3 bg-[color:var(--theme-accent,#382797)]/20 text-[color:var(--theme-accent,#382797)] rounded-lg font-semibold hover:bg-[color:var(--theme-accent,#382797)]/30 transition-colors",
    },
    nextJsReport: {
      tableCellAccent: "px-4 py-2 text-[color:var(--theme-accent,#382797)] font-semibold",
    },
  },
};

/** Orange = beige-v1 layout + dark orange tokens (see index.css [data-theme="orange"]).
 * Temporarily disabled — re-enable with themes/index.js registry + CSS blocks.
 */
// export const orangeTheme = {
//   ...beigeTheme,
//   id: "orange",
//   label: "Orange",
//   structure: "beige-v1",
//   chrome: {
//     ...beigeTheme.chrome,
//     menuOverlayClass: "bg-[color:var(--theme-accent,#F3FCD5)]/15",
//   },
//   uiChrome: {
//     ...beigeTheme.uiChrome,
//     languageSelector: {
//       ...beigeTheme.uiChrome.languageSelector,
//       menu: "language-selector-menu absolute left-1/2 -translate-x-1/2 top-[calc(100%+0.25rem)] z-[60] w-max min-w-full overflow-hidden rounded-md border border-[color:var(--theme-accent,#F3FCD5)]/30 bg-[color:var(--theme-section-bg,#252332)]/80 shadow-lg shadow-[color:var(--theme-accent-shadow)]",
//       option:
//         "bg-[#252332]/60 backdrop-blur-sm language-selector-option w-full px-3 py-2 text-left text-sm font-bold text-[color:var(--theme-accent,#F3FCD5)] transition-colors hover:text-[#252332] hover:bg-[color:var(--theme-accent,#F3FCD5)]",
//       optionSelected:
//         "!bg-[#FB5B0B] text-[#F3FCD5] hover:text-[#252332] hover:!bg-[color:var(--theme-accent,#F3FCD5)]",
//     },
//   },
// };

/** Service shell chrome (main / nav / decorative) — used by Service.jsx */
export const beigeServiceChrome = {
  mainContainer: 'mx-auto w-full pt-0 md:pt-8 mt-0 sm:mt-12 md:-mt-32 pb-28 flex flex-col gap-0',
  navigation: 'fixed bottom-0 left-0 right-0 flex justify-center items-center h-[90px] sm:h-24 bg-white/10 backdrop-blur-sm border-t border-white/20 z-50 pb-[env(safe-area-inset-bottom,0px)]',
  navigationContent: 'h-full flex items-center justify-center max-w-full overflow-x-auto',
  navigationNav: 'flex gap-4 md:gap-6 text-[10px] sm:text-base shrink-0 px-2',
  navigationButton: 'px-2 sm:px-3 md:px-6 py-3 sm:py-4  rounded-lg font-semibold transition-all duration-300 whitespace-nowrap',
  navigationButtonActive: 'bg-[color:var(--theme-accent,#382797)] text-white shadow-lg',
  navigationButtonInactive: 'bg-white/40 border border-[color:var(--theme-accent,#382797)] text-[color:var(--theme-accent,#382797)] hover:bg-white/60',
  navigationReset: 'px-3 sm:px-6 py-3 rounded-lg font-semibold transition-all duration-300 bg-white/40 border border-[color:var(--theme-accent,#382797)] text-[color:var(--theme-accent,#382797)] hover:bg-white/60 whitespace-nowrap text-[10px] sm:text-base',
  navigationId: 'section-5',
  navSectionIds: [
    1,
    2,
    3,
    4
  ],
  decorativeContainer: 'fixed inset-0 w-full min-w-[24rem] top-[63%] sm:top-[61%] md:top-[70%] lg:top-[92%] max-w-[82rem] left-1/2 transform -translate-x-1/2 z-[55] pointer-events-none',
  decorativeLeft: 'absolute left-[-2%] lg:left-[-3%] transform -translate-y-1/2 w-28 sm:w-44 lg:w-[250px] h-20 sm:h-20 lg:h-24',
  decorativeRight: 'absolute right-[-4%] lg:right-[-5%] transform -translate-y-1/2 w-32 sm:w-48 lg:w-[270px] h-24 sm:h-24 lg:h-32',
  decorativePattern:
    'absolute inset-0 bg-[#CBA7A7] pointer-events-none [mask-size:cover] [mask-position:center] [mask-repeat:no-repeat] [-webkit-mask-size:cover] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat]',
  decorativeQuoteLink: 'text-drop-shadow-white absolute text-[15px] sm:text-lg lg:text-lg right-[12%] sm:right-[18%] lg:right-[28%] bottom-[62%] sm:bottom-[60%] lg:bottom-[60%] text-blue-500 font-bold cursor-pointer hover:scale-110 transition-all duration-300 font-handwriting2 pointer-events-auto z-50 transform -rotate-3 bg-transparent border-0 p-0',
  decorativeContactLink: 'text-drop-shadow-white absolute text-[15px] sm:text-lg lg:text-lg left-[15%] sm:left-[20%] lg:left-[20%] bottom-[62%] sm:bottom-[60%] lg:bottom-[60%] text-blue-500 font-bold cursor-pointer hover:scale-110 transition-all duration-300 font-handwriting2 pointer-events-auto z-50 transform rotate-3',
  decorativeQuoteLinkRainbow: 'absolute text-[15px] sm:text-sm lg:text-lg right-[12%] sm:right-[25%] lg:right-[28%] bottom-[62%] sm:bottom-[60%] lg:bottom-[60%] text-blue-500 font-bold cursor-pointer hover:scale-110 transition-all duration-300 font-handwriting pointer-events-auto z-50 transform -rotate-3 bg-gradient-to-r from-[#00c6ff] via-purple-500 to-pink-500 bg-clip-text text-transparent',
  decorativeContactLinkRainbow: 'absolute text-[15px] sm:text-sm lg:text-lg left-[10%] sm:left-[20%] lg:left-[20%] bottom-[62%] sm:bottom-[65%] lg:bottom-[60%] text-blue-500 font-bold cursor-pointer hover:scale-110 transition-all duration-300 font-handwriting pointer-events-auto z-50 transform rotate-3 bg-gradient-to-r from-[#00c6ff] via-yellow-500 to-red-500 bg-clip-text text-transparent'
};


const classes = {
  // — SlotRow internals (used by helper before JSX) —
  blockBgB: 'service-section-to-b w-full min-w-0 max-w-full',
  blockBgT: 'service-section-to-t w-full min-w-0 max-w-full',
  colCopyCompact: 'w-full min-w-0 max-w-full flex flex-col justify-center items-center gap-4 text-left p-6 break-words overflow-hidden',
  colCopy: 'w-full min-w-0 max-w-full flex flex-col justify-center items-start gap-4 sm:gap-5 text-left p-4 sm:p-6 lg:p-20 break-words',
  colVisual: 'w-full min-w-0 max-w-full flex items-center justify-center overflow-hidden',
  /** True 2-col at all widths — used when orientation is `split` (incl. mobile) */
  twoColSplit: 'theme-beige-outer-grid grid grid-cols-2 gap-0 items-stretch w-full min-w-0',
  servicesIntro: 'flex flex-col gap-4 sm:gap-6 justify-center w-full min-w-0 max-w-full p-4 sm:p-6 overflow-hidden break-words',
  servicesIntroCompact: 'flex flex-col gap-2 justify-center w-full min-w-0 max-w-full p-2 sm:p-3 overflow-hidden break-words',
  performanceContainer: 'flex flex-col items-center justify-center w-full min-w-0 max-w-full py-4 sm:py-6 overflow-auto break-words gap-2 sm:gap-8',
  performanceContainerCompact: 'flex flex-col items-center justify-center w-full min-w-0 max-w-full p-2 sm:p-3 overflow-hidden break-words',
  /** section3 full-bleed: not outer-grid; left stroke only on the two column blocks */
  section3ColSplit: 'theme-beige-section3-cols grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch w-full min-w-0',
  section3ColStack: 'theme-beige-section3-cols grid grid-cols-1 gap-0 items-stretch w-full min-w-0',
  /** section3 mobile flat slots — no outer-grid frame */
  section3ColFlow: 'theme-beige-section3-flow grid grid-cols-1 gap-0 items-stretch w-full min-w-0',
  twoColStack: 'theme-beige-outer-grid grid grid-cols-1 gap-0 items-stretch w-full min-w-0',
  titlePunct: 'title-punct',
  titleAfter: 'title-after',

  // — Hero —
  sectionHero: 'px-4 hidden md:flex relative z-[5] w-full h-[450px] max-h-[1000px] rounded-none bg-transparent border-0 p-0 items-stretch overflow-hidden',
  heroStack: 'theme-beige-hero-stack grid grid-cols-1 grid-rows-[1fr_auto] gap-0 w-full h-full min-h-0',
  heroVisual: 'w-full h-full min-h-0 flex items-center justify-center overflow-hidden',
  heroMvImage: 'w-full h-full max-h-full object-cover object-[center_4%]',
  heroTitleMarqueeRow: 'theme-beige-no-outer w-full min-h-0 flex items-center overflow-hidden py-3 sm:py-4',
  heroLogoWrap: 'theme-beige-hero-logo w-full',
  heroLogo: 'theme-beige-hero-logo__text',
  heroLogoChar: 'theme-beige-hero-logo__char',

  // — Section 1 —
  section1: 'px-4 w-full rounded-none bg-transparent border-0 p-0 -mt-px flex items-center overflow-hidden',
  mvImage: 'w-full max-w-full h-auto object-cover',
  subtitle: 'text-2xl sm:text-3xl font-bold text-[color:var(--theme-accent,#382797)]',
  descriptionLarge: 'text-sm sm:text-lg text-[color:var(--theme-accent,#382797)] max-w-xl mx-auto',
  ctaButton: 'inline-flex w-fit max-w-fit self-center shrink-0 octagon-gradient octagon-blue-gradient octagon-lg font-semibold text-lg hover:shadow-lg hover:shadow-[color:var(--theme-accent-shadow)] transition-all duration-300 hover:scale-105',

  // — Section 2 —
  section2: 'px-4 w-full rounded-none bg-transparent border-0 p-0 -mt-px flex flex-col overflow-hidden',
  sectionProductRow: 'w-full flex items-center overflow-hidden',
  sectionProductRowSeam: 'w-full flex items-center overflow-hidden -mt-px',
  subtitleHighlight: 'pt-4 sm:pt-6 text-lg sm:text-2xl font-bold text-[color:var(--theme-accent,#382797)] block',
  cardFlex: 'flex flex-col items-center justify-center gap-4 sm:gap-5 bg-transparent border border-[color:var(--theme-accent,#382797)] p-4 sm:p-6 w-full',
  demoButton: 'inline-flex w-fit max-w-fit self-center shrink-0 octagon-gradient octagon-blue-gradient octagon-md font-semibold text-lg hover:shadow-lg hover:shadow-[color:var(--theme-accent-shadow)] transition-all duration-300 hover:scale-105',
  productImage: 'w-full max-w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-300',

  // — Section 3 —
  section3: 'w-full rounded-none bg-transparent border-0 p-0 md:-mt-px flex items-center',
  marqueeViewport: 'theme-beige-marquee theme-beige-no-outer w-full min-w-0 overflow-hidden',
  marqueeBand: 'theme-beige-marquee__band w-full min-w-0 overflow-hidden',
  marqueeTrack: 'theme-beige-marquee__track',
  marqueeTrackRtl: 'theme-beige-marquee__track theme-beige-marquee__track--rtl',
  sectionTitle: 'text-lg sm:text-3xl font-bold text-[color:var(--theme-accent,#382797)] break-words',
  description: 'text-xs sm:text-base text-[color:var(--theme-accent,#382797)] max-w-xl break-words mx-auto',
  /** Tech cards stacked vertically; each card lays title/desc in a row (cardsStack) */
  techRowStack: 'p-4 flex flex-col items-stretch gap-1 sm:gap-4 w-full min-w-0',
  /** Tech cards in a horizontal row; each card stacks title/desc (default / cardsRow) */
  techRow: 'flex flex-row flex-nowrap items-stretch gap-1 sm:gap-4 md:gap-8 w-full min-w-0 overflow-x-auto',
  /** Inner title+desc side-by-side (used when cards stack vertically) */
  techCardInnerRow: 'bg-transparent border border-[color:var(--theme-accent,#382797)] p-2 sm:p-4 flex flex-row items-start justify-start gap-2 sm:gap-4 text-left flex-1 min-w-0 max-w-full text-[color:var(--theme-accent,#382797)]',
  techCard: 'bg-transparent border border-[color:var(--theme-accent,#382797)] p-2 sm:p-4 flex flex-col items-start justify-center text-left flex-1 min-w-0 max-w-full text-[color:var(--theme-accent,#382797)]',
  techTitleInline: 'min-w-[150px] text-base sm:text-xl font-semibold text-[color:var(--theme-accent,#382797)] mb-0 shrink-0 break-words',
  techTitle: ' text-base sm:text-xl font-semibold text-[color:var(--theme-accent,#382797)] mb-2 break-words',
  techDescriptionInline: 'text-xs sm:text-base text-[color:var(--theme-accent,#382797)] break-words min-w-0 flex-1',
  techDescription: 'text-xs sm:text-base text-[color:var(--theme-accent,#382797)] break-words',
  performanceTitle: 'text-base sm:text-xl font-bold text-[color:var(--theme-accent,#382797)] text-center break-words mb-2',
  performanceSubtitle: 'text-xs sm:text-sm font-bold text-[color:var(--theme-accent,#382797)] text-center break-words',
  performanceRows: 'flex flex-col justify-center w-full min-w-0 gap-2 sm:gap-8',
  /** Metrics stay in a horizontal row (incl. mobile); compact so 3 fit */
  performanceGrid: 'px-1 grid grid-cols-3 gap-1 sm:gap-4 md:gap-7 w-full min-w-0',
  performanceButtonContainer: 'flex justify-center items-center mt-2 w-full min-w-0 gap-2 sm:gap-8',
  performanceButton: 'inline-flex w-fit max-w-full shrink-0 octagon-gradient octagon-blue-gradient octagon-md font-semibold text-sm sm:text-lg hover:shadow-lg hover:shadow-[color:var(--theme-accent-shadow)] transition-all duration-300 hover:scale-105',
  marqueeItem: 'theme-beige-marquee__item',

  // — Section 4 —
  section4: 'px-4 w-full rounded-none bg-transparent border-0 p-0 -mt-px flex items-center justify-center overflow-hidden',
  sectionContent4: 'theme-beige-outer-grid w-full max-w-none mx-0',
  quoteHead: 'service-section-to-b w-full p-4 sm:p-6 text-center',
  quoteButtonContainer: 'flex justify-center items-center w-full',
  quoteButton: 'inline-flex w-fit max-w-fit shrink-0 octagon-gradient octagon-blue-gradient octagon-lg font-semibold text-lg hover:shadow-lg hover:shadow-[color:var(--theme-accent-shadow)] transition-all duration-300 hover:scale-105',

  // — Kept (commented) for alternate / pink-parity parts —
  // title2: 'tracking-tight text-2xl sm:text-4xl lg:text-5xl font-bold text-[color:var(--theme-accent,#382797)] leading-tight',
  // titleHighlight: 'blue-gradient_text text-2xl sm:text-4xl lg:text-5xl drop-shadow block leading-tight',
  // sectionContent: 'w-full max-w-none mx-0',
  // sectionTextCenter: 'text-center',
  // sectionTextLeft: 'text-left',
  // descriptionUzu: 'text-lg text-white/80 max-w-2xl sm:max-w-xl mx-auto mt-36 mb-4 sm:mt-10 sm:mb-24',
  // image: 'mx-auto w-[100%] sm:w-full h-60 sm:h-[80%] object-fit rounded-lg transition-transform duration-300',
  // imageHover: 'w-full h-96 h-[100%] sm:h-max object-cover sm:object-fit rounded-lg hover:scale-105 hover:shadow-pink-400/30 transition-transform duration-300',
  // card: 'bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20',
  // cardCircular: 'bg-white/10 backdrop-blur-sm rounded-full p-8 border border-white/20 aspect-square flex flex-col items-center justify-center text-center',
  // quoteContainer: 'service-section-to-b p-6 sm:p-8 w-full',
  // quoteTitle: 'text-2xl font-bold text-[color:var(--theme-accent,#382797)] mb-4',
  // twoCol: 'theme-beige-outer-grid grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch w-full min-w-0',
  // servicesTwoCol: 'theme-beige-outer-grid grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch w-full min-w-0',
  // techRowCompact: 'flex flex-row flex-nowrap gap-1 w-full min-w-0 overflow-x-auto',
};

/**
 * Within-section selective slots (fine-grained: title / body / cta / visual / panel …).
 *
 * - `mobileOrder`: list of slot ids and optional `{ row: string[][] }` for a horizontal
 *   sub-row inside an otherwise stacked section (e.g. techRow | performanceGrid)
 * - `desktopColumns`: column groups when orientation is `split`, or when
 *   tablet/desktop `stack` still wants two bordered blocks
 * - `mobileOrientation` / `tabletOrientation` / `desktopOrientation`: `'stack'` | `'split'`
 *   Bands: mobile <768, tablet 768–1023, desktop ≥1024
 * - `frame`: `'default'` (outer-grid) | `'section3-left'` (full-bleed; left stroke on 2 cols only)
 * - `variant: 'visual' | 'panel'`: standalone bordered cell
 */
function SlotRow({
  slots,
  mobileOrder,
  desktopColumns,
  desktopColumnClasses,
  orientation = "split",
  mobileOrientation,
  tabletOrientation,
  desktopOrientation,
  frame = "default",
  className,
  tone = "t",
  textCellClass,
}) {
  const isMdUp = useIsMdUp();
  const isLgUp = useIsLgUp();
  const byId = Object.fromEntries(
    slots
      .filter((slot) => slot && typeof slot.id === "string")
      .map((slot) => [slot.id, slot]),
  );
  const defaultOrder = Object.keys(byId);
  const blockBg = tone === "b" ? classes.blockBgB : classes.blockBgT;
  const activeOrientation = isLgUp
    ? desktopOrientation ?? orientation
    : isMdUp
      ? tabletOrientation ?? desktopOrientation ?? orientation
      : mobileOrientation ?? orientation;
  const isSplit = activeOrientation === "split";
  const isCompactMobile = !isMdUp;

  const isStandalone = (id) => {
    const variant = byId[id]?.variant;
    return variant === "visual" || variant === "panel";
  };

  const defaultTextCell = isCompactMobile
    ? classes.colCopyCompact
    : classes.colCopy;

  const renderChunk = (ids, columnClass) => {
    if (ids.length === 1 && isStandalone(ids[0])) {
      const slot = byId[ids[0]];
      const cellClass =
        slot.cellClass ||
        (slot.variant === "visual" ? classes.colVisual : defaultTextCell);
      return (
        <div
          className={`${blockBg} ${cellClass} min-w-0 max-w-full overflow-hidden`}
        >
          {slot.node}
        </div>
      );
    }
    const textNodes = ids
      .filter((id) => byId[id])
      .map((id) => (
        <React.Fragment key={id}>{byId[id].node}</React.Fragment>
      ));
    const wrapClass = columnClass || defaultTextCell;
    return (
      <div
        className={`${blockBg} ${wrapClass} min-w-0 max-w-full overflow-hidden`}
      >
        {textCellClass ? (
          <div className={`${textCellClass} min-w-0 max-w-full`}>{textNodes}</div>
        ) : (
          textNodes
        )}
      </div>
    );
  };

  /** Always attach key on the map-callback element (cloneElement), not only inside helpers. */
  const keyedChunk = (ids, columnClass, index) =>
    React.cloneElement(renderChunk(ids, columnClass), {
      key: ids.filter(Boolean).join("+") || `chunk-${index}`,
    });

  const renderSideRow = (rowSpec, rowKey) => {
    const cols = (rowSpec.row || [])
      .map((col) => col.filter((id) => byId[id]))
      .filter((col) => col.length > 0);
    const colClasses = Array.isArray(rowSpec.columnClasses)
      ? rowSpec.columnClasses
      : [];
    return (
      <div
        key={rowKey}
        className={`${classes.twoColSplit} min-w-0 max-w-full`}
      >
        {cols.map((ids, index) => keyedChunk(ids, colClasses[index], index))}
      </div>
    );
  };

  /** Stack flow: text/panel chunks + optional inline `{ row: [...] }` pairs */
  const buildStackBlocks = (preferred) => {
    const source =
      Array.isArray(preferred) && preferred.length > 0 ? preferred : defaultOrder;
    const blocks = [];
    let textBuf = [];
    const used = new Set();

    const flushText = () => {
      if (textBuf.length) {
        blocks.push({ type: "chunk", ids: textBuf });
        textBuf = [];
      }
    };

    for (const item of source) {
      if (item && typeof item === "object" && Array.isArray(item.row)) {
        flushText();
        for (const col of item.row) {
          for (const id of col) used.add(id);
        }
        blocks.push({ type: "row", spec: item });
        continue;
      }
      if (typeof item !== "string" || !byId[item]) continue;
      used.add(item);
      if (isStandalone(item)) {
        flushText();
        blocks.push({ type: "chunk", ids: [item] });
      } else {
        textBuf.push(item);
      }
    }
    flushText();

    for (const id of defaultOrder) {
      if (used.has(id)) continue;
      if (isStandalone(id)) {
        blocks.push({ type: "chunk", ids: [id] });
      } else {
        const last = blocks[blocks.length - 1];
        if (last?.type === "chunk" && last.ids.every((x) => !isStandalone(x))) {
          last.ids.push(id);
        } else {
          blocks.push({ type: "chunk", ids: [id] });
        }
      }
    }

    return blocks;
  };

  let body;
  if (isSplit && Array.isArray(desktopColumns) && desktopColumns.length > 0) {
    const chunks = desktopColumns
      .map((col) => col.filter((id) => byId[id]))
      .filter((col) => col.length > 0);
    const columnClasses = Array.isArray(desktopColumnClasses)
      ? desktopColumnClasses.map((cls, i) => {
        if (!isCompactMobile || isMdUp) return cls;
        if (i === 0 && cls === classes.servicesIntro) {
          return classes.servicesIntroCompact;
        }
        if (
          i === 1 &&
          (cls === classes.performanceContainer ||
            String(cls).includes("performanceContainer"))
        ) {
          return classes.performanceContainerCompact;
        }
        return `${cls} !p-2 sm:!p-3 gap-2`;
      })
      : [];
    body = chunks.map((ids, index) =>
      keyedChunk(ids, columnClasses[index], index),
    );
  } else if (
    isMdUp &&
    Array.isArray(desktopColumns) &&
    desktopColumns.length > 0
  ) {
    // Tablet/desktop stack of column groups (e.g. section3 intro then performance)
    const chunks = desktopColumns
      .map((col) => col.filter((id) => byId[id]))
      .filter((col) => col.length > 0);
    const columnClasses = Array.isArray(desktopColumnClasses)
      ? desktopColumnClasses
      : [];
    body = chunks.map((ids, index) =>
      keyedChunk(ids, columnClasses[index], index),
    );
  } else {
    const preferred = !isMdUp ? mobileOrder : null;
    const blocks = buildStackBlocks(preferred);
    body = blocks.map((block, index) =>
      block.type === "row"
        ? renderSideRow(block.spec, `row-${index}`)
        : keyedChunk(block.ids, undefined, index),
    );
  }

  const useSection3Frame = frame === "section3-left";
  const usesColumnGroups =
    Array.isArray(desktopColumns) &&
    desktopColumns.length > 0 &&
    (isSplit || isMdUp);

  const rowClass = [
    useSection3Frame
      ? usesColumnGroups
        ? isSplit
          ? classes.section3ColSplit
          : classes.section3ColStack
        : classes.section3ColFlow
      : isSplit
        ? classes.twoColSplit
        : classes.twoColStack,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={rowClass}>{body}</div>;
}

/** Per-section mobile / desktop slot rules (within-section only). */
const beigeSlotRules = {
  section1: {
    mobileOrder: ["title", "visual", "brand", "body", "cta"],
    desktopColumns: [["visual"], ["title", "brand", "body", "cta"]],
    mobileOrientation: "stack",
    desktopOrientation: "split",
  },
  section2Demo: {
    mobileOrder: ["title", "visual", "card"],
    desktopColumns: [["title", "card"], ["visual"]],
    mobileOrientation: "stack",
    desktopOrientation: "split",
  },
  section2Lcp: {
    mobileOrder: ["heading", "visual", "card"],
    desktopColumns: [["visual"], ["heading", "card"]],
    mobileOrientation: "stack",
    desktopOrientation: "split",
  },
  section3: {
    // <md: flat slot stack; marquee paused (CSS)
    // md–lg (tablet): intro + performance as separate vertical marquee bands
    //   (upper scrolls left, lower scrolls right)
    // ≥lg (desktop): side-by-side split in one marquee track
    // Tech cards: *TechCardsOrientation cardsRow | cardsStack (same bands)
    mobileOrder: [
      "title",
      "body",
      "techRow",
      "perfTitle",
      "performanceGrid",
      "perfCta",
    ],
    desktopColumns: [
      ["title", "body", "techRow"],
      ["perfTitle", "performanceGrid", "perfCta"],
    ],
    mobileOrientation: "stack",
    tabletOrientation: "stack",
    desktopOrientation: "split",
    mobileTechCardsOrientation: "cardsStack",
    tabletTechCardsOrientation: "cardsRow",
    desktopTechCardsOrientation: "cardsStack",
  },
};


/**
 * Beige-theme Service layout.
 * Section classes + beigeServiceChrome live here; beige CSS rules in index.css [data-theme="beige"].
 * Copy / images / CTAs come from shared props + i18n.
 */
/** Split i18n title with optional <punct>/<after> tags into per-char parts. */
function parseYimajiuniLogoChars(raw) {
  const parts = [];
  const tagRe = /<(punct|after)>([\s\S]*?)<\/\1>/g;
  let lastIndex = 0;
  let match;
  while ((match = tagRe.exec(raw)) !== null) {
    if (match.index > lastIndex) {
      for (const ch of raw.slice(lastIndex, match.index)) {
        parts.push({ ch, role: null });
      }
    }
    const role = match[1];
    const chars = Array.from(match[2]);
    chars.forEach((ch, i) => {
      // `after` kerning was on the whole phrase — keep it on the first char only
      parts.push({
        ch,
        role: role === "after" && i > 0 ? null : role,
      });
    });
    lastIndex = tagRe.lastIndex;
  }
  if (lastIndex < raw.length) {
    for (const ch of raw.slice(lastIndex)) {
      parts.push({ ch, role: null });
    }
  }
  return parts;
}

/**
 * Beige-theme Service layout.
 * Section classes + beigeServiceChrome live here; beige CSS rules in index.css [data-theme="beige"].
 * Copy / images / CTAs come from shared props + i18n.
 */
export default function ServiceBeigeLayout({
  refs,
  images,
  handlers,
  isPerformanceSectionVisible,
}) {
  const { t } = useTranslation();
  const yimajiuniRaw = t("service.section1.yimajiuni");
  const yimajiuniPlain = yimajiuniRaw.replace(/<\/?(?:punct|after)>/g, "");
  const yimajiuniLogoChars = parseYimajiuniLogoChars(yimajiuniRaw);
  const yimajiuniTitle = (
    <Trans
      i18nKey="service.section1.yimajiuni"
      components={{
        punct: <span className={classes.titlePunct} />,
        after: <span className={classes.titleAfter} />,
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

  const isMdUp = useIsMdUp();
  const isLgUp = useIsLgUp();
  const section3Rules = beigeSlotRules.section3;
  const techCardsOrientation = isLgUp
    ? section3Rules.desktopTechCardsOrientation ??
    section3Rules.tabletTechCardsOrientation ??
    section3Rules.mobileTechCardsOrientation
    : isMdUp
      ? section3Rules.tabletTechCardsOrientation ??
      section3Rules.mobileTechCardsOrientation
      : section3Rules.mobileTechCardsOrientation;

  return (
    <>
      {/* Hero: full-width FV + title marquee (above section 1) */}
      <section id="section-hero" className={classes.sectionHero}>
        <div className={classes.heroStack}>
          <div className={`${classes.blockBgT} ${classes.heroVisual}`}>
            <img
              src={yimajiuniPark}
              alt="Yimajiuni Park - Creative Workspace"
              className={classes.heroMvImage}
              fetchpriority="high"
              width="1200"
              height="949"
            />
          </div>
          <div className={`${classes.blockBgT} ${classes.heroTitleMarqueeRow}`}>
            <div className={classes.heroLogoWrap} aria-label={yimajiuniPlain}>
              <h1 className={classes.heroLogo}>
                {yimajiuniLogoChars.map(({ ch, role }, index) => {
                  const roleClass =
                    role === "punct"
                      ? classes.titlePunct
                      : role === "after"
                        ? classes.titleAfter
                        : "";
                  return (
                    <div
                      key={`hero-logo-${index}`}
                      className={[classes.heroLogoChar, roleClass]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      {ch === " " ? "\u00A0" : ch}
                </div>
                  );
                })}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section id="section-1" ref={section1Ref} className={classes.section1}>
        <SlotRow
          tone="t"
          orientation="split"
          mobileOrder={beigeSlotRules.section1.mobileOrder}
          desktopColumns={beigeSlotRules.section1.desktopColumns}
          mobileOrientation={beigeSlotRules.section1.mobileOrientation}
          desktopOrientation={beigeSlotRules.section1.desktopOrientation}
          slots={[
            {
              id: "visual",
              variant: "visual",
              node: (
            <img
              src={yimajiuniPark}
              alt="Yimajiuni Park - Creative Workspace"
              className={classes.mvImage}
              width="1200"
              height="949"
            />
              ),
            },
            {
              id: "title",
              node: (
                <h1 className={`${classes.subtitle} w-full text-center`}>
                  <span className="block">
                    {t("service.section1.title")}{" "}
              {t("service.section1.title2")}
                {t("service.section1.titleHighlight")}
              </span>
                  {/* Beige: line1 = title + title2, line2 = highlight (pink keeps separate br) */}



            </h1>
              ),
            },
            {
              id: "brand",
              node: (
                <h2 className="md:px-0 md:hidden text-xl sm:text-xl font-bold text-[color:var(--theme-accent,#382797)] w-full text-center">
                  {yimajiuniTitle}
            </h2>
              ),
            },
            {
              id: "body",
              node: (
            <p className={classes.descriptionLarge}>
              {t("service.section1.description")}
            </p>
              ),
            },
            {
              id: "cta",
              node: (
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
              ),
            },
          ]}
        />
      </section>

      {/* Product: two visual rows, one shuffle unit (pink-parity section-2) */}
      <section id="section-2" ref={section2Ref} className={classes.section2}>
        <div id="section-2-demo" className={classes.sectionProductRow}>
          <SlotRow
            tone="b"
            orientation="split"
            mobileOrder={beigeSlotRules.section2Demo.mobileOrder}
            desktopColumns={beigeSlotRules.section2Demo.desktopColumns}
            mobileOrientation={beigeSlotRules.section2Demo.mobileOrientation}
            desktopOrientation={beigeSlotRules.section2Demo.desktopOrientation}
            slots={[
              {
                id: "title",
                node: (
                  <h2 className={classes.subtitle}>{t("service.section2.title")}
            <span className={classes.subtitleHighlight}>
              {t("service.section2.titleHighlight")}
            </span>
                  </h2>
                ),
              },
              {
                id: "card",
                node: (
            <div className={classes.cardFlex}>
                    <h3 className="text-xl sm:text-2xl font-bold text-[color:var(--theme-accent,#382797)] w-full text-center">
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
                ),
              },
              {
                id: "visual",
                variant: "visual",
                node: (
            <img
              src={nextEcomShopify}
              alt="Next.js E-commerce Shopify Demo Site"
              className={classes.productImage}
              loading="lazy"
              width="800"
              height="400"
            />
                ),
              },
            ]}
          />
        </div>
        <div id="section-2-lcp" className={classes.sectionProductRowSeam}>
          <SlotRow
            tone="b"
            orientation="split"
            mobileOrder={beigeSlotRules.section2Lcp.mobileOrder}
            desktopColumns={beigeSlotRules.section2Lcp.desktopColumns}
            mobileOrientation={beigeSlotRules.section2Lcp.mobileOrientation}
            desktopOrientation={beigeSlotRules.section2Lcp.desktopOrientation}
            slots={[
              {
                id: "visual",
                variant: "visual",
                node: (
            <img
              src={lcpPO}
              alt={t("service.section2.lcp.imageAlt")}
              className={classes.productImage}
              loading="lazy"
              width="800"
              height="400"
            />
                ),
              },
              {
                id: "heading",
                node: (
              <h3 className="text-xl sm:text-2xl font-bold text-[color:var(--theme-accent,#382797)]">
                {t("service.section2.lcp.description")}
              </h3>
                ),
              },
              {
                id: "card",
                node: (
                  <div className={classes.cardFlex}>
              <p className="text-sm sm:text-lg text-[color:var(--theme-accent,#382797)]">
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
                ),
              },
            ]}
          />
        </div>
      </section>

      {/* Services intro + performance: tablet = dual-band marquee; else one track */}
      <section id="section-3" ref={section3Ref} className={`${classes.section3}`}>
        {(() => {
          const isTabletMarquee = isMdUp && !isLgUp;
          const [introColumnIds, perfColumnIds] = section3Rules.desktopColumns;
          const cardsStack = techCardsOrientation === "cardsStack";
          const techRowClass = cardsStack
            ? classes.techRowStack
            : classes.techRow;
          const techCardClass = cardsStack
            ? classes.techCardInnerRow
            : classes.techCard;
          const techTitleClass = cardsStack
            ? classes.techTitleInline
            : classes.techTitle;
          const techDescClass = cardsStack
            ? classes.techDescriptionInline
            : classes.techDescription;
          const techItems = [
            {
              id: "nextjs",
              title: t("service.section3.technologies.nextjs.title"),
              description: t(
                "service.section3.technologies.nextjs.description",
              ),
            },
            {
              id: "shopify",
              title: t("service.section3.technologies.shopify.title"),
              description: t(
                "service.section3.technologies.shopify.description",
              ),
            },
            {
              id: "branding",
              title: t("service.section3.technologies.branding.title"),
              description: t(
                "service.section3.technologies.branding.description",
              ),
            },
          ];

          const buildSection3Slots = (isClone) => [
            {
              id: "title",
              node: (
                <h2
                  className={`${classes.sectionTitle} w-full text-center `}
                >
                  {t("service.section3.title")}
                </h2>
              ),
            },
            {
              id: "body",
              node: (
                <p className={`${classes.description}`}>
                  {t("service.section3.description")}
                </p>
              ),
            },
            {
              id: "techRow",
              variant: "panel",
              cellClass: "w-full min-w-0 max-w-full overflow-hidden p-0",
              node: (
                <div className={techRowClass}>
                  {techItems.map((item) => (
                    <div
                      key={item.id}
                      data-tech={item.id}
                      className={techCardClass}
                    >
                      <h3 className={techTitleClass}>{item.title}</h3>
                      <p className={techDescClass}>{item.description}</p>
                  </div>
                  ))}
                </div>
              ),
            },
            {
              id: "perfTitle",
              node: (
                <div>
                <h3 className={classes.performanceTitle}>
                  {t("service.section3.performance.title")}
                </h3>
                <h4 className={classes.performanceSubtitle}>
                  {t("service.section3.performance.subtitle")}
                </h4>
                </div>
              ),
            },
            {
              id: "performanceGrid",
              variant: "panel",
              cellClass: "w-full",
              node: (
                <div className={classes.performanceRows}>
                <div className={classes.performanceGrid}>
                  <AnimatedMetric
                      size="beige"
                      label={t(
                        "service.section3.performance.labels.imageSpeed",
                      )}
                    labelKey="imageSpeed"
                    startValue="1.2sec"
                    endValue="0.5sec"
                    duration={4000}
                    delay={0}
                      shouldStart={!isClone && isPerformanceSectionVisible}
                  />
                  <AnimatedMetric
                      size="beige"
                      label={t(
                        "service.section3.performance.labels.conversionRate",
                      )}
                    labelKey="conversionRate"
                    startValue="1.9%"
                    endValue="1.3%"
                    duration={4000}
                    delay={300}
                      shouldStart={!isClone && isPerformanceSectionVisible}
                  />
                  <AnimatedMetric
                      size="beige"
                      label={t(
                        "service.section3.performance.labels.mobileBounce",
                      )}
                    labelKey="mobileBounce"
                    startValue="65%"
                    endValue="20%"
                    duration={4000}
                    delay={600}
                      shouldStart={!isClone && isPerformanceSectionVisible}
                  />
                </div>
                <div className={classes.performanceGrid}>
                  <AnimatedMetric
                      size="beige"
                      label={t(
                        "service.section3.performance.labels.organicTraffic",
                      )}
                    labelKey="organicTraffic"
                    startValue="rank 22"
                    endValue="rank 15"
                    duration={4000}
                    delay={900}
                      shouldStart={!isClone && isPerformanceSectionVisible}
                  />
                  <AnimatedMetric
                      size="beige"
                      label={t(
                        "service.section3.performance.labels.operationHours",
                      )}
                    labelKey="operationHours"
                    startValue="25 hours"
                    endValue="15 hours"
                    duration={4000}
                    delay={1200}
                      shouldStart={!isClone && isPerformanceSectionVisible}
                  />
                  <AnimatedMetric
                      size="beige"
                      label={t(
                        "service.section3.performance.labels.serverCost",
                      )}
                    labelKey="serverCost"
                      startValue={
                        i18n.language === "jp" ? "43万円" : "$4000"
                      }
                      endValue={
                        i18n.language === "jp" ? "20万円" : "$2000"
                      }
                    duration={4000}
                    delay={1500}
                      shouldStart={!isClone && isPerformanceSectionVisible}
                  />
                  </div>
                </div>
              ),
            },
            {
              id: "perfCta",
              node: (
                <div className={classes.performanceButtonContainer}>
                  <button
                    type="button"
                    tabIndex={isClone ? -1 : undefined}
                    onClick={openNextJsReportModal}
                    className={classes.performanceButton}
                  >
                    {t("service.section3.performance.button")}
                  </button>
                </div>
              ),
            },
          ];

          const withPerfRef = (slots, isClone) =>
            slots.map((slot) =>
              slot.id === "performanceGrid" && !isClone
                ? {
                  ...slot,
                  node: (
                    <div
                      ref={performanceSectionRef}
                      className="w-full min-w-0 max-w-full overflow-hidden"
                    >
                      {slot.node}
              </div>
                  ),
                }
                : slot,
            );

          const renderMarqueeItem = ({
            key,
            isClone,
            slots,
            desktopColumns,
            desktopColumnClasses,
            desktopOrientation,
            tabletOrientation,
          }) => (
            <div
              key={key}
              className={`${classes.marqueeItem} !grid-cols-1`}
              aria-hidden={isClone ? true : undefined}
            >
              <SlotRow
                tone="t"
                frame="section3-left"
                className="w-full"
                mobileOrder={slots.map((slot) => slot.id)}
                desktopColumns={desktopColumns}
                desktopColumnClasses={desktopColumnClasses}
                mobileOrientation={section3Rules.mobileOrientation}
                tabletOrientation={tabletOrientation}
                desktopOrientation={desktopOrientation}
                slots={withPerfRef(slots, isClone)}
              />
            </div>
          );

          const renderClonedTrack = ({
            trackClass,
            keyPrefix,
            slotsFor,
            desktopColumns,
            desktopColumnClasses,
            desktopOrientation,
            tabletOrientation,
          }) => (
            <div className={trackClass}>
              {[false, true].map((isClone) =>
                renderMarqueeItem({
                  key: `${keyPrefix}-${isClone ? "clone" : "primary"}`,
                  isClone,
                  slots: slotsFor(isClone),
                  desktopColumns,
                  desktopColumnClasses,
                  desktopOrientation,
                  tabletOrientation,
                }),
              )}
                  </div>
          );

          return (
            <div
              className={classes.marqueeViewport}
              aria-label={t("service.section3.title")}
            >
              {isTabletMarquee ? (
                <>
                  <div className={classes.marqueeBand}>
                    {renderClonedTrack({
                      trackClass: classes.marqueeTrack,
                      keyPrefix: "section3-intro",
                      slotsFor: (isClone) =>
                        buildSection3Slots(isClone).filter((slot) =>
                          introColumnIds.includes(slot.id),
                        ),
                      desktopColumns: [introColumnIds],
                      desktopColumnClasses: [classes.servicesIntro],
                      desktopOrientation: "stack",
                      tabletOrientation: "stack",
                    })}
                  </div>
                  <div className={classes.marqueeBand}>
                    {renderClonedTrack({
                      trackClass: classes.marqueeTrackRtl,
                      keyPrefix: "section3-perf",
                      slotsFor: (isClone) =>
                        buildSection3Slots(isClone).filter((slot) =>
                          perfColumnIds.includes(slot.id),
                        ),
                      desktopColumns: [perfColumnIds],
                      desktopColumnClasses: [classes.performanceContainer],
                      desktopOrientation: "stack",
                      tabletOrientation: "stack",
                    })}
                  </div>
                </>
              ) : (
                renderClonedTrack({
                  trackClass: classes.marqueeTrack,
                  keyPrefix: "section3",
                  slotsFor: buildSection3Slots,
                  desktopColumns: section3Rules.desktopColumns,
                  desktopColumnClasses: [
                    classes.servicesIntro,
                    classes.performanceContainer,
                  ],
                  desktopOrientation: section3Rules.desktopOrientation,
                  tabletOrientation: section3Rules.tabletOrientation,
                })
              )}
            </div>
          );
        })()}
      </section>

      <section id="section-4" ref={section4Ref} className={classes.section4}>
        <div className={classes.sectionContent4}>
          <div id="quote" className={`${classes.quoteHead} flex flex-col items-center gap-4 sm:gap-6`}>
            <h2 className={`${classes.sectionTitle} mt-16`}>{t("service.section4.title")}</h2>
            <p className={`${classes.description}`}>
              {t("service.section4.description")}
            </p>
            <div className={classes.quoteButtonContainer}>
              <button
                type="button"
                onClick={openProjectQuoteModal}
                className={`${classes.quoteButton} mb-16`}
              >
                {t("service.section4.calculator.button")}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed decorative CTAs — position / text overlap match pink */}
      <div className={beigeServiceChrome.decorativeContainer}>
        <div className={beigeServiceChrome.decorativeLeft}>
          <div
            className={beigeServiceChrome.decorativePattern}
            style={{
              WebkitMaskImage: `url(${waPtnWave})`,
              maskImage: `url(${waPtnWave})`,
            }}
            aria-hidden
          />
          <Link
            to="/contact"
            className={beigeServiceChrome.decorativeContactLink}
          >
            {t("service.decorative.contactLink")}
          </Link>
        </div>
        <div className={beigeServiceChrome.decorativeRight}>
          <div
            className={beigeServiceChrome.decorativePattern}
            style={{
              WebkitMaskImage: `url(${waPtnDia})`,
              maskImage: `url(${waPtnDia})`,
            }}
            aria-hidden
          />
          <button
            type="button"
            className={beigeServiceChrome.decorativeQuoteLink}
            onClick={openProjectQuoteModal}
          >
            {t("service.decorative.quoteLink")}
          </button>
        </div>
      </div>
    </>
  );
}
