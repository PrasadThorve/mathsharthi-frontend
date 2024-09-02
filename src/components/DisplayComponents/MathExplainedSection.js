import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import mathExplainedText from "../../public/mathExplainedText.png";
import devider from "../../public/devider.png";
import { height } from "@mui/system";

export const MathExplainedSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const subjectsLeft = [
    {
      title: "Elementary math",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
    },
    {
      title: "Algebra",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
    },
    {
      title: "Geometry",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
    },
  ];

  const subjectsRight = [
    {
      title: "Trigonometry",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
    },
    {
      title: "Statistics",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
    },
    {
      title: "Calculus",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
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
