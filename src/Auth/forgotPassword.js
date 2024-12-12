import React, { useState } from "react";
import { TextField, Button, Box, Typography, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [resetSent, setResetSent] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/auth/FP", { email })
      .then((response) => {
        if (response.data.status) {
          setResetSent(true);
        } else {
          setError("Failed to send reset email. Please try again.");
        }
      })
      .catch((error) => {
        console.error("There was an error sending the reset email!", error);
        setError("An error occurred. Please try again.");
      });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "secondary.light",
      }}
    >
      <Box
        sx={{
          maxWidth: 400,
          width: "100%",
          p: 4,
          backgroundColor: "primary.dark",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: "primary.lighter" }}
        >
          Forgot Password
        </Typography>

        {resetSent ? (
          <Alert severity="success" sx={{ mb: 2 }}>
            An email with a password reset link has been sent. Please check your inbox.
          </Alert>
        ) : (
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email Address"
              fullWidth
              margin="normal"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {error && (
              <Alert severity="error" sx={{ mt: 2 }}>
                {error}
              </Alert>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Reset Password
            </Button>
          </form>
        )}
      </Box>
    </Box>
  );
}
