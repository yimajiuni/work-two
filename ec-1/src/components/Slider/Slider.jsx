import React, { useEffect, useRef, useState } from "react";
import "./Slider.css";
import test1_img from "../Assets/test5.jpg";
import test2_img from "../Assets/test6.jpg";
import test3_img from "../Assets/test7.jpg";
import test4_img from "../Assets/test8.jpg";

const Slider = () => {
  // Refs access DOM elements and handle interactions.
  const nextRef = useRef(null); //e.g. Refs for the next button that access and interacts with the button DOM element
  const prevRef = useRef(null);
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailBorderRef = useRef(null);

  const [timeRunning] = useState(3000); //Represents the duration (in milliseconds) between each slide transition.
  /*const [timeAutoNext] = useState(7000);// Represents the duration (in milliseconds) for automatically moving to the next slide.*/
  let runTimeOut;
  /*let runNextAuto;*/

  //This function is called when the "Next" or "Previous" button is clicked. It moves the slider to the next or previous slide.
  const showSlider = (type) => {
    //select all slide items and thumbnail items
    const sliderItems = sliderRef.current.querySelectorAll(".item");
    const thumbnailItems = thumbnailBorderRef.current.querySelectorAll(".item");

    if (type === "next") {
      // If the type is "next", move the first slider item to the end and the first thumbnail
      // item to the end, and add the "next" class to trigger the slide animation.
      sliderRef.current.appendChild(sliderItems[0]);
      thumbnailBorderRef.current.appendChild(thumbnailItems[0]);
      carouselRef.current.classList.add("next");
    } else {
      // If the type is "prev", move the last slider item to the beginning and the last thumbnail item to the beginning,
      //and add the "prev" class to trigger the slide animation.

      sliderRef.current.prepend(sliderItems[sliderItems.length - 1]);
      thumbnailBorderRef.current.prepend(
        thumbnailItems[thumbnailItems.length - 1]
      );
      carouselRef.current.classList.add("prev");
    }
    // Clear the timeout to prevent multiple animations and set a new timeout to remove the "next" or "prev" class after the animation duration.
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      carouselRef.current.classList.remove("next");
      carouselRef.current.classList.remove("prev");
    }, timeRunning);
    /*
    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      nextRef.current.click();
    }, timeAutoNext);*/
  };
  // event listeners handle the click events for the "Next" and "Previous" buttons.
  // useEffect: This hook runs after the component is mounted. It adds event listeners to the "Next" and "Previous" buttons.

  // useEffect hook to add event listeners for the Next and Previous buttons when the component mounts.
  useEffect(() => {
    // Add event listeners to the Next and Previous buttons to call the showSlider function with the appropriate type.

    nextRef.current.addEventListener("click", () => showSlider("next"));
    prevRef.current.addEventListener("click", () => showSlider("prev"));

    // Move the first thumbnail item to the end to create a loop effect.
    thumbnailBorderRef.current.appendChild(
      thumbnailBorderRef.current.children[0]
    );
    /*
    runNextAuto = setTimeout(() => {
      nextRef.current.click();
    }, timeAutoNext);*/

    // Clean up function to remove event listeners when the component unmounts.
    return () => {
      clearTimeout(runTimeOut);
      /*clearTimeout(runNextAuto);*/
    };
  }, [showSlider]);

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
