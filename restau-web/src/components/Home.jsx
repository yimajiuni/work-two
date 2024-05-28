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
            <div className="sm:pt-30 sx:bottom-0 sm:bottom-20 md:bottom-20 lg:bottom-40 fixed py-10 px-10 backdrop-blur-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg ">
              {/*lg:h-1/3 md:h-1/2 sm:h-2/4 sx:h-6/7 */}
              <h1 className="text-backgroundColor font-semibold text-6xl sm:text-5xl">
                <br />
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
