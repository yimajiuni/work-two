import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import img1 from "../assets/img/momo-mog.png";

const Home = () => {
  const [, setShowContent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 500;
      setShowContent(scrollPosition < threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="z-10 min-h-screen flex flex-col lg:flex-row justify-center text-center items-center">
      <div data-aos="fade-left" className="pt-20">
        <img src={img1} />
      </div>
      <div className="py-10">
        <div data-aos="fade-up" className="">
          <h3 className="py-10 zen-kurenaido-regular text-xl">
            ようこそ。食べ歩きころMOGへ
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
