import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/img/pic1.png";
import img2 from "../assets/img/pic2.png";
import img3 from "../assets/img/pic3.png";
import img4 from "../assets/img/pic4.png";
import img5 from "../assets/img/pic5.png";
import img6 from "../assets/img/pic6.png";
import { useLanguage } from "../i18n/LanguageContext";

const reviewImages = [img1, img2, img3, img4, img5, img6];

const Review = () => {
  const { t } = useLanguage();

  return (
    <section className="z-0 flex w-full flex-col items-center px-5 py-16 lg:px-32">
      <div className="mb-10 max-w-3xl text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.18em] text-brightColor">
          {t.review.eyebrow}
        </p>
        <h1 className="font-hedding heading-balanced text-4xl font-semibold md:text-5xl">
          {t.review.title}
        </h1>
        <p className="mt-4 text-base text-lightText md:text-lg">
          {t.review.intro}
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {t.review.items.map((review, index) => (
          <ReviewCard
            key={review.name}
            img={reviewImages[index]}
            name={review.name}
            place={review.place}
            quote={review.quote}
          />
        ))}
      </div>
    </section>
  );
};

export default Review;
