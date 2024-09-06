import React from 'react';
import { Box, Button, Grid, Paper, Typography, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

const PlanModel = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleSubscribeClick = () => {
    navigate("/subscribe");
  };

  if (!isOpen) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        overflowY:'auto',
        paddingTop:'1%',
        MarginBottom:'5%',
      }}
      onClick={onClose}
    >
      <Paper
        sx={{
          backgroundColor: '#1c1c1c',
          padding: '20px',
          borderRadius: '10px',
          maxWidth: '900px',
          width: '100%',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <IconButton
          sx={{
            position: 'absolute',
            top: '5px',
            right: '10px',
            color: 'white',
            backgroundColor: '#ff6a00',
            '&:hover': {
              backgroundColor: '#e55e00',
            },
          }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
        {/* <Typography variant="h4" align="center" gutterBottom sx={{ mb: 3 }}>
          Explore Your <span style={{ color: "#ff7a33" }}>Options</span>
        </Typography> */}
        <Grid container spacing={2}>
          {/* Basic Plan */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              elevation={3}
              sx={{
                backgroundColor: '#f2f2f2',
                borderRadius: '10px',
                padding: '20px',
                textAlign: 'center',
                height: 'auto',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  backgroundColor: '#ff7a33',
                  borderRadius: '10px',
                  p: 2,
                  color: '#fff',
                }}
              >
                Basic
              </Typography>
              <Typography variant="h6" sx={{ color: '#ff7a33', mt: 2 }}>
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
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              elevation={3}
              sx={{
                backgroundColor: '#fdeacc',
                borderRadius: '10px',
                padding: '20px',
                textAlign: 'center',
                height: 'auto',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  backgroundColor: '#ff7a33',
                  borderRadius: '10px',
                  p: 2,
                  color: '#fff',
                }}
              >
                Pro
              </Typography>
              <Typography variant="h6" sx={{ color: '#ff7a33', mt: 2 }}>
                ₹499/month
              </Typography>
              <Typography variant="h6" sx={{ color: '#ff7a33', mt: 1 }}>
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

          {/* Unlimited Plan */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              elevation={3}
              sx={{
                backgroundColor: '#f2f2f2',
                borderRadius: '10px',
                padding: '20px',
                textAlign: 'center',
                height: 'auto',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  backgroundColor: '#ff7a33',
                  borderRadius: '10px',
                  p: 2,
                  color: '#fff',
                }}
              >
                Premiuim
              </Typography>
              <Typography variant="h6" sx={{ color: '#ff7a33', mt: 2 }}>
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
      </Paper>
    </Box>
  );
};

export default PlanModel;
