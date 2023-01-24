import {
    ADD_and_DELETE_FAVORITES,
    ADD_TO_BASKET,
    ADD_TO_FAVORITES, CHOOSE_THE_CURRENCY,
    DELETE_PRODUCT,
    GET_PRODUCT,
    MINUS
} from "../ActionTypes";

const initialState = {
    product: [],
    basket: JSON.parse(localStorage.getItem('basket')) || [],
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    currencies:{
        SOM:1,
        $:0.012,
        RUB:0.8,
        TENGE:5.41,
    },
    defaultCurrency:localStorage.getItem('currency') || 'SOM'

}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT: {
            return {...state, product: action.payload};
        }
        case ADD_TO_BASKET: {
            const found = state.basket.find(el => el.id === action.payload.id)
            if (found) {
                return {
                    ...state, basket: state.basket.map(el => el.id === action.payload.id ?
                        {...el, quantity: el.quantity + 1} : el
                    )
                }
            }
            return {...state, basket: [...state.basket, {...action.payload, quantity: 1}]}
        }
        case MINUS: {
            return {
                ...state, basket: state.basket.map(el => {
                        if (el.id === action.payload) {
                            if (el.quantity > 1) {
                                return {...el, quantity: el.quantity - 1}
                            } else return el
                        } else return el
                    }
                )
            }
        }
        case DELETE_PRODUCT: {
            return {...state, basket: state.basket.filter(el => el.id !== action.payload)}
        }
        case ADD_and_DELETE_FAVORITES: {
            const found = state.favorites.find(el => el.id === action.payload.id)
            if (found) {
                return {...state, favorites: state.favorites.filter(el => el.id !== action.payload.id)}

            } else {
                return {...state, favorites: [...state.favorites, {...action.payload, isLiked: true}]}
            }
        }
        case ADD_TO_FAVORITES: {
            const found = state.favorites.find(el => el.id === action.payload.id)
            if (!found) {
                return {...state, favorites: [...state.favorites, {...action.payload, isLiked: true}]}
            }
            return state
        }
        case CHOOSE_THE_CURRENCY: {
            return {...state,defaultCurrency: action.payload}
        }
        default:
            return state;
    }
}