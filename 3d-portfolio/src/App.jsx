import React from "react";
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
  return (
    <HelmetProvider>
      <div className="pink-gradient_bg h-full mt-14 sm:mt-0">
        <Router>
          {/*<Navbar />*/}
          <NavbarJump />
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
