import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Navbar = () => {
  
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if(!nav) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'scroll'
    }
  };

  return (
    <>
      <div className='w-full flex justify-between p-4 items-center  bg-black'>
        <h1 className='text-white font-bold text-2xl z-20'>Christmas</h1>
        <FaBars onClick={handleNav} className='z-20 text-white cursor-pointer' size={25} />
        <div
          className={
            nav
              ? 'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10'
              : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'
          }
        >
          <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
            <Link to="/" onClick={handleNav}>
              <li className='font-bold text-3xl p-8'>HOME</li>
            </Link>
            <Link to="/events" onClick={handleNav}>
              <li className='font-bold text-3xl p-8'>EVENTS</li>
            </Link>
            <Link to="/gifts" onClick={handleNav}>
              <li className='font-bold text-3xl p-8'>GIFTS</li>
            </Link>
            <Link to="/contact" onClick={handleNav}>
              <li className='font-bold text-3xl p-8'>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar