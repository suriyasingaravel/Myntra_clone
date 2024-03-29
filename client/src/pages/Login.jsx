import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../Redux/authentication/action';
import { useToast } from '@chakra-ui/react'

const Login = () => {

  const initial = {
    email:"",
    pass: "",
};
const navigate = useNavigate();
const dispatch = useDispatch();
const toast = useToast();


  const [form,setForm]=useState(initial);

  const handleChange=(e)=>{
   setForm({...form,[e.target.name]:e.target.value})

  }

  const handleSubmit=(e)=>{
    e.preventDefault();

    console.log(form)
        // if(form.password.length==0 || form.email.length==0){
        //     alert("Fill Your Login Form Properly!")
        // }
        // else{
           
            axios.post("https://myntra-backend-cyan.vercel.app/users/login",form)
            .then(res=>{
            console.log(res.data.msg, res.data.token);

            if( res.data.token){
              localStorage.setItem("token",res.data.token);
                toast({
                title: 'Login Successful.',
                 description: " User has been logged in successfully",
                 status: 'success',
                 duration: 3000,
                 isClosable: true,
             })
              navigate("/")
            }
            else{
                 toast({
                title: 'Invalid credentials',
                description: 'Please check your username and password and try again.',
                status: 'error',
                duration: 3000,
                isClosable: true,
              });
            }
           

            })
            .catch((err) =>alert("Wrong Credentials"));

            // dispatch(userLogin(form))
            // .then(()=>{
            //   toast({
            //     title: 'Login Successful.',
            //     description: " User has been logged in successfully",
            //     status: 'success',
            //     duration: 9000,
            //     isClosable: true,
            //   })
            //   navigate("/login")
        
            //  })
            //  .catch(()=>{
        
            //   toast({
            //     title: 'Invalid credentials',
            //     description: 'Please check your username and password and try again.',
            //     status: 'error',
            //     duration: 9000,
            //     isClosable: true,
            //   });
                
            //  })

            setForm(initial);
        // }
  }

  const {pass,email}=form;


  return (
    <div className='bg-red-50 w-full h-[100vh]'>
    <div className='sm:w-[50%] md:w-[35%] lg:w-[25%] m-auto  bg-white h-[80vh]  '>
        <img src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/10/26/f96c9b3f-6c5c-4383-8f11-12de043faa501698300150501-Flat_400--1-.jpg" alt="offer-logo" />
        <div>
            <h2 className='text-[20px] font-bold m-4'>Login or Signup</h2>
            <input className='ml-4 mb-2 border border-solid border-grey-200 w-[90%] h-[40px] p-2'
             type="text" placeholder='Email *' name='email' value={email} onChange={handleChange} />
            <br />
            <input className='ml-4 mb-2 border border-solid border-grey-200 w-[90%] h-[40px] p-2' 
            type="text" placeholder='Password*' name='pass' value={pass} onChange={handleChange} />
            <br />
            {/* <input className='ml-4 mb-2 border border-solid border-grey-200 w-[90%] h-[40px] p-2' type="text" placeholder='+91  |  Mobile Number*' /> */}
            <p className='text-[13px] m-4'>By continuing, I agree to the
             <span className=' text-[13px] text-[#ff3c6f] font-bold'> Terms of Use</span> & 
            <span className='text-[13px] text-[#ff3c6f] font-bold' >Privacy Policy</span> </p>
        </div>
           
        <button 
        className= 'bg-[#ff3e6c] border rounded  border-pink-700 text-white w-[90%] text-[16px] font-bold h-[40px] ml-4 mt-3'
        onClick={handleSubmit}
        >
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