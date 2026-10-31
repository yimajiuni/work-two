import React, { useRef } from "react";
import "./coupons.scss";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useLanguage } from "../../i18n/LanguageContext";

const accents = [
  "signup",
  "mongolia",
  "hotel",
  "weekend",
  "family",
  "flights",
  "culture",
];

const CouponCarousel = () => {
  const { t } = useLanguage();
  const trackRef = useRef(null);

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const amount = Math.min(280, track.clientWidth * 0.8);
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <section className="couponSection" id="coupons">
      <div className="secContent container">
        <div className="sectionCard">
          <div className="couponHeader flex">
            <div className="couponHeading">
              <p className="eyebrow">{t.coupons.eyebrow}</p>
              <h3 className="fontSail">{t.coupons.title}</h3>
            </div>
            <div className="couponNav flex">
              <button
                type="button"
                aria-label={t.coupons.prev}
                onClick={() => scrollByCard(-1)}
              >
                <MdChevronLeft />
              </button>
              <button
                type="button"
                aria-label={t.coupons.next}
                onClick={() => scrollByCard(1)}
              >
                <MdChevronRight />
              </button>
            </div>
          </div>

          <div className="couponTrack" ref={trackRef}>
            {t.coupons.items.map((coupon, index) => (
              <article
                key={`${coupon.title}-${index}`}
                className={`couponCard ${accents[index] || "signup"}`}
              >
                <h4>{coupon.title}</h4>
                <p>{coupon.detail}</p>
                <button type="button" className="claimBtn">
                  {t.coupons.claim}
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CouponCarousel;
