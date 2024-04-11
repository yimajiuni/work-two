import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, About, Projects, Contact } from "./pages";
import Navbar from "./components/Navbar";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./components/language-selector";

function App() {
  const { t } = useTranslation();

  const { line1, line2 } = t("description", {
    channel: "You Call Yuko",
  });
  console.log(description);

  return (
    <main className="bg-pink-300/40 h-full">
      <Router>
        <Navbar />
        <Routes>
          <div className="container">
            <LanguageSelector />
            <h1>{t("greeting")}</h1>
            <Trans
              //i18nKey={"description.line1"}
              i18nKey={line1}
              values={{
                title: "You Call Yuko",
              }}
              components={{ 1: <b /> }}
            />
            {/*<p>{line1}</p>*/}
            <span>{line2}</span>
          </div>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
