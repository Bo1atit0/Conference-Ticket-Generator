import React from 'react'
import './ticketHeading.css'

const TicketHeading = ({heading, step, className}) => {
  return (
    <section className='ticketheading'>

        <div className="head">
            <h1>{heading}</h1>
            <p>Step {step}/3</p>
        </div>

        <div className={`lines ${className || ''}`}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
    </section>
  )
}

export default TicketHeading