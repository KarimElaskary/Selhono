import React from 'react'
import arrowRight from '../assets/arrowRight.png'

const Project = ({ img, projectName }) => {
  return (
    <div className='flex flex-col gap-5'>
      <img src={img} alt='project' className='w-[580px] h-[507.14px] md:h-[700px]'/>
      <div className='flex flex-row items-center justify-between'>
        <div className='flex flex-col gap-2'>
          <h1>{projectName}</h1>
          <p>Decor / Artchitecture</p>
        </div>
        <img src={arrowRight} alt='arrow' className='w-[50px]' />
      </div>
    </div>
  )
}

export default Project
