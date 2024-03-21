import React from "react";
import "./body.css";
import "./body.scss";
import Top from "./top/Top";
import Report from "./report/Report";

import Listing from "./listing/Listing";
import Activity from "./activity/Activity";

const Body = () => {
  return (
    <div className="mainContent">
      <Top />
      <Report />
      <div className="bottom flex">
        <Listing />
        <Activity />
      </div>
    </div>
  );
};

export default Body;
