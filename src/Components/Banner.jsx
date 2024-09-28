import React from 'react'
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';




const Banner = () => {
  return (
    <>
   <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmGTaXy1LGswSwly9h2TWJ-woadoUlDmMHYQ&s"
      className="w-full h-[280px] lg:h-[350px]" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://media.licdn.com/dms/image/v2/C511BAQElInIXVOs1yg/company-background_10000/company-background_10000/0/1584417593148/rangpurpolytechnicinstitute_cover?e=2147483647&v=beta&t=XgmHCOysnsLrHij_aconqH1jih9CbNOaH3OrPXzxcsc"
      className="w-full h-[280px] lg:h-[350px]" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1_XlYZ3ykfBlX1zxsyUgaEjLJfLysjczrxQ&s"
      className="w-full h-[280px] lg:h-[350px]" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    </>
  )
}

export default Banner