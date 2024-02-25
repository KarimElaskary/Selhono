import React from 'react'

const Step = ({ img, stepName, stepNum }) => {
  return (
    <div className='flex flex-col lg:flex-row gap-10 mx-5'>
      <div className='flex-1'>
        <img
          src={img}
          className='rounded-bl-[400px] object-cover rounded-tr-[300px] w-[625px] h-[485px]'
        />
      </div>
      <div className='flex-1 flex justify-between flex-col'>
        <h1 className='text-primary text-[90px] self-end'>{stepNum}</h1>

        <div className='flex flex-col gap-3 justify-end'>
          <h1 className='text-[35px]'>{stepName}</h1>
          <p className='text-[22px]'>
            It is a long established fact will be distracted. Lorem Ipsum is
            simply dummy from text of the and typesetting indufstry.{' '}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Step
