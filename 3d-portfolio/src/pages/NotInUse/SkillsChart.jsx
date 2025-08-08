import React, { useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import {
  css,
  git,
  github,
  html,
  javascript,
  mongodb,
  nextjs,
  nodejs,
  tailwindcss,
  react,
  sass,
  car,
  estate,
  express,
  linkedin,
  pricewise,
  contact,
  redux,
  snapgram,
  summiz,
  motion,
  mui,
  threads,
  typescript,
  figma,
  illustrator,
  photoshop,
  bootstrap,
  jquery,
} from "../assets/icons";

function SkillsChart() {
  useEffect(() => {
    // Set global options for Highcharts
    Highcharts.setOptions({
      chart: {
        styledMode: true, // Enable styled mode
      },
      colors: [], // Custom colors
      title: {
        style: {
          fontFamily: "Poppins, sans-serif",
          fontWeight: "bold",
        },
      },
      tooltip: {
        backgroundColor: "#fff",
        style: {
          color: "#000", // Changed color to better contrast with background
        },
      },
    });
  }, []);

  // Chart options for this specific chart
  const options = {
    chart: {
      type: "column",
      backgroundColor: "none",
      width: 300,
    },
    title: {
      text: "",
      align: "center",
    },
    xAxis: [
      {
        tickWidth: 0,
        lineWidth: 5,
        categories: ["Graphic Design"],
        fontSize: "30px", // Set the font size for the category labels
        labels: {
          align: "center",
          x: 0,
          y: -10,
        },
        opposite: true, // Position the X-axis at the top
        tickLength: 0,
      },
    ],
    yAxis: {
      title: {
        text: "", // Label for the Y-axis
      },
      min: 0,
      max: 10,
      reversed: true, // Reverse the order of the Y-axis values
      tickPositions: [0, 5, 10],
    },
    series: [
      {
        name: "class 1",
        showInLegend: false,
        colorByPoint: true,
        pointWidth: 5, // Adjust this value to make columns thinner

        data: [{ name: "Illustrator", y: 10, image: illustrator }],
        dataLabels: {
          enabled: true,
          rotation: 0,
          color: "#000",
          inside: false,
          verticalAlign: "top",
          useHTML: true,
          x: 0,
          y: -26,
          formatter: function () {
            const imageUrl = this.point.options.image;
            return imageUrl
              ? `<img src="${imageUrl}" style="width: 50px; height: 50px; vertical-align: middle; display: block;" /> ${this.y}`
              : this.y;
          },
          style: {
            fontSize: "13px",
            fontFamily: "Verdana, sans-serif",
          },
        },
      },
      {
        name: "class 2",
        showInLegend: false,
        colorByPoint: true,
        pointWidth: 5, // Adjust this value to make columns thinner

        data: [{ name: "Tokyo", y: 4.33, image: react }],
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: "#000",
          inside: false,
          verticalAlign: "top",
          useHTML: true,
          formatter: function () {
            const imageUrl = this.point.options.image;
            return imageUrl
              ? `<img src="${imageUrl}" style="width: 24px; height: 24px;" /> ${this.y}`
              : this.y;
          },
          y: 10,
          style: {
            fontSize: "13px",
            fontFamily: "Verdana, sans-serif",
          },
        },
      },
      {
        name: "class 3",
        showInLegend: false,
        colorByPoint: true,
        pointWidth: 5, // Adjust this value to make columns thinner

        data: [{ name: "Tokyo", y: 4.33, image: react }],
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: "#FFFFFF",
          inside: false,
          verticalAlign: "top",
          useHTML: true,
          formatter: function () {
            const imageUrl = this.point.options.image;
            return imageUrl
              ? `<img src="${imageUrl}" style="width: 24px; height: 24px;" /> ${this.y}`
              : this.y;
          },
          y: 10,
          style: {
            fontSize: "13px",
            fontFamily: "Verdana, sans-serif",
          },
        },
      },
      {
        name: "class 4",
        showInLegend: false,
        colorByPoint: true,
        pointWidth: 5, // Adjust this value to make columns thinner

        data: [{ name: "Tokyo", y: 4.33, image: react }],
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: "#FFFFFF",
          inside: false,
          verticalAlign: "top",
          useHTML: true,
          formatter: function () {
            const imageUrl = this.point.options.image;
            return imageUrl
              ? `<img src="${imageUrl}" style="width: 24px; height: 24px;" /> ${this.y}`
              : this.y;
          },
          y: 10,
          style: {
            fontSize: "13px",
            fontFamily: "Verdana, sans-serif",
          },
        },
      },
      {
        name: "class 5",
        showInLegend: false,
        colorByPoint: true,
        pointWidth: 5, // Adjust this value to make columns thinner

        data: [{ name: "Tokyo", y: 4.33, image: react }],
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: "#FFFFFF",
          inside: false,
          verticalAlign: "top",
          useHTML: true,
          formatter: function () {
            const imageUrl = this.point.options.image;
            return imageUrl
              ? `<img src="${imageUrl}" style="width: 50px; height: 50px;" /> ${this.y}`
              : this.y;
          },
          y: 10,
          style: {
            fontSize: "13px",
            fontFamily: "Verdana, sans-serif",
          },
        },
      },
    ],
    credits: {
      enabled: false, // Disable the Highcharts credits text
    },
  };

  return (
    <div className="flex py-10">
      <HighchartsReact highcharts={Highcharts} options={options} />
      <HighchartsReact highcharts={Highcharts} options={options} />
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default SkillsChart;
