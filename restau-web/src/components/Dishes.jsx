import DishesCard from "../layouts/DishesCard";
import img1 from "../assets/img/img1-1.jpg";
import img2 from "../assets/img/img2-1.jpg";
import img3 from "../assets/img/img3-1.jpg";
import img4 from "../assets/img/img4-1.jpg";
import img5 from "../assets/img/img5-1.jpg";
import img6 from "../assets/img/img6-1.jpg";
import { useLanguage } from "../i18n/LanguageContext";

const dishImages = [img1, img2, img3, img5, img6, img4];

const Dishes = () => {
  const { t } = useLanguage();
  const items = t.dishes.items;

  return (
    <section className="flex flex-col items-center px-5 pb-16 pt-24 lg:px-32">
      <div className="mb-4 max-w-3xl text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.18em] text-brightColor">
          {t.dishes.eyebrow}
        </p>
        <h1 className="font-hedding heading-balanced text-4xl font-semibold md:text-5xl">
          {t.dishes.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-lightText md:text-lg">
          {t.dishes.intro}
        </p>
      </div>

      <div
        id="seasonal"
        className="mt-2 flex w-full max-w-6xl flex-col gap-5 md:flex-row"
      >
        {items.slice(0, 3).map((item, index) => (
          <DishesCard
            key={item.title}
            img={dishImages[index]}
            title={item.title}
            blurb={item.blurb}
            price={item.price}
            orderLabel={t.dishes.order}
          />
        ))}
      </div>

      <div
        id="juicy"
        className="mt-5 flex w-full max-w-6xl flex-col gap-5 md:flex-row"
      >
        {items.slice(3, 6).map((item, index) => (
          <DishesCard
            key={item.title}
            img={dishImages[index + 3]}
            title={item.title}
            blurb={item.blurb}
            price={item.price}
            orderLabel={t.dishes.order}
          />
        ))}
      </div>
    </section>
  );
};

export default Dishes;
