import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import mathExplainedText from "../../public/mathExplainedText.png";
import devider from "../../public/devider.png";
import { height } from "@mui/system";

export const MathExplainedSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const subjectsLeft = [
    {
      title: "Algebraic Structures",
      description:
        "Dive deep into the world of algebra, where you’ll explore equations, inequalities, and polynomial functions. Our platform helps you understand and manipulate abstract algebraic structures, preparing you for more advanced mathematical studies.",
    },
    {
      title: "Euclidean Geometry",
      description:
        "Explore the principles of Euclidean Geometry, where you'll learn about points, lines, angles, and shapes. Our resources cover everything from the basics of congruence and similarity to the more intricate properties of circles and polygons.",
    },
    {
      title: "Analytical Trigonometry",
      description:
        "Unlock the power of trigonometry, where you’ll discover the relationships between the angles and sides of triangles. Our interactive tools will guide you through sine, cosine, tangent functions, and their applications in real-world problems.",
    },
  ];

  const subjectsRight = [
    {
      title: "Statistical Inference",
      description:
        "Develop your statistical reasoning with our in-depth coverage of probability and statistics. Learn how to collect, analyze, and interpret data, and apply these skills to make informed decisions based on statistical evidence.",
    },
    {
      title: "Differential Calculus",
      description:
        "Advance your mathematical understanding with differential calculus. Our resources cover the concepts of limits, derivatives, and their applications, providing you with the tools needed to analyze and solve dynamic problems in various fields.",
    },
    {
      title: "Foundational Arithematic",
      description:
        "Master the basics with our comprehensive resources on arithmetic. From simple addition and subtraction to more complex concepts like fractions and decimals, our tools ensure a strong mathematical foundation for all learners.",
    },
  ];

  return (
    <Box
      sx={{
        height: "auto",
        width: "100%",
        marginTop: "20px"
      }}
    >
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <img
          src={mathExplainedText}
          alt="Math Explained"
          style={{
            height: isMobile && "40px",
            width: isMobile && "250px",
            marginTop: isMobile && "10px",
          }}
        />
      </Box>
      <Box
        sx={{
          height: "auto",
          margin: isMobile? "0px":"20px",
          width: "100%",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "center" : "flex-start",
          textAlign: isMobile && "center",
        }}
      >
        <Box sx={{ width: isMobile ? "90%" : "30%" }}>
          {subjectsLeft.map((subject, index) => (
            <Box key={index} sx={{ marginBottom: "40px" }}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Gupter",
                  fontSize: isMobile ? "28px" : "42px",
                  fontWeight: "bold",
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                {subject.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Gupter",
                  color: "#98A2B3",
                  textAlign: isMobile ? "center" : "left",
                  fontSize: isMobile && "12px",
                }}
              >
                {subject.description}
              </Typography>
            </Box>
          ))}
        </Box>
        {!isMobile && (
          <Box>
            <img src={devider} alt="Divider" />
          </Box>
        )}
        <Box
          sx={{
            width: isMobile ? "90%" : "30%",
            marginTop: isMobile ? "10px" : "0",
          }}
        >
          {subjectsRight.map((subject, index) => (
            <Box key={index} sx={{ marginBottom: "40px" }}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Gupter",
                  fontSize: isMobile ? "28px" : "42px",
                  fontWeight: "bold",
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                {subject.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Gupter",
                  color: "#98A2B3",
                  textAlign: isMobile ? "center" : "left",
                  fontSize: isMobile && "12px",
                }}
              >
                {subject.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
