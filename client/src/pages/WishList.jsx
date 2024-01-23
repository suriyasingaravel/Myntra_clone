import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const WishList = () => {

    const [data,setData] = useState([]);



    useEffect(()=>{
      axios
      .get("https://myntra-backend-cyan.vercel.app/wishlist/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data.wishlist)
       
        setData(res.data.wishlist);
      })
      .catch((err) => console.log(err));
  
    },[])



  return (
    <div className='w-[90%]  m-auto '>
          <h1 className='text-[16px] font-bold  mt-5'>My WishList : {data.length} Items</h1>
   
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 p-7"> 
      
        {data.length> 0 && data.map((el)=>{
            return (

                <div className="mb-2" key={el._id} >
                <Link to={`/singlepage/${el._id}`}>  <img className="w-[80%]" src={el.image_url} alt={el.subtext} /> </Link>
                {/* <p>{el.subtext}</p> */}
                <div className="my-4 ">
                  {/* <h3 className="text-[16px] mt-1.5 font-bold">{el.brand}</h3> */}
                  <p className="text-[16px]">{el.subtext}</p>
                  <span className="text-[13.5px] font-bold">Rs. {el.price}</span>
                  <strike className="text-[13px] mx-1">Rs.{el.mrp}</strike>
                  <span className="text-[12px] ml-1 text-[#ff905a]">
                    ({el.offer}% OFF)
                  </span>
                </div>
                {/* <button 
        className= 'bg-[#ff3e6c] border rounded border-pink-700 text-white w-[190px] text-[14px] font-bold h-[37px] mt-3'>
         ADD TO BAG </button> */}
                <button 
        className= 'border rounded border-[#ff3e6c] text-[#ff3e6c] w-[190px] text-[14px] font-bold h-[37px] mt-3'>
           ADD TO BAG </button>
            
              </div> 
            )
        })}

    </div>

    </div>
  )
}

export default WishList