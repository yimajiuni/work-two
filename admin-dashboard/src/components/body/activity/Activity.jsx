import React from "react";
import "./activity.css";
import "./activity.scss";

import { BsArrowRightShort } from "react-icons/bs";
import user from "../../../assets/user1.png";
import user1 from "../../../assets/user2.png";
import user2 from "../../../assets/user1.jpg";
import user3 from "../../../assets/user4.png";

const Activity = () => {
  return (
    <div className="activitySection">
      <div className="heading flex">
        <h1>Recent Activity</h1>
        <button className="btn flex">
          See All
          <BsArrowRightShort className="icon" />
        </button>
      </div>
      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={user1} alt="/" />
          <div className="customerDetails">
            <span className="name">
              Kamma Ladhi
              <small>Ordered a new plant</small>
            </span>
          </div>
          <div className="duration">2min ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={user2} alt="/" />
          <div className="customerDetails">
            <span className="name">
              Ola Martha
              <small>Ordered a new plant</small>
            </span>
          </div>
          <div className="duration">2min ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={user3} alt="/" />
          <div className="customerDetails">
            <span className="name">
              Pro Pllo
              <small>Ordered a new plant</small>
            </span>
          </div>
          <div className="duration">15min ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={user} alt="/" />
          <div className="customerDetails">
            <span className="name">
              Mnto Mirai
              <small>Ordered a new plant</small>
            </span>
          </div>
          <div className="duration">28min ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={user2} alt="/" />
          <div className="customerDetails">
            <span className="name">
              Ola Martha
              <small>Ordered a new plant</small>
            </span>
          </div>
          <div className="duration">45min ago</div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
