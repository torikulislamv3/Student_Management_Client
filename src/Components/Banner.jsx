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
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper bg-white"
      >
        <SwiperSlide>
          <img className='size-[300px]' src="https://i.postimg.cc/cLjMkN7H/Picture-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='size-[300px]' src="https://i.postimg.cc/qRptjmFq/Picture-1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='size-[300px]' src="https://i.postimg.cc/NMGM1Kyr/Picture-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='size-[300px]' src="https://i.postimg.cc/1zhVNRcp/Picture-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='size-[300px]' src="https://i.postimg.cc/7PsCnnnP/Picture-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='size-[300px]' src="https://i.postimg.cc/mk5tZTg1/Picture-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='size-[300px]' src="https://i.postimg.cc/ZKWW7vw8/Picture-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='size-[300px]' src="https://i.postimg.cc/dtgLzQfz/Picture-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='size-[300px]' src="https://i.postimg.cc/bYBJtNqs/Picture-14.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Banner