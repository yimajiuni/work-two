import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import MenuSpacerDebugHud from "./MenuSpacerDebugHud";

/**
 * Demo: fixed header + absolute mobile drawer + document-flow spacer.
 *
 * Why a spacer?
 *   Header is `position: fixed` and the drawer is `absolute` inside it, so opening
 *   the menu does not grow document height. A sibling flow `<div>` mirrors the
 *   drawer height so page content is pushed down.
 *
 * Measurement (no magic 64px fallback):
 *   - overlayTopPx = header.offsetHeight (only when #header is mounted)
 *   - spacerPx     = panel.offsetHeight + gap  (0 when closed / panel unmounted)
 *   Publish only after open paint; clear to 0 on close.
 *
 * Production notes (see App.jsx + NavbarJump.jsx):
 *   - Same pattern, but `/works` skips the spacer (mid-page jump landing).
 *   - Desktop breakpoints hide the spacer (`sm:` / CRO `lg:`).
 */

const MENU_GAP_PX = 8;

function DemoHeader({ isOpen, onToggle, onLayoutChange }) {
  const headerRef = useRef(null);
  const panelRef = useRef(null);

  const publish = useCallback(() => {
    const headerEl = headerRef.current;// ヘッダー要素を取得
    if (!headerEl) return;// ヘッダー要素が存在しない場合は処理を終了

    const overlayTopPx = headerEl.offsetHeight;
    const panelEl = panelRef.current;// パネル要素を取得

    if (!isOpen || !panelEl) {
      onLayoutChange({ spacerPx: 0, overlayTopPx });// パネル要素が存在しない場合はスペーサーの高さを0に設定
      return;
    }

    onLayoutChange({
      spacerPx: panelEl.offsetHeight + MENU_GAP_PX,// パネル要素の高さ + メニューギャップをスペーサーの高さに設定
      overlayTopPx,
    });
  }, [isOpen, onLayoutChange]);// パネル要素が存在する場合はスペーサーの高さをパネル要素の高さ + メニューギャップに設定

  useEffect(() => {
    publish();// パネル要素が存在する場合はスペーサーの高さをパネル要素の高さ + メニューギャップに設定
    if (!isOpen) return undefined;// パネル要素が存在しない場合は処理を終了

    const headerEl = headerRef.current;// ヘッダー要素を取得
    const panelEl = panelRef.current;
    const ro = new ResizeObserver(publish);// リサイズオブザーバーを作成
    if (headerEl) ro.observe(headerEl);
    if (panelEl) ro.observe(panelEl);
    window.addEventListener("resize", publish);// リサイズイベントを監視

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", publish);// リサイズイベントを監視
      const h = headerRef.current?.offsetHeight ?? 0;
      onLayoutChange({ spacerPx: 0, overlayTopPx: h });
    };
  }, [isOpen, publish, onLayoutChange]);

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-4 border-b border-white/20 bg-white/10 px-6 py-4 backdrop-blur-sm"
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-white font-bold text-[#382797] shadow-md"
        aria-expanded={isOpen}
        aria-controls="demo-mobile-menu"
      >
        今
      </button>
      <p className="text-sm font-medium text-white/90">Menu spacer demo</p>

      {isOpen ? (
        <div
          id="demo-mobile-menu"
          ref={panelRef}
          className="absolute left-4 right-4 top-full z-[60] mt-2 rounded-lg border border-white/20 bg-[#F9EEEE]/90 p-4 shadow-lg backdrop-blur-sm"
        >
          <nav className="flex flex-col gap-2 text-[#382797]">
            <span className="py-2 font-medium">About</span>
            <span className="py-2 font-medium">Works</span>
            <span className="py-2 font-medium">Contact</span>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export default function MenuSpacerDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [spacerPx, setSpacerPx] = useState(0);// スペーサーの高さを0に設定
  const [overlayTopPx, setOverlayTopPx] = useState(0);

  const handleLayoutChange = useCallback(({ spacerPx: nextSpacer, overlayTopPx: nextTop }) => {
    setSpacerPx(nextSpacer);
    setOverlayTopPx(nextTop);// オーバーレイの高さを設定  
  }, []);

  useEffect(() => {
    if (!isOpen) setSpacerPx(0);// パネル要素が存在しない場合はスペーサーの高さを0に設定
  }, [isOpen]);

  const spacerHeight = isOpen ? spacerPx : 0;// パネル要素が存在する場合はスペーサーの高さをパネル要素の高さに設定

  return (
    <div className="min-h-[100dvh] bg-gradient-to-b from-[#382797] via-[#5a4bb5] to-[#F9EEEE] text-white">
      <DemoHeader
        isOpen={isOpen}
        onToggle={() => setIsOpen((v) => !v)}// パネル要素が存在する場合はスペーサーの高さをパネル要素の高さに設定  
        onLayoutChange={handleLayoutChange}// レイアウト変更を監視
      />

      {/* Dim under header — same idea as App overlay (pointer-events-none). */}
      {isOpen ? (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-x-0 bottom-0 z-[5] bg-[#382797]/20"
          style={{ top: overlayTopPx }}// オーバーレイの高さを設定  
        />
      ) : null}

      {/* Flow spacer — the only document-height contribution of the open menu. */}
      <div
        aria-hidden="true"
        className="transition-[height] duration-300"
        style={{ height: spacerHeight }}// スペーサーの高さを設定  
      />

      <main className="mx-auto max-w-xl px-6 pb-24 pt-6">
        <p className="text-sm text-white/70">
          <Link to="/" className="underline underline-offset-2 hover:text-white">
            ← Site home
          </Link>
        </p>

        <h1 className="mt-6 text-2xl font-semibold tracking-tight">Mobile menu spacer</h1>
        <p className="mt-3 text-sm leading-relaxed text-white/85">
          Open / close with <span className="font-semibold">今</span>. The spacer below the fixed
          header grows to the drawer height so content shifts down; on close it returns to 0.
        </p>

        <MenuSpacerDebugHud
          isOpen={isOpen}
          spacerHeight={spacerHeight}
          menuSpacerPx={spacerPx}
          overlayTopPx={overlayTopPx}
          note="demo (also fixed HUD)"
        />

        <ol className="mt-8 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-white/85">
          <li>Header is fixed; drawer is absolute → no flow height.</li>
          <li>
            After open, measure <code className="rounded bg-black/30 px-1">panel.offsetHeight + {MENU_GAP_PX}</code>.
          </li>
          <li>Parent renders a flow div with that height (here: immediate, no 64px guess).</li>
          <li>On close, height → 0. Mid-page open/close still shifts document under a fixed scrollY.</li>
          <li>
            Production skips spacer on <code className="rounded bg-black/30 px-1">/works</code> only.
          </li>
        </ol>

        <div className="mt-10 space-y-4 text-sm text-white/80">
          {Array.from({ length: 12 }, (_, i) => (
            <p key={i} className="rounded-md border border-white/10 bg-white/5 px-4 py-6">
              Scroll block {i + 1} — open the menu mid-page to feel the spacer push content.
            </p>
          ))}
        </div>
      </main>
    </div>
  );
}
