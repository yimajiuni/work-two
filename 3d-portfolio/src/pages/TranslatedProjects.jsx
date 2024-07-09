import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import CTA from "../components/CTA.jsx";
import { projects } from "../i18n-1.js";
import { arrow } from "../assets/icons/index.js";

function TranslatedProjects() {
  const { t } = useTranslation();

  // Get translated projects descriptions
  const translatedProjects = t("projects", { returnObjects: true });
  console.log(translatedProjects); // Add this line to check the output

  return (
    <div className="max-container">
      <h1>{t("greeting")}</h1>
      <section className="max-container">
        <h1 className="head-text">
          My{" "}
          <span className="blue-gradient_text drop-shadow font-semibold">
            Developments
          </span>
        </h1>

        <p className="text-slate-500 mt-2 leading-relaxed">
          {t("projectDesc.line1")}
          {t("projectDesc.line2")}
        </p>

        <div className="flex flex-wrap my-20 gap-16">
          {translatedProjects.map((project, index) => (
            <div className="lg:w-[400px] w-full" key={index}>
              <div className="block-container w-12 h-12">
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={project.iconUrl}
                    alt={project.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>

              <div className="mt-5 flex flex-col">
                <h4 className="text-2xl font-poppins font-semibold">
                  {project.name}
                </h4>
                <p className="mt-2 text-slate-500">{project.description}</p>
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

        <hr className="border-slate-200" />

        <CTA />
      </section>
    </div>
  );
}

export default TranslatedProjects;
