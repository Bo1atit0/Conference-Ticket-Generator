import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../../header/header'
import { useForm } from 'react-hook-form'
import TicketHeading from '../../ticketHeading/ticketHeading'
import Button from '../../button/button'
import './form.css'
import { FaCloudDownloadAlt } from "react-icons/fa";

const Form = () => {

  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm()
  const navigate = useNavigate()

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
      setValue('name', savedData.name || '')
      setValue('email', savedData.email || '')
      setValue('request', savedData.request || '')
      setValue('avatar', savedData.avatar || '')
    }
  }, [])
  const onSubmit = (data) => {
    localStorage.setItem('formData', JSON.stringify(data))
    navigate('/ticket', {state: data})
    
  }

  
  return (
    <>
      <Header />
      <div className="form-container">
        <TicketHeading heading='Attendee Details' step='2' className='step2' />

        <div className="form">
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="upload">

              <label htmlFor="avatar">Upload Profile Photo</label>

              <div className="upload-inner">
                <div className="dragNdrop">
                  <FaCloudDownloadAlt />
                  <p>Drag & Drop or Paste Your Image URL In the Box Below</p>
                </div>
              </div>

              <input id='avatar' type="text" placeholder='Image URL'
                  {...register('avatar',
                    {required: 'Please Add you Avatar URL'}
                  )
                }/>
                {errors.avatar && <div id='avatar-error' aria-live='polite' style={{color: 'red'}}>{errors.avatar.message}</div>}
            </div>
            
            <div className="lines">
              
            </div>

            <label htmlFor="name">Enter Your Name</label>
            <input 
              type="text" id="name" 
              {...register('name',
                {required: 'Please Enter Your Name',
                  minLength: 3, message: 'Name should be at least 3 characters long',
                }
                
              )
                }
              />
              {errors.name && <div id='name-error' aria-live='polite' style={{color: 'red', margin: '0 0 1vw 1vw',}}>{errors.name.message}</div>}

            <label htmlFor="email">Enter Your Email</label>
            <input id='email' type="email" 
              {...register('email',
                {required: 'Please Enter Your Email',
                  pattern: { value: /\S+@\S+\.\S+/, message: 'Enter a valid email'} 
                }
              )
                
              }/>
              {errors.email && <div id='email-error' aria-live='polite' style={{color: 'red', margin: '0 0 1vw 1vw'}}>{errors.email.message}</div>}

              <label htmlFor="request">Special Request?</label>
              <textarea id="request"
                {...register('request')}></textarea>

                <div className="formbtn">
                  <Button onClick={() => {navigate('/')}} className='backbtn'>
                    Back
                  </Button>

                  <Button type='submit' className='backbtn get-ticket'>
                  Get My Free Ticket
                  </Button>
                </div>
          </form>
        </div>
      </div>
      
    </>
  )
}

export default Form