import React from 'react'
import hero from '../../assets/hero.jpg'
import Button from '../../shared/Button'

const Hero = () => {
  return (
    <div className='section'>
      <div className='container mx-auto'>
        <div className='relative h-[70vh] overflow-hidden rounded-br-[100px] rounded-tl-[100px] w-[100%] md:w-full'>
          <img
            src={hero}
            alt='hero'
            className='absolute max-w-full object-contain blur-[5px]'
          />
          <div className='flex flex-col gap-5 absolute p-[25px]'>
            <h1 className='text-3xl md:text-7xl w-[70%] text-[#ffffff]'>
              Let's make your home beautiful together
            </h1>
            <p className='text-[#ffffff] text-[22px]'>
              There are many variations of the passages of lorem Ipsum
              fromavailable, majority.
            </p>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
