import React from 'react'
import ornament from "../assets/champagne.jpg";
import giftexchange from "../assets/giftexchange.jpg";
import champagne from "../assets/champagne.jpg";
import cookie from "../assets/cookie.jpg";
import christmasmarket from "../assets/champagne.jpg";

const EventSection = () => {
  return (
    <>
      <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px] pt-20' >
        <div className='relative p-4'>
          <h3 className="absoltute z-10 top-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">Ornament</h3>
          < img className="w-full h-full object-cover relative border-4 borderlg"
          
          src={ornament}
          alt="/"
          />
        </div>
        <div className='relative p-4'>
          <h3 className="absoltute z-10 top-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">GiftChange</h3>
          < img className="w-full h-full object-cover relative border-4 borderlg"
          src={giftexchange}
          alt="/"
          />
        </div>
        <div className='relative p-4'>
          <h3 className="absoltute z-10 top-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">Ornament</h3>
          < img className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          src={champagne}
          alt="/"
          />
        </div>
        <div className='relative p-4'>
          <h3 className="absoltute z-10 top-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">Ornament</h3>
          < img className="w-full h-full object-cover relative border-4 borderlg"
          src={cookie}
          alt="/"
          />
        </div>
        <div className='relative p-4'>
          <h3 className="absoltute z-10 top-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">Ornament</h3>
          < img className="w-full h-full object-cover relative border-4 borderlg"
          src={christmasmarket}
          alt="/"
          />
        </div>
      </div>
    </>
  )
}

export default EventSection