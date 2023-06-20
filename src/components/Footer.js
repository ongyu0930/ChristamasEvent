import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <div className='w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2'>
        <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4'>  
          <div>
            <h6 className='font-bold uppercare pt-2'>Solutions</h6>
            <ul>
              <li className='py-1'>Event</li>
              <li className='py-1'>Booking</li>
              <li className='py-1'>Gifts</li>
              <li className='py-1'>Informartion</li>
            </ul>
          </div>
          <div>
            <h6 className='font-bold uppercare pt-2'>Company</h6>
            <ul>
              <li className='py-1'>About</li>
              <li className='py-1'>Blog</li>
            </ul>
          </div>
         
          <div className='col-span-2 py-8 md:pt-2'>
            <p className='font-bold uppercase'>Subscribe to our newsletters</p>
            <p className='py-4'>
            最新のお得な情報、記事を週ごとにあなたのメールに送信します
            </p>
            <form className='flex flex-col sm:flex-row'>
              <input className='w-full p-2 mr-4 rounded-md mb-4' type='email' placeholder='Enter email..' />
              <button className='p-2 mb-4 rounded-md'>Subscribe</button>
            </form>
          </div>
        </div>

        <div className='flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
          <p className='py-4'>2023 ChristamsEvent.com</p>
          <div className='flex justify-center sm:w-[300px] pt-4 text-2xl'>
            <FaFacebook/>
            <FaInstagram />
            <FaTwitter />
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer