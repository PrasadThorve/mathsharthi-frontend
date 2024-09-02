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
          color: "#98A2B3",
        }}
      >
        Welcome to Math Sharthi, your trusted companion on the journey to
        mastering mathematics. Whether you're a student looking to strengthen
        your math skills, a teacher seeking an effective teaching tool, or a
        math enthusiast eager to explore new concepts, Math Sharthi is here to
        guide you every step of the way. At Math Sharthi, we believe that math
        is more than just numbers and equations—it's a powerful tool for solving
        real-world problems and unlocking new opportunities. Our app is designed
        to make learning math engaging, accessible, and personalized. With
        interactive lessons, practice problems, quizzes, and advanced
        calculators, Math Sharthi caters to learners of all levels, from
        beginners to advanced users. Our mission is to simplify complex
        concepts, provide meaningful practice, and help you build confidence in
        your math abilities. We are committed to making math education enjoyable
        and effective through innovative features, real-world applications, and
        a user-friendly experience. Join us at Math Sharthi and discover the joy
        of learning math with a partner you can trust.
      </Typography>
    </Box>
  );
};
