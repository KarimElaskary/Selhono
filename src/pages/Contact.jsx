import React from 'react'
// import contact from '../assets/contact.jpg'
import message from '../assets/message.png'
import phone from '../assets/phone.png'
import website from '../assets/website.png'
import { FaArrowRight } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10'>
        <div className='bg-primary text-center h-[242.23px] md:h-[121.11px] flex items-center justify-center mb-[100px]'>
        <h1 className='text-[70px] text-[#ffffff]'>Contact</h1>
      </div>
          <h1 className='text-[30px] text-center mx-[30px]'>
            We love meeting new people and helping them.
          </h1>
          <div className='grid grid-cols-12'>
            <div className='col-span-12 md:col-span-4'>
              <p className='flex items-center gap-3'>
                <img src={message} alt='message' /> info@selhono.com
              </p>
              <p className='flex items-center gap-3'>
                <img src={phone} alt='phone' /> +1 (378) 400-1234
              </p>
              <p className='flex items-center gap-3'>
                <img src={website} alt='website' /> www.selhono.com
              </p>
            </div>
            <form className='col-span-12 md:col-span-8 gap-4 flex flex-col gap-y-10 w-[70%] mx-auto'>
              <div className='grid grid-cols-6 md:grid-cols-12 gap-10'>
                <input
                  type='text'
                  placeholder='Name'
                  className='border-b border-[#4D5053] placeholder:text-[#4D5053] text-[#4D5053] p-3 col-span-6'
                />
                <input
                  type='Email'
                  placeholder='Email'
                  className='border-b border-[#4D5053] placeholder:text-[#4D5053] text-[#4D5053] p-3 col-span-6'
                />
              </div>
              <div className='grid grid-cols-6 md:grid-cols-12 gap-10'>
                <input
                  type='text'
                  placeholder='Subject'
                  className='border-b border-[#4D5053] placeholder:text-[#4D5053] text-[#4D5053] p-3 col-span-6'
                />
                <input
                  type='number'
                  placeholder='Phone'
                  className='border-b border-[#4D5053] placeholder:text-[#4D5053] text-[#4D5053] p-3 col-span-6'
                />
              </div>
              <textarea
                placeholder='Hello Iam Intrested in..'
                className='border-b border-[#4D5053] placeholder:text-[#4D5053] w-full text-[#4D5053] p-3 pb-10 col-span-12'
              ></textarea>
              <div className='flex justify-center md:justify-end'>
                <button className='bg-[#292F36] p-4 rounded-[18px]'>
                  <p className='flex flex-row items-center gap-2 text-[#ffffff] text-[18px] font-semibold'>
                    Send Now <FaArrowRight />
                  </p>
                </button>
              </div>
            </form>
          </div>
          <div className='flex items-center justify-center'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.336634876694!2d31.299663923491046!3d30.059556316684063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2z2KfZhNmC2KfZh9ix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1708356407160!5m2!1sar!2seg'
              width='1200'
              height='450'
              allowfullscreen=''
              loading='lazy'
              referrerpolicy='no-referrer-when-downgrade'
              className='rounded-[50px] p-4'
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
