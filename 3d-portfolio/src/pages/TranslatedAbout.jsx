import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTranslation } from "react-i18next";
import { skills, experiences } from "../i18n-1.js";
import CTA from "../components/CTA";

function TranslatedAbout() {
  const { t } = useTranslation();

  const translatedExperiences = t("experiences", { returnObjects: true });

  return (
    <section className="max-container" id="about">
      <h1 className="head-text">
        About{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">Me</span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>{t("aboutDesc.line1")}</p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="lg:block md:block sm:hidden sx:hidden"></div>
        <div className="mt-16 flex flex-wrap gap-12 cursor-pointer">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20 tooltip">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-enter">
                <img
                  src={skill.imageUrl}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
              <div className="csstooltip">
                <div>{skill.name}</div>
                <div>工程:{skill.type}</div>
                <div>使用歴:{skill.years}年</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>{t("aboutDesc.line2")}</p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {translatedExperiences.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-discc ml-5 space-y-2">
                  <li className="text-black-500/50 font-normal pl-1 text-sm">
                    {experience.points}
                  </li>
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <CTA />
    </section>
  );
}

export default TranslatedAbout;
