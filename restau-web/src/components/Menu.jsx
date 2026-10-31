import DishesCard from "../layouts/DishesCard";
import img1 from "../assets/img/menu1.jpg";
import img2 from "../assets/img/menu2.jpg";
import img3 from "../assets/img/menu3.jpg";
import { useLanguage } from "../i18n/LanguageContext";

const menuImages = [img1, img2, img3];

const Menu = () => {
  const { t } = useLanguage();

  return (
    <section className="flex flex-col items-center bg-backgroundColor/25 px-5 py-16 lg:px-32">
      <div className="mb-8 max-w-3xl text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.18em] text-brightColor">
          {t.menu.eyebrow}
        </p>
        <h1 className="font-hedding text-4xl font-semibold md:text-5xl">
          {t.menu.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-lightText md:text-lg">
          {t.menu.intro}
        </p>
      </div>

      <div className="flex w-full max-w-6xl flex-col gap-5 md:flex-row">
        {t.menu.items.map((item, index) => (
          <DishesCard
            key={item.title}
            img={menuImages[index]}
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

export default Menu;
