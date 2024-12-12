import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
  CircularProgress,
} from "@mui/material";

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  Axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const response = await Axios.post("http://localhost:3000/auth/Login", { username, password });

      if (response.data.status) {
    

        // Navigate based on user role
        if (response.data.userDetails.role === "admin") {
          navigate("/AdminDashboard");
        } else {
          navigate("/");
        }
      } else {
        setErrorMessage(response.data.message || 'Incorrect username or password. Please try again.');
      }
    } catch (error) {
      console.error("There was an error logging in!", error);
      setErrorMessage('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };



  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="secondary.light"
    >
      <Box
        maxWidth={400}
        width="100%"
        p={4}
        bgcolor="primary.dark"
        borderRadius={2}
        boxShadow={3}
      >
        <Typography
          variant="h4"
          textAlign="center"
          color="primary.light"
          mb={3}
        >
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorMessage && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {errorMessage}
            </Alert>
          )}
          <Box display="flex" justifyContent="center" mt={3}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={loading}
              startIcon={loading && <CircularProgress size={20} />}
            >
              {loading ? "Signing in..." : "Sign in"}
            </Button>
          </Box>
        </form>
        <Typography variant="body2" color="primary.light" align="center" mt={2}>
          Don't have an account? Contact Admin.
        </Typography>
        <Typography variant="body2" color="primary.light" align="center" mt={1}>
          Forgot your password?{" "}
          <Link to="/fp" style={{ color: "#ff5722" }}>
            Reset it here
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
