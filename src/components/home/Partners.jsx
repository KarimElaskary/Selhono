import React from 'react'
import buffer from '../../assets/buffer.png'
import frame1 from '../../assets/frame1.png'
import frame2 from '../../assets/frame2.png'
import bigcommerce from '../../assets/bigcommerce.png'

const Partners = () => {
  return (
    <div className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-10 lg:flex-row items-center justify-center'>
          <img src={buffer} alt='partner' />
          <img src={frame1} alt='partner' />
          <img src={frame2} alt='partner' />
          <img src={bigcommerce} alt='partner' />
        </div>
      </div>
    </div>
  )
}

export default Partners
