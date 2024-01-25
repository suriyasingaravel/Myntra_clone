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

export default function Hero2({p}) {
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
<img  className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/81bcb28d-55f3-4d7b-bb5a-7cf7ee7fd8031690773011370-The_Collective.png" alt="" />
<img  className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/7aac1f32-1a1a-4ba6-924b-ee1c28553aed1690773011304-Nautica.png" alt="" />
            <img className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/437645a4-988c-4f53-aff3-b1fdb34938481690773011106-FCUK.png" alt="" />
     <img  className='w-[16.6%]'  src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/0c399e2c-9797-483d-bf6c-0852d5d21db21690773010989-BHPC.png" alt="" />
    <img  className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/044555a5-9987-4a06-8679-8aeb2dd963f91690773011013-boohooMan.png" alt="" />
            <img  className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/2/805eeb23-ec17-4b50-b798-1244133c02041690955797245-image_png_1993656242.png" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex'>
            <img className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/6b6c7162-0086-4967-90c8-ec4792ec200c1690773011082-Dorothy_Perkin-_Boohoo.png" alt="" />
<img  className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/2/9699db4e-8162-406a-85ba-e92116f0019f1690955825591-image_png2047004151.png" alt="" />
<img  className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/92d5e2ec-a736-4bfd-832b-6972121829c91690773010945-Aldo.png" alt="" />
     <img  className='w-[16.6%]'  src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/331d0d67-95de-4e58-b774-add891464af01690773011037-Calvin_Klein.png" alt="" />
    <img  className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/d400d2ce-5755-4c86-96b8-26899aea6ea61690773011130-GANT.png" alt="" />
            <img  className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/31/d521c019-8fcd-4f36-a56f-7a1b9095e2661690773010958-Antony_Morato.png" alt="" />
            </div>
        </SwiperSlide>
        {/* <SwiperSlide>
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
        </SwiperSlide> */}
    </Swiper>
    </div>
    </>
  );
}
