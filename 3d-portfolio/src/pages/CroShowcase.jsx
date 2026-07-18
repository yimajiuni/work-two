import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronRight } from "lucide-react";
import croMovieSrc from "../assets/movies/movie.mp4";
import { lcpAfter600w, lcpBefore600w } from "../assets/images";
import croBefore1 from "../assets/images/cro-b-1.webp";
import croBefore2 from "../assets/images/cro-b-2.webp";
import croBefore3 from "../assets/images/cro-b-3.webp";
import croBefore4 from "../assets/images/cro-b-4.webp";
import croBefore5 from "../assets/images/cro-b-5.webp";
import croBefore6 from "../assets/images/cro-b-6.webp";
import croBefore7 from "../assets/images/cro-b-7.webp";
import croBefore8 from "../assets/images/cro-b-8.webp";
import croBefore9 from "../assets/images/cro-b-9.webp";
import { CRO_ANCHOR_TO_SECTION, SECTION_ID_TO_ANCHOR } from "../constants/croNav";

const CRO_MOVIE_SRC = croMovieSrc;

const brandAccent = {
    1: {
        key: "valueTrust",
        colorClass: "bg-purple-500",
        bgGradient: "cro-section-gradient cro-section-gradient--1",
        overlayFill: "bg-purple-600/40",
    },
    2: {
        key: "experience",
        colorClass: "bg-blue-500",
        bgGradient: "cro-section-gradient cro-section-gradient--2",
        overlayFill: "bg-blue-600/40",
    },
    3: {
        key: "operation",
        colorClass: "bg-emerald-500",
        bgGradient: "cro-section-gradient cro-section-gradient--3",
        overlayFill: "bg-emerald-600/40",
    },
    4: {
        key: "speed",
        colorClass: "bg-red-500",
        bgGradient: "cro-section-gradient cro-section-gradient--4",
        overlayFill: "bg-red-600/40",
    },
};

const AFTER_SITE_URL = "https://liberota.com";
const AFTER_SITE_LINK_ENABLED = false;

function isMobileViewport() {
    return typeof window !== "undefined" && window.matchMedia("(max-width: 639px)").matches;
}

function requestElementFullscreen(element) {
    if (!element) return Promise.resolve(false);

    const request =
        element.requestFullscreen ||
        element.webkitRequestFullscreen ||
        element.webkitEnterFullscreen;

    if (!request) return Promise.resolve(false);

    return Promise.resolve(request.call(element))
        .then(() => true)
        .catch(() => false);
}

function exitDocumentFullscreen() {
    const doc = document;
    if (!doc.fullscreenElement && !doc.webkitFullscreenElement) return Promise.resolve();

    const exit = doc.exitFullscreen || doc.webkitExitFullscreen;
    if (!exit) return Promise.resolve();

    return Promise.resolve(exit.call(doc)).catch(() => undefined);
}

async function enterMobilePlaybackFullscreen() {
    if (!isMobileViewport()) return;

    // Fullscreen the popup shell (not the iframe) so the close button stays visible.
    const popup = document.querySelector(".cro-playback-popup");
    if (!popup) return;

    await requestElementFullscreen(popup);
}

const afterSiteLinkClassName = [
    "cro-after-site-link group relative z-30 pointer-events-auto cursor-pointer",
    "flex h-full w-full",
    "flex-col items-center justify-center gap-3",
    "text-white",
    "focus:outline-none",
].join(" ");

function OverlayAfterSiteLink({ ariaLabel, labelTop, labelBottom }) {
    const content = (
        <>
            <span className="cro-after-link-label cro-blend-difference text-xs sm:text-sm leading-snug font-semibold">
                {labelTop}
            </span>
            <span className="cro-after-arrow-bounce cro-blend-difference inline-flex">
                <ChevronRight size={44} strokeWidth={0.75} />
            </span>
            <span className="cro-after-link-label cro-blend-difference text-xs sm:text-sm leading-snug font-semibold">
                {labelBottom}
            </span>
        </>
    );

    if (!AFTER_SITE_LINK_ENABLED) {
        return (
            <div className={afterSiteLinkClassName} aria-hidden="true">
                {content}
            </div>
        );
    }

    return (
        <a
            href={AFTER_SITE_URL}
            target="_blank"
            rel="noreferrer"
            className={afterSiteLinkClassName}
            aria-label={ariaLabel}
        >
            {content}
        </a>
    );
}
function buildLoomEmbedSrc(shareId, { autoplay = true, muted = true, startAtZero = false } = {}) {
    const params = new URLSearchParams({
        autoplay: autoplay ? "1" : "0",
        hide_owner: "true",
        hide_title: "true",
        hide_share: "true",
        hideEmbedTopBar: "true",
        hide_speed: "true",
    });
    if (muted) {
        params.set("muted", "1");
    }
    if (startAtZero) {
        params.set("t", "0");
    }
    return `https://www.loom.com/embed/${shareId}?${params.toString()}`;
}

