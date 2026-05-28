import React, { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
    lcpAfter400w,
    lcpAfter600w,
    lcpBefore400w,
    lcpBefore600w,
    lcpReport480w,
} from "../assets/images";
import { preloadImage, prefetchImageUrl, runWhenIdle } from "../utils/resourceHints";
import upworkIcon from "../assets/icons/upwork.svg";
import contraIcon from "../assets/icons/contra.svg";
import maltIcon from "../assets/icons/malt.svg";

/** Comparison stage: ~291px displayed; cap at 600w source */
const LCP_MODAL_THUMB_SIZES = "(max-width: 640px) 92vw, 36rem";

const LCP_MODAL_REPORT_INLINE = {
    src: lcpReport480w,
    width: 480,
    height: 640,
};

const LCP_MODAL_THUMB_BEFORE = {
    src: lcpBefore400w,
    srcSet: `${lcpBefore400w} 400w, ${lcpBefore600w} 600w`,
    sizes: LCP_MODAL_THUMB_SIZES,
    width: 400,
    height: 242,
};

const LCP_MODAL_THUMB_AFTER = {
    src: lcpAfter400w,
    srcSet: `${lcpAfter400w} 400w, ${lcpAfter600w} 600w`,
    sizes: LCP_MODAL_THUMB_SIZES,
    width: 400,
    height: 242,
};

let warmupStarted = false;

/** Preload inline report + idle-prefetch comparison thumbs (call before / while opening modal). */
export function warmupLcpImprovementModal() {
    if (typeof window === "undefined" || warmupStarted) return;
    warmupStarted = true;

    preloadImage({
        href: LCP_MODAL_REPORT_INLINE.src,
        fetchPriority: "high",
    });

    runWhenIdle(() => {
        prefetchImageUrl(LCP_MODAL_THUMB_BEFORE.src);
        prefetchImageUrl(LCP_MODAL_THUMB_AFTER.src);
    });
}

const FOOTER_CONTROL_PAD = "px-2 sm:px-4 py-2 sm:py-3";
const FOOTER_MARKETPLACE_PAD = "px-2 lg:px-4 py-2 sm:py-3";

