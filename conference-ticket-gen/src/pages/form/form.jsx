import React from 'react'
import { Link } from 'react-router-dom'

const form = () => {
  return (
    <>
    <h1>Form</h1>
    <Link to='/ticket'> <button> Go To Ticket</button></Link>
    <Link to='/'> <button>Back To Home</button></Link>
    </>
  )
}

export default form