import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeComponent from "./components/home/home.jsx";
import AboutComponent from "./components/about/about.jsx";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };


  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light', 
    },
  });

  return (
    <ThemeProvider theme={theme}> 
     <Router>
      <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
        <div className='container'>
        <Routes>
              <Route path="/" element={<HomeComponent handleToggleDarkMode={handleToggleDarkMode} darkMode={darkMode} />} /> {/* Rota para Home */}
              <Route path="/about" element={<AboutComponent darkMode={darkMode} />} /> {/* Rota para About */}
        </Routes>
        </div>
      </div>
      </Router>
    </ThemeProvider>

  );
}

export default App;
