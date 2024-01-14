import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./authentication/authReducer";
import { productReducer } from "./products/productReducer";
import { cartReducer } from "./cart/cartReducer";

const rootReducer = combineReducers({authReducer, productReducer, cartReducer})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));