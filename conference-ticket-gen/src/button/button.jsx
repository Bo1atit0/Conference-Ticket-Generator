import React from 'react'
import './button.css'

const Button = ({type='button', onClick, children, className}) => {
  return (
    <button
      type={type} 
      role='button' 
      className={`button ${className || ''}`} 
      onClick={onClick}
    >{children}
    </button>
  )
}

export default Button
