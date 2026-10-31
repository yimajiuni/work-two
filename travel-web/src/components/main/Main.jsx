import React, { useEffect, useState } from "react";
import "./main.scss";
import { HiOutlineLocationMarker, HiOutlineClipboardCheck } from "react-icons/hi";
import { AiFillHeart, AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { destinations } from "../../data/destinations";
import { useLanguage } from "../../i18n/LanguageContext";
import Aos from "aos";
import "aos/dist/aos.css";

const rankClass = {
  1: "rankGold",
  2: "rankSilver",
  3: "rankBronze",
};

const Main = () => {
  const { t, locale } = useLanguage();
  const [favorites, setFavorites] = useState(() => new Set());

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="main" id="main">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title fontSail">
          {t.main.title}
        </h3>
      </div>
      <div className="secContent grid">
        {destinations.map(
          ({ id, imgSrc, fees, rating, reviews, rank, hashtag }) => {
            const liked = favorites.has(id);
            const copy = t.destinations[id] || {};
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={copy.destTitle || hashtag} />
                  {rank ? (
                    <span className={`rankBadge ${rankClass[rank]}`}>
                      #{rank}
                    </span>
                  ) : null}
                  <button
                    type="button"
                    className={`favoriteBtn ${liked ? "isActive" : ""}`}
                    aria-label={
                      liked ? t.main.removeFavorite : t.main.addFavorite
                    }
                    onClick={() => toggleFavorite(id)}
                  >
                    {liked ? <AiFillHeart /> : <AiOutlineHeart />}
                  </button>
                </div>

                <div className="cardInfo">
                  <div className="titleRow flex">
                    <h4 className="destTitle">{copy.destTitle}</h4>
                    <span className="countryTag">{copy.country}</span>
                  </div>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{copy.location}</span>
                  </span>

                  <div className="reviewRow flex">
                    <span className="stars flex">
                      <AiFillStar className="starIcon" />
                      <strong>{rating.toFixed(1)}</strong>
                    </span>
                    <span className="reviewCount">
                      ({reviews.toLocaleString(locale)} {t.main.reviews})
                    </span>
                  </div>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {copy.grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{copy.description}</p>
                  </div>

                  <button className="btn flex">
                    {t.main.details}
                    <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Main;
