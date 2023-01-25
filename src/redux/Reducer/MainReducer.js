import {
    CHOOSE_THE_CURRENCY, GET_ONE_PRODUCT,
    GET_PRODUCT,
} from "../ActionTypes";

const initialState = {
    product: [],
    oneProduct: {},
    currencies:{
        SOM:86,
        $:1,
        RUB:68,
        TENGE:462,
    },
    defaultCurrency:localStorage.getItem('currency') || '$'

}

export const MainReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT: {
            return {...state, product: action.payload};
        }
        case GET_ONE_PRODUCT:{
            return {...state,oneProduct: action.payload}
        }
        case CHOOSE_THE_CURRENCY: {
            return {...state,defaultCurrency: action.payload}
        }
        default:
            return state;
    }
}