const classes = {
    modalOverlay:
        "fixed inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center p-4",
    mainContainer:
        "border border-gray-500 bg-[#f9c6e1] max-w-4xl w-full max-h-[90dvh] min-h-[40dvh] flex flex-col overflow-hidden rounded-lg",
    header:
        "sticky top-0 z-20 shrink-0 border-b border-gray-500 bg-white/20 text-blue-600 p-4 sm:p-6 backdrop-blur-sm supports-[backdrop-filter]:bg-white/20",
    headerContent: "flex justify-between items-start gap-4",
    headerTitle: "text-xl sm:text-2xl font-bold text-blue-600 pr-2",
    closeButton: "text-blue-600 hover:text-white text-2xl leading-none shrink-0 transition-colors",
    content: "flex flex-col flex-1 min-h-0 overflow-y-auto overscroll-contain",
    bottomBlock: "flex flex-col gap-8 p-4 sm:p-6",
    sectionBlock: "flex flex-col gap-4",
    sectionLabel:
        "text-center font-['IrvinHeading','Crimson_Pro',sans-serif] text-2xl sm:text-3xl font-black uppercase tracking-[0.12em]",
    sectionLabelPackage:
        "text-center text-2xl sm:text-3xl font-semibold leading-snug text-black",
    sectionLabelBefore: "text-[#f01653]",
    sectionLabelAfter: "text-blue-700",
    metaRow: " border-b border-gray-500 p-4 text-gray-800",
    metaRowInner: "flex items-center justify-center sm:justify-end min-w-0 self-stretch grid grid-cols-1 sm:grid-cols-[minmax(0,3.8fr)_minmax(0,1.2fr)] gap-4 sm:gap-4 items-start",
    metaFieldsCol: "space-y-4 min-w-0",
    metaReportCol: "flex items-center justify-center sm:justify-end min-w-0 self-stretch",
    metaReportWrap: "relative w-full max-w-[12rem] sm:max-w-[12rem]",
    metaReportImg: "w-full h-auto object-contain",
    metaReportOverlay:
        "pointer-events-none absolute inset-0 flex items-center justify-center text-8xl font-semibold text-black/30 [writing-mode:vertical-rl]",
    twoColGrid: "grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch",
    detailCol: "flex flex-col gap-3 border-r border-b border-gray-500 bg-white/30 p-4 text-gray-800",
    detailScoreHead: "text-sm sm:text-base font-bold text-blue-700 leading-snug",
    detailScoreBody: "text-sm sm:text-base leading-relaxed text-gray-800",
    detailBullet: "text-sm sm:text-base leading-relaxed whitespace-pre-line",
    sectionArrow: "flex justify-center pt-1 text-blue-600 text-xl leading-none select-none",
    metaLabel: "text-xs font-semibold uppercase tracking-wide text-blue-700",
    metaValue: "text-base sm:text-lg text-gray-800 leading-snug",
    comparisonBlock:
        "overflow-hidden border-l border-t border-gray-500 bg-white/30 shadow-sm h-full flex flex-col",
    comparisonStageBefore:
        "group relative w-full min-h-[11rem] sm:min-h-[13rem] py-2 [container-type:inline-size] bg-[#f01653]",
    comparisonStageAfter:
        "group relative w-full min-h-[11rem] sm:min-h-[13rem] py-2 [container-type:inline-size] bg-blue-600",
    comparisonImg:
        "relative z-10 mx-auto block h-full max-h-[10rem] sm:max-h-[14rem] w-full max-w-full object-contain pointer-events-none",
    comparisonTooltip:
        "pointer-events-none absolute left-1/2 top-16 z-20 w-[min(92%,20rem)] -translate-x-1/2  border border-white/40 bg-black px-3 py-2 text-left text-xs text-white opacity-0 shadow-lg backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100 sm:w-[min(90%,22rem)] sm:text-sm",
    comparisonTooltipHead: "font-bold leading-snug text-white",
    comparisonTooltipBody: "mt-1.5 leading-snug text-gray-100",
    comparisonBadge:
        "pointer-events-none absolute inset-0 z-0 flex w-full max-w-full items-center justify-center px-1 font-['IrvinHeading','Crimson_Pro',sans-serif] font-black uppercase text-white drop-shadow-md leading-none [font-size:clamp(2.5rem,min(38cqw,28cqh),11rem)] max-[430px]:[font-size:clamp(2.25rem,min(32cqw,24cqh),9rem)] whitespace-nowrap overflow-hidden tracking-[0.08em]",
    demoLinksRow:
        "flex flex-wrap items-center justify-center gap-6 sm:gap-12 border-t border-gray-500 bg-white/40 px-3 py-2 text-sm font-semibold text-blue-700",
    footer:
        "bg-white/20 backdrop-blur-sm border-t border-gray-500 p-4 sm:p-6 rounded-b-lg",
    footerOrderAndIcons:
        "flex w-full min-w-0 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
    orderViaLabel: `inline-flex shrink-0 justify-center items-center text-lg font-semibold text-blue-600 whitespace-nowrap ${FOOTER_CONTROL_PAD}`,
    marketplaceList:
        "flex w-full flex-col items-center justify-center gap-2 sm:w-auto sm:flex-1 sm:items-center sm:justify-start",
    marketplaceLinksGroup:
        "flex w-full min-w-0 flex-col items-center gap-2 sm:flex-row sm:flex-nowrap sm:items-center sm:justify-center sm:gap-2",
    marketplaceLinksRow:
        "flex w-full flex-row flex-wrap items-center justify-center gap-2 sm:contents",
    marketplaceLink: `text-sm sm:text-lg inline-flex shrink-0 items-center gap-2 rounded-lg bg-white/90 no-underline ${FOOTER_MARKETPLACE_PAD} font-semibold text-gray-800 shadow-sm hover:bg-white hover:shadow-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500`,
    footerContactLink: `px-[8.25rem] sm:px-4 text-sm sm:text-lg inline-flex shrink-0 items-center justify-center rounded-lg bg-white/90 no-underline ${FOOTER_MARKETPLACE_PAD} font-semibold text-blue-700 shadow-sm hover:bg-white hover:text-blue-900 hover:shadow-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500`,
    marketplaceIcon: "h-5 w-5 shrink-0 object-contain",
    footerCloseWrapMobile: "flex shrink-0 items-center justify-center sm:hidden pt-2 sm:pt-2",
    footerCloseWrapDesktop: "hidden shrink-0 sm:flex sm:items-center",
    footerButton: `text-lg text-blue-600 ${FOOTER_CONTROL_PAD} font-semibold transition-all duration-300 hover:scale-105 hover:bg-white/90 rounded-lg`,
};

