import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const SweatshirtsSidebar = () => {

    const [searchParams, setSeacrhParams] = useSearchParams();
    const [brand, setBrand] = useState(searchParams.getAll("brand") || []);
   


    const handlebrand = (e)=>{
        const {value} = e.target;
        let newbrand = [...brand];

         if(newbrand.includes(value)){
            newbrand = newbrand.filter((el)=> el!==value);
         }
         else{
            newbrand.push(value);
         }


        setBrand(newbrand);
        // console.log(brand);
    }


    useEffect(()=>{
  
        let params ={
            brand: brand
        }

        setSeacrhParams(params)


    },[brand])



  return (
    <div style={{border:"1px solid lightgrey", borderLeft:"none" }} 

    className='text-[14px]  p-10 pt-3 pl-5 sticky top-0'>

        <div style={{borderBottom:"1px solid lightgrey",paddingBottom:"5px"}} >
            <h3 className='text-[14px] mb-2 font-bold'>CATEGORIES</h3>
            <input type="checkbox"  /> 
            <label className='ml-2'> Tshirts </label>
            <br />
            <input type="checkbox"  /> 
            <label className='ml-2'>Lounge Tshirts </label>
        </div>

        <div  style={{borderBottom:"1px solid lightgrey",paddingBottom:"5px"}} >
            <h3 className='text-sm my-2 font-bold'>BRANDS</h3>
            <input type="checkbox" value={"Jac & Jones"} onChange={handlebrand}
             checked={brand.includes("Jac & Jones")}  /> 
            <label className='ml-2'> Jack & Jones </label>
            <br />
            <input type="checkbox" value={"Roadster"} onChange={handlebrand}
             checked={brand.includes("Roadster")} /> 
            <label className='ml-2'> Roadster </label>
            <br />
            <input type="checkbox" value={"HRX by Hrithi Roshan"} onChange={handlebrand} 
             checked={brand.includes("HRX by Hrithi Roshan")} /> 
            <label className='ml-2'>HRX by Hrithik Roshan</label>
            <br />
            <input type="checkbox"  value={"WROGN"} onChange={handlebrand} 
             checked={brand.includes("WROGN")} /> 
            <label className='ml-2'>WROGN</label>
            <br />
            <input type="checkbox" value={"U.S. Polo Assn."} onChange={handlebrand} 
             checked={brand.includes("U.S. Polo Assn.")} /> 
            <label className='ml-2'>U.S.Polo Assn.</label>
            <br />
            <input type="checkbox" value={"HERE&NOW"}  onChange={handlebrand} 
             checked={brand.includes("HERE&NOW")} /> 
            <label className='ml-2'> HERE&NOW</label>
            <br />
            <input type="checkbox" value={"Tommy Hilfiger"}  onChange={handlebrand} 
             checked={brand.includes("Tommy Hilfiger")} /> 
            <label className='ml-2'>Tommy Hilfiger</label>
        </div>
        {/* <hr /> */}

        <div  style={{borderBottom:"1px solid lightgrey",paddingBottom:"5px"}}>
            <h3 className='text-sm my-2 font-bold'>PRICE</h3>
            <input type="checkbox"  /> 
            <label className='ml-2'> Rs.100 to Rs.300 </label>
            <br />
            <input type="checkbox"  /> 
            <label className='ml-2'>Rs.301 to Rs.700 </label>
            <br />
            <input type="checkbox"  /> 
            <label className='ml-2'>Rs.701 to Rs.1000 </label>
            <br />
            <input type="checkbox"  /> 
            <label className='ml-2'>More than Rs.1000 </label>

        </div>

        <div  >
            <h3 className='text-sm my-2 font-bold'>DISCOUNT RANGE</h3>
            <input type="checkbox"  /> 
            <label className='ml-2'> 10% and above </label>
            <br />
            <input type="checkbox"  /> 
            <label className='ml-2'>20% and above </label>
            <br />
            <input type="checkbox"  /> 
            <label className='ml-2'>30% and above </label>
            <br />
            <input type="checkbox"  /> 
            <label className='ml-2'>40% and above </label>
            {/* <h3 className='text-sm my-2 font-bold'>DISCOUNT RANGE</h3>
            <input type="checkbox"  /> 
            <label className='ml-2'> 10% and above </label>
            <br />
            <input type="checkbox"  /> 
            <label className='ml-2'>20% and above </label>
            <br />
            <input type="checkbox"  /> 
            <label className='ml-2'>30% and above </label>
            <br />
            <input type="checkbox"  /> 
            <label className='ml-2'>40% and above </label> */}
        </div>
    </div>
  )
}

export default SweatshirtsSidebar