const SECTION_LAYOUT = [
    {
        id: 1,
        category: 1,
        loomShareId: "68bbc95eb76a4af89e6c8e4824e088b5",
        improvements: [
            { id: "s1-a", key: "a", side: "left", image: croBefore1 },
            { id: "s1-b", key: "b", side: "right", image: croBefore2 },
            { id: "s1-c", key: "c", side: "left", image: croBefore3 },
        ],
    },
    {
        id: 2,
        category: 2,
        loomShareId: "abad2c5f07f842558570a9f762740c55",
        improvements: [
            { id: "s2-a", key: "a", side: "left", image: croBefore4 },
            { id: "s2-b", key: "b", side: "left", image: croBefore5 },
            { id: "s2-c", key: "c", side: "right", image: croBefore6 },
            { id: "s2-d", key: "d", side: "right", image: croBefore7 },
        ],
    },
    {
        id: 3,
        category: 3,
        loomShareId: "de7e9f071da94b0987c9c0e31508b39a",
        improvements: [
            { id: "s3-a", key: "a", side: "left", image: croBefore8 },
            { id: "s3-b", key: "b", side: "right", image: croBefore9 },
        ],
    },
    {
        id: 4,
        category: 4,
        improvements: [
            { id: "s4-a", key: "a", side: "left" },
            { id: "s4-b", key: "b", side: "right" },
        ],
    },
];

const DOT_RADIUS = 24;

function splitImprovementsBySide(improvements) {
    const left = improvements.filter((item) => item.side === "left");
    const right = improvements.filter((item) => item.side === "right");
    const leftMid = Math.ceil(left.length / 2);
    const rightMid = Math.ceil(right.length / 2);

    return {
        topLeft: left.slice(0, leftMid),
        bottomLeft: left.slice(leftMid),
        topRight: right.slice(0, rightMid),
        bottomRight: right.slice(rightMid),
    };
}

function ImprovementMarker({ item, index, accent, categoryLabel, align }) {
    const [hovered, setHovered] = useState(false);
    const { t } = useTranslation();
    const isRight = align === "right";

    return (
        <div
            className={[
                "cro-improvement-marker",
                "flex items-center gap-2 sm:gap-3",
                isRight ? "flex-row-reverse" : "flex-row",
            ].join(" ")}
        >
            <button
                type="button"
                className={[
                    "relative shrink-0",
                    "w-12 h-12 sm:w-14 sm:h-14 rounded-full",
                    "transition-transform duration-300",
                    hovered ? "scale-[150%]" : "scale-[80%]",
                    "focus:outline-none",
                ].join(" ")}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onFocus={() => setHovered(true)}
                onBlur={() => setHovered(false)}
                aria-label={t("croShowcase.dotAria", { category: categoryLabel, label: item.label })}
            >
                <span
                    className={[
                        "absolute inset-0 rounded-full overflow-hidden",
                        accent.colorClass,
                    ].join(" ")}
                />
            </button>

            <p
                className={[
                    "cro-improvement-label",
                    "text-xs sm:text-sm leading-snug",
                    isRight ? "text-right" : "text-left",
                ].join(" ")}
            >
                <span className="font-semibold tabular-nums">{index + 1}.</span>{" "}
                {item.label}
            </p>
        </div>
    );
}

function moveMarkerWithinCell(event) {
    const cell = event.currentTarget;
    const content = cell.querySelector(":scope > .cro-marker-cell__content");
    if (!content) return;

    const rect = cell.getBoundingClientRect();
    const halfWidth = content.offsetWidth / 2;
    const halfHeight = content.offsetHeight / 2;
    const padding = 12;
    const minX = Math.min(rect.width / 2, halfWidth + padding);
    const maxX = Math.max(minX, rect.width - halfWidth - padding);
    const minY = Math.min(rect.height / 2, halfHeight + padding);
    const maxY = Math.max(minY, rect.height - halfHeight - padding);
    const x = Math.min(maxX, Math.max(minX, event.clientX - rect.left));
    const y = Math.min(maxY, Math.max(minY, event.clientY - rect.top));

    content.style.left = `${x}px`;
    content.style.top = `${y}px`;
    content.style.right = "auto";
    content.style.transform = "translate(-50%, -50%)";
    content.classList.add("cro-marker-cell__content--following");
}

function resetMarkerWithinCell(event) {
    const content = event.currentTarget.querySelector(":scope > .cro-marker-cell__content");
    if (!content) return;

    content.removeAttribute("style");
    content.classList.remove("cro-marker-cell__content--following");
}

