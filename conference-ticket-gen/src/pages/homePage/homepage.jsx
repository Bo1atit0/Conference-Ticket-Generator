import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../../header/header'
import TicketHeading from '../../ticketHeading/ticketHeading'
import './homepage.css'
import TicketType from '../../ticketType/ticketType'
import Button from '../../button/button'

const homepage = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const navigate = useNavigate();
    function handleTicketsButton() {
        navigate('/form')
    }

  const onSubmit = (data) => {
    console.log(data)
    handleTicketsButton();
  }

  const [isClicked, setIsClicked] = useState(false)
  const handleIsClicked = () =>{
    setIsClicked(true)
  }

  const handleStock = () =>{
    
    alert('Out Of Stock.')
    setIsClicked(false)
  }

  
  return (
    <section className='homepage'>
        <Header />

        <section className="container">
          <TicketHeading heading='Ticket Selection' step='1' className='step1'/>
          <div className="inner-container">
            <div className="techember">
              <h1>Techember Fest "25</h1>
              <p>Join us for an unforgettable experience at
              |Event Name| Secure your spot now</p>
              <p> 📍|Event Location|</p> <p> March 15 2025 | 7:00 PM</p>
            </div>

            <div className="lines"></div>

            <div className="tickettype">
              <p className='select'>Select Ticket Type</p>
              <div className="ticketContainer">
                <TicketType onClick={handleIsClicked} className={isClicked ? 'clicked' : ''} price='Free' access='REGULAR ACCESS' quantity='20/52'/>
                <TicketType onClick={handleStock} className='tt2' price='$150' access='VIP ACCESS' quantity='OUT OF STOCK' />
                <TicketType onClick={handleStock} className='tt2' price='$500' access='VVIP ACCESS' quantity='OUT OF STOCK' />
              </div>

              <div className="ticketcount">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label className='ticket-label' htmlFor="ticketcount">Number of Tickets</label>
                  <select
                  id="ticketcount"
                  {... register('ticketcount',{
                    required: 'Please select the number of tickets'
                  }
                  )}>
                    <option value=""></option>
                    <option value="1">1</option>
                    {/* <option value="2">2</option>
                    <option value="3">3</option> */}
                  </select>

                  {errors.ticketcount && <div style={{color: 'red', fontSize: 'clamp(10px, 2vw, 15px)'}}>{errors.ticketcount.message}</div>}

                  <div className="homebtn">
                <Button className='cancelbtn'>
                  Cancel
                </Button>

                <Button type='submit' className='cancelbtn'>
                  Next
                </Button>
              </div>
                </form>
              </div>

              
              
            </div>
          </div>
        </section>
        

    </section>
  )
}

export default homepage