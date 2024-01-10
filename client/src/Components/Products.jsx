import React from 'react'
import Sidebar from './Sidebar'
import ProductPage from './ProductPage'

const Products = () => {
  return (
    <div className='w-[95%] m-auto'>
        <p className='text-xs my-3'>Home/ Clothing / Men's Tshirts</p>
        <h3 className='text-sm my-5 font-bold' >Men's T-shirts</h3>
        <div className='flex w-full'>
            <div className="w-[15%]">
            <Sidebar/>
            </div>
           <div className='w-[85%]'>
           <ProductPage/>
           </div>
            
        </div>
    </div>
  )
}

export default Products