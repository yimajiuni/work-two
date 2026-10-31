import { LanguageProvider } from "./i18n/LanguageContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PressMarquee from "./components/PressMarquee";
import Dishes from "./components/Dishes";
import About from "./components/About";
import Menu from "./components/Menu";
import KitchenPulse from "./components/KitchenPulse";
import Review from "./components/Review";
import Footer from "./components/Footer";

const App = () => {
  return (
    <LanguageProvider>
      <div>
        <Navbar />

        <main>
          <div id="home">
            <Home />
          </div>
          <PressMarquee />
          <div id="dishes">
            <Dishes />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="menu">
            <Menu />
          </div>
          <KitchenPulse />
          <div id="review">
            <Review />
          </div>
          <div id="footer">
            <Footer />
          </div>
        </main>
      </div>
    </LanguageProvider>
  );
};

export default App;
