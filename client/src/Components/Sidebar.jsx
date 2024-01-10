import React, { useState } from 'react'

const Sidebar = () => {


    const [category, setCategory] = useState("");

    

  return (
    <div className='text-[14px]'>
        <div  >
            <h3 className='text-sm mb-2 font-bold'>CATEGORIES</h3>
            <input type="checkbox"  /> 
            <label className=' ml-2'> Tshirts </label>
            <br />
            <input type="checkbox"  /> 
            <label>Lounge Tshirts </label>
        </div>

        <div>
            <h3 className='text-sm mb-2 font-bold'>BRANDS</h3>
            <input type="checkbox"  /> 
            <label> Roadster </label>
            <br />
            <input type="checkbox"  /> 
            <label>HRX by Hrithik Roshan</label>
            <br />
            <input type="checkbox"  /> 
            <label>WROGN</label>
            <br />
            <input type="checkbox"  /> 
            <label>U.S.Polo Assn.</label>
            <br />
            <input type="checkbox"  /> 
            <label>Tommy Hilfiger</label>
        </div>

        <div>
            <h3 className='text-sm my-2 font-bold'>PRICE</h3>
            <input type="checkbox"  /> 
            <label> Rs.139 to Rs.9105 </label>
            <br />
            <input type="checkbox"  /> 
            <label>Rs.139 to Rs.9105 </label>
            <br />
            <input type="checkbox"  /> 
            <label>Rs.9105 to Rs.18071 </label>

        </div>

        <div>
            <h3 className='text-sm my-2 font-bold'>DISCOUNT RANGE</h3>
            <input type="checkbox"  /> 
            <label> 10% and above </label>
            <br />
            <input type="checkbox"  /> 
            <label>20% and above </label>
            <br />
            <input type="checkbox"  /> 
            <label>30% and above </label>
            <br />
            <input type="checkbox"  /> 
            <label>40% and above </label>
        </div>
    </div>
  )
}

export default Sidebar