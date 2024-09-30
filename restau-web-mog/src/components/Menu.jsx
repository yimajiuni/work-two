import DishesCard from "../layouts/DishesCard";
import img1 from "../assets/img/menu1.jpg";
import img2 from "../assets/img/menu2.jpg";
import img3 from "../assets/img/menu3.jpg";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 py-10">
      <h1 className="font-hedding text-5xl font-semibold text-center lg:pt-8 pt-40 pb-10">
        Premium Menu
      </h1>
      <div className="flex flex-col md:flex-row gap-5 mt-5">
        <DishesCard img={img1} title="Delicious Tori" price="$16.99" />
        <DishesCard img={img2} title="Today's Oriental" price="$18.99" />
        <DishesCard img={img3} title="Takoyaki" price="$14.99" />
      </div>
    </div>
  );
};

export default Menu;
