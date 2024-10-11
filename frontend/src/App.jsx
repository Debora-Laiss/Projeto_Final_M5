import React from "react"
import ContactComponent from "./components/contact/contact"
import Home from "./components/home/home"
import Footer from "./components/footer/footer.jsx"
import HeaderComponent from "./components/header/header.jsx"
import {BrowserRouter as Router ,Route , Routes } from "react-router-dom"

function App() {
      
  return (
   <Router>
     <HeaderComponent/> 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/contact" element={<ContactComponent/>} />
      </Routes>
      <Footer/>  
    </Router>
     //  <section>                 
     //       <HeaderComponent/> 
     //       <Home/>
     //       <Footer/>  
     //       <ContactComponent/>  
     //  </section>
 
)
}

export default App
