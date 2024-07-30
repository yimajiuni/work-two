import React from "react";
import Home from "../pages/Home";
import TranslatedProjects from "../pages/TranslatedProjects";
import TranslatedAbout from "../pages/TranslatedAbout";
import TranslatedDesigns from "../pages/TranslatedDesigns";
import Footer from "../components/Footer";

function Content() {
  return (
    <div>
      <TranslatedAbout id="about" />
      <TranslatedProjects id="projects" />
      <TranslatedDesigns id="designs" />
      <Footer />
    </div>
  );
}

export default Content;
