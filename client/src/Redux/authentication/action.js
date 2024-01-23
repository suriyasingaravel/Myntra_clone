import axios from "axios";
import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_REGISTER_FAILURE, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "./actionType";


export const userRegister = (newUser)=> (dispatch)=>{

    return new Promise((resolve,reject)=>{
   dispatch({type:USER_REGISTER_REQUEST});
    axios.post(`https://myntra-backend-cyan.vercel.app/users/register`, newUser)
    .then((res)=> {  
      console.log(res.data);
      dispatch({type:USER_REGISTER_SUCCESS, payload:res.data});
      resolve(true)
    //   alert(`User registered successfully`);
    //   navigate("/login")
    })
    .catch((err)=> {
        console.log(err)
        dispatch({type:USER_REGISTER_FAILURE})
        resolve(false)
    });

})

}


// export const userLogin = (form)=> (dispatch)=>{

//     return new Promise((resolve,reject)=>{
//     dispatch({type:USER_LOGIN_REQUEST});

//    axios.post("https://myntra-backend-cyan.vercel.app/users/login",form)
//    .then(res=>{
//    console.log(res.data.msg, res.data.token);
//    localStorage.setItem("token",res.data.token);
//      resolve(true);
//    })
//    .catch((err) =>{
//       resolve(false);
//     });

   
    // axios.post(`https://myntra-backend-cyan.vercel.app/users/register`, newUser)
    // .then((res)=> {  
    //   console.log(res.data);
    //   dispatch({type:USER_REGISTER_SUCCESS, payload:res.data});
    //   resolve(true)
    // //   alert(`User registered successfully`);
    // //   navigate("/login")
     
    // })
    // .catch((err)=> {
    //     console.log(err)
    //     dispatch({type:USER_REGISTER_FAILURE})
    //     resolve(false)
    // });

// })

// }


