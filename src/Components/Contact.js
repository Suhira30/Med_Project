// frontend/src/components/Contact.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:5000/api/contact', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Contact Us</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Name" fullWidth value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <TextField label="Email" type="email" fullWidth value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <TextField label="Message" multiline rows={4} fullWidth value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
        <Button type="submit" variant="contained" color="primary">Send</Button>
      </form>
    </Container>
  );
};

export default Contact;
