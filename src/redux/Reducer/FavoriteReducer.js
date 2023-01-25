import {ADD_and_DELETE_FAVORITES, ADD_TO_FAVORITES} from "../ActionTypes";

const initialState = {
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
}

export const FavoriteReducer = (state = initialState,action) => {
    switch (action.type) {
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

        default:
            return state
    }
}
