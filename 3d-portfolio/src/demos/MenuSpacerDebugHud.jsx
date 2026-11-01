import React, { useEffect, useState } from "react";

/**
 * Viewport-fixed readout for the mobile menu spacer system.
 *
 * Important: spacer is inserted at the TOP of document flow (under the fixed header).
 * If scrollY > ~header height, that empty band sits ABOVE the viewport — HUD can show
 * spacerHeight > 0 while you see no gap on screen. That is usually not a measure miss.
 */
export default function MenuSpacerDebugHud({
  isOpen,
  spacerHeight,
  menuSpacerPx,
  overlayTopPx,
  note = "",
}) {
  const [scrollY, setScrollY] = useState(() =>
    typeof window !== "undefined" ? Math.round(window.scrollY) : 0,
  );

  useEffect(() => {
    const sync = () => setScrollY(Math.round(window.scrollY));
    sync();
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  // Spacer band lives just under the fixed header in document flow.
  // Roughly off-screen when scrolled past header + spacer.
  const spacerAboveView = spacerHeight > 0 && scrollY > overlayTopPx + 8;
  const measureOkButHidden = spacerHeight > 0 && spacerAboveView;
  const trueMeasureGap =
    isOpen && menuSpacerPx > 0 && spacerHeight === 0
      ? "applied=0 (gate)"
      : isOpen && menuSpacerPx === 0
        ? "measure=0"
        : "";

  return (
    <aside
      className="pointer-events-none fixed bottom-4 right-4 z-[100] w-[min(100%-2rem,17rem)]"
      aria-live="polite"
    >
      <dl className="grid grid-cols-2 gap-3 rounded-lg border border-white/20 bg-black/40 p-4 text-sm text-white shadow-lg backdrop-blur-sm">
        <div>
          <dt className="text-white/60">isOpen</dt>
          <dd className="font-mono">{String(isOpen)}</dd>
        </div>
        <div>
          <dt className="text-white/60">spacerHeight</dt>
          <dd className="font-mono">{spacerHeight}px</dd>
        </div>
        <div>
          <dt className="text-white/60">menuSpacerPx</dt>
          <dd className="font-mono">{menuSpacerPx}px</dd>
        </div>
        <div>
          <dt className="text-white/60">overlayTopPx</dt>
          <dd className="font-mono">{overlayTopPx}px</dd>
        </div>
        <div>
          <dt className="text-white/60">scrollY</dt>
          <dd className="font-mono">{scrollY}px</dd>
        </div>
        <div>
          <dt className="text-white/60">visible?</dt>
          <dd className="font-mono text-xs">
            {spacerHeight <= 0 ? "n/a" : spacerAboveView ? "off-screen" : "in view"}
          </dd>
        </div>
        {measureOkButHidden ? (
          <div className="col-span-2 border-t border-amber-400/40 pt-2 text-xs text-amber-200">
            Height applied, but spacer band is above the viewport (scroll). Not a measure miss.
          </div>
        ) : null}
        {trueMeasureGap ? (
          <div className="col-span-2 border-t border-rose-400/40 pt-2 text-xs text-rose-200">
            {trueMeasureGap}
          </div>
        ) : null}
        {note ? (
          <div className="col-span-2 border-t border-white/10 pt-2">
            <dt className="text-white/60">note</dt>
            <dd className="font-mono text-xs text-white/80">{note}</dd>
          </div>
        ) : null}
      </dl>
    </aside>
  );
}
