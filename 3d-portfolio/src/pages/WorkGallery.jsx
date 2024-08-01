import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import CTA from "../components/CTA.jsx";
import { arrow } from "../assets/icons/index.js";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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

const imageStyle = {
  display: "block",
  margin: "0 auto 0 0",
  boxShadow: "20px -12px 30px rgb(248 1 153 / 0.10)",
  borderRadius: "10px",
};
function WorkGallery() {
  const { t } = useTranslation();

  // Get translated objects
  const translatedProjects = t("projects", { returnObjects: true });
  const translatedPromos = t("promoDesigns", { returnObjects: true });
  const translatedApps = t("appDesigns", { returnObjects: true });

  // Combine all translated items into a single array
  const combinedWorks = [
    ...translatedProjects.map((item) => ({ ...item, type: "project" })),
    ...translatedPromos.map((item) => ({ ...item, type: "promo" })),
    ...translatedApps.map((item) => ({ ...item, type: "app" })),
  ];
  const handleOpen = (index, scrollType) => {
    setOpen(index);
    setScroll(scrollType);
  };

  const handleClose = () => setOpen(null);

  return (
    <section className="max-container bg-fixed" id="works">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Works
        </span>
      </h1>
      {/**/}
      <p className="text-slate-500 mt-2 leading-relaxed">
        {t("projectDesc.line1")}
        {t("projectDesc.line2")}
      </p>

      <div className="grid grid-cols-3 gap-5 my-20">
        {combinedWorks.map((work, index) => (
          <div className="lg:w-[350px] w-full" key={index}>
            <div>
              <div className="btn-front rounded-xl flex justify-center items-center">
                <Link
                  to="details"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  <img
                    src={work.preview}
                    alt={work.name}
                    className="w-2/3 h-2/3 object-contain"
                    style={imageStyle}
                  />
                </Link>
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              {/**/}
              <h4 className="text-xl font-poppins font-semibold">
                {work.name}
              </h4>
              <Link
                to={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600"
              >
                Live Link
              </Link>
              <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
            </div>
          </div>
        ))}
      </div>
      {/*}
      <hr className="border-slate-200" />

      <CTA />*/}
    </section>
  );
}

export default WorkGallery;

{
  /*}
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
*/
}
