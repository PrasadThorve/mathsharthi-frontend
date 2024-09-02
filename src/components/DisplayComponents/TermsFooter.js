import {
    Box,
    Button,
    Container,
    Grid,
    TextField,
    Typography,
  } from "@mui/material";
  import { Link } from "react-router-dom";
  import Logo from "../../public/Logo.png";
  import { HashLink } from "react-router-hash-link";
  
  export const TermsFooter = () => {
    return (
      <Box id="contact" sx={{ backgroundColor: "#F4F4F4" }}>
        <Box
          sx={{
            backgroundColor: "#2c2c2c",
            color: "white",
            py: { xs: 4, sm: 6 }, // Adjust padding for smaller screens
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              {/* Logo and Branding */}
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="h5" gutterBottom>
                  <img
                    src={Logo}
                    alt="techSharthi.com"
                    style={{ width: "150px", maxWidth: "100%" }} // Make the logo responsive
                  />
                </Typography>
              </Grid>
  
              {/* Navigation Links */}
              <Grid item xs={6} sm={3} md={2}>
                <Typography variant="h6" gutterBottom color="orange">
                  Navigation
                </Typography>
                <Typography
                  component={HashLink}
                  smooth
                  to="/display"
                  color="#bfbfbf"
                  sx={{ display: "block", mb: 1 }} // Adjust spacing for smaller screens
                >
                  Home
                </Typography>
                
              </Grid>
  
              {/* Contact Info */}
              <Grid item xs={6} sm={3} md={3}>
                <Typography variant="h6" gutterBottom color="orange">
                  Contact
                </Typography>
                <Typography sx={{ mb: 1 }}>+91 0000 0000 00</Typography>
                <Typography sx={{ mb: 1 }}>demo@gmail.com</Typography>
                <Typography sx={{ mb: 1 }}>techsharthi.com</Typography>
              </Grid>
  
              {/* Newsletter Signup */}
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6" gutterBottom color="orange">
                  Get the latest information
                </Typography>
                <Box
                  component="form"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    flexDirection: { xs: "column", sm: "row" }, // Stack form elements on smaller screens
                  }}
                >
                  <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Email Address"
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "4px",
                      width: { xs: "100%", sm: "auto" }, // Full width on smaller screens
                    }}
                  />
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#ff7f50",
                      color: "#ffffff",
                      minWidth: { xs: "100%", sm: "48px" }, // Full width on smaller screens
                      "&:hover": {
                        backgroundColor: "#ff7f50",
                      },
                    }}
                  >
                    &gt;
                  </Button>
                </Box>
              </Grid>
            </Grid>
            <Box
              sx={{
                mt: 4,
                borderTop: "1px solid gray",
                pt: 4,
                textAlign: "center",
                fontSize: { xs: "12px", sm: "inherit" }, // Adjust font size on smaller screens
              }}
            >
              <Typography variant="body2" color="white">
                Copyright© 2024 Tech Sharthi. All Rights Reserved.
              </Typography>
              
            </Box>
          </Container>
        </Box>
      </Box>
    );
  };
  