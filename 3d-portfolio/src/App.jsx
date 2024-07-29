import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  Home,
  Contact,
  TranslatedProjects,
  TranslatedAbout,
  TranslatedDesigns,
} from "./pages";
import Navbar from "./components/Navbar";
{
  /*import NavbarJump from "./components/NavbarJump";*/
}

function App() {
  return (
    <div className="bg-pink-300/40 h-full">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<TranslatedAbout />} />
          <Route path="/projects" element={<TranslatedProjects />} />
          <Route path="/designs" element={<TranslatedDesigns />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      {/*}
      <NavbarJump />
      <main>
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <TranslatedAbout />
        </div>
        <div id="projects">
          <TranslatedProjects />
        </div>
        <div id="designs">
          <TranslatedDesigns />{" "}
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>*/}
    </div>
  );
}

export default App;
