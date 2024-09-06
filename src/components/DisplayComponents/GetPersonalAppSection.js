import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import getAppText from "../../public/getAppText.png";
import circles from "../../public/circles.png";
import getApp from "../../public/getApp.png";

export const GetPersonalAppSection = () => {
  const navigate = useNavigate();
  const theme = createTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [GetPersonalAppSectionHover, setPersonalAppSectionHover] =
    useState(false);

  const onMouseEnterPersonalApp = () => {
    setPersonalAppSectionHover(true);
  };

  const onMouseLeavePersonalApp = () => {
    setPersonalAppSectionHover(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: isMobile ? "60vh" : "18%",
          width: "100%",
          backgroundColor: "#F2F4F7",
          borderRadius: isMobile ? "20px" : "50px",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <img
          src={getApp}
          alt="getapp"
          style={{
            height: isMobile ? "200px" : "400px",
            width: isMobile ? "200px" : "400px",
            marginBottom: isMobile ? "20px" : "50px",
            position: isMobile && "absolute",
            right: isMobile && "50%",
            top: isMobile && "9%",
            zIndex: 1,
          }}
          onMouseEnter={onMouseEnterPersonalApp}
          onMouseLeave={onMouseLeavePersonalApp}
        />
        <img
          src={circles}
          alt="circles"
          style={{
            height: GetPersonalAppSectionHover
              ? isMobile
                ? "73%"
                : "95%"
              : "0%",
            width: GetPersonalAppSectionHover
              ? isMobile
                ? "150%"
                : "95%"
              : "0%",
            position: "absolute",
            right: isMobile
              ? GetPersonalAppSectionHover
                ? "3%"
                : "70%"
              : GetPersonalAppSectionHover
              ? "37%"
              : "78%",
            bottom: isMobile ? "45%" : "22%",
            transition: "0.5s ease",
          }}
        />
        <Box
          sx={{
            textAlign: isMobile ? "center" : "left",
            margin: isMobile && "auto 0px 10px 0px",
          }}
        >
          <img
            src={getAppText}
            alt="mathapptext"
            style={{
              position: "absolute",
              bottom: GetPersonalAppSectionHover
                ? isMobile
                  ? "80%"
                  : "70%"
                : isMobile
                ? "70%"
                : "60%",
              transition: "0.5s ease",
              width: isMobile ? "180px" : "auto",
            }}
          />
          <Typography
            sx={{
              marginTop: isMobile ? "20px" : "0",
              color:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales ",
            }}
          >
            Need help with math? We're here for you 24/7. Unlock your potential with expert guidance—anytime, anywhere.
          </Typography>
          <Button
            variant="outlined"
            onClick={() => {
              navigate("/login");
            }}
            onMouseEnter={onMouseEnterPersonalApp}
            onMouseLeave={onMouseLeavePersonalApp}
            sx={{
              color: "#151515",
              borderColor: "#151515",
              height: "50px",
              width: isMobile ? "100px" : "120px",
              marginTop: "20px",
              "&:hover": {
                backgroundColor: "#151515",
                color: "#ffffff",
                borderColor: "#151515",
              },
            }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
