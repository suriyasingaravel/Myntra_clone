import React from 'react'

const Login = () => {
  return (
    <div className='bg-red-50 w-full]'>
    <div className='sm:w-[50%] md:w-[35%] lg:w-[25%] m-auto mt-7 bg-white h-[500px]  '>
        <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/10/26/f96c9b3f-6c5c-4383-8f11-12de043faa501698300150501-Flat_400--1-.jpg" alt="offer-logo" />
        <div>
            <h2 className='text-[20px] font-bold m-4'>Login or Signup</h2>
            <input className='ml-4 mb-2 border border-solid border-grey-200 w-[90%] h-[40px] p-2' type="text" placeholder='+91  |  Mobile Number*' />
            <p className='text-[13px] m-4'>By continuing, I agree to the
             <span className=' text-[13px] text-[#ff3c6f] font-bold'> Terms of Use</span> & 
            <span className='text-[13px] text-[#ff3c6f] font-bold' >Privacy Policy</span> </p>
        </div>
           
        <button 
        className= 'bg-[#ff3e6c] border rounded  border-pink-700 text-white w-[90%] text-[16px] font-bold h-[40px] ml-4 mt-3'>
         CONTINUE </button>
         <div className='flex'>
          <p className='ml-4 mt-7 text-[13px]'>Have trouble logging in ? </p>
          <span className='text-[#ff3c6f] ml-2 mt-7 text-[13px] font-bold'> Get help</span>
          </div>
    </div>

    </div>
  )
}

export default Login