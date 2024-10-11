import React from "react"
import ContactComponent from "./components/contact/contact.jsx"
import Home from "./components/home/home.jsx"
import Footer from "./components/footer/footer.jsx"
import HeaderComponent from "./components/header/header.jsx"
import {BrowserRoutes as Router ,Route , Routes } from "react-router-dom"

function App() {
      
  return (
   <Router>
      <Routes>
        <Route path="/home" element={<Home/>} />
      </Routes>
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
