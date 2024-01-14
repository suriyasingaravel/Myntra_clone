import React from 'react';
import { FaPercent } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const Payment = () => {
  return (
    <div>
    <div className='flex w-[70%] m-auto gap-[30px]  mt-[20px]'>

      {/* box-1 */}
      <div className='w-[63%]'>

        
        <div className=' rounded justify-between border border-solid border-grey-100 p-5 my-3'>
        <div>
            <div className='flex gap-3' >
                {/* <input type="radio" /> */}
                <p className='font-bold text-[14px]'>Bank Offer</p>
            </div>
            <p className='text-[13px] text-[#424553] ml-6 my-1'> 10% Instant Discount on ICICI Bank Credit Cards and NetBanking on a min spend of ₹3500.TCA  </p>
            <p className='text-[#ff3f6c] text-[14px] font-bold'>Show More</p>
            </div>
        </div>
       
        <p className='text-[#424553] text-[16px] font-bold my-3'>Choose Payment Mode</p>

        <div className='border border-solid border-grey-100 p-5 rounded'>
        <p className='font-bold text-[14px]'>CREDIT / DEBIT CARD</p>
        <div  className='border border-solid border-grey-100 p-5 rounded'>
      {/* <div className='border border-solid border-grey-100 p-2 w-[100%] my-1' >
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
        navigation={false}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <p className='font-bold text-[14px]'>Bank Offer</p>
            <p className='text-[13px] text-[#424553] ml-6 my-1'> 10% Instant Discount on ICICI Bank Credit Cards and NetBanking on a min spend of ₹3500.TCA  </p>
            <p className='text-[#ff3f6c] text-[14px] font-bold'>Show More</p>
        </SwiperSlide>
        <SwiperSlide>
            <p className='font-bold text-[14px]'>Bank Offer</p>
            <p className='text-[13px] text-[#424553] ml-6 my-1'> 10% Instant Discount on ICICI Bank Credit Cards and NetBanking on a min spend of ₹3500.TCA  </p>
            <p className='text-[#ff3f6c] text-[14px] font-bold'>Show More</p>
        </SwiperSlide>
        <SwiperSlide>
            <p className='font-bold text-[14px]'>Bank Offer</p>
            <p className='text-[13px] text-[#424553] ml-6 my-1'> 10% Instant Discount on ICICI Bank Credit Cards and NetBanking on a min spend of ₹3500.TCA  </p>
            <p className='text-[#ff3f6c] text-[14px] font-bold'>Show More</p>
        </SwiperSlide>
        
      </Swiper>
      </div> */}
       <div>
       <p className='text-[13px]'>Please ensure your card can be used for online transactions.</p>
       <p className='text-[#ff3f6c] text-[12px] font-bold'>Know More</p>
       </div>
       <div>
        <input type="text" placeholder='Card Number' className='border border-solid border-grey-100 p-2 w-[100%] my-3'  />
        <br />
        <input type="text" placeholder='Name on Card'  className='border border-solid border-grey-100 p-2 w-[100%] my-3' />
        <br />
       <div className='flex gap-3' >  
        <input type="number" placeholder="Valid Thru(MM/YY)" className='border border-solid border-grey-100 p-2 w-[50%] my-1' />
        <input type="text"  placeholder='CVV' className='border border-solid border-grey-100 p-2 w-[50%] my-1'/>
       </div>
       <br />
       <button 
        className= 'bg-[#ff3e6c] border rounded border-pink-700 text-white w-[50%] m-auto text-[14px] font-bold h-[40px] mt-3'>
         PAY NOW </button>
       </div>
         
        </div>
           
        </div>
        
         
       
        </div>

        {/* box-2 */}
        <div className='w-[37%] border border-solid border-grey-100 p-5 '>
           <p className='text-[12px] font-bold'>DELIVERY ESTIMATES</p>
           <div className='flex items-center justify-center gap-10 my-3'>
           <img src="https://assets.myntassets.com/h_64,q_100,w_48/v1/assets/images/12504436/2021/1/14/f4c76908-4d09-4560-99d5-f649812b6e7a1610607670185-Roadster-Men-Tshirts-7801610607669087-1.jpg" alt="" />
          <p className='text-[14px] ' >Estimated delivery by <span className='font-bold text-[14px]'> 20 Jan 2024</span></p>
           </div>
           <hr className='m-2' />
           <div className='p-3'>
            <p className='text-[12px] font-bold my-3'>PRICE DETAILS (1 item)</p>
            <div className='w-[100%]'>
              <div className='flex justify-between my-1'>
                <p className='text-[14px]'>Total MRP</p>
                <p className='text-[14px]'> ₹1,399</p>
              </div>
              <div className='flex justify-between my-1'>
                <p className='text-[14px]'>Discount on MRP</p>
                <p className='text-[#03a685] text-[14px]'> ₹1,050</p>
              </div>
              <div className='flex justify-between my-1'>
                <p className='text-[14px]'>Coupon Discount</p>
                <p className='text-[#ff3f6c] text-[14px]'> Apply Coupon </p>
              </div>
              <div className='flex justify-between my-1'>
                <div className='flex'>
                <p className='text-[14px]' >Platform Fee</p>
                <p className='text-[#ff3f6c] text-[14px] font-bold mx-3'> Know More</p>
                </div>
                <p className='text-[14px]' >  ₹20</p>
               
              </div>
              <div className='flex justify-between my-1'>
                <div className='flex'>
                <p className='text-[14px]'>Shopping Fee</p>
                <p className='text-[#ff3f6c] text-[14px] font-bold mx-3'> Know More</p>
                </div>
                <p className='text-[#03a685] text-[14px]'>  FREE</p>
              </div>
              <hr className='my-3' />
              <div className='flex justify-between my-1'>
                <p className='text-[15px] font-bold'>Total Amount</p>
                <p className='text-black font-bold'> ₹349</p>
              </div>
              <button 
        className= 'bg-[#ff3e6c] border rounded border-pink-700 text-white w-[100%] text-[14px] font-bold h-[40px] mt-3'>
          PLACE ORDER </button>

            </div>
           </div>
        </div>

        </div>
        <div className='flex h-[40px] w-[70%] m-auto justify-between'>
            <div className='flex'>
            <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ssl.png" alt="256-bit" />
            <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png" alt="visa" />
            <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png" alt="mastercard" />
            <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png" alt="ae" />
            <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png" alt="dc" />
            <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-nb.png" alt="nb" />
            <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png" alt="cod" />
            <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png" alt="rupay" />
            <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-paypal.png" alt="paypal" />
            <img src="https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png" alt="bhim" />
            </div>
            <div>
                <p>Need Help ? Contact Us</p>
            </div>
        </div>
       
      
   

    </div>
  )
}

export default Payment