import React from 'react'
import selhono from '../assets/SELHONO.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'

const Footer = () => {
  return (
    <footer className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:grid grid-cols-12 gap-20 ml-[20px] md:ml'>
          <div className='flex flex-col gap-6 col-span-12 lg:col-span-4'>
            <div>
              <img src={selhono} alt='Logo' />
            </div>
            <p>
              It is a long established fact <br />
              that a reader will be distracted lookings.
            </p>
            <div>
              <ul className='flex flex-row gap-3 items-center'>
                <li>
                  <img src={facebook} alt='social1' />
                </li>
                <li>
                  <img src={twitter} alt='social2' />
                </li>
                <li>
                  <img src={linkedin} alt='social3' />
                </li>
                <li>
                  <img src={instagram} alt='social4' />
                </li>
              </ul>
            </div>
          </div>
          <div className='flex flex-col gap-6 col-span-12 md:col-span-6 lg:col-span-2'>
            <h1>Pages</h1>
            <p>About Us</p>
            <p>Our Projects</p>
            <p>Our Team</p>
            <p>Contact Us</p>
            <p>Services</p>
          </div>
          <div className='flex flex-col gap-6 col-span-12 md:col-span-6 lg:col-span-2'>
            <h1>Services</h1>
            <p>Kitchen</p>
            <p>Living Area</p>
            <p>Bathroom</p>
            <p>Dinning Hall</p>
            <p>Bedroom</p>
          </div>
          <div className='flex flex-col gap-6 col-span-12 lg:col-span-4'>
            <h1 className='font-DM'>Contact</h1>
            <p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
            <p>contact@selhono.com</p>
            <p>(123) 456 - 7890</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
