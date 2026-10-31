import React, { useEffect } from "react";
import "./footer.scss";
import "../gradientBand/gradientBand.scss";
import video from "../../assets/video1.mp4";
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { useLanguage } from "../../i18n/LanguageContext";

import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  const { t } = useLanguage();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="footer" id="footer">
      <div className="footerBg" aria-hidden="true">
        <div className="videoDiv">
          <div className="video-container">
            <video
              src={video}
              loop
              autoPlay
              muted
              playsInline
              type="video/mp4"
              controls={false}
              controlsList="nodownload"
            ></video>
          </div>
        </div>
        <div className="gradientBand" aria-hidden="true"></div>
      </div>

      <div className="secContent container">
        <div data-aos="fade-up" className="contactDiv flex">
          <div className="text">
            <small>{t.footer.keepInTouch}</small>
            <h2>{t.footer.travelWithUs}</h2>
          </div>

          <div className="inputDiv flex">
            <input
              data-aos="fade-up"
              type="text"
              placeholder={t.footer.emailPlaceholder}
            />
            <button data-aos="fade-up" className="btn flex" type="submit">
              {t.footer.send} <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="/" className="logo flex">
                <MdOutlineTravelExplore className="icon" />
                Travel.
              </a>
            </div>
            <div data-aos="fade-up" className="footerParagraph">
              {t.footer.blurb}
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>
          <div className="footerLinks grid">
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="linkGroup"
            >
              <span className="groupTitle">{t.footer.agency}</span>
              {t.footer.agencyLinks.map((label) => (
                <li key={label} className="footerList flex">
                  <FiChevronRight className="icon" />
                  {label}
                </li>
              ))}
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup"
            >
              <span className="groupTitle">{t.footer.partners}</span>
              {t.footer.partnerLinks.map((label) => (
                <li key={label} className="footerList flex">
                  <FiChevronRight className="icon" />
                  {label}
                </li>
              ))}
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="5000"
              className="linkGroup"
            >
              <span className="groupTitle">{t.footer.lastMinute}</span>
              {t.footer.lastMinuteLinks.map((label) => (
                <li key={label} className="footerList flex">
                  <FiChevronRight className="icon" />
                  {label}
                </li>
              ))}
            </div>
          </div>

          <div className="footerDiv flex">
            <small>{t.footer.rights}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
