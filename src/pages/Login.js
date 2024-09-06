import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography,  Box } from "@mui/material";
import { RotatingLines } from "react-loader-spinner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setIsLoading(false);
        localStorage.setItem("token", data.access_token); // Save JWT token in localStorage
        navigate("/"); // Redirect to Home page
      } else {
        const errData = await response.json();
        setIsLoading(false);
        setError(errData.message || "Login failed"); // Display error message
      }
    } catch (error) {
      console.error("Error during login:", error);
      setIsLoading(false);
      setError("An error occurred. Please try again.");
    }
  };

  const handleSignUpNavigation = () => {
    navigate("/signup"); // Navigate to the Sign Up page
  };

  const handleForgotPassword = () => {
    // Navigate to Forgot Password page or handle password reset logic
    navigate("/forgot-password");
  };

  return isLoading ? (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </Box>
  ) : (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
        marginTop: "50px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          width: "350px",
          textAlign: "center",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          {/* <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#000000' }}>Math Sharthi / Login</h2>
          <h2 style={{ fontSize: '14px', fontWeight: '400', color: '#555' }}>Your Personal AI Workspace</h2> */}
        </div>
        <Typography
          component="h1"
          variant="h5"
          sx={{
            fontSize: "20px",
            fontWeight: "600",
            color: "#edb418",
            marginBottom: "10px",
            background:
              "linear-gradient(90deg, #ff7e5f, #feb47b,  #2a91ff, #4557f3)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Math Sharthi
        </Typography>
        <Typography
          component="h1"
          variant="h5"
          sx={{
            fontSize: "20px",
            fontWeight: "600",
            color: "#edb418",
            marginBottom: "10px",
            background: "#2a91ff",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Login
        </Typography>

        <form onSubmit={handleLogin} style={{ marginBottom: "15px" }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginBottom: "15px" }}
            InputLabelProps={{
              shrink: true, // Force the label to stay above the input when focused
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: "15px" }}
            InputLabelProps={{
              shrink: true, // Force the label to stay above the input when focused
            }}
          />
          {error && (
            <Typography
              color="error"
              style={{ marginBottom: "15px", color: "red" }}
            >
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            color="primary"
            style={{ marginBottom: "15px" }}
          >
            Log In
          </Button>
        </form>
        <Button
          fullWidth
          variant="outlined"
          color="secondary"
          onClick={handleSignUpNavigation}
          style={{
            marginBottom: "15px",
            borderColor: "#a78bfa",
            color: "#ffffff",
            backgroundImage:
              "linear-gradient(90deg,  #4557f3, #2a91ff, #feb47b, #ff7e5f)",
          }}
        >
          Sign Up
        </Button>
        <Button
          fullWidth
          variant="text"
          color="primary"
          onClick={handleForgotPassword}
          style={{ color: "#4285f4" }}
        >
          Forgot Password?
        </Button>
      </div>
    </div>
  );
};

export default Login;
