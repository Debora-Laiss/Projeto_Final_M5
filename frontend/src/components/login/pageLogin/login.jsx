import React from 'react'
import InputLogic from '../input/InputLogic.jsx'
import Title from '../title/title.jsx'
import "./login.css"
import Button from '../button/button.jsx'


const LoginPage = () => {
    
  
   return (
   <>
   <form className ='main'>
      <section><Title/></section> 
      
      <section><InputLogic/></section>

      <section><Button/></section>
      
     
   </form>
      
    </>
  )
}

export default LoginPage 
