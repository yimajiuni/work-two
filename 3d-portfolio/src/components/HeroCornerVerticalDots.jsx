import React from "react";

/** Vertical lines: equal vertical + horizontal step; outer = most dots; inner = 2-dot then 1-dot (large). */
const HERO_DOT_BASE_BOTTOM = 4;
const HERO_INNERMOST_DOT_BOTTOM_NUDGE = -0.5;
const HERO_DOT_STEP = 9;
const HERO_COLUMN_GAP = 10;
const HERO_COLUMN_LEFT_OUTER = 4;
const HERO_SIZE_TIER_COUNT = 5;

const heroDotSizeTiers = Array.from({ length: HERO_SIZE_TIER_COUNT }, (_, tier) => {
    const t = tier / (HERO_SIZE_TIER_COUNT - 1);
    return {
        size: 4 + Math.round(t * 3),
        opacity: 0.5 + t * 0.42,
    };
});

/** Outermost → innermost; middle columns omit top dot; inner-2 bottom = tier 3; innermost size = tier 1, opacity = tier 3 */
const heroVerticalColumnSpecs = [
    { dotCount: 9 },
    { dotCount: 8 },
    { dotCount: 7 },
    { dotCount: 6 },
    { dotCount: 5 },
    { dotCount: 4 },
    { dotCount: 3 },
    { dotCount: 2 },
    { dotCount: 1 },
];

const getHeroDotStyleIndex = (colFromOuter, fromBottom, columnCount) => {
    const innermostCol = columnCount - 1;
    const secondFromInnerCol = columnCount - 2;

    if (colFromOuter === innermostCol) {
        return 1;
    }
    if (colFromOuter === secondFromInnerCol && fromBottom === 0) {
        return 3;
    }
    return Math.max(0, HERO_SIZE_TIER_COUNT - 1 - fromBottom);
};

const getHeroDotOpacityIndex = (colFromOuter, fromBottom, columnCount) => {
    const innermostCol = columnCount - 1;
    const secondFromInnerBottomTier = 3;

    if (colFromOuter === innermostCol) {
        return secondFromInnerBottomTier;
    }
    return getHeroDotStyleIndex(colFromOuter, fromBottom, columnCount);
};

const shouldRenderHeroDot = (colFromOuter, fromBottom, dotCount, columnCount) => {
    const isEndColumn = colFromOuter === 0 || colFromOuter === columnCount - 1;
    if (isEndColumn) return true;
    return fromBottom < dotCount - 1;
};

const heroVerticalDots = (() => {
    const columnCount = heroVerticalColumnSpecs.length;
    const dots = [];
    heroVerticalColumnSpecs.forEach(({ dotCount }, colFromOuter) => {
        const leftPx = HERO_COLUMN_LEFT_OUTER + colFromOuter * HERO_COLUMN_GAP;
        for (let fromBottom = 0; fromBottom < dotCount; fromBottom += 1) {
            if (!shouldRenderHeroDot(colFromOuter, fromBottom, dotCount, columnCount)) {
                continue;
            }
            const styleIndex = getHeroDotStyleIndex(colFromOuter, fromBottom, columnCount);
            const opacityIndex = getHeroDotOpacityIndex(colFromOuter, fromBottom, columnCount);
            const { size } = heroDotSizeTiers[styleIndex];
            const { opacity } = heroDotSizeTiers[opacityIndex];
            const bottom =
                HERO_DOT_BASE_BOTTOM +
                fromBottom * HERO_DOT_STEP +
                (colFromOuter === columnCount - 1 ? HERO_INNERMOST_DOT_BOTTOM_NUDGE : 0);
            dots.push({
                left: leftPx,
                bottom,
                size,
                opacity,
            });
        }
    });
    return dots;
})();

const cornerClasses = {
    wrap: "pointer-events-none absolute bottom-0 z-[1] h-28 w-[5.5rem] sm:h-36 sm:w-52",
    left: "left-0",
    right: "right-0 -scale-x-100",
};

const HeroCornerVerticalDots = () => (
    <div className="relative h-full w-full" aria-hidden="true">
        {heroVerticalDots.map((dot, i) => (
            <span
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                    left: `${dot.left}px`,
                    bottom: `${dot.bottom}px`,
                    width: dot.size,
                    height: dot.size,
                    opacity: dot.opacity,
                    transform: "translate(-50%, 50%)",
                }}
            />
        ))}
    </div>
);

/** Left + right hero corner dot decoration (mirror on the right). */
export const HeroCornerDotsDecoration = () => (
    <>
        <div className={`${cornerClasses.wrap} ${cornerClasses.left}`} aria-hidden="true">
            <HeroCornerVerticalDots />
        </div>
        <div className={`${cornerClasses.wrap} ${cornerClasses.right}`} aria-hidden="true">
            <HeroCornerVerticalDots />
        </div>
    </>
);

export default HeroCornerVerticalDots;
