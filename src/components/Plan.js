import React from 'react';
import ornament from "../assets/ornament.jpg";
import giftexchange from "../assets/giftexchange.jpg";
import champagne from "../assets/champagne.jpg";
import cookie from "../assets/cookie.jpg";
import christmasmarket from "../assets/christmasmarket.jpg";
import { Link } from "react-router-dom";

const Plan = () => {
  return (
    <>
      <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        {/* Left Side */}
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
          <img
            className='row-span-3 object-cover w-full h-full p-2'
            src={ornament}
            alt='/'
          />
          <img
            className='row-span-2 object-cover w-full h-full p-2'
            src={giftexchange}
            alt='/'
          />
          <img
            className='row-span-2 object-cover w-full h-full p-2'
            src={champagne}
          />
          <img
            className='row-span-3 object-cover w-full h-full p-2'
            src={cookie}
            alt='/'
          />
          <img
            className='row-span-2 object-cover w-full h-full p-2'
            src={christmasmarket}
            alt='/'
          />
        </div>
        {/* Right Side */}
        <div className='flex flex-col h-full justify-center'>
          <h3 className='text-5xl md:text-6xl font-bold'>Let's curate an epic Christmas adventure together.</h3>
          <p className='text-2xl py-6'>
            クリスマスのイベントを楽しもう！
          </p>
          <p className='pb-6'>
            クリスマスのイベントは、大切な人とツリーの飾りつけ、プレゼント交換、お菓子作り、
            食事、クリスマスマーケットなど幸せなイベントがたくさんあります。
            このサイトを機にたくさんのイベントを見つけ、クリスマスを最上級に楽しみましょう！
          </p>
          <div>
            <Link to="/events">
              <button className='border-black mr-4 hover:shadow-xl'>
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Plan