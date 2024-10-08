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
import { HashLink } from "react-router-hash-link";

const TermsPageHeader = () => {
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
        marginRight: isMobile && "10px"
      }}
    >
      {!isMobile && (
        <Grid item md={1.5}>
          <img
            src={Logo}
            alt="logo"
            style={{
              width: "56%",
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
            gap: "600px",
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
                <Button
                  onClick={() => navigate("/display")}
                  sx={{
                    borderRadius: "30px",
                    padding: "10px 20px",
                    color: "black",
                    backgroundColor: "transparent",
                    marginLeft: "10px",
                  }}
                >
                  Home
                </Button>
              
              </Menu>
            </>
          ) : (
            <>
            
              <Button
                  onClick={() => navigate("/display")}
                  sx={{
                    borderRadius: "30px",
                    padding: "10px 30px",
                    color: "white",
                    backgroundColor: "#FF8C00",
                    marginLeft: "10px",
                  }}
                >
                  Home
                </Button>
                
                <Box>
              
              
                <Button
                  onClick={() => navigate("/login")}
                  sx={{
                    borderRadius: "30px",
                    padding: "10px 10px",
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

export default TermsPageHeader;
