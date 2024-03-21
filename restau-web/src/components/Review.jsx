import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/img/pic1.png";
import img2 from "../assets/img/pic2.png";
import img3 from "../assets/img/pic3.png";

const Review = () => {
  return (
    <div className="z-0 min-h-screen flex flex-col items-center justify-center py-20  lg:px-32 md:py-32 sm:py-20 px-5">
      <h1 className="font-hedding text-5xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        Customer's Review
      </h1>
      <div className="flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard img={img1} name="Sophia Azura" />
        <ReviewCard img={img2} name="John Deo" />
        <ReviewCard img={img3} name="Victoria Zoe" />
      </div>
    </div>
  );
};

export default Review;
