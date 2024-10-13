import React from 'react'
import "./input.css"

const Input = ({type,placeholder}) => {
            
  return (
    <>
     <div className='inputs'>
       <input type = {type} placeholder = {placeholder} />
     </div>
     </>
  )
   
}

export default Input

