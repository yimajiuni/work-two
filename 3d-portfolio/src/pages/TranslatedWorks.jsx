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
  boxShadow: "20px 12px 30px rgb(248 1 153 / 0.10)",
};
function TranslatedProjects() {
  const { t } = useTranslation();

  // Get translated projects descriptions
  const translatedProjects = t("projects", { returnObjects: true });
  const translatedPromos = t("promoDesigns", { returnObjects: true });
  const translatedApps = t("appDesigns", { returnObjects: true });

  const handleOpen = (index, scrollType) => {
    setOpen(index);
    setScroll(scrollType);
  };

  const handleClose = () => setOpen(null);

  return (
    <section className="max-container" id="works">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Works
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed">
        {t("projectDesc.line1")}
        {t("projectDesc.line2")}
      </p>

      <div className="flex flex-wrap my-20 gap-16">
        {translatedProjects.map((project, index) => (
          <div className="lg:w-[400px] w-full" key={index}>
            <div>
              <div className="btn-front rounded-xl flex justify-center items-center">
                <Link
                  to="details"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  <img
                    src={project.preview}
                    alt={project.name}
                    className="w-2/3 h-2/3 object-contain"
                    style={imageStyle}
                  />
                </Link>
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <p className="mt-2 text-slate-500">{project.persona}</p>
              <p className="mt-2 text-slate-500">{project.responsibility}</p>
              <p className="mt-2 text-slate-500">{project.duration}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <h1 className="head-text">
        Promo & UX{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Designs
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>{t("aboutDesc.line1")}</p>
      </div>
      <div className="py-10 flex flex-col">
        <div className="flex flex-wrap my-10 gap-16">
          {translatedPromos.map((design, index) => (
            <div className="lg:w-[400px] w-full" key={index}>
              <div>
                <div className={`btn-back rounded-xl ${design.theme}`} />
                <div
                  className="btn-front rounded-xl flex justify-center items-center"
                  onClick={() => handleOpen(index, "paper")}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={design.preview}
                    alt={design.name}
                    className="w-2/3 h-2/3 object-contain"
                    style={imageStyle}
                  />
                </div>
              </div>

              <div className="mt-5 flex flex-col">
                <h4 className="text-2xl font-poppins font-semibold">
                  {design.name}
                </h4>
                <p className="mt-2 text-slate-500">{design.description}</p>
                <div className="mt-5 flex items-center gap-2 font-poppins">
                  <Link
                    to={design.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600"
                  >
                    Live Link
                  </Link>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain"
                  />
                </div>
              </div>

              <Modal
                open={open === index}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby={`modal-title-${index}`}
                aria-describedby={`modal-description-${index}`}
              >
                <Box sx={modalStyle}>
                  <Typography
                    id={`modal-title-${index}`}
                    variant="h6"
                    component="h2"
                  >
                    {design.name}
                  </Typography>
                  <Typography id={`modal-description-${index}`} sx={{ mt: 2 }}>
                    {design.description}
                  </Typography>
                  <div className="mt-5 flex items-center gap-2 font-poppins">
                    <Link
                      to={design.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-blue-600"
                    >
                      Live Link
                    </Link>
                    <img
                      src={arrow}
                      alt="arrow"
                      className="w-4 h-4 object-contain"
                    />
                  </div>
                </Box>
              </Modal>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {translatedApps.map((design, index) => (
          <div className="lg:w-[400px] w-full" key={index}>
            <div className="thumbnail">
              <div className={`btn-back rounded-xl ${design.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={design.preview}
                  alt={design.name}
                  className="w-2/3 h-2/3 object-contain"
                  style={imageStyle}
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {design.name}
              </h4>
              <p className="mt-2 text-slate-500">{design.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={design.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
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

export default TranslatedProjects;
