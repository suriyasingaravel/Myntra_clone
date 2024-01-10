import React from 'react'
import Sidebar from './Sidebar'
import ProductPage from './ProductPage'

const Products = () => {
  return (
    <div className='w-[100%] ml-2'>
        <p className='text-xs my-3 ml-4'>Home/ Clothing / Men's Tshirts</p>
        <h3 className='text-sm my-5 ml-4 font-bold' >Men's T-shirts</h3>
        <div className='flex w-full '>
            <div className="w-[17%] relative" >
            <Sidebar/>
            </div>
           <div className='w-[83%]'>
           <ProductPage/>
           </div>
            
        </div>
    </div>
  )
}

export default Products