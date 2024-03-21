import DishesCard from "../layouts/DishesCard";
import img1 from "../assets/img/img1-1.jpg";
import img2 from "../assets/img/img2-1.jpg";
import img3 from "../assets/img/img3-1.jpg";
import img4 from "../assets/img/img4-1.jpg";
import img5 from "../assets/img/img5-1.jpg";
import img6 from "../assets/img/img6-1.jpg";

const Dishes = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 pt-20">
      <h1 className=" font-hedding text-5xl font-semibold text-center pt-24 pb-10">
        Our Dishes
      </h1>
      <div id="seasonal" className="flex flex-col md:flex-row gap-5 mt-5 ">
        <DishesCard img={img1} title="Seafood Special" price="$10.99" />
        <DishesCard img={img2} title="Whole grain Sandwich" price="$12.99" />
        <DishesCard img={img3} title="Special Cheese" price="$10.99" />
      </div>
      <div id="juicy" className="flex flex-col md:flex-row gap-5 mt-5 ">
        <DishesCard img={img5} title="Saucey Sand" price="$10.99" />
        <DishesCard img={img6} title="In the Morning" price="$12.99" />
        <DishesCard img={img4} title="Flavorous Spices" price="$11.99" />
      </div>
    </div>
  );
};

export default Dishes;
