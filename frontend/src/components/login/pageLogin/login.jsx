import React from 'react'
import Input from '../input/input.jsx'
import Title from '../title/title.jsx'
import Button from '../button/button.jsx'


const LoginPage = () => {
  return (
   <>
   <form className ='main'>
      <section><Title/></section> 
      <section><Input/></section>
      <section><Button/></section>
   </form>
      
    </>
  )
}

export default LoginPage 
