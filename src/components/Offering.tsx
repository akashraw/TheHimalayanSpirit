"use client";
import React, {useState, useRef} from 'react' 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { atRule } from 'postcss';

export default function Offering() {

  return (
    <div className="block p-20 swiper">
      <h2 className="text-4xl text-slate-950 font-bold text-center">
        We Offer
      </h2>
      <div className="pt-5 justify-center flex">
      <Swiper
          breakpoints={{
          640: {
            width: 640,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
          1024: {
            width: 1024,
            slidesPerView: 3,
          }
        }}
        loop={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img className='h-96 rounded-lg' src='/images/products/1.jpg'/></SwiperSlide>
        <SwiperSlide><img className='h-96 rounded-lg' src='/images/products/2.jpg'/></SwiperSlide>
        <SwiperSlide><img className='h-96 rounded-lg' src='/images/products/3.jpg'/></SwiperSlide>
        <SwiperSlide><img className='h-96 rounded-lg' src='/images/products/1.jpg'/></SwiperSlide>
        <SwiperSlide><img className='h-96 rounded-lg' src='/images/products/2.jpg'/></SwiperSlide>
        <SwiperSlide><img className='h-96 rounded-lg' src='/images/products/3.jpg'/></SwiperSlide>
      </Swiper>
      </div>
    </div>
  )
}
