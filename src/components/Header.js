import React from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import tectsharthilogo from "../public/techsharthilogo.png";

const Header = ({ onClickMobileSidebar }) => {
  const navigate=useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return isMobile ? (
    <AppBar position="fixed" sx={{ backgroundColor: "#5e5d5d" }}>
      <Toolbar>
        {/* Left-side toggle button */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => {
            onClickMobileSidebar();
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* Right-side text */}
        <Box
        onClick={()=>{
          navigate('/home')
        }}
          sx={{
            height: "40px",
            width: "180px",
            padding: "5px",
            margin: "0px 0px 0px auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ffffff",
            borderRadius: "50PX",
          }}
        >
          <img
            src={tectsharthilogo}
            alt="logo"
            style={{ height: "30px", width: "35px", marginTop: "10px" }}

          />
          <Typography sx={{ marginTop: "10px" }}>
            <span
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Math
            </span>
            <span
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                background: "linear-gradient(90deg, #2a91ff, #4557f3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Sharthi
            </span>
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  ) : (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Box sx={{ margin: "20px 0px 25px 0px", display: "flex" }}>
        <img
          src={tectsharthilogo}
          alt="logo"
          style={{ height: "50px", width: "62px", marginTop: "10px" }}
        />
        <Typography sx={{ marginTop: "10px" }}>
          <span
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Math
          </span>
          <span
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              background: "linear-gradient(90deg, #2a91ff, #4557f3)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Sharthi
          </span>
        </Typography>
      </Box>
      <span style={{ margin: "10px", fontSize: "30px" }}>|</span>
      <span
        className="description"
        style={{ color: "#4557f3", fontSize: "15px", textAlign: "center" }}
      >
        Simplifying math, one equation at a time
      </span>
    </Box>
  );
};

export default Header;
