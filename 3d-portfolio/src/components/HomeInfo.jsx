import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import { useTranslation } from "react-i18next";

const HomeInfo = ({ currentStage }) => {
  const { t } = useTranslation();

  if (currentStage === 1)
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue drop-shadow py-4 px-8 text-white mx-5">
        {t("homeInfo.line1")}
        <span className="font-semibold mx-2 text-white">Yuko</span>
        👋
        <br />
        {t("homeInfo.line2")}
        <br />
        {t("homeInfo.line3")}
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          {t("homeInfo.line4")}
        </p>

        <Link to="/about" className="neo-brutalism-white neo-btn">
          {t("homeInfo.more")}
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="font-medium text-center sm:text-xl">
          {t("homeInfo.line5")}
        </p>

        <Link to="/projects" className="neo-brutalism-white neo-btn">
          {t("homeInfo.visit")}
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          {t("homeInfo.line6")}
        </p>

        <Link to="/contact" className="neo-brutalism-white neo-btn">
          {t("homeInfo.contact")}
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
