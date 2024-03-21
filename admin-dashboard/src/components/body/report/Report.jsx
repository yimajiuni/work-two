import React from "react";
import ReportChart from "../reportchart/ReportChart";
import "./report.css";
import "./report.scss";

const Report = () => {
  return (
    <div className="reportSection flex">
      <div className="heading">
        <h1>Report</h1>
        <ReportChart />
      </div>
    </div>
  );
};

export default Report;
