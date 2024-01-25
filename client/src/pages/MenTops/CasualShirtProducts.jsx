import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import CasualShirtSidebar from '../../Components/Men Tops/CasualShirt/CasualShirtSidebar';
import CasualShirtProductPage from '../../Components/Men Tops/CasualShirt/CasualShirtProductPage';



const CasualShirtProducts = () => {

  const [searchParams, setSeacrhParams] = useSearchParams();
  const [order,setOrder] = useState(searchParams.get("order")||"");
  


  const handleChange = (e)=>{
        const {value} = e.target;
        console.log(value);
        setOrder(e.target.value);
  }


  useEffect(()=>{
    let params ={ }
    order && (params.order = order)

  setSeacrhParams(params)

  },[order])

  return (
    <div className='w-[100%] ml-2'>
        <p className='text-xs my-3 ml-4'>Home/ Clothing / Men's Jeans</p>
        <h3 className='text-sm my-5 ml-4 font-bold' >Men's Jeans</h3>
        <div className='flex justify-between w-[95%] m-auto my-5'>
          <p className='text-[16px] font-bold'>FILTERS</p>

          <select className='border border-solid border-gray-100 cursor-pointer' value={order}
           onChange={handleChange}>
            <option value=""> Sort by Price </option>
            <option value="asc">Price : Low to High </option>
            <option value="desc">Price : High to Low  </option>
          </select>

        </div>
        <hr />
        <div className='flex w-full '>

            <div className=" sm:w-[50%] md:w-[30%] lg:w-[17%] relative" >
          <CasualShirtSidebar/>
            </div>
           <div className=' sm:w-[50%] md:w-[70%] lg:w-[83%]'>

           <CasualShirtProductPage/>
           </div>
            
        </div>
    </div>
  )
}

export default CasualShirtProducts