import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Box } from "@mui/material";
import { signupUser } from "../services/serviceApi"; // Import the signup service
import GoogleSignInButton from "../components/GoogleSignInButton";
import { RotatingLines } from "react-loader-spinner";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const data = await signupUser({ username, email, password });
      setSuccess(data.message);
      setError("");
      setIsLoading(false);
      localStorage.setItem("hasSignedUp", true); // Mark as signed up
      navigate("/login"); // Redirect to login page after signup
    } catch (err) {
      setError(err.message);
      setSuccess("");
      setIsLoading(false);
    }
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  const handleGoogleSignIn = async (credentialResponse) => {
    setIsLoading(true);
    const response = await fetch("http://localhost:5000/auth/google/callback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: credentialResponse.credential }),
    });

    const data = await response.json();

    if (data.access_token) {
      // Store the JWT token in local storage or state
      console.log(data.access_token);
      setIsLoading(false);
      localStorage.setItem("token", data.access_token);
      console.log("Login successful");
      navigate("/");
    } else {
      console.log("Login failed from signin page.", data.error || data);
      setIsLoading(false);
    }
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
          <Typography
            component="h1"
            variant="h5"
            sx={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#edb418",
              marginBottom: "20px",
              background:
                "linear-gradient(90deg, #ff7e5f, #feb47b,  #2a91ff, #4557f3)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Math Sharthi / SignUp
          </Typography>
          {/* <h2 style={{ fontSize: '14px', fontWeight: '400', color: '#555' }}>Your Personal AI Workspace</h2> */}
        </div>
        <p style={{ fontSize: "14px", marginBottom: "10px", color: "#333" }}>
          Create an account to get the latest AI models and smarter responses
        </p>
        <form onSubmit={handleSignup} style={{ marginBottom: "10px" }}>
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            InputLabelProps={{
              shrink: true, // Force the label to stay above the input when focused
            }}
          />
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            InputLabelProps={{
              shrink: true, // Force the label to stay above the input when focused
            }}
          />
          <TextField
            label="Password"
            fullWidth
            margin="normal"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            InputLabelProps={{
              shrink: true, // Force the label to stay above the input when focused
            }}
          />
          {error && <Typography color="error">{error}</Typography>}
          {success && <Typography color="success">{success}</Typography>}
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            type="submit"
            style={{ marginTop: "10px" }}
          >
            Sign Up
          </Button>
        </form>
        {/* <Button style={{ width: '100%', backgroundColor: '#4285f4', color: 'white', marginBottom: '10px' }}>
          <FaGoogle style={{ marginRight: '8px' }} />
          Sign in with Google
        </Button> */}
        <Button
          onClick={handleLoginRedirect}
          style={{
            width: "100%",
            backgroundColor: "#a78bfa",
            color: "white",
            marginBottom: "10px",
            backgroundImage:
              "linear-gradient(90deg,  #4557f3, #2a91ff, #feb47b, #ff7e5f)",
          }}
        >
          If you already have an account, log in
        </Button>
        <GoogleSignInButton
          onSuccess={handleGoogleSignIn}
          style={{
            width: "100%",
            backgroundColor: "#a78bfa",
            color: "white",
            marginBottom: "10px",
          }}
        />
        <Typography variant="body2">
          By signing up, you agree to our{" "}
          <a href="/terms" style={{ color: "#4285f4", textDecoration: "none" }}>
            Terms and Conditions
          </a>
            .
        </Typography>
      </div>
    </div>
  );
};

export default Signup;
