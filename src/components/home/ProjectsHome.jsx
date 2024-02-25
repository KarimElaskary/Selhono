import React from 'react'
import Project from '../../shared/Project'
import kitchen from '../../assets/kitchen.jpg'
import bathroom from '../../assets/bathroom.jpg'
import living from '../../assets/living.jpg'
import bedroom from '../../assets/bedroom.jpg'

const ProjectsHome = () => {
  const data = [
    { img: kitchen, projectName: 'Kitchen' },
    { img: bathroom, projectName: 'Bathroom' },
    { img: bedroom, projectName: 'Bedroom' },
    { img: living, projectName: 'Living' },
  ]

  return (
    <div className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col justify-center items-center text-center w-[70%] mx-auto mb-[150px] md:w-full'>
          <h1 className='text-[60px]'>Follow Our Projects</h1>
          <p className='text-[28px]'>
            It is a long established fact that a reader will be distracted by
            the of readable content of page lookings at its layouts points.
          </p>
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

export default ProjectsHome
