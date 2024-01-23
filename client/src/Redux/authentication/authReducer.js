import { USER_REGISTER_FAILURE, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "./actionType"





const initialState = {
    usersData:[],
    isAuth:false,
    isLoading:false,
    isError:false,
    token:null
}



export const authReducer = (state=initialState,{type,payload})=>{

    switch(type){

        case USER_REGISTER_REQUEST:
            return {...state, isLoading:true}

        case USER_REGISTER_FAILURE:
            return {...state, isLoading:false, isError:true}
            
            
        case USER_REGISTER_SUCCESS:
            return {...state, isLoading:false, isError:false, usersData:payload}    


        default:
            return state
    }

}