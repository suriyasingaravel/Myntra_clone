import React from 'react';
import { FaPercent } from 'react-icons/fa';


const Bag = () => {
  return (
    <div className='flex w-[70%] m-auto gap-[30px]  mt-[20px]'>

      {/* box-1 */}
      <div className='w-[63%]'>
        <div className='flex rounded justify-between border border-solid border-grey-100 p-5 my-2'>
            <div >
                <p>Deliver to: <span className='font-bold'>Suriya Singaravel, 638011</span> </p>
                <p className='text-[13px]'>139/6, MRC Building, Nasiyanur Road, Erode.</p>
            </div>
            <div>
            <button 
        className= 'border rounded border-[#ff3e6c] text-[#ff3e6c] w-[190px] text-[14px] font-bold h-[37px] mt-3'>
           CHANGE ADDRESS </button>
            </div>
        </div>
        <div className='border border-solid border-grey-100 p-5 rounded'>
           <p className='font-bold my-1'>Available Offers</p>
           <p className='text-[13px] my-1'>10% Instant Discount on ICICI Bank Credit Cards on a min spend of ₹3500. TCA </p>
           <a className='text-[#ff3e6c] font-bold my-1' href=""> Show More</a>
        </div>
        </div>

        {/* box-2 */}
        <div className='w-[37%] border border-solid border-grey-100 p-5 '>
           <p className='text-[12px] font-bold'>COUPONS</p>
           <div className='flex items-center justify-center gap-10'>
            <p className='font-bold'>Apply Coupons</p>
            <button 
        className= 'border rounded border-[#ff3e6c] text-[#ff3e6c] w-[100px] text-[14px] font-bold h-[30px] mt-3'>
          APPLY</button>
           </div>
           <hr className='m-2' />
           <div className='p-3'>
            <p className='text-[12px] font-bold my-3'>PRICE DETAILS (1 item)</p>
            <div className='w-[100%]'>
              <div className='flex justify-between my-1'>
                <p>Total MRP</p>
                <p> ₹1,399</p>
              </div>
              <div className='flex justify-between my-1'>
                <p>Discount on MRP</p>
                <p className='text-[#03a685]'> ₹1,050</p>
              </div>
              <div className='flex justify-between my-1'>
                <p>Coupon Discount</p>
                <p className='text-[#ff3f6c]'> Apply Coupon </p>
              </div>
              <div className='flex justify-between my-1'>
                <div className='flex'>
                <p >Platform Fee</p>
                <p className='text-[#ff3f6c] font-bold mx-3'> Know More</p>
                </div>
                <p>  ₹20</p>
               
              </div>
              <div className='flex justify-between my-1'>
                <div className='flex'>
                <p>Shopping Fee</p>
                <p className='text-[#ff3f6c] font-bold mx-3'> Know More</p>
                </div>
                <p className='text-[#03a685]'>  FREE</p>
              </div>
              <hr className='my-3' />
              <div className='flex justify-between my-1'>
                <p className='text-[15px] font-bold'>Total Amount</p>
                <p className='text-black font-bold'> ₹369</p>
              </div>
              <button 
        className= 'bg-[#ff3e6c] border rounded border-pink-700 text-white w-[100%] text-[14px] font-bold h-[40px] mt-3'>
          PLACE ORDER </button>

            </div>
           </div>
        </div>
       
      
    </div>
  )
}

export default Bag