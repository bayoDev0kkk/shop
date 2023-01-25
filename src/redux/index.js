import {createStore,combineReducers,applyMiddleware} from "redux";
import {MainReducer} from "./Reducer/MainReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {BasketReducer} from "./Reducer/BasketReducer";
import {FavoriteReducer} from "./Reducer/FavoriteReducer";
import thunk from "redux-thunk";

export const store = createStore(combineReducers({
    main: MainReducer,
    basket: BasketReducer,
    favorites: FavoriteReducer,
}),composeWithDevTools(applyMiddleware(thunk)))