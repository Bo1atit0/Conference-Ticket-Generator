import React from 'react'
import './ticketType.css'

const TicketType = ({price, access, quantity, className, onClick}) => {
  return (
    <div className={`ticketTypeContainer ${className || ''}`} onClick={onClick}>
        <div className='ticketType'>
        <h1>{price}</h1>
        <p>{access}</p>
        <p>{quantity}</p>
    </div>
    </div>
    
  )
}

export default TicketType