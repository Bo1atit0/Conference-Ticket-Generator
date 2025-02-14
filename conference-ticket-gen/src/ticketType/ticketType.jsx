import React from 'react'
import './ticketType.css'

const TicketType = ({price, access, quantity}) => {
  return (
    <div className="ticketTypeContainer">
        <div className='ticketType'>
        <h1>{price}</h1>
        <p>{access}</p>
        <p>{quantity}</p>
    </div>
    </div>
    
  )
}

export default TicketType