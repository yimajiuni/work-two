import React, { useEffect } from "react";
import "./footer.scss";
import video from "../../assets/video1.mp4";
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="footer" id="footer">
      <div className="colorDiv">
        <div className="videoDiv">
          <div className="video-container">
            <video
              src={video}
              loop
              autoPlay
              muted
              type="video/mp4"
              controls={false}
              controlsList="nodownload"
            ></video>
          </div>
        </div>
        <div className="secContent container">
          <div data-aos="fade-up" className="contactDiv flex">
            <div className="text">
              <small>KEEP IN TOUCH</small>
              <h2>Travel with us</h2>
            </div>

            <div className="inputDiv flex">
              <input
                data-aos="fade-up"
                type="text"
                placeholder="Enter Email Address"
              />
              <button data-aos="fade-up" className="btn flex" type="submit">
                Send <FiSend className="icon" />
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. ...
                Nam libero tempore, cum soluta
              </div>

              <div data-aos="fade-up" className="footerSocials flex">
                <AiOutlineTwitter className="icon" />
                <AiFillYoutube className="icon" />
                <AiFillInstagram className="icon" />
                <FaTripadvisor className="icon" />
              </div>
            </div>
            <div className="footerLinks grid">
              {/*group one*/}
              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                className="linkGroup"
              >
                <span className="groupTitle">OUR AGENCY</span>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Services
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Insurance
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Agency
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Tourism
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Payment
                </li>
              </div>
              {/*group 2*/}
              <div
                data-aos="fade-up"
                data-aos-duration="4000"
                className="linkGroup"
              >
                <span className="groupTitle">PERTNERS</span>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Bookings
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Rentcars
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  HostelWorld
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Trivago
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Tripadvisor
                </li>
              </div>
              {/*group 3*/}
              <div
                data-aos="fade-up"
                data-aos-duration="5000"
                className="linkGroup"
              >
                <span className="groupTitle">LAST MINUTE</span>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  London
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  California
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Indonesia
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Europe
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Oceania
                </li>
              </div>
            </div>

            <div className="footerDiv flex">
              <small>@2024 YUKO2024 ALL RIGHTS RESERVED.</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
