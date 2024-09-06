import { Box, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import DisplayPageHeader from "../components/DisplayComponents/DisplayPageHeader";
import headerText from "../public/headingText.png";
import Ellipse2 from "../public/Ellipse2.png";
import girl from "../public/girl.png";
import text from "../public/text.png";
import equations from "../public/equations.png";
import { ServiceSection } from "../components/DisplayComponents/ServiceSection";
import { MathExplainedSection } from "../components/DisplayComponents/MathExplainedSection";
import { GetPersonalAppSection } from "../components/DisplayComponents/GetPersonalAppSection";
import { ExploreOptionSection } from "../components/DisplayComponents/ExploreOptionSection";
import { MathMindSection } from "../components/DisplayComponents/MathMindSection";
import { Footer } from "../components/DisplayComponents/Footer";
import { display, textAlign, width } from "@mui/system";

const DisplayPage = () => {
  const [hover, setHover] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  // Responsive styles
  const headerStyles = {
    position: "absolute",
    zIndex: 0,
    left: hover ? (isMobile ? "50%" : "650px") : isMobile ? "10%" : "350px",
    top: hover ? "100%" : isMobile ? "10%" : "10%",
    height: hover ? "0px" : isMobile ? "35%" : "42%",
    width: hover ? "0px" : isMobile ? "70%" : "48%",
    transition: "0.5s ease",
  };

  const textStyles = {
    zIndex: 2,
    position: "absolute",
    right: isMobile ? "75%" : "70%",
    top: hover ? (isMobile ? "14%" : "10%") : "50%",
    height: isMobile ? "15%" : "30%",
    width: isMobile ? "20%" : "19%",
    transition: "0.5s ease",
  };

  const equationStyles = {
    zIndex: 2,
    position: "absolute",
    left: hover ? (isMobile ? "0%" : "230px") : isMobile ? "50%" : "650px",
    top: hover ? (isMobile ? "5%" : "0%") : isMobile ? "110%" : "90%",
    height: hover ? (isMobile ? "70%" : "90%") : "0%",
    width: hover ? (isMobile ? "80%" : "60%") : "0%",
    transition: "0.5s ease",
  };

  const girlStyles = {
    position: "absolute",
    left: isMobile ? "0%" : "24%",
    bottom: "0%",
    zIndex: 3,
    height: isMobile ? "90%" : "90%",
    width: isMobile ? "90%" : "50%",
  };

  const ellipseStyles = {
    position: "absolute",
    right: isMobile ? "20%" : "28%",
    bottom: "0%",
    height: isMobile ? "45%" : "58%",
    width: isMobile ? "70%" : "45%",
  };

  return (
    <Box
      sx={{
        width: "98vw",
        height: "100vh",
        padding: "1%",
        overflow: "auto",
        scrollbarWidth: "none",
        "-ms-overflow-style": "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Box sx={{ height: "100%", width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            height: isMobile ? "auto" : "600vh",
            overflow: "hidden",
            overflowY: 'auto',
            padding: isMobile ? "40px 0px 20px 0px" : "40px 0px 40px 0px",
            scrollbarWidth: "none",
            "-ms-overflow-style": "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <DisplayPageHeader />
          <Box
            sx={{
              width: "100%",
              height: isMobile ? "30vh" : "14%",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              padding: "20px",
            }}
          >
            <img src={headerText} alt="header Text" style={headerStyles} />
            <img src={text} alt="text" style={textStyles} />
            <img src={equations} alt="equations" style={equationStyles} />
            <img
              src={girl}
              alt="front"
              style={girlStyles}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <img src={Ellipse2} alt="text" style={ellipseStyles} />
          </Box>
          <ServiceSection />

          <MathExplainedSection />
          <GetPersonalAppSection />
          <ExploreOptionSection />
          <MathMindSection />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default DisplayPage;
