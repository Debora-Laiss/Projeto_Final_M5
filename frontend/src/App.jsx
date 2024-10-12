import React from "react";
import ContactComponent from "./components/contact/contact.jsx";
import Home from "./components/home/home.jsx";
import Footer from "./components/footer/footer.jsx"
import HeaderComponent from "./components/header/header.jsx"
import AboutComponent from "./components/about/about.jsx"
import BasicModal from "./components/feedback/feedback.jsx";
// import {BrowserRouter as Router ,Route , Routes } from "react-router-dom"
// import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  // const [darkMode, setDarkMode] = useState(false);

  // const handleToggleDarkMode = () => {
  //   setDarkMode((prevMode) => !prevMode);
  // };


  // const theme = createTheme({
  //   palette: {
  //     mode: darkMode ? 'dark' : 'light', 
  //   },
  // });
      
  return (
    
  //  <Router>
  //    <HeaderComponent /> 
  //     <Routes>
    
       
  //       <Route path="/" element={<Home />} />
  //       <Route path="/home" element={<Home />} />
  //       <Route path="/contact" element={<ContactComponent  />} />
  //       <Route path="/about" element={<AboutComponent  />} />
       
  //     </Routes>
  //     <Footer/>  
  //   </Router>
   
      <section>                 
        <HeaderComponent/> 
        <Home/>
        <AboutComponent/>
        <ContactComponent/>  
        <BasicModal/>
        <Footer/>  
      </section>
 
)
}


export default App;
