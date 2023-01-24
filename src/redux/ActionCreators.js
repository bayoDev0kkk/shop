import {
   ADD_and_DELETE_FAVORITES,
   ADD_TO_BASKET,
   ADD_TO_FAVORITES,
   CHOOSE_THE_CURRENCY,
   DELETE_PRODUCT, GET_PRODUCT,
   MINUS
} from "./ActionTypes";
export const getProduct = (data) => {
   return {type:GET_PRODUCT, payload: data}
}

/** Basket **/
export const addToBasket = (product) => {
   let basket = JSON.parse(localStorage.getItem('basket')) || []
   const found = basket.find(el => el.id === product.id)
   if (found){
      basket = basket.map(el => el.id === product.id ? {...el, quantity: el.quantity + 1}: el)
   }else {
      basket = [...basket, {...product, quantity: 1}]
   }
   localStorage.setItem('basket',JSON.stringify(basket))
   return {type: ADD_TO_BASKET, payload:product}

}
export const MinusQuantity = (id) => {
   let basket = JSON.parse(localStorage.getItem('basket')) || []
   basket = basket.map(el => {
      if (el.id === id){
         if (el.quantity > 1){
            return {...el, quantity: el.quantity - 1}
         }else return el
      }else return el
   })
   localStorage.setItem('basket', JSON.stringify(basket))
   return  {type: MINUS, payload: id}
}

export const DeleteFromBasket = (id) => {
   let basket = JSON.parse(localStorage.getItem('basket')) || []
   basket = basket.filter(el => el.id !== id)
   localStorage.setItem('basket',JSON.stringify(basket))
   return  {type:DELETE_PRODUCT, payload: id}
}

/** Favorites **/
export const likedToBasked = (item) => {
   let favorites = JSON.parse(localStorage.getItem('favorites')) || []
   const found = favorites.find(el => el.id === item.id)
      if (!found){
         favorites = [...favorites, {...item, isLiked: true}]
      }
      localStorage.setItem('favorites', JSON.stringify(favorites))
   return {type: ADD_TO_FAVORITES, payload: item}
}
export const addToFavorites = (item) => {
   let favorites = JSON.parse(localStorage.getItem('favorites')) || []
   const found = favorites.find(el => el.id === item.id)
   if (!found){
      favorites = [...favorites,{...item, isLiked: true}]
   }else {
      favorites = favorites.filter(el => el.id !== item.id)
   }
   localStorage.setItem('favorites',JSON.stringify(favorites))
   return {type: ADD_and_DELETE_FAVORITES, payload: item}
}

/** Currency **/
export const chooseCurrency = (e) => {
   let currency = e.target.value
   localStorage.setItem('currency',currency)
   return {type:CHOOSE_THE_CURRENCY,payload:e.target.value}
}