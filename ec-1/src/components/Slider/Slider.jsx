import React, { useEffect, useRef, useState } from "react";
import "./Slider.css";
import test1_img from "../Assets/test5.jpg";
import test2_img from "../Assets/test6.jpg";
import test3_img from "../Assets/test7.jpg";
import test4_img from "../Assets/test8.jpg";

const Slider = () => {
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailBorderRef = useRef(null);

  const [timeRunning] = useState(3000);
  const [timeAutoNext] = useState(7000);
  let runTimeOut;
  let runNextAuto;

  useEffect(() => {
    nextRef.current.addEventListener("click", () => showSlider("next"));
    prevRef.current.addEventListener("click", () => showSlider("prev"));

    thumbnailBorderRef.current.appendChild(
      thumbnailBorderRef.current.children[0]
    );

    runNextAuto = setTimeout(() => {
      nextRef.current.click();
    }, timeAutoNext);

    return () => {
      clearTimeout(runTimeOut);
      clearTimeout(runNextAuto);
    };
  }, []);

  const showSlider = (type) => {
    const sliderItems = sliderRef.current.querySelectorAll(".item");
    const thumbnailItems = thumbnailBorderRef.current.querySelectorAll(".item");

    if (type === "next") {
      sliderRef.current.appendChild(sliderItems[0]);
      thumbnailBorderRef.current.appendChild(thumbnailItems[0]);
      carouselRef.current.classList.add("next");
    } else {
      sliderRef.current.prepend(sliderItems[sliderItems.length - 1]);
      thumbnailBorderRef.current.prepend(
        thumbnailItems[thumbnailItems.length - 1]
      );
      carouselRef.current.classList.add("prev");
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      carouselRef.current.classList.remove("next");
      carouselRef.current.classList.remove("prev");
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      nextRef.current.click();
    }, timeAutoNext);
  };

  return (
    <div className="container">
      <div className="carousel" ref={carouselRef}>
        <div className="list" ref={sliderRef}>
          <div className="item">
            <img src={test1_img} alt="/" />
            <div className="content">
              <div className="author">UNDER THE SUN</div>
              <div className="title">MORE SHINE,</div>
              <div className="topic">DEVINE</div>
              <div className="des">
                Shimmer, shine, glow, glare, something provocating,
              </div>
              <div className="des">
                something transparent.. something in the Sun!
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={test2_img} alt="/" />
            <div className="content">
              <div className="author">PICKUP</div>
              <div className="title">THIS SMALL</div>
              <div className="topic"> THINGS</div>
              <div className="des">
                Brings you happiness. essenstially, the needs.
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={test3_img} alt="/" />
            <div className="content">
              <div className="author">SEASONAL</div>
              <div className="title">LIFE INSPIRED</div>
              <div className="topic">COLORS</div>
              <div className="des">
                life inspired exclusive jackets with more natural and organic
                features! garments beautifully aging with the shine and blend
                with your heart.
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src={test4_img} alt="/" />
            <div className="content">
              <div className="author">IMMENSE</div>
              <div className="title">GET SOME COMFORT</div>
              <div className="topic">TRANSPARENT</div>
              <div className="des">more and more tots and galores.</div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="thumbnail" ref={thumbnailBorderRef}>
          <div className="item">
            <img src={test1_img} alt="/" />
            <div className="content">
              <div className="title">UNDER THE SUN</div>
              <div className="description">DEVINE.</div>
            </div>
          </div>
          <div className="item">
            <img src={test2_img} alt="/" />
            <div className="content">
              <div className="title">PICKUP</div>
              <div className="description">SMALL THINGS.</div>
            </div>
          </div>
          <div className="item">
            <img src={test3_img} alt="/" />
            <div className="content">
              <div className="title">SEASONAL</div>
              <div className="description">LIFE INSPIRED.</div>
            </div>
          </div>
          <div className="item">
            <img src={test4_img} alt="/" />
            <div className="content">
              <div className="title">IMMENSE</div>
              <div className="description">TRANSPARENT.</div>
            </div>
          </div>
        </div>
        <div className="arrows">
          <button id="prev" ref={prevRef}>
            ＜
          </button>
          <button id="next" ref={nextRef}>
            ＞
          </button>
        </div>
        <div className="time"></div>
      </div>
    </div>
  );
};

export default Slider;
