import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { userLogin, userRegister } from '../Redux/authentication/action';
import { useToast } from '@chakra-ui/react'

const Signup = () => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("");
  const [address,setAddress] = useState("");
  const [phone,setPhone] = useState("");
  const navigate = useNavigate();

  const toast = useToast()
  
  const dispatch = useDispatch();
  const usersdata = useSelector((store)=> store.authReducer.usersData);


  console.log(usersdata);

 const handleClick = ()=>{
    let newUser = {
      name: name,
      email: email,
      pass:pass,
      address: address,
      phone: phone
    }

     dispatch(userRegister(newUser)).then(()=>{
      toast({
        title: 'Account created.',
        description: "New User has been created successfully",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      navigate("/login")

     })
     .catch(()=>{

      toast({
        title: 'Error creating account.',
        description: 'There was an error creating the account. Please try again.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
        
     })


    // axios.post(`https://myntra-backend-cyan.vercel.app/users/register`, newUser)
    // .then((res)=> {
    //   console.log(res.data);
    //   alert(`User registered successfully`);
    //   navigate("/login")
     
    // })
    // .catch((err)=> console.log(err));

    // setName("");
    // setEmail("");
    // setAddress("")
    // setPass("");
    // setPhone("");
 }



  return (
    <div className='bg-red-50 w-full h-[100vh]'>
    <div className='sm:w-[50%] md:w-[35%] lg:w-[25%] m-auto  bg-white h-[80vh]  '>
        <img   src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/10/26/f96c9b3f-6c5c-4383-8f11-12de043faa501698300150501-Flat_400--1-.jpg" alt="offer-logo" />
        <div>
            <h2 className='text-[20px] font-bold m-4'> Signup</h2>
            <input className='ml-4 mb-2 border border-solid border-grey-200 w-[90%] h-[40px] p-2'
             value={email} onChange={(e)=> setEmail(e.target.value)}
             type="email" placeholder='abc@gmail.com*' />
            <br />
            <input className='ml-4 mb-2 border border-solid border-grey-200 w-[90%] h-[40px] p-2' 
             value={name} onChange={(e)=> setName(e.target.value)}
            type="text" placeholder='Username' /> 
            <br />
            <input className='ml-4 mb-2 border border-solid border-grey-200 w-[90%] h-[40px] p-2'
             value={pass} onChange={(e)=> setPass(e.target.value)}
            type="password" placeholder='Password' /> 
            <br />
            <input className='ml-4 mb-2 border border-solid border-grey-200 w-[90%] h-[40px] p-2'
            value={address} onChange={(e)=> setAddress(e.target.value)}
            type="text" placeholder='Address' /> 
            <br />
            <input className='ml-4 mb-2 border border-solid border-grey-200 w-[90%] h-[40px] p-2'
             value={phone} onChange={(e)=> setPhone(e.target.value)}
            type="text" placeholder='+91  |  Mobile Number*' />
            <p className='text-[13px] m-4'>By continuing, I agree to the
             <span className=' text-[13px] text-[#ff3c6f] font-bold'> Terms of Use</span> & 
            <span className='text-[13px] text-[#ff3c6f] font-bold' >Privacy Policy</span> </p>
        </div>
           
        <button 
        className= 'bg-[#ff3e6c] border rounded  border-pink-700 text-white w-[90%] text-[16px] font-bold h-[40px] ml-4 mt-3'
        onClick={handleClick}
        >
        CREATE ACCOUNT </button>
         <div className='flex'>
          <p className='ml-4 mt-7 text-[13px]'>Have trouble logging in ? </p>
          <span className='text-[#ff3c6f] ml-2 mt-7 text-[13px] font-bold'> Get help</span>
          </div>
    </div>

    </div>
  )
}

export default Signup