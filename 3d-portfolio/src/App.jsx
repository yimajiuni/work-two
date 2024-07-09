import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  Home,
  About,
  Projects,
  Contact,
  TranslatedProjects,
  TranslatedAbout,
  TranslatedDesigns,
} from "./pages";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="bg-pink-300/40 h-full">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<TranslatedAbout />} />
          {/*<Route path="/about" element={<About />} />*/}
          <Route path="/projects" element={<TranslatedProjects />} />
          {/*<Route path="/projects" element={<Projects />} />*/}
          <Route path="/designs" element={<TranslatedDesigns />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
