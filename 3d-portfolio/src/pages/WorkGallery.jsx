import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import CTA from "../components/CTA.jsx";
import { arrow } from "../assets/icons/index.js";
import { workDatas } from "../i18n-1.js";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  maxHeight: "90vh",
  overflowY: "auto",
};

const TabCustom = styled(Tab)({
  fontWeight: "bold",
  color: "#6474b",
  opacity: 0.8,
  fontFamily: "Poppins, YuGothic, '游ゴシック', sans-serif",
});

function WorkGallery() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);

  // Get translated objects
  const translatedProjects = t("projects", { returnObjects: true });
  const translatedPromos = t("promoDesigns", { returnObjects: true });
  const translatedApps = t("appDesigns", { returnObjects: true });
  const translatedDtps = t("dtpDesigns", { returnObjects: true });

  // Combine all translated items into a single array
  const combinedWorks = [
    ...translatedProjects.map((item) => ({ ...item, type: "project" })),
    ...translatedPromos.map((item) => ({ ...item, type: "promo" })),
    ...translatedApps.map((item) => ({ ...item, type: "app" })),
    ...translatedDtps.map((item) => ({ ...item, type: "dtp" })),
  ];
  //Changing tabs
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  //Filter and devide by tabs
  const filteredWorks = combinedWorks.filter((work) => {
    const workData = workDatas.find((data) => data.id === work.id);
    const workId = workData ? workData.id : null;
    if (activeTab === 0) {
      return workId >= 1 && workId <= 20;
    } else if (activeTab === 1) {
      return workId >= 1 && workId <= 5;
    } else if (activeTab === 2) {
      return workId >= 6 && workId <= 16;
    } else if (activeTab === 3) {
      return workId >= 17 && workId <= 19;
    } else if (activeTab === 4) {
      return workId >= 20;
    }
    return false;
  });

  return (
    <section className=" max-container" id="works">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Works
        </span>
      </h1>
      <p className="text-slate-500 mt-2 leading-relaxed pb-5">
        {t("projectDesc.line1")}
        {t("projectDesc.line2")}
      </p>
      {/*tabs*/}
      <Box
        sx={{ width: "100%", fontWeight: "bold" }}
        className="overflow-x-auto hidden-scrollbar"
      >
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          className="overflow-x-auto hidden-scrollbar"
          sx={{ minWidth: "max-content" }}
        >
          <TabCustom label="全て" />
          <TabCustom label="Websites" />
          <TabCustom label="Jothes" />
          <TabCustom label="Apps" />
          <TabCustom label="DTP" />
        </Tabs>
      </Box>

      <div className="grid lg:grid-cols-3 gap-5 my-20">
        {filteredWorks.map((work, index) => {
          const workData = workDatas.find((data) => data.id === work.id);
          const workId = workData ? workData.id : null;

          return (
            <div className="lg:w-[350px] w-full block-container" key={index}>
              <div>
                <div className="rounded-xl flex justify-center items-center">
                  <Link
                    to={
                      workId >= 1 && workId <= 4
                        ? `/details/${workId}`
                        : workId >= 6 && workId <= 20
                          ? work.link
                          : "#"
                    }
                    rel="noopener noreferrer"
                    className="block-container relative inline-block group font-semibold text-blue-600"
                    target={workId >= 5 && workId <= 20 ? "_blank" : undefined}
                  >
                    <img
                      src={work.preview}
                      alt={work.name}
                      className="w-2/3 h-2/3 object-contain gallery-img"
                    />
                  </Link>
                </div>
              </div>
              <div className="mt-5 flex flex-col">
                <h4 className="text-xl lg:w-60  font-semibold break-words">
                  {work.name}
                </h4>
                <Link
                  to={
                    workId >= 1 && workId <= 4
                      ? `/details/${workId}`
                      : workId >= 5 && workId <= 20
                        ? work.link
                        : "#"
                  }
                  rel="noopener noreferrer"
                  className="items-center inline-flex font-semibold text-blue-600"
                  target={workId >= 5 && workId <= 20 ? "_blank" : undefined}
                >
                  <img
                    src={arrow}
                    alt="arrow"
                    className="mr-2 w-4 h-4 object-contain"
                  />
                  Go to Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      {/*
      <div>
        <div className="z-10 container">
          <div className="card">
            <div className="icon"></div>
            <div className="icon-bottom"></div>
          </div>
          <div className="card2"></div>
        </div>
        <div className="unka-long">
          <div className="in-between-left"></div>
          <div className="in-between-right"></div>
        </div>
      </div>*/}
      <CTA />
    </section>
  );
}

export default WorkGallery;
