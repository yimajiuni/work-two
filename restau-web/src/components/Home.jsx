import { useState, useEffect } from "react";
import Button from "../layouts/Button";
import { Link } from "react-scroll";

const Home = () => {
  const [showContent, setShowContent] = useState(true);

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

  return (
    <div className="z-10 min-h-screen flex flex-row justify-between lg:px-32 px-5 bg-[url('./assets/img/hero1.jpg')] bg-cover bg-no-repeat">
      <div className="w-full space-y-5 ">
        {showContent && (
          <div className="flex justify-center">
            <div className="bottom-40 sm:bottom-5 fixed py-10 px-10 backdrop-blur-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
              <h1 className="text-backgroundColor font-semibold text-6xl">
                Elevate Your Inner Foodie with Every Bite
              </h1>
              <p className="font-hedding py-4 text-backgroundColor text-2xl">
                waking up at 7am with warm air unlocks 3hrs of delicious time in
                the morning.
              </p>
              <div className="lg:pl-44">
                <Link
                  to="menu"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className=" hover:text-brightColor transition-all cursor-pointer"
                >
                  <Button title="Order Now" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
