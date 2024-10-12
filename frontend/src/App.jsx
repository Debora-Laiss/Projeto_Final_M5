import React from "react"
import ContactComponent from "./components/contact/contact"
import Home from "./components/home/home"
import Footer from "./components/footer/footer.jsx"
import HeaderComponent from "./components/header/header.jsx"
import {BrowserRouter as Router ,Route , Routes } from "react-router-dom"

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
     <HeaderComponent/> 
      <Routes>
      <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
        <div className='container'>
        <Route path="/" element={<Home handleToggleDarkMode={handleToggleDarkMode} darkMode={darkMode}/>} />
        <Route path="/home" element={<Home  handleToggleDarkMode={handleToggleDarkMode} darkMode={darkMode}/>} />
        <Route path="/contact" element={<ContactComponent  handleToggleDarkMode={handleToggleDarkMode} darkMode={darkMode}/>} />
        <Route path="/about" element={<AboutComponent darkMode={darkMode} />} />
        </div>
        </div>
      </Routes>
      <Footer/>  
    </Router>
    </ThemeProvider>
     //  <section>                 
     //       <HeaderComponent/> 
     //       <Home/>
     //       <Footer/>  
     //       <ContactComponent/>  
     //  </section>
 
)
}


export default App;
