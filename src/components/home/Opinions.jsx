import React from 'react'
import natasha from '../../assets/natasha.png'
import raymond from '../../assets/raymond.png'
import benny from '../../assets/benny.png'
import Opinion from '../../shared/Opinion'

const Opinions = () => {
  const data = [
    { personImg: natasha, personName: 'Natasha', location: 'Moscow, Russia' },
    {
      personImg: raymond,
      personName: 'Raymond Galario',
      location: 'UK, London',
    },
    { personImg: benny, personName: 'Benny Roll', location: 'USA, New York' },
  ]

  return (
    <div className='section'>
      <div className='container mx-auto'>
        <div className='bg-primary w-[70%] mx-auto p-[100px] flex flex-col gap-5 rounded-[70px] items-center'>
          <h1 className='text-[50px] text-center text-[#ffffff]'>
            What People Think <br />About Us
          </h1>
          <div className='flex flex-col lg:flex-row gap-5'>
            {data.map((opinion) => (
              <Opinion
                personImg={opinion.personImg}
                personName={opinion.personName}
                location={opinion.location}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Opinions
