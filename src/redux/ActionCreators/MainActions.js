import {
   CHOOSE_THE_CURRENCY, GET_ONE_PRODUCT,
   GET_PRODUCT,
} from "../ActionTypes";
import axios from "axios";
export const getProduct = () => {
   return async (dispatch) => {
      try{
         const res = await axios(`https://fakestoreapi.com/products/`)
         const {data} = await res
         dispatch({type:GET_PRODUCT, payload: data})
      }catch (e){
         console.log(e)
      }
   }
   // return {type:GET_PRODUCT, payload: data}
}
export const getOneProduct = (id) => {
   return async (dispatch) => {
      try{
         const res = await axios(`https://fakestoreapi.com/products/${id}`)
         const {data} = await res
         dispatch({type:GET_ONE_PRODUCT, payload: data})
      }catch (e){
         console.log(e)
      }
   }
   // return {type:GET_PRODUCT, payload: data}
}


/** Currency **/
export const chooseCurrency = (e) => {
   let currency = e.target.value
   localStorage.setItem('currency',currency)
   return {type:CHOOSE_THE_CURRENCY,payload:e.target.value}
}

//https://fakestoreapi.com/products/