import React from 'react'
import Service from '../shared/Service'
import Step from '../components/services/Step'
import concept from '../assets/concept.jpg'
import idea from '../assets/idea.jpg'
import design from '../assets/design.jpg'
import perfection from '../assets/perfection.jpg'
import { FaArrowRight } from 'react-icons/fa'

const Services = () => {
  const data = [
    { serviceName: 'Project Plan' },
    { serviceName: 'Interior Work' },
    { serviceName: 'Retail Design' },
    { serviceName: '2d/3d Art Work' },
    { serviceName: 'Interior Work' },
    { serviceName: 'Decoration Work' },
  ]

  const stepData = [
    { img: concept, stepName: 'Concept & Details', stepNum: '01' },
    { img: idea, stepName: 'Idea for Work', stepNum: '02' },
    { img: design, stepName: 'Design', stepNum: '03' },
    { img: perfection, stepName: 'Perfection', stepNum: '04' },
  ]

  return (
    <div className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-20'>
          <div className='bg-primary text-center h-[242.23px] md:h-[121.11px] flex items-center justify-center mb-[100px]'>
            <h1 className='text-[70px] text-[#ffffff]'>Services</h1>
          </div>
          <div className='flex flex-col gap-[50px] md:grid grid-cols-12'>
            {data.map((service) => (
              <div className='col-span-4'>
                <Service serviceName={service.serviceName} />
              </div>
            ))}
          </div>
          <div className='flex flex-col gap-2 items-center text-center my-[50px]'>
            <h1>How We Work</h1>
            <p>
              It is a long established fact will be distracted.Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.
            </p>
          </div>
          <div className='flex flex-col gap-14'>
            {stepData.map((step) => (
              <Step
                img={step.img}
                stepName={step.stepName}
                stepNum={step.stepNum}
              />
            ))}
          </div>
          <div className='bg-primary text-center flex flex-col gap-4 items-center justify-center p-[50px]'>
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
    </div>
  )
}

export default Services
