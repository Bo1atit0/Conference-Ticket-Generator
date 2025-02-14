import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import TicketHolder from '../../assets/ticket-holder.png'
import Barcode from '../../assets/BarCode.png'
import TicketHeading from '../../ticketHeading/ticketHeading'
import Header from '../../header/header'
import './ticket.css'
import avatar from '../../assets/profilePic1.jpeg'
import Button from '../../button/button'

const ticket = () => {

  const navigate = useNavigate()
  const handleBooking = () => {
    navigate('/')
  }
  const handleDownload = () => {
    alert('You Ticket is Download... This might take a few minutes')
  }
  const location = useLocation();
  const ticketInfo = location.state
  return (
    <>
    <div className="ticket">
      <Header />
      <div className="ticket-container">
        <TicketHeading heading='Ready' step='3' className='step3' />
      
        <div className="ticket-inner-container">

          <div className="ticketHeading">
            <h1>Your Ticket Is Booked</h1>
            <p>Check your email for a copy Or you can download</p>
          </div>

          <div className="ticketImage">

            <img className='ticket-image' src={TicketHolder} alt="Ticket Hoder" />
            <div className="ticketCard">
              <h1>Techember Fest "25</h1>
              <p>📍 04 Rumens road, Ikoyi, Lagos</p>
              <p>📅 March 15, 2025 | 7:00 PM</p>
              <div className="ticket-img">
                <img className='avatar' src={ticketInfo.avatar} alt="avatar" />
              </div>

              <div className="ticket-table">
                <table>

                  <thead>
                    <tr>
                      <td>Name</td>
                      <td>Email</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{ticketInfo.name}</td>
                      <td>{ticketInfo.email}</td>
                    </tr>
                  </tbody>

                  <thead>
                    <tr>
                      <td>Ticket Type</td>
                      <td>Ticket For</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Free</td>
                      <td>1</td>
                    </tr>
                  </tbody>

                </table>

                <div className="special-request">
                  <p><strong>Special Requests?</strong></p>
                  <p>{ticketInfo.request || 'Nil'}</p>
                </div>
              </div>
              
            </div>
            <div className="bar-code">
                <img src={Barcode} alt="Barcode" />
            </div>

          </div>
          <div className="ticketbton">
          <Button onClick={handleBooking} className='transparentbtn' >Book Another Ticket</Button>
          <Button onClick={handleDownload} className='colouredbtn' >Download Ticket </Button>
        </div>
        </div>

        
      </div>
    </div>
    </>
  )
}

export default ticket