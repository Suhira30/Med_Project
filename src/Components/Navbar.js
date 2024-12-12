// frontend/src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = ({ setPage }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" style={{ flexGrow: 1 }}>Project Info</Typography>
      <Button color="inherit" onClick={() => setPage('about')}>About</Button>
      <Button color="inherit" onClick={() => setPage('contact')}>Contact</Button>
      <Button color="inherit" onClick={() => setPage('committee')}>Committee</Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;
