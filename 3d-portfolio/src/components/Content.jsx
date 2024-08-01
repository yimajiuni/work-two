import React from "react";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import TranslatedProjects from "../pages/TranslatedProjects";
import TranslatedDesigns from "../pages/TranslatedDesigns";
import TranslatedAbout from "../pages/TranslatedAbout";
import TranslatedWorks from "../pages/TranslatedWorks";
import Footer from "../components/Footer";

function Content() {
  return (
    <div>
      <TranslatedAbout />
      <TranslatedWorks />
      {/*
      <TranslatedProjects id="projects" />
      <TranslatedDesigns id="designs" />*/}
      <Footer />
    </div>
  );
}

export default Content;
