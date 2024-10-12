import React from "react";
import Input from "./input.jsx";
import Atributes from "./atributes.js";

const InputLogic = () => {
    
  return (
    <>
   
     { Atributes.map((item,index)=>(
        <Input
           key={index}
           type={item.type} 
           placeholder={item.placeholder}
        />
  ))}
   </>
  )
}

export default InputLogic
