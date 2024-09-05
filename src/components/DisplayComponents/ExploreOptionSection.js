import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { fontWeight } from "@mui/system";
import { useNavigate } from "react-router-dom";

export const ExploreOptionSection = () => {
  const isMobile = useMediaQuery("(max-width:700px)");
  const navigate = useNavigate();

  const handleSubscribeClick = () => {
    navigate("/login");
  };
  return (
    <Box sx={{ width: "100%" }} id="pricing">
      <Box
        sx={{
          width: isMobile ? "100%" : "96%",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Explore your <span style={{ color: "#ff7a33" }}>options</span>
        </Typography>
      </Box>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {/* Basic Plan */}
        <Grid item xs={12} sm={6} md={4} mr={0}>
          <Paper
            elevation={3}
            sx={{
              backgroundColor: "#f2f2f2",
              borderRadius: "10px",
              height: "100%",
              width: "90%",
              padding: "20px",

              // backgroundColor: "#f2f2f2",
              // borderRadius: "10px",
              // height: "470px",
              // width: "300px",
            }}
          >
            <Typography
              variant="h5"
              align="center"
              sx={{
                backgroundColor: "#ff7a33",
                borderRadius: "10px",
                p: 2,
                color: "#fff",
              }}
            >
              Basic
            </Typography>
            <Typography
              variant="h6"
              align="center"
              sx={{ color: "#ff7a33", mt: 2 }}
            >
              ₹0/month
            </Typography>
            <Box sx={{ mt: 2, textAlign: "start", padding:'1px 10px 15px 20px', }}>
              <Typography><span style={{color:"black", fontsize:"22px", fontWeight:"bold",}}>• Target Users:</span> Users trying out the service for the first time.</Typography>
              <Typography><span style={{color:"black", fontsize:"22px", fontWeight:"bold",}}>• Usage Volume:</span> Limited usage.</Typography>
              <Typography variant="h6"
              align="center"
              sx={{ color: "#ff7a33", mt: 1 }}>Features :</Typography>
              <Typography><span style={{color:"black", fontsize:"22px", fontWeight:"bold",}}>• Usage Volume :</span> Limited Usage </Typography>
              <Typography><span style={{color:"black", fontsize:"22px", fontWeight:"bold",}}>• AI Queries:</span> 10 Gemini API queries per day.</Typography>
              <Typography><span style={{color:"black", fontsize:"22px", fontWeight:"bold",}}>• Supported Languages:</span> 200+ Languages.</Typography>
              <Typography><span style={{color:"black", fontsize:"22px", fontWeight:"bold",}}>• File Handling:</span> Up to 2 files per day (PDF of up to 30 pages or images).</Typography>
              <Typography><span style={{color:"black", fontsize:"22px", fontWeight:"bold", }}>• PDF Support:</span> Handles both scanned and unscanned PDFs, including those with diagrams, images, and flowcharts.</Typography>
              <Typography><span style={{color:"black", fontsize:"22px", fontWeight:"bold",}}>• Accessibility:</span> Limited features.</Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundImage:
              "linear-gradient(90deg,  #4557f3, #2a91ff, #4557f3)",
                  color: "#fff",
                  mt: 2,
                  width: "100%",
                }}
                onClick={handleSubscribeClick}
              >
                Subscribe
              </Button>
            </Box>
          </Paper>
        </Grid>


        {/* Pro Plan */}
        <Grid item xs={12} sm={6} md={4} ml={0}>
          <Paper
            elevation={3}
            sx={{
              backgroundColor: "#f2f2f2",
              borderRadius: "10px",
              height: "100%",
              width: "90%",
              padding: "20px",

              // backgroundColor: "#fdeacc",
              // borderRadius: "10px",
              // height: "470px",
              // width: "300px",
            }}
          >
            <Typography
              variant="h5"
              align="center"
              sx={{
                backgroundColor: "#ff7a33",
                borderRadius: "10px",
                p: 2,
                color: "#fff",
              }}
            >
              Pro 
            </Typography>
            <Typography
              variant="h6"
              align="center"
              sx={{ color: "#ff7a33", mt: 2 }}
            >
              ₹499/month 
            </Typography>
            <Typography
              variant="h6"
              align="center"
              sx={{ color: "#ff7a33", mt: 1 }}
            >
             (billed yearly at ₹5,988/year)
            </Typography>
            <Box sx={{ mt: 2, textAlign: "start", padding:'1px 10px 15px 20px', }}>
            <Typography><span style={{color:"black", fontsize:"22px", fontWeight:"bold",}}>• Target Users:</span> Users requiring regular access to AI services.</Typography>
            <Typography variant="h6"
              align="center"
              sx={{ color: "#ff7a33", mt: 1 }}>Features :</Typography>
            <Typography><span style={{color:"black", fontsize:"22px", fontWeight:"bold",}}>• Usage Volume :</span> Moderate </Typography>
            <Typography><span style={{color:"black", fontsize:"22px", fontWeight:"bold",}}>• AI Queries :</span> 200 Gemini API queries per month. </Typography>
            
            <Typography><span style={{color:"black", fontsize:"22px", fontWeight:"bold",}}>• Full Access :</span> Chat PDF with support for up to 2,000 pages per PDF. </Typography>
            <Typography><span style={{color:"black", fontsize:"22px", fontWeight:"bold",}}>• Language Support :</span> Scanned PDFs supported in 94 languages. </Typography>
            <Typography><span style={{color:"black", fontsize:"22px", fontWeight:"bold",}}>• Discounts :</span> 10% off with annual billing. </Typography>
            <Button
                variant="contained"
                sx={{
                  backgroundImage:
                  "linear-gradient(90deg,  #4557f3, #2a91ff, #4557f3)",
                  color: "#fff",
                  mt: 2,
                  width: "100%",
                }}
                onClick={handleSubscribeClick}
              >
                Subscribe
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* Subscribe Plan */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={3}
            sx={{
              backgroundColor: "#fdeacc",
              borderRadius: "10px",
              height: "100%",
              width: "90%",
              padding: "20px",

              // backgroundColor: "#f2f2f2",
              // borderRadius: "10px",
              // height: "470px",
              // width: "300px",
            }}
          >
            <Typography
              variant="h5"
              align="center"
              sx={{
                backgroundColor: "#ff7a33",
                borderRadius: "10px",
                p: 2,
                color: "#fff",
              }}
            >
              Premium
            </Typography>
            <Typography
              variant="h6"
              align="center"
              sx={{ color: "#ff7a33", mt: 2 }}
            >
              ₹2,746.3/month
            </Typography>
            <Box sx={{ mt: 2, textAlign: "start", padding:'1px 10px 15px 20px', }}>
              <Typography><span style={{color:"black", fontsize:"22px", fontWeight:"bold",}}>• Target Users:</span> Users trying out the service for the first time.</Typography>
              <Typography><span style={{color:"black", fontsize:"22px", fontWeight:"bold",}}>• Usage Volume:</span> Limited usage.</Typography>
              <Typography variant="h6"
              align="center"
              sx={{ color: "#ff7a33", mt: 1 }}>Features :</Typography>
              <Typography><span style={{color:"black", fontsize:"22px", fontWeight:"bold",}}>• Usage Volume :</span> Limited Usage </Typography>
              <Typography><span style={{color:"black", fontsize:"22px", fontWeight:"bold",}}>• AI Queries:</span> 10 Gemini API queries per day.</Typography>
              <Typography><span style={{color:"black", fontsize:"22px", fontWeight:"bold",}}>• Supported Languages:</span> 200+ Languages.</Typography>
              <Typography><span style={{color:"black", fontsize:"22px", fontWeight:"bold",}}>• File Handling:</span> Up to 2 files per day (PDF of up to 30 pages or images).</Typography>
              <Typography><span style={{color:"black", fontsize:"22px", fontWeight:"bold", }}>• PDF Support:</span> Handles both scanned and unscanned PDFs, including those with diagrams, images, and flowcharts.</Typography>
              <Typography><span style={{color:"black", fontsize:"22px", fontWeight:"bold",}}>• Accessibility:</span> Limited features.</Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundImage:
              "linear-gradient(90deg,  #4557f3, #2a91ff, #4557f3)",
                  color: "#fff",
                  mt: 2,
                  width: "100%",
                }}
                onClick={handleSubscribeClick}
              >
                Subscribe
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
