import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="bg-black text-white rounded-t-3x1 mt-2 p-10 md:p-10 sm:p-5 ">
      <div className="flex flex-col md:flex-row justify-between p-b md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-xl pb-4">FoodieWeb</h1>
          <p className="text-sm">
            Indulge in a sympony of flavors, where each plate is a canvas for
            culnary excellence.
          </p>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className="flex flex-col gap-2">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
              About
            </Link>
            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
              Menu
            </Link>
            <Link
              to="review"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
              Reviews
            </Link>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-3 pt-5 md:pt-0">Menu</h1>
          <nav className="flex flex-col gap-2">
            <Link
              to="dishes"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
              Our Dishes
            </Link>
            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-brightColor transition-all cursor-pointer"
            >
              Premium Menu
            </Link>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-2">Contact Us</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Fooedieweb@net.com
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              +00 095 035 996
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              social media
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className=" text-center py-4">
            @copyright developed by
            <span className="text-brightColor"> FoodieWeb </span>
            all rights reserved.
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
