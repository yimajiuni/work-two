import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import lcpReport from "../assets/images/lcp-report.webp";
import thumbBefore from "../assets/images/lcp-before.webp";
import thumbAfter from "../assets/images/lcp-after.webp";
import upworkIcon from "../assets/icons/upwork.svg";
import contraIcon from "../assets/icons/contra.svg";
import maltIcon from "../assets/icons/malt.svg";

/** Footer control padding; marketplace links use tighter horizontal pad on mobile (icon + label) */
const FOOTER_CONTROL_PAD = "px-4 sm:px-6 py-2 sm:py-3";
const FOOTER_MARKETPLACE_PAD = "px-1.5 lg:px-6 py-2 sm:py-3";

const classes = {
    modalOverlay:
        "fixed inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center p-4",
    mainContainer:
        "border border-gray-500 bg-[#f9c6e1] backdrop-blur-sm max-w-4xl w-full max-h-[90dvh] min-h-[40dvh] flex flex-col overflow-hidden rounded-lg",
    header:
        "sticky top-0 z-10 shrink-0 bg-white/20 backdrop-blur-sm border-b border-gray-500 text-blue-600 p-4 sm:p-6 rounded-t-lg",
    headerContent: "flex justify-between items-start gap-4",
    headerTitle: "text-xl sm:text-2xl font-bold text-blue-600 pr-2",
    closeButton: "text-blue-600 hover:text-white text-2xl leading-none shrink-0 transition-colors",
    content: "flex flex-col flex-1 min-h-0 overflow-y-auto overscroll-contain",
    heroWrap: "relative w-full shrink-0 overflow-hidden",
    heroImg:
        "w-full h-44 sm:h-56 object-cover border-b border-gray-500 block blur-sm scale-[1.02] [transform:translateZ(0)]",
    heroCopyOverlay:
        "opacity-80 bg-[#f01653] pointer-events-none absolute inset-0 z-[1] flex items-end justify-center px-3 pb-4 sm:items-center sm:pb-6 sm:px-6",
    heroCopyText:
        "text-white drop-shadow-sm max-w-xl translate-y-[-10px] sm:translate-y-[20px] text-center text-2xl font-semibold leading-snug sm:max-w-3xl sm:text-4xl",
    bottomBlock: "flex flex-col gap-6 p-4 sm:p-6",
    metaRow:
        "space-y-3 border-b border-gray-500 pb-6 text-gray-800",
    metaLabel: "text-xs font-semibold uppercase tracking-wide text-blue-700",
    metaValue: "text-base sm:text-lg text-gray-800 leading-snug",
    comparisonBlock:
        "rounded-lg overflow-hidden border border-gray-500 bg-white/30 shadow-sm",
    comparisonStageBase:
        "group relative w-full min-h-[11rem] sm:min-h-[13rem] py-2 [container-type:inline-size] transition-[background-color] duration-700 ease-in-out",
    comparisonImg:
        "absolute inset-0 z-10 m-auto h-full max-h-full w-full max-w-full object-contain duration-700 ease-in-out pointer-events-none",
    comparisonTooltip:
        "pointer-events-none absolute left-1/2 top-16 z-20 w-[min(92%,20rem)] -translate-x-1/2 rounded-lg border border-white/40 bg-black px-3 py-2 text-left text-xs text-white opacity-0 shadow-lg backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100 sm:w-[min(90%,22rem)] sm:text-sm",
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
        "items-center justify-center flex-col sm:flex-row",
    marketplaceLinksGroup:
        "flex min-w-0 flex-1 flex-row flex-wrap items-center gap-2",
    marketplaceLink: `text-sm sm:text-lg inline-flex shrink-0 items-center gap-2 rounded-lg bg-white/90 ${FOOTER_MARKETPLACE_PAD} font-semibold text-gray-800 shadow-sm hover:bg-white hover:shadow-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500`,
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

const LcpImprovement = ({ isOpen, onClose }) => {
    const { t, i18n } = useTranslation();
    const [showAfter, setShowAfter] = useState(false);

    const titleFontStyle =
        i18n.language === "jp"
            ? { fontFamily: '"Utsukushi", "YuGothic", "游ゴシック", sans-serif' }
            : { fontFamily: '"IrvinHeading", "Crimson Pro", sans-serif' };

    const heroCopyFontStyle =
        i18n.language === "jp"
            ? { fontFamily: '"YuGothic", "游ゴシック", "Hiragino Sans", sans-serif' }
            : { fontFamily: '"Crimson Pro", "Georgia", serif' };

    useEffect(() => {
        if (!isOpen) return;
        setShowAfter(false);
        const reduceMotion =
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduceMotion) return;
        const id = window.setInterval(() => setShowAfter((v) => !v), 2800);
        return () => window.clearInterval(id);
    }, [isOpen]);

    if (!isOpen) return null;

    const leftUrl = t("service.section2.lcp.modal.thumbs.left.url");
    const rightUrl = t("service.section2.lcp.modal.thumbs.right.url");

    return (
        <div className={classes.modalOverlay} role="dialog" aria-modal="true">
            <div className={classes.mainContainer}>
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

                <div className={classes.content}>
                    {/* 上段: ヒーロー画像（全幅） */}
                    <div className={classes.heroWrap}>
                        <img
                            src={lcpReport}
                            alt={t("service.section2.lcp.imageAlt")}
                            className={classes.heroImg}
                            width={1200}
                            height={600}
                        />
                        <div className={classes.heroCopyOverlay}>
                            <p className={classes.heroCopyText} style={heroCopyFontStyle}>
                                {t("service.section2.lcp.modal.copy")}
                            </p>
                        </div>
                    </div>

                    {/* 下段 */}
                    <div className={classes.bottomBlock}>
                        {/* 下段の上の行: 値段・範囲・内容 */}
                        <div className={classes.metaRow}>
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
                                <p className={`${classes.metaValue} leading-relaxed whitespace-pre-line`}>
                                    {t("service.section2.lcp.modal.scope")}
                                </p>
                            </div>
                            <div>
                                <p className={classes.metaLabel}>
                                    {t("service.section2.lcp.modal.labels.milestones")}
                                </p>
                                <p className={`${classes.metaValue} leading-relaxed whitespace-pre-line`}>
                                    {t("service.section2.lcp.modal.milestones")}
                                </p>
                            </div>
                            <div>
                                <p className={classes.metaLabel}>
                                    {t("service.section2.lcp.modal.labels.content")}
                                </p>
                                <p className={`${classes.metaValue} leading-relaxed whitespace-pre-line`}>
                                    {t("service.section2.lcp.modal.content")}
                                </p>
                            </div>
                        </div>

                        {/* Before / After: single stage (crossfade). Replace with one <img> if you add lcp-before-after.gif */}
                        <div className={classes.comparisonBlock}>
                            <div
                                className={`${classes.comparisonStageBase} ${showAfter ? "bg-blue-600" : "bg-[#f01653]"}`}
                            >
                                <div className={classes.comparisonTooltip}>
                                    <p className={classes.comparisonTooltipHead}>
                                        {showAfter
                                            ? t("service.section2.lcp.modal.comparison.tooltipAfterHeadline")
                                            : t("service.section2.lcp.modal.comparison.tooltipBeforeHeadline")}
                                    </p>
                                    <p className={classes.comparisonTooltipBody}>
                                        {showAfter
                                            ? t("service.section2.lcp.modal.comparison.tooltipAfterBody")
                                            : t("service.section2.lcp.modal.comparison.tooltipBeforeBody")}
                                    </p>
                                </div>
                                <span className={classes.comparisonBadge} aria-live="polite">
                                    {showAfter
                                        ? t("service.section2.lcp.modal.thumbs.right.label")
                                        : t("service.section2.lcp.modal.thumbs.left.label")}
                                </span>
                                <img
                                    src={thumbBefore}
                                    alt={t("service.section2.lcp.modal.comparison.altBefore")}
                                    className={classes.comparisonImg}
                                    style={{ opacity: showAfter ? 0 : 1 }}
                                    width={800}
                                    height={450}
                                    decoding="async"
                                />
                                <img
                                    src={thumbAfter}
                                    alt={t("service.section2.lcp.modal.comparison.altAfter")}
                                    className={classes.comparisonImg}
                                    style={{ opacity: showAfter ? 1 : 0 }}
                                    width={800}
                                    height={450}
                                    decoding="async"
                                />
                            </div>
                            <div className={classes.demoLinksRow} style={titleFontStyle}>
                                {isExternal(leftUrl) ? (
                                    <a
                                        href={leftUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline decoration-blue-600/70 underline-offset-2 hover:text-blue-900"
                                    >
                                        {t("service.section2.lcp.modal.thumbs.left.linkLabel")}
                                    </a>
                                ) : (
                                    <Link
                                        to={leftUrl}
                                        className="underline decoration-blue-600/70 underline-offset-2 hover:text-blue-900"
                                        onClick={onClose}
                                    >
                                        {t("service.section2.lcp.modal.thumbs.left.linkLabel")}
                                    </Link>
                                )}
                                {isExternal(rightUrl) ? (
                                    <a
                                        href={rightUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline decoration-blue-600/70 underline-offset-2 hover:text-blue-900"
                                    >
                                        {t("service.section2.lcp.modal.thumbs.right.linkLabel")}
                                    </a>
                                ) : (
                                    <Link
                                        to={rightUrl}
                                        className="underline decoration-blue-600/70 underline-offset-2 hover:text-blue-900"
                                        onClick={onClose}
                                    >
                                        {t("service.section2.lcp.modal.thumbs.right.linkLabel")}
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className={classes.footer}>
                        <div className={classes.footerOrderAndIcons}>
                            <span className={classes.orderViaLabel} style={titleFontStyle}>
                                {t("service.section2.lcp.modal.orderVia")}
                            </span>
                            <div className={classes.marketplaceList}>
                                <div className={classes.marketplaceLinksGroup}>
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
                                                />
                                                {t(`${base}.label`)}
                                            </a>
                                        );
                                    })}

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
