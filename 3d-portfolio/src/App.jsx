import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  Home,
  TranslatedAbout,
  TranslatedProjects,
  TranslatedDesigns,
  TranslatedWorks,
  WorkGallery,
  WorkDetails,
  Contact,
  SkillsChart,
} from "./pages";
import Content from "./components/Content";
{
  /*import Navbar from "./components/Navbar";*/
}
import NavbarJump from "./components/NavbarJump";

function App() {
  return (
    <div className="bg-pink-300/40 h-full">
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
          <Route path="*" element={<Content />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details/:id" element={<WorkDetails />} />
        </Routes>
      </Router>

      {/*
      <main>
        <div id="/home">
          <Home />
        </div>
        <div id="/about">
          <TranslatedAbout />
        </div>
        <div id="/projects">
          <TranslatedProjects />
        </div>
        <div id="/designs">
          <TranslatedDesigns />
        </div>
        <div id="/contact">
          <Contact />
        </div>
      </main> */}
    </div>
  );
}

export default App;
