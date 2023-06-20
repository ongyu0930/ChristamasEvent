import React from 'react'
import chistmas from "../assets/chistmas.jpg";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <>
      <div className='w-full h-screen'>
        <img
          className='top-0 left-0 w-full h-screen object-cover'
          src={chistmas}
          alt='/'
        />
        <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
          <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
            <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
            Let's spend Christmas with our loved ones.
            </h1>
            <p className='max-w-[600px] drop-shadow-2xl py-6 text-xl'>
            大切な人への贈り物は、愛と思いやりを伝える魔法。喜びと感動が心に届き、絆を深める幸福な瞬間。
            </p>
            <Link to="/gifts">
              <button className='bg-white text-black '>BUY NOW</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero

