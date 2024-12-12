// frontend/src/App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Committee from './components/Committee';
import theme from './Styles/Theme'
import { ThemeProvider } from '@mui/material/styles';
import Sidebar from './components/Themes/Sidebar';
import Sample from './components/Themes/sample';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <ThemeProvider theme={theme}>

<Router>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/side" element={<Sidebar />} />
        <Route path="/sample" element={<Sample />} />
        <Route path="/nav" element={<Navbar />} />


      </Routes>
    </Router>

    </ThemeProvider>

  );
}

export default App;
