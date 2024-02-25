import React from 'react'
import Hero from '../components/home/Hero'
import Service from '../shared/Service'
import Opinions from '../components/home/Opinions'
import Partners from '../components/home/Partners'
import ProjectsHome from '../components/home/ProjectsHome'
import Stats from '../components/home/Stats'

const Home = () => {
  const data = [
    { serviceName: 'Project Plan' },
    { serviceName: 'Interior Work' },
    { serviceName: 'Retail Design' },
  ]

  return (
    <div>
      <Hero />
      <div className='flex flex-col md:flex-row'>
        {data.map((service) => (
          <Service serviceName={service.serviceName} />
        ))}
      </div>
      <Opinions/>
      <Partners/>
      <ProjectsHome/>
      <Stats/>
    </div>
  )
}

export default Home
