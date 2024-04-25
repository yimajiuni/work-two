import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, About, Projects, Contact, TestTranslated } from "./pages";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="bg-pink-300/40 h-full">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/projects" element={<TestTranslated />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/*<Route path="/projects" element={<Projects />} />*/}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
