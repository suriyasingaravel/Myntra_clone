import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./actionType"



const initialState = {
    products:[],
    isLoading:false,
    isError:false
}



export const productReducer = (state=initialState,{type,payload})=>{

    switch(type){

     case GET_PRODUCTS_REQUEST:
        return {...state, isLoading:true}
     
     case GET_PRODUCTS_FAILURE:
        return {...state, isLoading:false, isError:true}   

    case GET_PRODUCTS_SUCCESS:
        return {...state, isLoading:false, isError:false, products:payload}

      default:
        return state

    }

}