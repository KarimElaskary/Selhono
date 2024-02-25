import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Service = ({ serviceName }) => {
  return (
    <div className='flex flex-col text-center justify-center items-center gap-4 p-[30px] hover:text-primary hover:bg-[#F9F9F9] hover:rounded-[30px] hover:p-[30px] w-fit mx-auto'>
      <h1>{serviceName}</h1>
      <p>
        There are many variations of the <br /> passages of lorem Ipsum from{' '}
        <br /> available, majority.
      </p>
      <p className='flex flex-row items-center gap-2 cursor-pointer text-[18px] font-semibold'>
        Read More <FaArrowRight />{' '}
      </p>
    </div>
  )
}

export default Service
