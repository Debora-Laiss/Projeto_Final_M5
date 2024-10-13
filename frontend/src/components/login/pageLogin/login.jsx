import React from 'react'
import Input from '../input/input.jsx'
import Title from '../title/title.jsx'
import { GoogleLogin } from '@react-oauth/google'
import "./login.css"


const LoginPage = () => {
    const responseGoogle = (response) => {
        console.log(response)
    }
   return (
   <>
   <form className ='main'>
      <section><Title/></section> 
      
      <section><Input/></section>
      
      <section><GoogleLogin
        clientId= "274510907410-skvirqppvngo7akhf3ksbjtn0c9jobii.apps.googleusercontent.com"
        buttonText = "login feito com sucesso!"
        onSuccess={responseGoogle}
        onFailure ={console.log("erro")}
      /></section>
   </form>
      
    </>
  )
}

export default LoginPage 
