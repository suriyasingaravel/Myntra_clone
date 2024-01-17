import axios from "axios"
import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./actionType"



export const getProducts = (paramObj)=> (dispatch)=>{
    dispatch({type:GET_PRODUCTS_REQUEST})
    axios.get(`https://myntra-backend-cyan.vercel.app/products/`, paramObj)
    .then((res)=> {
        console.log(res.data);
        dispatch({type:GET_PRODUCTS_SUCCESS, payload:res.data})
    })
    .catch((err)=> dispatch({type:GET_PRODUCTS_FAILURE}))
}