import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './CaseSlider.css';
import admin from '../assets/adminconnect1.png'
import admin2 from '../assets/adminconnect2.png'
import admin3 from '../assets/adminconnect3.png'
import admin4 from '../assets/adminconnect4.png'


// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src= {admin} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={admin2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={admin3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={admin4} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}