const isExternal = (href) => /^https?:\/\//i.test(href);

const MARKETPLACES = [
    { key: "contra", icon: contraIcon },
    { key: "malt", icon: maltIcon },
    { key: "upwork", icon: upworkIcon },
];

const SectionArrow = () => (
    <div className={classes.sectionArrow} aria-hidden="true">
        ▼
    </div>
);

const ComparisonPanel = ({
    variant,
    thumb,
    badgeLabel,
    tooltipHeadline,
    tooltipBody,
    alt,
    demoUrl,
    linkLabel,
    onClose,
    titleFontStyle,
}) => {
    const stageClass =
        variant === "before" ? classes.comparisonStageBefore : classes.comparisonStageAfter;

    return (
        <div className={classes.comparisonBlock}>
            <div className={stageClass}>
                <div className={classes.comparisonTooltip}>
                    <p className={classes.comparisonTooltipHead}>{tooltipHeadline}</p>
                    <p className={classes.comparisonTooltipBody}>{tooltipBody}</p>
                </div>
                <span className={classes.comparisonBadge}>{badgeLabel}</span>
                <img
                    src={thumb.src}
                    srcSet={thumb.srcSet}
                    sizes={thumb.sizes}
                    alt={alt}
                    className={classes.comparisonImg}
                    width={thumb.width}
                    height={thumb.height}
                    loading="lazy"
                    decoding="async"
                />
            </div>
            <div className={classes.demoLinksRow} style={titleFontStyle}>
                {isExternal(demoUrl) ? (
                    <a
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-blue-600/70 underline-offset-2 hover:text-blue-900"
                    >
                        {linkLabel}
                    </a>
                ) : (
                    <Link
                        to={demoUrl}
                        className="underline decoration-blue-600/70 underline-offset-2 hover:text-blue-900"
                        onClick={onClose}
                    >
                        {linkLabel}
                    </Link>
                )}
            </div>
        </div>
    );
};

const DetailColumn = ({ tooltipHeadline, tooltipBody, bullets }) => (
    <div className={classes.detailCol}>
        <div>
            <p className={classes.detailScoreHead}>{tooltipHeadline}</p>
            <p className={classes.detailScoreBody}>{tooltipBody}</p>
        </div>
        {bullets.map((line) => (
            <p key={line} className={classes.detailBullet}>
                {line}
            </p>
        ))}
    </div>
);

