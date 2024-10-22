import React from 'react'
import InputLogic from '../input/InputLogic.jsx'
import Title from '../title/title.jsx'
import "./login.css"
import ButtonProvider from '../buttonGoogle/buttonProvider.jsx'



const LoginPage = () => {
    
  
   return (
   <>
   <form className ='main'>
      <section><Title/></section> 
      
      <section><InputLogic/></section>

      <section>/<ButtonProvider/></section>
      
     
   </form>
      
    </>
  )
}

export default LoginPage 
