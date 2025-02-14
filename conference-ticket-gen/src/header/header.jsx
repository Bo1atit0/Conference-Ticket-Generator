import React from 'react'
import logo from '../assets/ticket-logo.png'
import Button from '../button/button'
import { FaArrowRightLong } from "react-icons/fa6";
import './header.css'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
    function handleMyTicketButton() {
        navigate('/')
    }
  return (
    <header>
        <img src={logo} alt='Ticket Logo'/>

        <nav>
            <ul>
                <li>Events</li>
                <li>My Tickets</li>
                <li>About Project</li>
            
            </ul>
        </nav>
        

        <Button onClick={handleMyTicketButton} className='ticketbtn'>
            My Tickets
            <FaArrowRightLong />
        </Button>
    </header>
  )
}

export default Header