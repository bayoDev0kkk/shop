import {ADD_TO_BASKET, DELETE_PRODUCT, MINUS} from "../ActionTypes";

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