import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { workDatas } from "../i18n-1.js";
import { useParams } from "react-router-dom";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTranslation } from "react-i18next";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { circlarrow } from "../assets/images";

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

// Styling
const Img = styled("img")(({ theme }) => ({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  width: "100%", // Ensure the image takes full width of the parent container
  objectFit: "cover",
  opacity: 0.9,
  height: "210px",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "100%",
  },
}));
const Image = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "0px 4px 6px rgb(248 1 153 / 0.15)",
  borderRadius: "10px",
  overflow: "hidden", // Ensure the content is clipped if it overflows
  // Specific height for the image container
  // Responsive height adjustments
  [theme.breakpoints.down("sm")]: {
    height: "325px", // Height for small screens
  },
}));
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
  borderRadius: "10px",
  boxShadow: "none", // Delete the default shadow
}));

const VerticalTimelineCustom = styled(VerticalTimeline)`
  &::before {
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0px 4px 6px rgb(248 1 153 / 0.15);
  }
`;

function WorkDetails() {
  // i18n translation
  const { t } = useTranslation();
  const detailedDatas = t("workDatas", { returnObjects: true });
  const [spacing, setSpacing] = React.useState(2);
  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const { id } = useParams();
  // Extracting a specific work object by id
  const selectedWork = workDatas.find((data) => data.id === parseInt(id));

  return (
    <div className="max-container">
      {selectedWork ? (
        <>
          <h1 className="head-text">
            {selectedWork.titleBk}{" "}
            <span className="blue-gradient_text drop-shadow font-semibold">
              {selectedWork.titleBl}
            </span>
          </h1>

          <Box sx={{ width: "100%" }} className="z-10">
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={8}>
                <Image>
                  <Img src={selectedWork.image} />
                </Image>
              </Grid>
              <Grid item xs={4}>
                <Grid container justifyContent="center" spacing={spacing}>
                  <Grid item container direction="column">
                    <Item style={{ textAlign: "left" }}>
                      形式 : {selectedWork.medium}
                    </Item>
                  </Grid>
                  <Grid item container direction="column">
                    <Item style={{ textAlign: "left" }}>
                      制作期間 : {selectedWork.period}
                    </Item>
                  </Grid>
                  <Grid item container direction="column">
                    <Item style={{ textAlign: "left" }}>
                      担当 : {selectedWork.range}
                    </Item>
                  </Grid>
                  <Grid item container direction="column">
                    <Item style={{ textAlign: "left" }}>
                      使用技術 : {selectedWork.skills}
                    </Item>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Summary>
                  <h3 className="text-black text-xl font-poppins font-semibold text-left">
                    {selectedWork.summary}
                  </h3>
                </Summary>
              </Grid>

              <VerticalTimelineCustom lineColor="rgba(255, 255, 255, 0.3)">
                <VerticalTimelineElement
                  date={" "}
                  contentStyle={{
                    background: "rgba(255, 255, 255, 0.3)", // Set the background with transparency
                    boxShadow: "0px 4px 6px rgb(248 1 153 / 0.15)",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid rgba(255, 255, 255, 0.3)", // Set the arrow color with transparency
                  }}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={selectedWork.icon}
                        alt={selectedWork.company_name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                  iconStyle={{ background: "#fff" }}
                >
                  <div>
                    <h3 className="text-black text-xl font-poppins font-semibold">
                      コンセプト
                    </h3>
                  </div>
                  <ul className="my-5 list-discc ml-5 space-y-2">
                    <li className="text-black-500 font-normal pl-1 text-sm">
                      <p>{selectedWork.concept_eva}</p>
                      <p>{""}</p>
                      機能面では、{selectedWork.concept_function}
                      ユーザーニーズに合わせ、{selectedWork.concept_needs}
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
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={selectedWork.icon}
                        alt={selectedWork.company_name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                  iconStyle={{ background: "#fff" }}
                >
                  <div>
                    <h3 className="text-black text-xl font-poppins font-semibold">
                      ペルソナ
                    </h3>
                    <ul className="my-5 list-discc ml-5 space-y-2">
                      <li className="text-black-500 font-semibold pl-1 text-sm">
                        <p>{selectedWork.concept_target}</p>
                      </li>
                    </ul>
                  </div>
                  <ul className="my-5 list-discc ml-5 space-y-2">
                    <li className="text-black-500 font-normal pl-1 text-sm">
                      <p> 基本情報 : {selectedWork.persona_basic}</p>
                    </li>
                    <li className="text-black-500 font-normal pl-1 text-sm">
                      <p>内面志向 : {selectedWork.persona_preference}</p>
                    </li>
                    <li className="text-black-500 font-normal pl-1 text-sm">
                      <p>行動傾向 : {selectedWork.persona_orientation}</p>
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
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={selectedWork.icon}
                        alt={selectedWork.company_name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                  iconStyle={{ background: "#fff" }}
                >
                  <div>
                    <h3 className="text-black text-xl font-poppins font-semibold">
                      設計
                    </h3>
                    <p
                      className="text-black-500 font-medium font-base"
                      style={{ margin: 0 }}
                    ></p>
                  </div>
                  <ul className="my-5 list-discc ml-5 space-y-2">
                    <li className="text-black-500 font-normal pl-1 text-sm">
                      {selectedWork.wireframe}
                    </li>
                  </ul>
                </VerticalTimelineElement>
              </VerticalTimelineCustom>
              <Grid item xs={12} className="z-10">
                <Link
                  to={selectedWork.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GoTo>Direct Link</GoTo>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </>
      ) : (
        <p>wipping!</p>
      )}
      <CTA />
      <Footer />
      <img
        src={circlarrow}
        className="absolute w-96 right-10 opacity-50 rotate-180 -z-10 lg:block md:block sm:hidden"
        style={{ top: "500px", left: "650px" }}
      />
      <img
        src={circlarrow}
        className="absolute w-96 right-10 opacity-50  scale-x-[-1] bgimg -z-10 lg:block md:block sm:hidden"
        style={{ top: "1120px", left: "500px" }}
      />
    </div>
  );
}
export default WorkDetails;
