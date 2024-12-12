import React, { useState } from "react";
import { TextField, Button, Box, Typography, Alert } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetSuccess, setResetSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match. Please try again.");
      return;
    }
    setErrorMessage(""); // Clear error message if passwords match

    axios
      .post(`http://localhost:3000/auth/RP/${token}`, { password })
      .then((response) => {
        if (response.data.status) {
          setResetSuccess(true);
        } else {
          setErrorMessage("Failed to reset password. Please try again.");
        }
      })
      .catch((error) => {
        console.error("There was an error resetting the password!", error);
        setErrorMessage("An error occurred. Please try again.");
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
          Reset Password
        </Typography>

        {resetSuccess ? (
          <Alert severity="success" sx={{ mb: 2 }}>
            Your password has been successfully reset. You can now log in with your new password.
          </Alert>
        ) : (
          <form onSubmit={handleSubmit}>
            {errorMessage && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {errorMessage}
              </Alert>
            )}
            <TextField
              label="New Password"
              fullWidth
              margin="normal"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <TextField
              label="Confirm Password"
              fullWidth
              margin="normal"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
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
        <Button
          variant="text"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={() => navigate("/lg")}
        >
          Go to Login
        </Button>
      </Box>
    </Box>
  );
}
