import React from "react";
import "./app.css";
import { LanguageProvider } from "./i18n/LanguageContext";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import CouponCarousel from "./components/coupons/CouponCarousel";
import Main from "./components/main/Main";
import HashtagBar from "./components/hashtags/HashtagBar";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <LanguageProvider>
      <Navbar />
      <Home />
      <CouponCarousel />
      <Main />
      <HashtagBar />
      <Footer />
    </LanguageProvider>
  );
};

export default App;
