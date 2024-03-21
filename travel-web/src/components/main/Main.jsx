import React, { useEffect } from "react";
import "./main.scss";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import img from "../../assets/img.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img1.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

//data array

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "Cultural Relax",
    fees: "$700",
    description:
      "the epitome of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays and adventurous activities.",
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: "Machu Pichu",
    location: "Peru",
    grade: "Cultural Relax",
    fees: "$600",
    description:
      "Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular.",
  },

  {
    id: 3,
    imgSrc: img3,
    destTitle: "Great Barrier Reef",
    location: "Australia",
    grade: "Cultural Relax",
    fees: "$700",
    description:
      "One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is ”lavish” and ”beauty”. People are always interesting to be in this place",
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: "Cappadocia",
    location: "Turkey",
    grade: "Cultural Relax",
    fees: "$800",
    description:
      "According to the world Tourism Ranking, 45 million people visit Turkey each year, and from that about 2million come to visit Cappadocia. This place is known for its luxurious stay and adventurous activities.",
  },

  {
    id: 5,
    imgSrc: img5,
    destTitle: "Guanajuato",
    location: "Mexico",
    grade: "Cultural Relax",
    fees: "$1100",
    description:
      "A city in central Mexico, Guanajuato is known for its history of silver mining and colonial architecture. The houses in the city are very attractively painted with the most bright colores exists.",
  },

  {
    id: 6,
    imgSrc: img6,
    destTitle: "Cinque Terre",
    location: "Italy",
    grade: "Cultural Relax",
    fees: "$840",
    description:
      "the vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if you are a hoodie and love seafood, you will be exhilarated with the choice you are about to get here! Happy exploring.",
  },

  {
    id: 7,
    imgSrc: img7,
    destTitle: "Angkor Wat",
    location: "Cambodia",
    grade: "Cultural Relax",
    fees: "$790",
    description:
      "Angkor wat represents the entire range of Khmer art from the 9th to the 15th century . This temple is considered the heart and soul of Cambodia. And the place is known for its luxurious stays.",
  },

  {
    id: 8,
    imgSrc: img8,
    destTitle: "Taj Mahal",
    location: "India",
    grade: "Cultural Relax",
    fees: "$900",
    description:
      "An immense mausoleum of white marble, built-in Agra by Mughal emperor Shah Jahan in memory of his wife Mumtaz, the monument is breathtakingly beautiful. This place is known for its luxurious stays and adventurous activities",
  },

  {
    id: 9,
    imgSrc: img9,
    destTitle: "Bali Island",
    location: "Indonesia",
    grade: "Cultural Relax",
    fees: "$500",
    description:
      "Bali is an Indonesian Island and one of the best holiday destinations in the indonesian archipelago. Bali is known for its volcanic nountains, hitory, art& culture, food, temples and beautiful sandy beaches.",
  } /**/,
];

const Main = () => {
  //create a react hook to add a scroll animation...

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="main">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>
      <div className="secContent grid">
        {/*implement map(). method 
        create an array called data then
        list of object - fetch each destination in an array */}

        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => (
            <div key={id} data-aos="fade-up" className="singleDestination">
              {/* Display data for each destination in the array */}

              <div className="imageDiv">
                <img src={imgSrc} alt={destTitle} />
              </div>

              <div className="cardInfo">
                <h4 className="destTitle">{destTitle}</h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className="icon" />
                  <span className="name">{location}</span>
                </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>
                      {grade}
                      <small>+1</small>
                    </span>
                  </div>
                  <div className="price">
                    <h5>{fees}</h5>
                  </div>
                </div>

                <div className="desc">
                  <p>{description}</p>
                </div>

                <button className="btn flex">
                  DETAILS
                  <HiOutlineClipboardCheck className="icon" />
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Main;
