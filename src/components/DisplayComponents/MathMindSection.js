import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

export const MathMindSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        padding: isMobile ? 2 : 4,
        backgroundColor: "#F4F4F4",
        textAlign: isMobile ? "center" : "left",
        marginTop:"40px"
      }}
      id="about"
    >
      <Typography
        variant={isMobile ? "h5" : "h4"}
        gutterBottom
        sx={{
          fontFamily: "Gupter",
          fontSize: isMobile ? "32px" : "42px",
        }}
      >
        About <span style={{ color: "#ff7a33" }}>Us</span>
      </Typography>
      <Typography
        sx={{
          fontFamily: "Gupter",
          fontSize: isMobile ? "18px" : "22px",
          color: "#575654",
        }}
      >
       Welcome to Math Sharthi, a cutting-edge AI-powered solution designed to make solving math problems effortless and efficient. As a product of TechSharthi, our application specializes in quickly and accurately solving mathematical problems using PDFs, images, and text inputs. Whether you're a student needing a quick solution, a professional looking for accurate results, or someone facing a complex problem, Math Sharthi is here to assist you.
At Math Sharthi, we understand that time is valuable, and finding the right solution shouldn't be a hassle. Our advanced algorithms and AI technology ensure that you get precise answers with just a few clicks. We are committed to providing a reliable, user-friendly experience that takes the stress out of solving math problems.
Join us at Math Sharthi, where technology meets mathematics, and experience a seamless way to solve your math challenges.
      </Typography>
    </Box>
  );
};
