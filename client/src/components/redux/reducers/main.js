// import { getProductsreducer } from "./Productsreducer";
// import {combineReducers} from "redux"

// const rootreducers =combineReducers({
//     getProductsdata:getProductsreducer
// })

// export  default rootreducers;


import { getProductsReducer } from "./Productreducer";

import {combineReducers} from "redux";

const rootreducers = combineReducers({
    getproductsdata : getProductsReducer
});

export default rootreducers;