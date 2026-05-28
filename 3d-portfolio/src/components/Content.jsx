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


function Content() {
  useEffect(() => {
    loadExtendedWebFonts();
  }, []);

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
