import React from "react";
import "./Offers.css";
import exclusive_image from "../Assets/exclusive_image-1.png";

const Offers = () => {
  return (
    <div className="offers">
      <h1>OFFERS</h1>
      <hr />
      <div className="offers-banner-container">
        <div className="offers-banner">
          <img src={exclusive_image} alt="" />
          <div className="content">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY BEST SELLERS PRODUCTS</p>
            <button>CHECK NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
