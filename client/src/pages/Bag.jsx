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
           <a className='text-[#ff3e6c] text-[14px] font-bold my-1' href=""> Show More</a>
        </div>
        <div className='flex justify-between border border-solid border-grey-100 p-5 my-2 '>
          <div className='flex'>
          <input type="checkbox" />
          <p className='mx-3 font-bold'>1/1 ITEMS SELECTED</p>
         </div> 
          <div className='flex'>
            <p className='text-[12px] font-bold'>REMOVE | </p>
            <p className='mx-3 text-[12px] font-bold'>MOVE TO WISHLIST </p>
          </div>
          </div>
          <div className='flex border border-solid border-grey-100 p-5 gap-5 rounded'>
           <div className='w-[20%]'>
            <img className='object-contain' src="https://assets.myntassets.com/w_111,h_148,dpr_1.2000000476837158,q_60,c_limit,fl_progressive/h_148,q_60,w_111/v1/assets/images/12504436/2021/1/14/f4c76908-4d09-4560-99d5-f649812b6e7a1610607670185-Roadster-Men-Tshirts-7801610607669087-1.jpg" alt="bag-image" />
           </div>
           <div className='w-[70%]'>
           <p className=' text-[14px] font-bold my-1'>Roadster</p>
           <p className='text-[14px]  text-[#282c3f] my-1'> Men Green & Navy Blue Striped Polo T-Shirt </p>
           <p className='text-[12px]  text-[#94969f] my-1'>Sold by: GARG ACYRYLICS LTD. - SJIT</p>
           <div className='flex gap-3 my-1'>
           {/* <button className='border border-solid bg-[#f5f5f6] w-[100px]  p-5 rounded'>Size : L</button> */}
           <button className='text-[#282c3f] text-[14px] font-bold '>Size : L</button>   
           <button className='text-[#282c3f] text-[14px] font-bold '> Qty: 1 </button>
           </div>
           <div className='flex mt-1.5 my-1'>
           <h3 className="text-[14px]  font-bold ">₹349</h3>
           <strike className="text-[14px] text-[#94969f] mx-2 "> ₹1399 </strike>
            <p className="text-[14px] text-[#94969f] ">₹1,050 OFF</p>
           </div>
            <p className='text-[12px] my-1'> <span className='text-[#282c3f]  font-bold'>  14 days</span> return available</p>
            <p className='text-[12px] my-1'>Delivery by <span className='font-bold'> 19 Jan 2024 </span></p>
           </div>
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
  )
}

export default Bag