import React, { useState } from 'react'

const Sidebar = () => {


    const [category, setCategory] = useState("");



  return (
    <div style={{border:"1px solid lightgrey", borderLeft:"none" }} 

    className='text-[14px]  p-10 pt-3 pl-5'>

        <div style={{borderBottom:"1px solid lightgrey",paddingBottom:"5px"}} >
            <h3 className='text-[14px] mb-2 font-bold'>CATEGORIES</h3>
            <input type="checkbox"  /> 
            <label className='ml-2'> Tshirts </label>
            <br />
            <input type="checkbox"  /> 
            <label className='ml-2'>Lounge Tshirts </label>
        </div>

        <div  style={{borderBottom:"1px solid lightgrey",paddingBottom:"5px"}}>
            <h3 className='text-sm my-2 font-bold'>BRANDS</h3>
            <input type="checkbox"  /> 
            <label className='ml-2'> Roadster </label>
            <br />
            <input type="checkbox"  /> 
            <label className='ml-2'>HRX by Hrithik Roshan</label>
            <br />
            <input type="checkbox"  /> 
            <label className='ml-2'>WROGN</label>
            <br />
            <input type="checkbox"  /> 
            <label className='ml-2'>U.S.Polo Assn.</label>
            <br />
            <input type="checkbox"  /> 
            <label className='ml-2'>Tommy Hilfiger</label>
        </div>
        {/* <hr /> */}

        <div  style={{borderBottom:"1px solid lightgrey",paddingBottom:"5px"}}>
            <h3 className='text-sm my-2 font-bold'>PRICE</h3>
            <input type="checkbox"  /> 
            <label className='ml-2'> Rs.139 to Rs.9105 </label>
            <br />
            <input type="checkbox"  /> 
            <label className='ml-2'>Rs.139 to Rs.9105 </label>
            <br />
            <input type="checkbox"  /> 
            <label className='ml-2'>Rs.9105 to Rs.18071 </label>
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
        </div>
    </div>
  )
}

export default Sidebar