const LcpImprovement = ({ isOpen, onClose }) => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        if (!isOpen) return;

        const removePreload = preloadImage({
            href: LCP_MODAL_REPORT_INLINE.src,
            fetchPriority: "high",
        });

        const cancelIdle = runWhenIdle(() => {
            prefetchImageUrl(LCP_MODAL_THUMB_BEFORE.src);
            prefetchImageUrl(LCP_MODAL_THUMB_AFTER.src);
        });

        return () => {
            removePreload();
            cancelIdle();
        };
    }, [isOpen]);

    const titleFontStyle =
        i18n.language === "jp"
            ? { fontFamily: '"Utsukushi", "YuGothic", "游ゴシック", sans-serif' }
            : { fontFamily: '"IrvinHeading", "Crimson Pro", sans-serif' };

    const contentBullets = useMemo(() => {
        return t("service.section2.lcp.modal.content")
            .split("\n")
            .map((line) => line.trim())
            .filter(Boolean);
    }, [t, i18n.language]);

    const beforeBullets = contentBullets.slice(0, 2);
    const afterBullets = contentBullets.slice(2, 4);

    if (!isOpen) return null;

    const leftUrl = t("service.section2.lcp.modal.thumbs.left.url");
    const rightUrl = t("service.section2.lcp.modal.thumbs.right.url");

    return (
        <div className={classes.modalOverlay} role="dialog" aria-modal="true">
            <div className={classes.mainContainer}>
                <div className={classes.content}>
                    <div className={classes.header}>
                        <div className={classes.headerContent}>
                            <h2 className={classes.headerTitle} style={titleFontStyle}>
                                {t("service.section2.lcp.modal.title")}
                            </h2>
                            <button
                                type="button"
                                onClick={onClose}
                                className={classes.closeButton}
                                aria-label={t("service.section2.lcp.modal.closeAria")}
                            >
                                ×
                            </button>
                        </div>
                    </div>

                    <div className={classes.bottomBlock}>
                        <section className={classes.sectionBlock} aria-labelledby="lcp-before-heading">
                            <h3
                                id="lcp-before-heading"
                                className={`${classes.sectionLabel} ${classes.sectionLabelBefore}`}
                                style={titleFontStyle}
                            >
                                {t("service.section2.lcp.modal.thumbs.left.label")}
                            </h3>
                            <div className={classes.twoColGrid}>
                                <ComparisonPanel
                                    variant="before"
                                    thumb={LCP_MODAL_THUMB_BEFORE}
                                    badgeLabel={t("service.section2.lcp.modal.thumbs.left.label")}
                                    tooltipHeadline={t(
                                        "service.section2.lcp.modal.comparison.tooltipBeforeHeadline"
                                    )}
                                    tooltipBody={t(
                                        "service.section2.lcp.modal.comparison.tooltipBeforeBody"
                                    )}
                                    alt={t("service.section2.lcp.modal.comparison.altBefore")}
                                    demoUrl={leftUrl}
                                    linkLabel={t("service.section2.lcp.modal.thumbs.left.linkLabel")}
                                    onClose={onClose}
                                    titleFontStyle={titleFontStyle}
                                />
                                <DetailColumn
                                    tooltipHeadline={t(
                                        "service.section2.lcp.modal.comparison.tooltipBeforeHeadline"
                                    )}
                                    tooltipBody={t(
                                        "service.section2.lcp.modal.comparison.tooltipBeforeBody"
                                    )}
                                    bullets={beforeBullets}
                                />
                            </div>
                        </section>
                        <SectionArrow />
                        <section className={classes.sectionBlock} aria-labelledby="lcp-improvement-heading">
                            <h3
                                id="lcp-improvement-heading"
                                className={classes.sectionLabelPackage}
                                style={titleFontStyle}
                            >
                                {t("service.section2.lcp.modal.packageSectionTitle")}
                            </h3>
                            <div className={classes.metaRow}>
                                <div className={classes.metaRowInner}>
                                    <div className={classes.metaFieldsCol}>
                                        <div>
                                            <p className={classes.metaLabel}>
                                                {t("service.section2.lcp.modal.labels.price")}
                                            </p>
                                            <p className={classes.metaValue}>
                                                {t("service.section2.lcp.modal.price")}
                                            </p>
                                        </div>
                                        <div>
                                            <p className={classes.metaLabel}>
                                                {t("service.section2.lcp.modal.labels.scope")}
                                            </p>
                                            <p
                                                className={`${classes.metaValue} leading-relaxed whitespace-pre-line`}
                                            >
                                                {t("service.section2.lcp.modal.scope")}
                                            </p>
                                        </div>
                                        <div>
                                            <p className={classes.metaLabel}>
                                                {t("service.section2.lcp.modal.labels.milestones")}
                                            </p>
                                            <p
                                                className={`${classes.metaValue} leading-relaxed whitespace-pre-line`}
                                            >
                                                {t("service.section2.lcp.modal.milestones")}
                                            </p>
                                        </div>
                                    </div>
                                    <div className={classes.metaReportCol}>
                                        <div className={classes.metaReportWrap}>
                                            <img
                                                src={LCP_MODAL_REPORT_INLINE.src}
                                                alt={t("service.section2.lcp.imageAlt")}
                                                className={classes.metaReportImg}
                                                width={LCP_MODAL_REPORT_INLINE.width}
                                                height={LCP_MODAL_REPORT_INLINE.height}
                                                loading="lazy"
                                                decoding="async"
                                            />
                                            <span
                                                className={classes.metaReportOverlay}
                                                aria-hidden="true"
                                            >
                                                見本
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <SectionArrow />
                        <section className={classes.sectionBlock} aria-labelledby="lcp-after-heading">
                            <h3
                                id="lcp-after-heading"
                                className={`${classes.sectionLabel} ${classes.sectionLabelAfter}`}
                                style={titleFontStyle}
                            >
                                {t("service.section2.lcp.modal.thumbs.right.label")}
                            </h3>
                            <div className={classes.twoColGrid}>
                                <ComparisonPanel
                                    variant="after"
                                    thumb={LCP_MODAL_THUMB_AFTER}
                                    badgeLabel={t("service.section2.lcp.modal.thumbs.right.label")}
                                    tooltipHeadline={t(
                                        "service.section2.lcp.modal.comparison.tooltipAfterHeadline"
                                    )}
                                    tooltipBody={t(
                                        "service.section2.lcp.modal.comparison.tooltipAfterBody"
                                    )}
                                    alt={t("service.section2.lcp.modal.comparison.altAfter")}
                                    demoUrl={rightUrl}
                                    linkLabel={t("service.section2.lcp.modal.thumbs.right.linkLabel")}
                                    onClose={onClose}
                                    titleFontStyle={titleFontStyle}
                                />
                                <DetailColumn
                                    tooltipHeadline={t(
                                        "service.section2.lcp.modal.comparison.tooltipAfterHeadline"
                                    )}
                                    tooltipBody={t(
                                        "service.section2.lcp.modal.comparison.tooltipAfterBody"
                                    )}
                                    bullets={afterBullets}
                                />
                            </div>
                        </section>
                    </div>

                    <div className={classes.footer}>
                        <div className={classes.footerOrderAndIcons}>
                            <span className={classes.orderViaLabel} style={titleFontStyle}>
                                {t("service.section2.lcp.modal.orderVia")}
                            </span>
                            <div className={classes.marketplaceList}>
                                <div className={classes.marketplaceLinksGroup}>
                                    <Link
                                        to="/contact"
                                        className={classes.footerContactLink}
                                        style={titleFontStyle}
                                        aria-label={t("service.section2.lcp.modal.contactAria")}
                                        onClick={onClose}
                                    >
                                        {t("service.section2.lcp.modal.contactLink")}
                                    </Link>
                                    <div className={classes.marketplaceLinksRow}>
                                        {MARKETPLACES.map(({ key, icon }) => {
                                            const base = `service.section2.lcp.modal.marketplaces.${key}`;
                                            return (
                                                <a
                                                    key={key}
                                                    href={t(`${base}.url`)}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={classes.marketplaceLink}
                                                    style={titleFontStyle}
                                                    aria-label={t(`${base}.ariaLabel`)}
                                                >
                                                    <img
                                                        src={icon}
                                                        alt=""
                                                        className={classes.marketplaceIcon}
                                                        width={20}
                                                        height={20}
                                                        loading="lazy"
                                                        decoding="async"
                                                    />
                                                    {t(`${base}.label`)}
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className={classes.footerCloseWrapMobile}>
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className={classes.footerButton}
                                        style={titleFontStyle}
                                    >
                                        {t("service.section2.lcp.modal.close")}
                                    </button>
                                </div>
                            </div>
                            <div className={classes.footerCloseWrapDesktop}>
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className={classes.footerButton}
                                    style={titleFontStyle}
                                >
                                    {t("service.section2.lcp.modal.close")}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LcpImprovement;
