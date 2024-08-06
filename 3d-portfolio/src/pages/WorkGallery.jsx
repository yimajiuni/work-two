import React, { Suspense, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import CTA from "../components/CTA.jsx";
import { arrow } from "../assets/icons/index.js";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { workDatas } from "../i18n-1.js";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Fox from "../models/Fox";

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

function WorkGallery() {
  const { t } = useTranslation();
  const [currentAnimation, setCurrentAnimation] = useState("idle");

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

      <div className="grid lg:grid-cols-3 gap-5 my-20">
        {combinedWorks.map((work, index) => {
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
                        : workId >= 5 && workId <= 16
                          ? work.link
                          : "#"
                    }
                    rel="noopener noreferrer"
                    className="block-container relative inline-block group font-semibold text-blue-600"
                    target={workId >= 5 && workId <= 16 ? "_blank" : undefined}
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
                <h4 className="text-xl lg:w-60 font-poppins font-semibold break-words">
                  {work.name}
                </h4>
                <Link
                  to={
                    workId >= 1 && workId <= 4
                      ? `/details/${workId}`
                      : workId >= 5 && workId <= 16
                        ? work.link
                        : "#"
                  }
                  rel="noopener noreferrer"
                  className="items-center inline-flex font-semibold text-blue-600"
                  target={workId >= 5 && workId <= 16 ? "_blank" : undefined}
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
        {/*
        <div className="lg:w-2/3 w-full lg:h-auto md:h-[550px] h-[350px]">
          <Canvas
            camera={{
              position: [0, 0, 5],
              fov: 75,
              near: 0.1,
              far: 1000,
            }}
          >
            <directionalLight position={[0, 0, 1]} intensity={2.5} />
            <ambientLight intensity={1} />
            <pointLight position={[5, 10, 0]} intensity={2} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              intensity={2}
            />

            <Suspense fallback={<Loader />}>
              <Fox
                currentAnimation={currentAnimation}
                position={[0.5, 0.35, 0]}
                rotation={[12.629, -0.6, 0]}
                scale={[0.5, 0.5, 0.5]}
              />
            </Suspense>
          </Canvas>
        </div>*/}
      </div>
    </section>
  );
}

export default WorkGallery;
