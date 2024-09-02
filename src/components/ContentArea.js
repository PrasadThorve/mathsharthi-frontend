import React, { useState } from "react";
import { Grid, Drawer, useMediaQuery, useTheme, Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import bgImage from "../public/bgImage.png";
import { ToggleButton } from "./ToggleButton";
import Header from "./Header";
import { width } from "@mui/system";

function ContentArea({ children }) {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const onClickMobileSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };

  const onClickSidebar = () => {
    isMobile ? setSidebarOpen(false) : setSidebarOpen(!isSidebarOpen);
  };

  const isChatPage = location.pathname === "/chats";

  return isMobile ? (
    <Box sx={{ height: "100vh", width: "100vw" }}>
      <Header
        mobileSidebarOpen={mobileSidebarOpen}
        onClickMobileSidebar={onClickMobileSidebar}
      />
      <Box>{mobileSidebarOpen && <Sidebar />}</Box>
      <Box
        sx={{
          height: "90%",
          width: "100%",
          marginTop: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </Box>
    </Box>
  ) : (
    <Grid
      container
      spacing={0}
      sx={{
        backgroundColor: !isMobile && "#000000",
        height: "100vh",
        width: "100vw",
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    >
      <Grid item xs={isSidebarOpen ? 0.5 : 1.5}>
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          onClickSidebar={onClickSidebar}
        />
      </Grid>

      {/* Toggle Button */}

      <Grid
        item
        xs={0.3}
        sx={{
          backgroundColor: "#000000",
          height: "98vh",
          width: "100%",
        }}
      >
        <ToggleButton
          isSidebarOpen={isSidebarOpen}
          onClickSidebar={onClickSidebar}
        />
      </Grid>

      {/* Content Area */}
      <Grid
        item
        xs={isSidebarOpen ? (isMobile ? 12 : 11) : isMobile ? 12 : 10}
        sx={{
          backgroundColor: "#ffffff",
          height: "98vh",
          width: "100%",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: isMobile ? "7px 5px 8px auto" : "7px 10px 8px auto",
          flexGrow: 1,
          flexShrink: 1,
          overflow: "hidden",
          backgroundImage: isChatPage ? `url(${bgImage})` : "none",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Header />
        {children}
      </Grid>
    </Grid>
  );
}

export default ContentArea;
