import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import CTA from "../components/CTA.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { workDatas } from "../i18n-1.js";
import { useTheme } from "../themes/useTheme";

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
  color: "#64748b",
  opacity: 0.8,
  fontFamily: "Poppins, var(--theme-font-jp), sans-serif",
  "&.Mui-selected": {
    color: "var(--theme-link-accent, #2563eb)",
  },
});

const TabsCustom = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "var(--theme-link-accent, #2563eb)",
  },
});

function WorkGallery() {
  const { t } = useTranslation();
  const { themeId } = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const linkAccentClass =
    themeId === "beige" ? "text-[#382797]" : "text-blue-600";

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
      return workId >= 1 && workId <= 23;
    } else if (activeTab === 1) {
      return workId >= 1 && workId <= 6;
    } else if (activeTab === 2) {
      return workId >= 7 && workId <= 17;
    } else if (activeTab === 3) {
      return workId >= 18 && workId <= 22;
    } else if (activeTab === 4) {
      return workId >= 23;
    }
    return false;
  });

  return (
    <section className="max-container" id="works">
      <Breadcrumbs
        items={[
          { label: t("breadcrumb.home"), to: "/" },
          { label: t("breadcrumb.works") },
        ]}
      />
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
        <TabsCustom
          value={activeTab}
          onChange={handleTabChange}
          className="overflow-x-auto hidden-scrollbar"
          sx={{ minWidth: "max-content" }}
        >
          <TabCustom label="All" />
          <TabCustom label="Websites" />
          <TabCustom label="SALES" />
          <TabCustom label="Apps" />
          <TabCustom label="DTP" />
        </TabsCustom>
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
                      workId >= 1 && workId <= 5
                        ? `/details/${workId}`
                        : workId >= 6 && workId <= 23
                          ? work.link
                          : "#"
                    }
                    rel="noopener noreferrer"
                    className={`block-container relative inline-block group font-semibold ${linkAccentClass}`}
                    target={workId >= 6 && workId <= 23 ? "_blank" : undefined}
                  >
                    <img
                      src={work.preview}
                      alt={work.name}
                      className="w-2/3 h-2/3 object-contain gallery-img"
                      loading="lazy"
                      width="350"
                      height="250"
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
                    workId >= 1 && workId <= 5
                      ? `/details/${workId}`
                      : workId >= 6 && workId <= 23
                        ? work.link
                        : "#"
                  }
                  rel="noopener noreferrer"
                  className={`items-center inline-flex font-semibold ${linkAccentClass}`}
                  target={workId >= 6 && workId <= 23 ? "_blank" : undefined}
                >
                  <svg
                    className="mr-2 w-4 h-4 shrink-0"
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      d="M1.16602 7.49984H12.8327M12.8327 7.49984L6.99935 1.6665M12.8327 7.49984L6.99935 13.3332"
                      stroke="currentColor"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
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
