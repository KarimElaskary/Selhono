import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Button = ({ children }) => {
  return (
    <button className='flex items-center gap-2 bg-[#CDA274] w-fit p-5 rounded-lg text-[#ffffff]'>
      <p>{children}</p>
      <FaArrowRight />
    </button>
  )
}

export default Button
