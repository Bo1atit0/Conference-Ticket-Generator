import React from 'react'
import { Link } from 'react-router-dom'

const homepage = () => {
  return (
    <div>
        <h1>Techember Fest</h1>
        <Link to='/form'> <button>GO to Form</button></Link>
    </div>
  )
}

export default homepage