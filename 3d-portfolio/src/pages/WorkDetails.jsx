import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { useTranslation } from "react-i18next";
import { skills, experiences } from "../i18n-1.js";
import CTA from "../components/CTA";

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

//styling
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(26, 32, 39, 0.3)"
      : "rgba(255, 255, 255, 0.3)",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "0px 4px 6px rgb(248 1 153 / 0.15)",
}));
const Image = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(12),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "0px 4px 6px rgb(248 1 153 / 0.15)",
}));
const Summary = styled(Paper)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(26, 32, 39, 0.3)"
      : "rgba(255, 255, 255, 0.3)",
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "0px 4px 6px rgb(248 1 153 / 0.15)",
}));

const GoTo = styled(Paper)(({ theme }) => ({
  background: "linear-gradient(to right, #00c6ff 0%, " + "#0072ff 70%)",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#fff",
  fontSize: "1.2rem",
  fontWeight: "bold",
  boxShadow: "none", // Delete the default shadow
}));

const VerticalTimelineCustom = styled(VerticalTimeline)`
  &::before {
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0px 4px 6px rgb(248 1 153 / 0.15);
  }
`;

function WorkDetails() {
  //i18n translation
  const { t } = useTranslation();
  const translatedExperiences = t("experiences", { returnObjects: true });
  const [spacing, setSpacing] = React.useState(2);
  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `<Grid container spacing={${spacing}}>`;

  return (
    <div className="max-container">
      <h1 className="head-text">
        Work{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Title
        </span>
      </h1>
      {/*BasicGrid*/}
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={8}>
            <Image>画像</Image>
          </Grid>
          <Grid item xs={4}>
            <Grid container justifyContent="center" spacing={spacing}>
              <Grid item container direction="column">
                <Item>形態</Item>
              </Grid>
              <Grid item container direction="column">
                <Item>期間</Item>
              </Grid>
              <Grid item container direction="column">
                <Item>担当範囲</Item>
              </Grid>
              <Grid item container direction="column">
                <Item>使用技術</Item>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Summary>概要・ポイント</Summary>
          </Grid>
          {/*spacing
          <Grid item xs={4}>
            <Grid container justifyContent="center" spacing={spacing}>
              {[0, 1, 2].map((value) => (
                <Grid
                  key={value}
                  item
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="flex-end"
                >
                  <Paper
                    sx={{
                      height: 140,
                      width: 165,
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>*/}
          {/*
          <VerticalTimelineCustom lineColor="rgba(255, 255, 255, 0.3)">
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
                  background: "rgba(255, 255, 255, 0.3)", // Set the background with transparency
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid rgba(255, 255, 255, 0.3)", // Set the arrow color with transparency
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
          </VerticalTimelineCustom>*/}
          <VerticalTimelineCustom lineColor="rgba(255, 255, 255, 0.3)">
            <VerticalTimelineElement
              contentStyle={{
                background: "rgba(255, 255, 255, 0.3)", // Set the background with transparency
                boxShadow: "0px 4px 6px rgb(248 1 153 / 0.15)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid rgba(255, 255, 255, 0.3)", // Set the arrow color with transparency
              }}
            >
              <div>
                <h3 className="text-black text-xl font-poppins font-semibold">
                  コンセプト
                </h3>
                <p
                  className="text-black-500 font-medium font-base"
                  style={{ margin: 0 }}
                >
                  タイトル
                </p>
              </div>
              <ul className="my-5 list-discc ml-5 space-y-2">
                <li className="text-black-500/50 font-normal pl-1 text-sm">
                  タイトル
                </li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{
                background: "rgba(255, 255, 255, 0.3)", // Set the background with transparency
                boxShadow: "0px 4px 6px rgb(248 1 153 / 0.15)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid rgba(255, 255, 255, 0.3)", // Set the arrow color with transparency
              }}
            >
              <div>
                <h3 className="text-black text-xl font-poppins font-semibold">
                  ペルソナ
                </h3>
                <p
                  className="text-black-500 font-medium font-base"
                  style={{ margin: 0 }}
                >
                  タイトル
                </p>
              </div>
              <ul className="my-5 list-discc ml-5 space-y-2">
                <li className="text-black-500/50 font-normal pl-1 text-sm">
                  タイトル
                </li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{
                background: "rgba(255, 255, 255, 0.3)", // Set the background with transparency
                boxShadow: "0px 4px 6px rgb(248 1 153 / 0.15)",
              }}
              contentArrowStyle={{
                borderRight: "7px solid rgba(255, 255, 255, 0.3)", // Set the arrow color with transparency
              }}
            >
              <div>
                <h3 className="text-black text-xl font-poppins font-semibold"></h3>
                <p
                  className="text-black-500 font-medium font-base"
                  style={{ margin: 0 }}
                ></p>
              </div>
              <ul className="my-5 list-discc ml-5 space-y-2">
                <li className="text-black-500/50 font-normal pl-1 text-sm">
                  ワイヤ画像
                </li>
              </ul>
            </VerticalTimelineElement>
          </VerticalTimelineCustom>
          <Grid item xs={12}>
            <GoTo>作品へのリンク</GoTo>
          </Grid>
        </Grid>
      </Box>
      <CTA />
    </div>
  );
}
export default WorkDetails;
