import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Stats = () => {
  return (
    <div className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:w-full text-center justify-between items-center'>
          <div className='flex flex-col gap-3 lg:border-r border-primary w-[25%] items-center'>
            <h1 className='text-primary text-[85px]'>12</h1>
            <p className='text-[22px]'>Years Of Experience</p>
          </div>
          <div className='flex flex-col gap-3 lg:border-r border-primary w-[25%] items-center'>
            <h1 className='text-primary text-[85px]'>1074</h1>
            <p className='text-[22px]'>Successful Projects</p>
          </div>
          <div className='flex flex-col gap-3 lg:border-r border-primary w-[25%] items-center'>
            <h1 className='text-primary text-[85px]'>98</h1>
            <p className='text-[22px]'>Active Projects</p>
          </div>
          <div className='flex flex-col gap-3 w-[25%] items-center'>
            <h1 className='text-primary text-[85px]'>583</h1>
            <p className='text-[22px]'>Happy Customers</p>
          </div>
        </div>
        <div className='bg-primary mt-[150px] text-center flex flex-col gap-4 items-center justify-center p-[50px]'>
          <h1 className='text-[70px] text-[#ffffff]'>
            Want to join the interno?
          </h1>
          <p className='text-[#ffffff] text-[22px]'>
            It is a long established fact will be distracted.
          </p>
          <button className='flex items-center gap-2 bg-[#ffffff] w-fit p-5 rounded-lg text-primary'>
            <p>Contact With Us</p>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Stats