function ImprovementMarkerCell({ items, align, accent, categoryLabel, indexOffset = 0, className }) {
    return (
        <div
            className={[
                "cro-marker-cell",
                `cro-marker-cell--align-${align}`,
                items.length === 0 && "cro-marker-cell--empty",
                className,
            ]
                .filter(Boolean)
                .join(" ")}
            onPointerMove={moveMarkerWithinCell}
            onPointerLeave={resetMarkerWithinCell}
        >
            {items.length > 0 && (
                <div className="cro-marker-cell__content flex flex-col gap-6 sm:gap-8">
                    {items.map((item, cellIndex) => (
                        <ImprovementMarker
                            key={item.id}
                            item={item}
                            index={indexOffset + cellIndex}
                            accent={accent}
                            categoryLabel={categoryLabel}
                            align={align}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

function ImprovementMarkerGrid({ improvements, accent, categoryLabel }) {
    const cells = useMemo(() => splitImprovementsBySide(improvements), [improvements]);
    const isDesktopDual = improvements.length === 2;
    const mobileRowCount = Math.max(improvements.length, 1);
    const mobileGridStyle = {
        gridTemplateRows: `repeat(${mobileRowCount}, minmax(0, 1fr))`,
    };

    return (
        <>
            <div
                className={[
                    "cro-marker-grid cro-marker-grid--desktop",
                    isDesktopDual && "cro-marker-grid--dual",
                ]
                    .filter(Boolean)
                    .join(" ")}
            >
                <ImprovementMarkerCell
                    items={cells.topLeft}
                    align="left"
                    accent={accent}
                    categoryLabel={categoryLabel}
                    indexOffset={0}
                    className="cro-marker-cell--top-left"
                />
                <ImprovementMarkerCell
                    items={cells.topRight}
                    align="right"
                    accent={accent}
                    categoryLabel={categoryLabel}
                    indexOffset={cells.topLeft.length}
                    className="cro-marker-cell--top-right"
                />
                {!isDesktopDual ? (
                    <>
                        <ImprovementMarkerCell
                            items={cells.bottomLeft}
                            align="left"
                            accent={accent}
                            categoryLabel={categoryLabel}
                            indexOffset={cells.topLeft.length + cells.topRight.length}
                            className="cro-marker-cell--bottom-left"
                        />
                        <ImprovementMarkerCell
                            items={cells.bottomRight}
                            align="right"
                            accent={accent}
                            categoryLabel={categoryLabel}
                            indexOffset={
                                cells.topLeft.length + cells.topRight.length + cells.bottomLeft.length
                            }
                            className="cro-marker-cell--bottom-right"
                        />
                    </>
                ) : null}
            </div>

            <div className="cro-marker-grid cro-marker-grid--mobile" style={mobileGridStyle}>
                {improvements.map((item, index) => (
                    <ImprovementMarkerCell
                        key={item.id}
                        items={[item]}
                        align={item.side === "right" ? "right" : "left"}
                        accent={accent}
                        categoryLabel={categoryLabel}
                        indexOffset={index}
                        className="cro-marker-cell--mobile-row"
                    />
                ))}
            </div>
        </>
    );
}

function OverlaySampleGrid({ improvements }) {
    const cells = useMemo(() => splitImprovementsBySide(improvements), [improvements]);
    const isDesktopDual = improvements.length === 2;
    const slots = isDesktopDual
        ? [cells.topLeft, cells.topRight]
        : [cells.topLeft, cells.topRight, cells.bottomLeft, cells.bottomRight];
    const mobileRowCount = Math.max(improvements.length, 1);
    const mobileGridStyle = {
        gridTemplateRows: `repeat(${mobileRowCount}, minmax(0, 1fr))`,
    };

    return (
        <>
            <div
                className={[
                    "cro-overlay-grid cro-overlay-grid--desktop",
                    isDesktopDual ? "cro-overlay-grid--dual" : "cro-overlay-grid--quad",
                ].join(" ")}
                aria-hidden="true"
            >
                {slots.map((items, index) => (
                    <div key={index} className="cro-overlay-grid__cell">
                        {items.length > 0 ? (
                            <img
                                src={items[0].image}
                                alt=""
                                className="cro-overlay-grid__image"
                                loading="lazy"
                                decoding="async"
                            />
                        ) : null}
                    </div>
                ))}
            </div>

            <div
                className="cro-overlay-grid cro-overlay-grid--stack cro-overlay-grid--mobile"
                style={mobileGridStyle}
                aria-hidden="true"
            >
                {improvements.map((item) => (
                    <div key={item.id} className="cro-overlay-grid__cell">
                        <img
                            src={item.image}
                            alt=""
                            className="cro-overlay-grid__image"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                ))}
            </div>
        </>
    );
}

const LOOM_PLAYER_JS = "player.js";
const loomThumbnailCache = new Map();

async function fetchLoomThumbnailUrl(shareId) {
    if (loomThumbnailCache.has(shareId)) {
        return loomThumbnailCache.get(shareId);
    }

    const shareUrl = `https://www.loom.com/share/${shareId}`;
    const oembedUrl = `https://www.loom.com/v1/oembed?url=${encodeURIComponent(shareUrl)}`;

    try {
        const response = await fetch(oembedUrl);
        if (!response.ok) throw new Error("Loom oEmbed request failed");

        const data = await response.json();
        const thumbnailUrl = typeof data.thumbnail_url === "string" ? data.thumbnail_url : null;
        loomThumbnailCache.set(shareId, thumbnailUrl);
        return thumbnailUrl;
    } catch {
        loomThumbnailCache.set(shareId, null);
        return null;
    }
}

function useLoomThumbnail(shareId) {
    const [thumbnailUrl, setThumbnailUrl] = useState(() => loomThumbnailCache.get(shareId) ?? null);

    useEffect(() => {
        let cancelled = false;

        fetchLoomThumbnailUrl(shareId).then((url) => {
            if (!cancelled) setThumbnailUrl(url);
        });

        return () => {
            cancelled = true;
        };
    }, [shareId]);

    return thumbnailUrl;
}

function postToLoomPlayer(iframe, message) {
    iframe?.contentWindow?.postMessage({ context: LOOM_PLAYER_JS, ...message }, "*");
}

function useLoomPlayer(iframeRef, { enabled, onPlay, onPause, onEnded, autoPlayOnReady = false }) {
    const listenersRegisteredRef = useRef(false);

    useEffect(() => {
        listenersRegisteredRef.current = false;
    }, [enabled]);

    useEffect(() => {
        if (!enabled) return undefined;

        const handleMessage = (event) => {
            if (!event.origin.includes("loom.com")) return;

            const iframe = iframeRef.current;
            if (!iframe || event.source !== iframe.contentWindow) return;

            let data = event.data;
            if (typeof data === "string") {
                try {
                    data = JSON.parse(data);
                } catch {
                    return;
                }
            }

            if (!data || data.context !== LOOM_PLAYER_JS) return;

            if (data.event === "ready" && !listenersRegisteredRef.current) {
                listenersRegisteredRef.current = true;
                ["play", "pause", "ended"].forEach((eventName) => {
                    postToLoomPlayer(iframe, { method: "addEventListener", value: eventName });
                });

                if (autoPlayOnReady) {
                    postToLoomPlayer(iframe, { method: "play" });
                }
            }

            if (data.event === "play") onPlay?.();
            if (data.event === "pause") onPause?.();
            if (data.event === "ended") onEnded?.();
        };

        window.addEventListener("message", handleMessage);
        return () => window.removeEventListener("message", handleMessage);
    }, [autoPlayOnReady, enabled, iframeRef, onEnded, onPause, onPlay]);
}

function SectionLoomPoster({ shareId, dimmed }) {
    const thumbnailUrl = useLoomThumbnail(shareId);

    return (
        <div className="cro-loom-embed cro-loom-embed--poster">
            {thumbnailUrl ? (
                <img
                    src={thumbnailUrl}
                    alt=""
                    className="cro-loom-embed__poster"
                    aria-hidden="true"
                    decoding="async"
                />
            ) : null}
            {dimmed ? <div className="cro-loom-embed__hover-veil" aria-hidden="true" /> : null}
        </div>
    );
}

function LoomPlaybackPopup({ section, onClose, closeLabel }) {
    const iframeRef = useRef(null);

    const embedSrc = useMemo(
        () => buildLoomEmbedSrc(section.loomShareId, { autoplay: false, muted: false, startAtZero: true }),
        [section.loomShareId],
    );

    const handleClose = useCallback(() => {
        postToLoomPlayer(iframeRef.current, { method: "pause" });
        onClose();
    }, [onClose]);

    useLoomPlayer(iframeRef, {
        enabled: true,
        autoPlayOnReady: true,
    });

    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.key === "Escape") handleClose();
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [handleClose]);

    return (
        <div className="cro-playback-popup fixed inset-0 z-[75]">
            <div className="cro-loom-embed cro-loom-embed--overlay absolute inset-0">
                <iframe
                    ref={iframeRef}
                    src={embedSrc}
                    title={section.headline}
                    className="cro-loom-embed__frame"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                />
            </div>

            <div className="cro-playback-popup__close absolute top-4 right-4 z-[100] sm:top-6 sm:right-6 pointer-events-auto">
                <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center text-white transition-colors hover:text-white/75 focus:outline-none"
                    onClick={handleClose}
                    aria-label={closeLabel}
                >
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path d="M6 6l12 12" stroke="currentColor" strokeWidth={0.75} strokeLinecap="round" />
                        <path d="M18 6L6 18" stroke="currentColor" strokeWidth={0.75} strokeLinecap="round" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

function LoomTopSectionLayout({
    headline,
    sub,
    sectionId,
    isSelected,
    detailLabel,
    onTitleHoverEnter,
    onTitleHoverLeave,
    onTitleClick,
    onDetailClick,
    sectionAria,
}) {
    return (
        <div className="relative z-10 flex h-full items-center justify-center pointer-events-none">
            <div
                data-cro-title
                className={[
                    "cro-copy-trigger",
                    "flex flex-col items-center text-center",
                    "pt-20 pb-8 px-8 sm:px-12",
                    "select-none pointer-events-auto",
                ].join(" ")}
                onMouseEnter={onTitleHoverEnter}
                onMouseLeave={onTitleHoverLeave}
                onClick={(event) => onTitleClick(event, sectionId)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        onTitleClick(event, sectionId);
                    }
                }}
                aria-label={sectionAria}
            >
                <h2 className="mt-4 max-w-3xl text-2xl font-semibold leading-snug text-white sm:text-3xl">
                    {headline}
                </h2>
                <p className="mt-3 max-w-2xl text-base text-white/75 sm:text-lg">{sub}</p>
                {isSelected ? (
                    <button
                        type="button"
                        data-cro-view-details
                        className="cro-detail-link mt-4"
                        onClick={(event) => {
                            event.stopPropagation();
                            onDetailClick(sectionId);
                        }}
                    >
                        {detailLabel}
                    </button>
                ) : null}
            </div>
        </div>
    );
}

function SectionVideo({ src, paused, muted = true, startAtZero = false, className = "" }) {
    const videoRef = useRef(null);

    const syncPlayback = useCallback(() => {
        const video = videoRef.current;
        if (!video) return;

        if (startAtZero) {
            video.currentTime = 0;
        }

        if (paused) {
            video.pause();
        } else {
            video.play().catch(() => { });
        }
    }, [paused, startAtZero]);

    useEffect(() => {
        syncPlayback();
    }, [syncPlayback, src]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video || !startAtZero) return undefined;

        const resetToStart = () => {
            video.currentTime = 0;
            video.pause();
        };

        video.addEventListener("loadeddata", resetToStart);
        if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
            resetToStart();
        }

        return () => video.removeEventListener("loadeddata", resetToStart);
    }, [src, startAtZero]);

    return (
        <video
            ref={videoRef}
            className={`absolute inset-0 h-full w-full object-cover ${className}`}
            src={src}
            loop
            muted={muted}
            playsInline
            preload={startAtZero ? "auto" : "metadata"}
        />
    );
}

function SpeedLcpImages({ beforeAlt, afterAlt }) {
    return (
        <div className="cro-speed-overlay__images">
            <img
                src={lcpBefore600w}
                alt={beforeAlt}
                className="cro-speed-overlay__image"
                width={600}
                height={363}
                loading="lazy"
                decoding="async"
            />
            <span className="cro-speed-overlay__arrow" aria-hidden="true">
                <ChevronRight size={36} strokeWidth={1.25} />
            </span>
            <img
                src={lcpAfter600w}
                alt={afterAlt}
                className="cro-speed-overlay__image"
                width={600}
                height={363}
                loading="lazy"
                decoding="async"
            />
        </div>
    );
}

function SpeedOverlayPanel({
    headline,
    improvements,
    accent,
    categoryLabel,
    beforeAlt,
    afterAlt,
    paragraphs,
}) {
    const leftItems = improvements.filter((item) => item.side === "left");
    const rightItems = improvements.filter((item) => item.side === "right");

    return (
        <div className="cro-speed-overlay">
            <div className="cro-speed-overlay__top">
                <div className="cro-speed-overlay__header">
                    <h2 className="cro-speed-overlay__title">{headline}</h2>
                </div>
                <div className="cro-speed-overlay__content">
                    <div className="cro-speed-overlay__markers cro-speed-overlay__markers--left">
                        {leftItems.map((item, index) => (
                            <ImprovementMarker
                                key={item.id}
                                item={item}
                                index={index}
                                accent={accent}
                                categoryLabel={categoryLabel}
                                align="left"
                            />
                        ))}
                    </div>

                    <SpeedLcpImages beforeAlt={beforeAlt} afterAlt={afterAlt} />

                    <div className="cro-speed-overlay__markers cro-speed-overlay__markers--right">
                        {rightItems.map((item, index) => (
                            <ImprovementMarker
                                key={item.id}
                                item={item}
                                index={leftItems.length + index}
                                accent={accent}
                                categoryLabel={categoryLabel}
                                align="right"
                            />
                        ))}
                    </div>
                </div>

                <SpeedOverlayStory paragraphs={paragraphs} />
            </div>
        </div>
    );
}

function SpeedOverlayStory({ paragraphs }) {
    return (
        <div className="cro-speed-overlay-story">
            <div className="cro-speed-overlay-story__inner">
                {paragraphs.map((paragraph) => (
                    <p key={paragraph} className="cro-speed-overlay-story__paragraph">
                        {paragraph}
                    </p>
                ))}
            </div>
        </div>
    );
}

function CroCursor({ variant, x, y, label }) {
    if (variant === "hidden") return null;

    if (variant === "dot") {
        return (
            <div className="cro-cursor" style={{ left: x, top: y }} aria-hidden="true">
                <span className="cro-cursor-dot" />
            </div>
        );
    }

    const knockoutClass =
        variant === "view"
            ? "cro-cursor-knockout--view"
            : variant === "watch"
                ? "cro-cursor-knockout--watch"
                : "cro-cursor-knockout--jump";

    return (
        <div className="cro-cursor" style={{ left: x, top: y }} aria-hidden="true">
            <span className={["cro-cursor-knockout", knockoutClass].join(" ")}>
                <span className="cro-cursor-knockout__cut">{label}</span>
            </span>
        </div>
    );
}

export default function CroShowcase() {
    const { pathname } = useLocation();
    const { t } = useTranslation();
    const sectionRefs = useRef({});
    const isJumpingRef = useRef(false);

    const [selectedSectionId, setSelectedSectionId] = useState(1);
    const [overlaySectionId, setOverlaySectionId] = useState(null);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [playbackSectionId, setPlaybackSectionId] = useState(null);
    const [isPlaybackOpen, setIsPlaybackOpen] = useState(false);
    const [titleHoverSectionId, setTitleHoverSectionId] = useState(null);
    const [cursor, setCursor] = useState({ variant: "hidden", x: 0, y: 0 });

    useEffect(() => {
        setIsOverlayOpen(false);
        setOverlaySectionId(null);
        setTitleHoverSectionId(null);
        setIsPlaybackOpen(false);
        setPlaybackSectionId(null);
        setCursor({ variant: "hidden", x: 0, y: 0 });

        const hash = window.location.hash.replace(/^#/, "");
        setSelectedSectionId(CRO_ANCHOR_TO_SECTION[hash] || 1);

        if (!hash || !CRO_ANCHOR_TO_SECTION[hash]) {
            window.scrollTo({ top: 0, behavior: "auto" });
        }
    }, [pathname]);

    useEffect(() => {
        const hash = window.location.hash.replace(/^#/, "");
        if (!hash || !CRO_ANCHOR_TO_SECTION[hash]) return undefined;

        const sectionId = CRO_ANCHOR_TO_SECTION[hash];
        const scrollToHash = () => {
            const node = document.getElementById(hash);
            if (!node) return;

            isJumpingRef.current = true;
            setSelectedSectionId(sectionId);
            node.scrollIntoView({ behavior: "auto", block: "start" });
            window.setTimeout(() => {
                isJumpingRef.current = false;
            }, 700);
        };

        const timer = window.setTimeout(scrollToHash, 150);
        return () => window.clearTimeout(timer);
    }, [pathname]);

    const sections = useMemo(
        () =>
            SECTION_LAYOUT.map((layout) => ({
                ...layout,
                headline: t(`croShowcase.sections.${layout.id}.headline`),
                sub: t(`croShowcase.sections.${layout.id}.sub`),
                improvements: layout.improvements.map((item) => ({
                    ...item,
                    label: t(`croShowcase.sections.${layout.id}.improvements.${item.key}`),
                })),
            })),
        [t],
    );

    useEffect(() => {
        SECTION_LAYOUT.forEach((layout) => {
            if (layout.loomShareId) {
                fetchLoomThumbnailUrl(layout.loomShareId);
            }
        });
    }, []);

    const speedStoryParagraphs = useMemo(
        () => [
            t("croShowcase.sections.4.story.p1"),
            t("croShowcase.sections.4.story.p2"),
            t("croShowcase.sections.4.story.p3"),
        ],
        [t],
    );

    const overlaySection = useMemo(
        () => sections.find((s) => s.id === overlaySectionId) || null,
        [sections, overlaySectionId],
    );

    const playbackSection = useMemo(
        () => sections.find((s) => s.id === playbackSectionId) || null,
        [sections, playbackSectionId],
    );

    const closePlayback = useCallback(() => {
        exitDocumentFullscreen();
        setIsPlaybackOpen(false);
        setPlaybackSectionId(null);
    }, []);

    const openPlaybackFor = useCallback(
        (sectionId) => {
            if (isOverlayOpen || sectionId > 3) return;

            flushSync(() => {
                setPlaybackSectionId(sectionId);
                setIsPlaybackOpen(true);
                setCursor({ variant: "hidden", x: 0, y: 0 });
            });

            enterMobilePlaybackFullscreen();
        },
        [isOverlayOpen],
    );

    const jumpToSection = useCallback((sectionId) => {
        const node = sectionRefs.current[sectionId];
        if (!node) return;

        isJumpingRef.current = true;
        setSelectedSectionId(sectionId);
        node.scrollIntoView({ behavior: "smooth", block: "start" });
        window.setTimeout(() => {
            isJumpingRef.current = false;
        }, 700);
    }, []);

    const openOverlayFor = (sectionId) => {
        if (isPlaybackOpen) closePlayback();
        setOverlaySectionId(sectionId);
        setIsOverlayOpen(true);
        setCursor({ variant: "hidden", x: 0, y: 0 });
    };

    const closeOverlay = () => {
        setIsOverlayOpen(false);
    };

    useEffect(() => {
        if (isOverlayOpen || isPlaybackOpen) return undefined;

        const updateSelectedSection = () => {
            if (isJumpingRef.current) return;

            let closestId = 1;
            let closestDistance = Infinity;

            sections.forEach((section) => {
                const node = sectionRefs.current[section.id];
                if (!node) return;

                const distance = Math.abs(node.getBoundingClientRect().top);
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestId = section.id;
                }
            });

            setSelectedSectionId(closestId);
        };

        updateSelectedSection();
        window.addEventListener("scroll", updateSelectedSection, { passive: true });
        window.addEventListener("resize", updateSelectedSection);

        return () => {
            window.removeEventListener("scroll", updateSelectedSection);
            window.removeEventListener("resize", updateSelectedSection);
        };
    }, [sections, isOverlayOpen, isPlaybackOpen]);

    const getSectionAtPoint = useCallback(
        (clientY) => {
            for (const section of sections) {
                const node = sectionRefs.current[section.id];
                if (!node) continue;

                const rect = node.getBoundingClientRect();
                if (clientY >= rect.top && clientY < rect.bottom) {
                    return { node, sectionId: section.id };
                }
            }

            return null;
        },
        [sections],
    );

    const resolveCursorVariant = useCallback(
        ({ isTitle, isViewDetails, sectionId, canWatchVideo }) => {
            if (isOverlayOpen || isPlaybackOpen) return "hidden";

            const isSelected = sectionId === selectedSectionId;

            if (isSelected && isViewDetails) return "view";
            if (isSelected && isTitle) return "view";
            if (isSelected && canWatchVideo) return "watch";
            if (isSelected) return "dot";
            return "jump";
        },
        [isOverlayOpen, isPlaybackOpen, selectedSectionId],
    );

    const handlePointerMove = useCallback(
        (event) => {
            if (isOverlayOpen || isPlaybackOpen) return;

            const { clientX, clientY } = event;
            const sectionHit = getSectionAtPoint(clientY);

            if (!sectionHit) {
                setCursor({ variant: "hidden", x: clientX, y: clientY });
                return;
            }

            const { node: sectionNode, sectionId } = sectionHit;
            const section = sections.find((s) => s.id === sectionId);
            const canWatchVideo = Boolean(section?.loomShareId);
            const elements = document.elementsFromPoint(clientX, clientY);
            const isTitle = elements.some(
                (el) => el instanceof Element && sectionNode.contains(el) && el.closest("[data-cro-title]"),
            );
            const isViewDetails = elements.some(
                (el) =>
                    el instanceof Element && sectionNode.contains(el) && el.closest("[data-cro-view-details]"),
            );

            const variant = resolveCursorVariant({ isTitle, isViewDetails, sectionId, canWatchVideo });
            setCursor({ variant, x: clientX, y: clientY });
        },
        [isOverlayOpen, isPlaybackOpen, getSectionAtPoint, resolveCursorVariant, sections],
    );

    const handleSectionBodyClick = (sectionId) => {
        if (isOverlayOpen || isPlaybackOpen) return;

        if (sectionId === selectedSectionId) {
            openPlaybackFor(sectionId);
            return;
        }

        jumpToSection(sectionId);
    };

    const handleTitleClick = (event, sectionId) => {
        event.stopPropagation();
        if (isOverlayOpen || isPlaybackOpen) return;

        if (sectionId === selectedSectionId) {
            openOverlayFor(sectionId);
            return;
        }

        jumpToSection(sectionId);
    };

    const handleDetailClick = (sectionId) => {
        if (isOverlayOpen || isPlaybackOpen || sectionId !== selectedSectionId) return;
        openOverlayFor(sectionId);
    };

    const cursorLabel =
        cursor.variant === "view"
            ? t("croShowcase.cursor.view")
            : cursor.variant === "jump"
                ? t("croShowcase.cursor.jump")
                : cursor.variant === "watch"
                    ? t("croShowcase.cursor.watch")
                    : "";

    return (
        <>
            <div className="cro-page-edge cro-page-edge--top" aria-hidden="true" />
            <main
                className="w-full snap-y snap-proximity"
                style={{
                    cursor:
                        !isOverlayOpen && !isPlaybackOpen && cursor.variant !== "hidden"
                            ? "none"
                            : undefined,
                }}
                onMouseMove={handlePointerMove}
                onMouseLeave={() => setCursor((prev) => ({ ...prev, variant: "hidden" }))}
            >
                {sections.map((s) => {
                    const accent = brandAccent[s.category];
                    const isSelected = selectedSectionId === s.id;
                    const isTitleHovered = titleHoverSectionId === s.id;
                    const isLoomTopSection = Boolean(s.loomShareId);
                    const loomDimmed = isSelected && isTitleHovered && !isOverlayOpen && !isPlaybackOpen;

                    return (
                        <section
                            key={s.id}
                            id={SECTION_ID_TO_ANCHOR[s.id]}
                            ref={(node) => {
                                sectionRefs.current[s.id] = node;
                            }}
                            data-cro-section
                            data-section-id={s.id}
                            className="relative h-[500px] sm:h-[700px] w-full shrink-0 snap-start overflow-hidden"
                            onClick={() => handleSectionBodyClick(s.id)}
                        >
                            {isLoomTopSection ? (
                                <SectionLoomPoster shareId={s.loomShareId} dimmed={loomDimmed} />
                            ) : (
                                <SectionVideo
                                    src={CRO_MOVIE_SRC}
                                    paused={!isSelected || isTitleHovered || isOverlayOpen || isPlaybackOpen}
                                />
                            )}

                            <div
                                className={[
                                    `absolute inset-0 ${accent.bgGradient}`,
                                    isLoomTopSection && "pointer-events-none",
                                ]
                                    .filter(Boolean)
                                    .join(" ")}
                                aria-hidden="true"
                            />
                            <div
                                className={[
                                    "absolute inset-0",
                                    isLoomTopSection && "pointer-events-none",
                                ]
                                    .filter(Boolean)
                                    .join(" ")}
                                aria-hidden="true"
                            />

                            {isLoomTopSection ? (
                                <LoomTopSectionLayout
                                    headline={s.headline}
                                    sub={s.sub}
                                    sectionId={s.id}
                                    isSelected={isSelected}
                                    detailLabel={t("croShowcase.detailLink")}
                                    onTitleHoverEnter={() => setTitleHoverSectionId(s.id)}
                                    onTitleHoverLeave={() =>
                                        setTitleHoverSectionId((prev) => (prev === s.id ? null : prev))
                                    }
                                    onTitleClick={handleTitleClick}
                                    onDetailClick={handleDetailClick}
                                    sectionAria={t("croShowcase.sectionAria", {
                                        id: s.id,
                                        headline: s.headline,
                                    })}
                                />
                            ) : (
                                <div className="relative z-10 flex h-full items-center justify-center">
                                    <div
                                        data-cro-title
                                        className={[
                                            "cro-copy-trigger",
                                            "flex flex-col items-center text-center",
                                            "py-8 px-8 sm:px-12",
                                            "select-none",
                                        ].join(" ")}
                                        onMouseEnter={() => setTitleHoverSectionId(s.id)}
                                        onMouseLeave={() =>
                                            setTitleHoverSectionId((prev) => (prev === s.id ? null : prev))
                                        }
                                        onClick={(event) => handleTitleClick(event, s.id)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(event) => {
                                            if (event.key === "Enter" || event.key === " ") {
                                                event.preventDefault();
                                                handleTitleClick(event, s.id);
                                            }
                                        }}
                                        aria-label={t("croShowcase.sectionAria", {
                                            id: s.id,
                                            headline: s.headline,
                                        })}
                                    >
                                        <h2 className="mt-4 max-w-3xl text-2xl font-semibold leading-snug text-white sm:text-3xl">
                                            {s.headline}
                                        </h2>
                                        <p className="mt-3 max-w-2xl text-base text-white/75 sm:text-lg">{s.sub}</p>
                                        {isSelected ? (
                                            <button
                                                type="button"
                                                data-cro-view-details
                                                className="cro-detail-link mt-4"
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    handleDetailClick(s.id);
                                                }}
                                            >
                                                {t("croShowcase.detailLink")}
                                            </button>
                                        ) : null}
                                    </div>
                                </div>
                            )}
                        </section>
                    );
                })}
            </main>
            <div className="cro-page-edge cro-page-edge--bottom" aria-hidden="true" />

            <CroCursor
                variant={cursor.variant}
                x={cursor.x}
                y={cursor.y}
                label={cursorLabel}
            />

            {isPlaybackOpen && playbackSection ? (
                <LoomPlaybackPopup
                    section={playbackSection}
                    onClose={closePlayback}
                    closeLabel={t("croShowcase.close")}
                />
            ) : null}

            {isOverlayOpen && overlaySection ? (
                <div
                    className={[
                        "cro-detail-popup fixed inset-0 z-[80]",
                        overlaySection.id <= 3 &&
                            brandAccent[overlaySection.category].overlayFill,
                    ]
                        .filter(Boolean)
                        .join(" ")}
                >
                    <div className="cro-detail-layout">
                        <div className="cro-detail-stage">
                            {overlaySection.id <= 3 ? (
                                <>
                                    <div
                                        className={`cro-overlay-backdrop absolute inset-0 overflow-hidden ${brandAccent[overlaySection.category].overlayFill}`}
                                        aria-hidden="true"
                                    />
                                    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
                                        <OverlaySampleGrid improvements={overlaySection.improvements} />
                                    </div>
                                </>
                            ) : (
                                <div
                                    className="cro-overlay-backdrop absolute inset-0 overflow-hidden"
                                    aria-hidden="true"
                                >
                                    <SectionVideo src={CRO_MOVIE_SRC} paused startAtZero muted={false} />
                                </div>
                            )}

                            <div
                                className="absolute inset-0 pointer-events-none [&_button]:pointer-events-auto overflow-hidden"
                            >
                                {overlaySection.id === 4 ? (
                                    <SpeedOverlayPanel
                                        headline={overlaySection.headline}
                                        improvements={overlaySection.improvements}
                                        accent={brandAccent[overlaySection.category]}
                                        categoryLabel={t(`croShowcase.categories.${overlaySection.category}`)}
                                        beforeAlt={t("croShowcase.sections.4.lcpBeforeAlt")}
                                        afterAlt={t("croShowcase.sections.4.lcpAfterAlt")}
                                        paragraphs={speedStoryParagraphs}
                                    />
                                ) : (
                                    <ImprovementMarkerGrid
                                        improvements={overlaySection.improvements}
                                        accent={brandAccent[overlaySection.category]}
                                        categoryLabel={t(`croShowcase.categories.${overlaySection.category}`)}
                                    />
                                )}
                            </div>
                        </div>

                        <aside className="cro-detail-link-rail">
                            <div className="absolute top-4 left-1/2 z-[60] -translate-x-1/2 sm:top-6 pointer-events-auto">
                                <button
                                    type="button"
                                    className="inline-flex h-10 w-10 items-center justify-center transition-opacity hover:opacity-75 focus:outline-none"
                                    onClick={closeOverlay}
                                    aria-label={t("croShowcase.close")}
                                >
                                    <svg
                                        className="cro-blend-difference"
                                        width="40"
                                        height="40"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                    >
                                        <path d="M6 6l12 12" stroke="currentColor" strokeWidth={0.75} strokeLinecap="round" />
                                        <path d="M18 6L6 18" stroke="currentColor" strokeWidth={0.75} strokeLinecap="round" />
                                    </svg>
                                </button>
                            </div>

                            <OverlayAfterSiteLink
                                ariaLabel={t("croShowcase.afterSiteLink")}
                                labelTop={t("croShowcase.afterSiteLinkTop")}
                                labelBottom={t("croShowcase.afterSiteLinkBottom")}
                            />
                        </aside>
                    </div>
                </div>
            ) : null}
        </>
    );
}
