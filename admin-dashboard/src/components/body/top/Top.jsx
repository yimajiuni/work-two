import React from "react";
import "./top.css";
import "./top.scss";
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";

import img from "../../../assets/user1.png";
import img2 from "../../../assets/image.png";
import video from "../../../assets/video.mp4";

const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to Planti</h1>
          <p>Hello Admin, welcome back!</p>
        </div>
        <div className="searchBar flex">
          <input type="text" placeholder="Search Dashboard" />
          <BiSearchAlt className="icon" />
        </div>
        <div className="adminDiv flex">
          <TbMessageCircle className="icon" />
          <MdOutlineNotificationsNone className="icon" />
          <div className="adminImage">
            <img src={img} alt="" />
          </div>
        </div>
      </div>

      <div className="cardSection flex">
        <div className="leftCard flex">
          <h1>Grow and Sell Ubiquitous Plants.</h1>
          <p>
            the World's fastest growing industry today are natural made
            products!
          </p>
          <div className="buttons flex">
            <button className="btn">Explore More</button>
            <button className="btn transparent lettercolor">Top Sellers</button>
          </div>
          <div className="videoDiv">
            <video
              src={video}
              autoPlay
              loop
              muted
              controls={false}
              controlsList="nodownload"
            ></video>
          </div>
        </div>

        <div className="rightCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>My Status</h1>

              <div className="flex">
                <span>
                  Today <br /> <small>52 orders</small>
                </span>
                <span>
                  This Month <br /> <small>475 orders</small>
                </span>
              </div>
              <span className="flex link">
                Go to my orders <BsArrowRightShort className="icon" />
              </span>
            </div>

            <div className="imgDiv">
              <img src={img2} alt="" />
            </div>
          </div>

          <div className="sideBarCard flex">
            <BsQuestionCircle className="icon" />
            <div className="cardContent">
              <div className="circle1"></div>
              <div className="circle2"></div>
              <h3>Help Center</h3>
              <p>
                A trouble in Planti? please contact us from for more questions.
              </p>

              <button className="btn">Go to Help center</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
