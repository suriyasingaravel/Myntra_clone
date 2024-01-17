import React from 'react';
import { FaPercent } from 'react-icons/fa';


const Address = () => {
  return (
    <div>
    <div className='flex w-[70%] m-auto gap-[30px]  mt-[20px]'>

      {/* box-1 */}
      <div className='w-[63%]'>
        <div className='flex justify-between items-center'>
        <p className='text-[18px] font-bold'> Select Delivery Address </p>
        <button 
        className= 'border rounded border-[#424553] text-[#424553] w-[190px] text-[12px] font-bold h-[37px] mt-3'>
           ADD NEW ADDRESS </button>
        </div>
        <p className='text-[#535766] text-[12px] font-bold my-2'>DEFAULT ADDRESS</p>
        
        <div className=' rounded justify-between border border-solid border-grey-100 p-5 my-3'>
        <div>
            <div className='flex gap-3' >
                <input type="radio" />
                <p className='font-bold text-[14px]'>Suriya Singaravel </p>
            </div>
            <p className='text-[13px] text-[#424553] ml-6 my-1'>139/6, MRC Building, Near S.R.Fancy Store, Nasiyanur Road,</p>
            <p className='text-[13px] text-[#424553] ml-6'>Erode, Tamilnadu-638011</p>
            <p className='text-[13px] text-[#424553] ml-6 mt-3'>Mobile : <span className='font-bold'> 8883259467 </span></p>
            </div>
            <li className='text-[14px] text-[#424553] my-3'>Pay on delivery available</li>
            <div className='flex gap-3 ml-3'>
            <button 
        className= 'border rounded border-[#424553] text-[#424553] w-[90px] text-[12px] font-bold h-[33px] mt-3'>
           REMOVE </button>
           <button 
        className= 'border rounded border-[#424553] text-[#424553] w-[80px] text-[12px] font-bold h-[33px] mt-3'>
          EDIT </button>

            </div>
        </div>
       
        <p className='text-[#535766] text-[12px] font-bold my-3'>OTHER ADDRESS</p>

        <div className='border border-solid border-grey-100 p-5 rounded'>
        <div className='flex gap-3' >
                <input type="radio" />
                <p className='font-bold text-[14px]'>Suriya Singaravel </p>
            </div>
            <p className='text-[13px] text-[#424553] ml-6 my-1'>139/6, MRC Building, Near S.R.Fancy Store, Nasiyanur Road,</p>
            <p className='text-[13px] text-[#424553] ml-6'>Erode, Tamilnadu-638011</p>
            <p className='text-[13px] text-[#424553] ml-6 mt-3'>Mobile : <span className='font-bold'> 8883259467 </span></p>
           
        </div>
        <div className='flex justify-between border border-solid border-grey-100 p-5 my-2 '>
         <button className='text-[#ff3f6c] font-bold'>+Add New Address</button>
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
          CONTINUE </button>

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

export default Address