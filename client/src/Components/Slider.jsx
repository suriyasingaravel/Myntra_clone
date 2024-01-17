import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  return (
    <div className='mt-8 z-0' >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, ]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/1/9/b6876988-9037-4f47-b20a-8c2b5829b48d1704801352139-Prebuzz-Desktop-Main-Banner--1-.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/0174e4d7-448c-4746-8572-69461ad5be101659020268081-Tops---Tees_Desk.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/b656a7f4-4688-4997-bb7c-54b78793981e1658752386588-Western-Wear_Desk.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/179e278f-77ee-44c2-bf39-9f00b0cd08e01658752429301-Handbags_Desk.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/27/53b4daed-cd2c-4111-86c5-14f737eceb351656325318973-Handbags_Desk.jpg" alt="" />
        </SwiperSlide>
        {/* <SwiperSlide>
        <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/1/9/b6876988-9037-4f47-b20a-8c2b5829b48d1704801352139-Prebuzz-Desktop-Main-Banner--1-.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/1/9/b6876988-9037-4f47-b20a-8c2b5829b48d1704801352139-Prebuzz-Desktop-Main-Banner--1-.jpg" alt="" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
}
