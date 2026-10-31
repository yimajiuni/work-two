import React, { useEffect } from "react";
import { loadExtendedWebFonts } from "../utils/loadWebFonts";
//import Home from "../pages/Home";
//import Contact from "../pages/Contact";
//import TranslatedProjects from "../pages/TranslatedProjects";
//import TranslatedDesigns from "../pages/TranslatedDesigns";
//import TranslatedWorks from "../pages/TranslatedWorks";
import Footer from "../components/Footer";
import TranslatedAbout from "../pages/TranslatedAbout";
import WorkGallery from "../pages/WorkGallery";

/**
 * Shared About + Works page. Route `/about` | `/works` passes `id` so we land
 * on that section (ScrollToTop alone would always leave you at About).
 */
function Content({ id = "about" }) {
  useEffect(() => {
    loadExtendedWebFonts();
  }, []);

  useEffect(() => {
    const targetId = id === "works" ? "works" : "about";
    // After App ScrollToTop (sibling effect) — defer one frame so we don't lose the jump.
    const frame = requestAnimationFrame(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "auto", block: "start" });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [id]);

  return (
    <div>
      <TranslatedAbout id="about" />
      <WorkGallery id="works" />
      {/*
      <TranslatedWorks />
      <TranslatedProjects id="projects" />
      <TranslatedDesigns id="designs" />*/}
      <Footer />
    </div>
  );
}

export default Content;
