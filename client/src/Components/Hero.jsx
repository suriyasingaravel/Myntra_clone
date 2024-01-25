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
            <img className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2023/8/4/71a69cc9-210a-4a95-b37f-78319c8f33761691141606256-image_png2064277310.png" alt="" />
<img  className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/ccebd3fc-3628-4eb5-9604-5487049c2cff1691142886405-image_png356438875.png" alt="" />
<img  className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/5a8540d5-9bd0-4a5b-81ee-063f8f23cf1c1691142814463-image_png1048777875.png" alt="" />
     <img  className='w-[16.6%]'  src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/30ce6d77-d4f5-4bed-b89a-c9cf00d197b81691142723203-image_png2141362199.png" alt="" />
    <img  className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/26abfeae-7980-4263-aac2-2e6206035da81691142704308-image_png_391142713.png" alt="" />
            <img  className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/6366f7f4-3942-4cbc-af0d-3b63c0f9add71691142685532-image_png45885503.png" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex'>
            <img className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/ca44e488-c06b-48ce-814f-3a1e3e66e08b1691142548139-image_png_840304476.png" alt="" />
<img  className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/7abcde7c-18e5-44c5-9cd9-c1490daa842a1691142533559-image_png2078004791.png" alt="" />
<img  className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/6ddcd2e5-20c6-4672-9b02-7d2117550f641691142512854-image_png242033865.png" alt="" />
     <img  className='w-[16.6%]'  src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/b504644b-f446-48c9-b928-36f1958bd19a1691142484406-image_png_292913761.png" alt="" />
    <img  className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2023/8/4/921e38ac-f903-4701-a419-df42b9448ef51691142513445-image_png1803300271.png" alt="" />
            <img  className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/4/944486f4-8cf8-456e-a0d5-c2655bf1deaa1691131597834-image_png_1935947130.png" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex mb-10'>
            <img className='w-[16.6%]' src="" alt="" />
<img  className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/7/29/00e27983-d373-4d86-9f25-3e46a18ec12a1690609817622-Top_casual_Styles-_Levi-s-_Tommy_Min_40.png" alt="" />
<img  className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2023/8/4/dc79e7c8-af20-4b65-ae2f-da2ca8e8c3f31691134139774-image_png1749927309.png" alt="" />
     <img  className='w-[16.6%]'  src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2023/8/3/a06120fd-caa3-4dac-93c3-3d4d574f8d7c1691087170219-image_png_116457033.png" alt="" />
    <img  className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/2ccbd34a-3340-4b55-bd4e-2ac182e425c11691079149976-image_png_1139490265.png" alt="" />
            <img  className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/eb385972-caf6-4e84-a37c-3fc2b4ac52041691079093062-image_png892897249.png" alt="" />
            <img  className='w-[16.6%]' src="https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/8/3/3a834277-7c69-4e28-b50d-79a1a50fb4e81691079063461-image_png_762128704--1-.png" alt="" /> 
            </div>
        </SwiperSlide>
    </Swiper>
    </div>
    </>
  );
}
