import React, { useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import ContentArea from "../components/ContentArea";
import Aiwriter from "../components/AiWriter";

function AIwriter() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    // <Box sx={{overflow: 'hidden', backgroundColor: "#000000", height: "100%",  }}>
    <ContentArea>
      <Box
        sx={{
          height: "100%",
          width: isMobile ? "100%" : "600px",
          boxSizing: "border-box",
          overflowY: "auto",
          padding: isMobile ? "10px" : "20px",
          scrollbarWidth: "none" /* Firefox */,
          "-ms-overflow-style": "none" /* IE and Edge */,
          "&::-webkit-scrollbar": {
            display: "none" /* Chrome, Safari, and Opera */,
          },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Aiwriter />
      </Box>
    </ContentArea>
    // </Box>
  );
}

export default AIwriter;
