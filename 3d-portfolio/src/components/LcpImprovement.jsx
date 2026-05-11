import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import lcpHero from "../assets/images/lcp.webp";
import thumbDemo from "../assets/images/webmock1.webp";
import thumbSecondary from "../assets/images/webmock2.webp";
import upworkIcon from "../assets/icons/upwork.svg";
import contraIcon from "../assets/icons/contra.svg";
import maltIcon from "../assets/icons/malt.svg";

/** Same horizontal + vertical padding as the Close button */
const FOOTER_CONTROL_PAD = "px-4 sm:px-6 py-2 sm:py-3";

const classes = {
    modalOverlay:
        "fixed inset-0 bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center p-4",
    mainContainer:
        "border border-gray-500 bg-[#f9c6e1] backdrop-blur-sm max-w-4xl w-full max-h-[90dvh] min-h-[40dvh] flex flex-col overflow-hidden rounded-lg",
    header:
        "bg-white/20 backdrop-blur-sm border-b border-gray-500 text-blue-600 p-4 sm:p-6 rounded-t-lg z-10 shrink-0",
    headerContent: "flex justify-between items-start gap-4",
    headerTitle: "text-xl sm:text-2xl font-bold text-blue-600 pr-2",
    closeButton: "text-blue-600 hover:text-white text-2xl leading-none shrink-0 transition-colors",
    content: "flex flex-col flex-1 min-h-0 overflow-y-auto overscroll-contain",
    heroWrap: "w-full shrink-0",
    heroImg: "w-full h-44 sm:h-56 object-cover border-b border-gray-500 block",
    bottomBlock: "flex flex-col gap-6 p-4 sm:p-6",
    metaRow:
        "space-y-3 border-b border-gray-500 pb-6 text-gray-800",
    metaLabel: "text-xs font-semibold uppercase tracking-wide text-blue-700",
    metaValue: "text-base sm:text-lg text-gray-800 leading-snug",
    thumbGrid: "grid grid-cols-1 sm:grid-cols-2 gap-4",
    thumbLink:
        "group block rounded-lg overflow-hidden border border-gray-500 bg-white/30 shadow-sm hover:shadow-md transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
    thumbImg: "w-full h-40 sm:h-44 object-cover transition-transform duration-300 group-hover:scale-[1.02]",
    thumbCaption:
        "px-3 py-2 text-sm font-semibold text-blue-700 bg-white/40 border-t border-gray-500",
    footer:
        "mt-auto bg-white/20 backdrop-blur-sm border-t border-gray-500 p-4 sm:p-6 rounded-b-lg shrink-0",
    footerRow:
        "flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-0",
    footerOrderAndIcons:
        "flex min-w-0 flex-wrap items-center gap-3 self-start sm:gap-4 sm:self-center",
    orderViaLabel: `inline-flex items-center text-lg font-semibold text-blue-600 whitespace-nowrap ${FOOTER_CONTROL_PAD}`,
    marketplaceList: "flex flex-wrap items-center gap-2",
    marketplaceLink: `text-lg inline-flex items-center gap-2 rounded-lg bg-white/90 ${FOOTER_CONTROL_PAD} font-semibold text-gray-800 shadow-sm hover:bg-white hover:shadow-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500`,
    marketplaceIcon: "h-5 w-5 shrink-0 object-contain",
    footerCloseWrap: "shrink-0 self-end sm:self-center",
    footerButton: `bg-white text-blue-600 ${FOOTER_CONTROL_PAD} font-semibold transition-all duration-300 hover:scale-105 rounded-lg`,
};

const isExternal = (href) => /^https?:\/\//i.test(href);

const MARKETPLACES = [
    { key: "upwork", icon: upworkIcon },
    { key: "contra", icon: contraIcon },
    { key: "malt", icon: maltIcon },
];

const LcpImprovement = ({ isOpen, onClose }) => {
    const { t, i18n } = useTranslation();

    const titleFontStyle =
        i18n.language === "jp"
            ? { fontFamily: '"Utsukushi", "YuGothic", "游ゴシック", sans-serif' }
            : { fontFamily: '"IrvinHeading", "Crimson Pro", sans-serif' };

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
                            src={lcpHero}
                            alt={t("service.section2.lcp.imageAlt")}
                            className={classes.heroImg}
                            width={1200}
                            height={600}
                        />
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
                                <p className={classes.metaValue}>
                                    {t("service.section2.lcp.modal.scope")}
                                </p>
                            </div>
                            <div>
                                <p className={classes.metaLabel}>
                                    {t("service.section2.lcp.modal.labels.content")}
                                </p>
                                <p className={`${classes.metaValue} leading-relaxed`}>
                                    {t("service.section2.lcp.modal.content")}
                                </p>
                            </div>
                        </div>

                        {/* 下段の下の行: 2列サムネイル＋リンク */}
                        <div className={classes.thumbGrid}>
                            <div>
                                {isExternal(leftUrl) ? (
                                    <a
                                        href={leftUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={classes.thumbLink}
                                    >
                                        <img
                                            src={thumbDemo}
                                            alt={t("service.section2.lcp.modal.thumbs.left.alt")}
                                            className={classes.thumbImg}
                                            width={800}
                                            height={400}
                                            loading="lazy"
                                        />
                                        <p className={classes.thumbCaption} style={titleFontStyle}>
                                            {t("service.section2.lcp.modal.thumbs.left.label")}
                                        </p>
                                    </a>
                                ) : (
                                    <Link to={leftUrl} className={classes.thumbLink} onClick={onClose}>
                                        <img
                                            src={thumbDemo}
                                            alt={t("service.section2.lcp.modal.thumbs.left.alt")}
                                            className={classes.thumbImg}
                                            width={800}
                                            height={400}
                                            loading="lazy"
                                        />
                                        <p className={classes.thumbCaption} style={titleFontStyle}>
                                            {t("service.section2.lcp.modal.thumbs.left.label")}
                                        </p>
                                    </Link>
                                )}
                            </div>
                            <div>
                                {isExternal(rightUrl) ? (
                                    <a
                                        href={rightUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={classes.thumbLink}
                                    >
                                        <img
                                            src={thumbSecondary}
                                            alt={t("service.section2.lcp.modal.thumbs.right.alt")}
                                            className={classes.thumbImg}
                                            width={800}
                                            height={400}
                                            loading="lazy"
                                        />
                                        <p className={classes.thumbCaption} style={titleFontStyle}>
                                            {t("service.section2.lcp.modal.thumbs.right.label")}
                                        </p>
                                    </a>
                                ) : (
                                    <Link to={rightUrl} className={classes.thumbLink} onClick={onClose}>
                                        <img
                                            src={thumbSecondary}
                                            alt={t("service.section2.lcp.modal.thumbs.right.alt")}
                                            className={classes.thumbImg}
                                            width={800}
                                            height={400}
                                            loading="lazy"
                                        />
                                        <p className={classes.thumbCaption} style={titleFontStyle}>
                                            {t("service.section2.lcp.modal.thumbs.right.label")}
                                        </p>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={classes.footer}>
                    <div className={classes.footerRow}>
                        <div className={classes.footerOrderAndIcons}>
                            <span className={classes.orderViaLabel} style={titleFontStyle}>
                                {t("service.section2.lcp.modal.orderVia")}
                            </span>
                            <div className={classes.marketplaceList}>
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
                        </div>
                        <div className={classes.footerCloseWrap}>
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
    );
};

export default LcpImprovement;
