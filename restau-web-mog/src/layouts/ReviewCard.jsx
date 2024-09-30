import React from "react";

const ReviewCard = (props) => {
  return (
    <div className="w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <div>
        <p className="font-hedding text-3xl text-lightText">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="flex flex-row justify-ctenter items-center mt-4 gap-4">
        <img className="rounded-full w-1/4" src={props.img} alt="img" />
        <h3 className="text-3xl font-semibold">{props.name}</h3>
      </div>
    </div>
  );
};

export default ReviewCard;
