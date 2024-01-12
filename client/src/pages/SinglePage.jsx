import React from 'react'
import BagIcon from '../Components/BagIcon'
import HeartIcon from '../Components/HeartIcon'
import { CiHeart } from "react-icons/ci";
import TruckIcon from '../Icons/TruckIcon';


const SinglePage = () => {
  return (
    <div className=' w-[95%] m-auto '>
          <p className='text-xs my-5 ml-4 '>Home/ Clothing / Men's Tshirts</p> 
          <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row mt-7'>
          <div className='w-[40%] overflow-hidden'>
          <img  className="transition-transform transform-gpu hover:scale-110 sm:m-auto" src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25072090/2023/9/30/6be97619-12fc-40c3-a91b-b5d5f13ba8181696013416163StormbornMenBlackPrintedRawEdgeT-shirt1.jpg" alt="" />
          </div>
          <div className='w-[60%] sm:mt-5 md:ml-7'>
            <h2 className='text-[24px] font-bold'>Stormborn</h2>
            <p className='text-[20px] text-lightgrey'>Graphic Printed Oversized Drop Shoulder Sleeves Pure Cotton T-shirt</p>
           
            <div className='flex border border-solid border-lightgrey w-[170px] h-[30px] my-3 rounded'>
            <span className='mx-2 font-bold'>4.3 ☆ | </span>
            <p className='mx-1'>758 Ratings</p>
            </div>
            <hr className='my-3' />
            <span className="text-[24px] font-bold">Rs. 758 </span> 
            <span className='text-[18px] mx-1'>MRP </span>
        <strike className="text-[20px] mx-1">  ₹1099</strike>
        <span className="text-[20px] font-bold ml-1 text-[#ff905a]">(20% OFF)</span> 
        <p  className='text-[#03a685] text-[14px] my-3 font-bold'>inclusive of all taxes</p>
        <span className=' text-[16px] font-bold  '>SELECT SIZE </span>
        <span className=' text-[#ff3e6c] text-[14px] font-bold ml-4 '>SIZE CHART > </span>  
        <div className='mt-3 flex gap-2'>
        <button className='rounded-full border border-solid border-gray-300 p-3 m-2 font-bold'>S</button>
        <button className='rounded-full border border-solid border-gray-300 p-3 m-2 font-bold'>M</button>
        <button className='rounded-full border border-solid border-gray-300 p-3 m-2 font-bold'>L</button>
        <button className='rounded-full border border-solid border-gray-300 p-3 m-2 font-bold'>XL</button>
        <button className='rounded-full border border-solid border-gray-300 p-3 m-2 font-bold'>XXL</button>
        </div>
       
        <button 
        className= 'bg-[#ff3e6c] border rounded-md border-pink-700 text-white w-[300px] text-[16px] font-bold h-[55px] mt-3'>
         <BagIcon/>  ADD TO BAG </button>
         <button 
        className= ' border rounded-md border-gray-300  text-black w-[220px] text-[16px] font-semibold h-[55px] mt-3 mx-3'>
         <HeartIcon/>
         WISHLIST
          </button>
          <hr className='my-4' />
         
          <p className='text-[16px] font-bold'>DELIVERY OPTIONS <TruckIcon/> </p>

          <div className=' rounded-md border border-solid border-grey w-[230px] h-[40px] my-3'>
          <input  className='  rounded-md p-2' 
          placeholder='Enter pincode'  />
          <button className='text-[#ff3e6c] font-bold'>Check</button>
          </div>
          <p className='text-[14px]'>Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
          <p className='my-2'>100% Original Products</p>
          <p className='my-2'>Pay on delivery might be available</p>
          <p className='my-2'>Easy 14 days returns and exchanges</p>
          <p className='my-2'>Try & Buy might be available</p>



          </div>
          
        
          </div>
       
    </div>
  )
}

export default SinglePage