import React from 'react'
import Sidebar from './Sidebar'
import ProductPage from './ProductPage'

const Products = () => {
  return (
    <div className='w-11/12 m-auto'>
        <p className='text-xs my-3'>Home/ Clothing / Men's Tshirts</p>
        <h3 className='text-sm my-5 font-bold' >Men's T-shirts</h3>
        <div className='flex w-full'>
            <div className="w-[20%]">
            <Sidebar/>
            </div>
           <div className='w-[80%]'>
           <ProductPage/>
           </div>
            
        </div>
    </div>
  )
}

export default Products