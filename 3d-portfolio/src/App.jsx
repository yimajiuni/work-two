import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import {
  /*Home,
  TranslatedProjects,
  TranslatedDesigns,
  TranslatedWorks,
  SkillsChart,*/
  TranslatedAbout,
  WorkGallery,
  WorkDetails,
  Contact,
  Service,
} from "./pages";
import Content from "./components/Content";
{
  /*import Navbar from "./components/Navbar";*/
}
import NavbarJump from "./components/NavbarJump";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <HelmetProvider>
      <div
        className={`pink-gradient_bg h-full mt-14 sm:mt-0 transition-all `}
      >
        <Router>
          {/*<Navbar />*/}
          <NavbarJump onMenuStateChange={setIsMobileMenuOpen} />
          {isMobileMenuOpen && (
            <div
              aria-hidden="true"
              className="sm:hidden fixed inset-x-0 top-16 bottom-0 bg-pink-200/40 transition-opacity duration-300"
            />
          )}
          <div
            aria-hidden="true"
            className={`sm:hidden transition-[height] duration-300 ${isMobileMenuOpen ? "h-16" : "h-0"}`}
          />
          <Routes>
            {/*<Route path="/home" element={<Home />} />*/}
            {/*
           
          <Route path="/about" element={<TranslatedAbout />} />
          <Route path="/works" element={<TranslatedWorks />} />*/}
            {/*<Route path="/projects" element={<TranslatedProjects />} />
          <Route path="/designs" element={<TranslatedDesigns />} />*/}
            <Route path="/about" element={<Content id="about" />} />
            <Route path="/works" element={<Content id="works" />} />
            <Route path="/details/:id" element={<WorkDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Service />} />
          </Routes>
        </Router>
      </div>
    </HelmetProvider>
  );
}

export default App;
