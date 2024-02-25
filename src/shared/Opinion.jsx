import React from 'react'

const Opinion = ({ personImg, personName, location }) => {
  return (
    <div className='rounded-2xl flex flex-col gap-y-4 bg-[#ffffff] p-[50px] w-fit'>
      <div className='flex flex-col lg:flex-row gap-4 items-center text-center lg:text-start'>
        <div>
          <img src={personImg} alt='person' />
        </div>
        <div className='flex flex-col'>
          <h1>{personName}</h1>
          <p className='text-[#4D5053]'>{location}</p>
        </div>
      </div>
      <p className='text-center'>
        Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has
        been scrambled it to make a type book.
      </p>
    </div>
  )
}

export default Opinion
