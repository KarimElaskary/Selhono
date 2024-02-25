import React from 'react'
import error from '../assets/error.jpg'
import { NavLink } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const Error = () => {
  return (
    <div className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <div className='w-[730px]'>
            <img className='rounded-br-[400px]' src={error} alt='error' />
          </div>
          <div className='flex flex-col text-center items-center'>
            <h1 className='text-primary text-[250px]'>404</h1>
            <h1 className='text-[30px] mb-[100px]'>
              We are sorry, but the page you requested was not found
            </h1>
            <NavLink
              to={'/'}
              className='bg-[#292F36] p-5 rounded-[18px] text-[#ffffff] flex items-center gap-2 w-fit'
            >
              Back To Home <FaArrowRight className='text-primary' />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Error
