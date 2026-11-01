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
 * Shared About + Works page.
 * `/about` — ScrollToTop + max-container padding (same as Service/Contact).
 * `/works` — must jump to #works after ScrollToTop (otherwise you'd stay on About).
 */
function Content({ id = "about" }) {
  useEffect(() => {
    loadExtendedWebFonts();
  }, []);

  useEffect(() => {
    if (id !== "works") return undefined;
    const frame = requestAnimationFrame(() => {
      document.getElementById("works")?.scrollIntoView({ behavior: "auto", block: "start" });
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
