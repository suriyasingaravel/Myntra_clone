import React from 'react'

const SinglePage = () => {
  return (
    <div>
          <p className='text-xs my-3 ml-4'>Home/ Clothing / Men's Tshirts</p> 
          <div className='flex'>
          <div className='w-[50%] flex'>
          <img  src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25072090/2023/9/30/6be97619-12fc-40c3-a91b-b5d5f13ba8181696013416163StormbornMenBlackPrintedRawEdgeT-shirt1.jpg" alt="" />
          {/* <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/25072090/2023/9/30/6be97619-12fc-40c3-a91b-b5d5f13ba8181696013416163StormbornMenBlackPrintedRawEdgeT-shirt1.jpg" alt="" /> */}
          </div>
          <div className='w-[50%]'>
            <h2>Stormborn</h2>
            <p>Graphic Printed Oversized Drop Shoulder Sleeves Pure Cotton T-shirt</p>
            <div className='flex'>
            <span>4.3 ☆ </span>
            <p>758 Ratings</p>
            </div>
            <span className=" text-[13.5px] font-bold">Rs. 758 </span> 
        <strike className="text-[13px] mx-1">Rs.1099</strike>
        <span className="text-[12px] ml-1 text-[#ff905a]">(20% OFF)</span> 
        <p  className='text-[#03a685] font-bold'>inclusive of all taxes</p>
        <span>SELECT SIZE</span>
        <span className='ml-2'>SIZE CHART</span>  
        <div >
        <button className='rounded-full border border-solid border-gray-500 p-3 m-2 font-bold'>S</button>
        <button className='rounded-full border border-solid border-gray-500 p-3 m-2 font-bold'>M</button>
        <button className='rounded-full border border-solid border-gray-500 p-3 m-2 font-bold'>L</button>
        <button className='rounded-full border border-solid border-gray-500 p-3 m-2 font-bold'>XL</button>
        <button className='rounded-full border border-solid border-gray-500 p-3 m-2 font-bold'>XXL</button>
        </div>         
        <button className= ' border border-pink-700 m-2'>ADD TO BAG </button>
        <button className= ' border border-pink-700 m-2'>WISHLIST </button>
          </div>
          </div>
       
    </div>
  )
}

export default SinglePage