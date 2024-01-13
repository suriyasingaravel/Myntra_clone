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

export default function Hero({p}) {
  return (
    <>
    <p className='text-[32px] text-[#3e4152] font-[700] tracking-[4.5px] mx-8 my-20'>{p}</p>
    <div className='mt-8'>
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
          
            <div className='flex '>
<img  className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/51084b8a-9c9e-4b03-bc4a-dfd7738590eb1691076143197-image_png949061620--1-.png" alt="" />
<img  className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/bf39dcbb-1a94-481c-b943-43fca34bf0581691066296958-unnamed---2023-08-03T180811.304.png" alt="" />
            <img className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/5a8540d5-9bd0-4a5b-81ee-063f8f23cf1c1691142814463-image_png1048777875.png" alt="" />
     <img  className='w-[16.6%]'  src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/8027069a-3a10-4a92-a228-1c4e24cd58071691066276841-unnamed---2023-08-03T180720.906.png" alt="" />
    <img  className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/d6529cc8-ff03-4d85-88b7-5358a1d5a46b1691057399814-image_png1830835492.png" alt="" />
            <img  className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/4cde4706-089f-4049-9d9c-116d8631af381691056679844-image_png1175979315.png" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex'>
            <img className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/1/8/9db4bfa3-3b81-40c0-b1fb-4bb02394ebd81704716511877-image_png1175413881.png" alt="" />
<img  className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/1/8/736b9aee-89f0-4aa1-9aa0-3c2cb13929dc1704716542900-image_png_338042798.png" alt="" />
<img  className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/1/5/fecaab01-c5d6-4f92-ad85-ca5ea014aa961704456622500-Anouk-_DB_Min_65.png" alt="" />
     <img  className='w-[16.6%]'  src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/1/5/8185bdd0-72ca-4317-a4c3-14f16f5792451704456622342-Boohoo.png" alt="" />
    <img  className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/1/5/19b9c34c-fbda-444a-a2f7-46905fddec921704456622455-Campus-_Bata_Starting_499_-999-.png" alt="" />
            <img  className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2024/1/5/f6e58493-fbd0-447a-83c9-b52fd1c58dae1704456622259-Soch-_Inddus_-_more.png" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex'>
            <img className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/5a8540d5-9bd0-4a5b-81ee-063f8f23cf1c1691142814463-image_png1048777875.png" alt="" />
<img  className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/51084b8a-9c9e-4b03-bc4a-dfd7738590eb1691076143197-image_png949061620--1-.png" alt="" />
<img  className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/bf39dcbb-1a94-481c-b943-43fca34bf0581691066296958-unnamed---2023-08-03T180811.304.png" alt="" />
     <img  className='w-[16.6%]'  src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/8027069a-3a10-4a92-a228-1c4e24cd58071691066276841-unnamed---2023-08-03T180720.906.png" alt="" />
    <img  className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/d6529cc8-ff03-4d85-88b7-5358a1d5a46b1691057399814-image_png1830835492.png" alt="" />
            <img  className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/4cde4706-089f-4049-9d9c-116d8631af381691056679844-image_png1175979315.png" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex mb-10'>
            <img className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/5a8540d5-9bd0-4a5b-81ee-063f8f23cf1c1691142814463-image_png1048777875.png" alt="" />
<img  className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/51084b8a-9c9e-4b03-bc4a-dfd7738590eb1691076143197-image_png949061620--1-.png" alt="" />
<img  className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/bf39dcbb-1a94-481c-b943-43fca34bf0581691066296958-unnamed---2023-08-03T180811.304.png" alt="" />
     <img  className='w-[16.6%]'  src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/8027069a-3a10-4a92-a228-1c4e24cd58071691066276841-unnamed---2023-08-03T180720.906.png" alt="" />
    <img  className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/d6529cc8-ff03-4d85-88b7-5358a1d5a46b1691057399814-image_png1830835492.png" alt="" />
            <img  className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/4cde4706-089f-4049-9d9c-116d8631af381691056679844-image_png1175979315.png" alt="" />
            </div>
        </SwiperSlide>
    </Swiper>
    </div>
    </>
  );
}
