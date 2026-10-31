import { BsStarFill } from "react-icons/bs";
import DishButton from "../layouts/DishButton";

const DishesCard = (props) => {
  return (
    <article className="group flex w-full flex-col rounded-lg bg-white p-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] md:w-1/3">
      <div className="media-frame media-zoom rounded-xl">
        <img src={props.img} alt={props.title || "Dish"} />
      </div>
      <div className="space-y-3 pt-4">
        <h3 className="font-hedding text-center text-xl font-semibold">
          {props.title}
        </h3>
        {props.blurb ? (
          <p className="px-1 text-center text-sm leading-relaxed text-lightText">
            {props.blurb}
          </p>
        ) : null}
        <div className="flex flex-row flex-wrap items-center justify-center gap-x-3 gap-y-2">
          <div className="flex flex-row items-center gap-0.5" aria-label="5 star rating">
            <BsStarFill className="text-sm text-brightColor" />
            <BsStarFill className="text-sm text-brightColor" />
            <BsStarFill className="text-sm text-brightColor" />
            <BsStarFill className="text-sm text-brightColor" />
            <BsStarFill className="text-sm text-brightColor" />
          </div>
          <h3 className="font-hedding whitespace-nowrap text-lg font-semibold">
            {props.price}
          </h3>
          <DishButton title={props.orderLabel || "Order"} compact />
        </div>
      </div>
    </article>
  );
};

export default DishesCard;
