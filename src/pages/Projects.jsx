import React from 'react'
import Project from '../shared/Project'
import kitchen from '../assets/kitchen.jpg'
import bathroom from '../assets/bathroom.jpg'
import living from '../assets/living.jpg'
import bedroom from '../assets/bedroom.jpg'

const Projects = () => {
  const data = [
    { img: kitchen, projectName: 'Kitchen' },
    { img: bathroom, projectName: 'Bathroom' },
    { img: bedroom, projectName: 'Bedroom' },
    { img: living, projectName: 'Living' },
  ]

  return (
    <div className='section'>
      <div className='container mx-auto'>
        <div className='bg-primary text-center h-[242.23px] md:h-[121.11px] flex items-center justify-center mb-[100px]'>
          <h1 className='text-[70px] text-[#ffffff]'>Our Projects</h1>
        </div>
        <div className='flex flex-wrap gap-[100px] ml-[70px] md:ml-0 justify-center w-[70%] md:w-full'>
          {data.map((project) => (
            <Project img={project.img} projectName={project.projectName} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
