import React, { useState } from 'react'
import selhono from '../assets/SELHONO.png'
import { Link } from 'react-router-dom'
import { IoMenuSharp } from 'react-icons/io5'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  function openMenu() {
    setIsOpen(!isOpen)
  }

  function linkClick() {
    setIsOpen(false)
  }

  return (
    <header className='py-[20px]'>
      <div className='container mx-auto w-[80%] md:w-full'>
        <div className='flex flex-row items-center justify-between'>
          <div>
            <img src={selhono} alt='Logo' />
          </div>
          <div>
            <ul className='hidden md:flex gap-10 text-[20px]'>
              <li className='hover:text-primary'>
                <Link to={'/'}>
                  <p>Home</p>
                </Link>
              </li>
              <li className='hover:text-primary'>
                <Link to={'/services'}>
                  <p>Services</p>
                </Link>
              </li>
              <li className='hover:text-primary'>
                <Link to={'/projects'}>
                  <p>Projects</p>
                </Link>
              </li>
              <li className='hover:text-primary'>
                <Link to={'/contact'}>
                  <p>Contact</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className='md:hidden flex flex-col gap-3'>
            <IoMenuSharp
              className='md:hidden relative text-primary text-2xl cursor-pointer'
              onClick={openMenu}
            />
            {isOpen && (
              <ul className='flex flex-col gap-2 absolute z-10 nav-phone right-0 top-[80px] bg-[#ffffff] w-[60%] p-4 text-[20px]'>
                <li className='hover:text-primary'>
                  <Link to={'/'} onClick={linkClick}>
                    <p>Home</p>
                  </Link>
                </li>
                <li className='hover:text-primary'>
                  <Link to={'/services'} onClick={linkClick}>
                    <p>Services</p>
                  </Link>
                </li>
                <li className='hover:text-primary'>
                  <Link to={'/projects'} onClick={linkClick}>
                    <p>Projects</p>
                  </Link>
                </li>
                <li className='hover:text-primary'>
                  <Link to={'/contact'} onClick={linkClick}>
                    <p>Contact</p>
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
