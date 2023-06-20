import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const ImageSlider = () => {

  const slides = [
    {
      url: "https://cdn.pixabay.com/photo/2016/12/19/18/21/snowflake-1918794_1280.jpg",
      title: 'gloves',
    },
    {
      url: 'https://pixabay.com/get/gf8cb698183feb6c2f84ba85c8bf0096093764e6f8a3f902371ee2f4bde0df0b15db9605ae9632d18744e0d83aa9d4f76738ce10cb650b7282b1d9d3973e79510_640.jpg',
      title: 'soldiers',
    },
    {
      url: 'https://pixabay.com/get/ge42493ae85c145280c9c1e798b7ff233176a5b161bcae5e0ff8e962c4fa05165e953d0e492e7a680d3dc07d5943ab565_640.jpg',
      title: 'gifts',
    },
    {
      url: 'https://pixabay.com/get/g8893c40745d76f96ade7355f523eafd92f77d37fa83525130b092ba485630d6b526f4de921fde5674ac38e3fe0a44f8b_640.jpg',
      title: 'toys',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };


  return (
    <>
      <div className='max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group'>
        <div
          className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        ></div>
        {/* Left Arrow */}
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>

        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div
              className='text-2xl cursor-pointer'
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ImageSlider