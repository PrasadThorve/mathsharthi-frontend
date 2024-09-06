import React, { useState } from "react";
import {
  Box,
  Grid,
  Button,
  useMediaQuery,
  useTheme,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../public/Logo.png";
import { useNavigate } from "react-router-dom";

const DisplayPageHeader = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    handleMenuClose(); // close the menu after scrolling
  };

  return (
    <Grid
      id="home"
      container
      sx={{
        width: "98vw",
        height: isMobile ? "60px" : "10vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: !isMobile && "20px",
        marginRight: isMobile && "10px",
      }}
    >
      {!isMobile && (
        <Grid item md={1.5}>
          <img
            src={Logo}
            alt="logo"
            style={{
              width: "85%",
              height: "60%",
            }}
          />
        </Grid>
      )}
      <Grid item sm={12} md={10.5}>
        <Box
          sx={{
            background: "#171717",
            width: isMobile ? "95vw" : "80vw",
            height: "100%",
            gap: "10px",
            borderRadius: "50px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: isMobile ? "5px" : "10px",
          }}
        >
          {isMobile ? (
            <>
              <IconButton onClick={handleMenuClick} sx={{ color: "white" }}>
                <MenuIcon />
              </IconButton>
              <Button
                onClick={() => navigate("/signup")}
                sx={{
                  borderRadius: "30px",
                  padding: "10px 20px",
                  color: "white",
                  backgroundColor: "#FF8C00",
                  marginLeft: "auto",
                }}
              >
                SIGN UP/LOGIN
              </Button>
              <img
                src={Logo}
                alt="logo"
                style={{
                  width: "30px",
                  height: "30px",
                  marginRight: "10px",
                }}
              />

              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                sx={{
                  mt: 1, // Adjust spacing between button and menu
                }}
              >
                <MenuItem onClick={() => scrollToSection("home")}>Home</MenuItem>
                <MenuItem onClick={() => scrollToSection("about")}>About</MenuItem>
                <MenuItem onClick={() => scrollToSection("service")}>Service</MenuItem>
                <MenuItem onClick={() => scrollToSection("pricing")}>Pricing</MenuItem>
                <MenuItem onClick={() => scrollToSection("contact")}>Contact</MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Button
                component="a"
                href="#home"
                onClick={() => scrollToSection("home")}
                sx={{
                  borderRadius: "30px",
                  padding: "10px 20px",
                  color: "white",
                  fontWeight: "bold",
                  "&.active": {
                    backgroundColor: "#0099FF",
                  },
                }}
              >
                Home
              </Button>
              <Button
                component="a"
                href="#about"
                onClick={() => scrollToSection("about")}
                sx={{
                  borderRadius: "30px",
                  padding: "10px 20px",
                  color: "white",
                  fontWeight: "bold",
                  "&.active": {
                    backgroundColor: "#0099FF",
                  },
                }}
              >
                About
              </Button>
              <Button
                component="a"
                href="#service"
                onClick={() => scrollToSection("service")}
                sx={{
                  borderRadius: "30px",
                  padding: "10px 20px",
                  color: "white",
                  fontWeight: "bold",
                  "&.active": {
                    backgroundColor: "#0099FF",
                  },
                }}
              >
                Service
              </Button>
              <Button
                component="a"
                href="#pricing"
                onClick={() => scrollToSection("pricing")}
                sx={{
                  borderRadius: "30px",
                  padding: "10px 20px",
                  color: "white",
                  fontWeight: "bold",
                  "&.active": {
                    backgroundColor: "#0099FF",
                  },
                }}
              >
                Pricing
              </Button>
              <Button
                component="a"
                href="#contact"
                onClick={() => scrollToSection("contact")}
                sx={{
                  borderRadius: "30px",
                  padding: "10px 20px",
                  color: "white",
                  fontWeight: "bold",
                  "&.active": {
                    backgroundColor: "#0099FF",
                  },
                }}
              >
                Contact
              </Button>
              <Box>
                <Button
                  onClick={() => navigate("/login")}
                  sx={{
                    borderRadius: "30px",
                    padding: "10px 20px",
                    color: "white",
                    backgroundColor: "#FF8C00",
                    marginLeft: "10px",
                  }}
                >
                  LOGIN
                </Button>
                <Button
                  onClick={() => navigate("/signup")}
                  sx={{
                    borderRadius: "30px",
                    padding: "10px 20px",
                    color: "white",
                    backgroundColor: "#FF8C00",
                    marginLeft: "10px",
                  }}
                >
                  SIGN UP
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default DisplayPageHeader;
