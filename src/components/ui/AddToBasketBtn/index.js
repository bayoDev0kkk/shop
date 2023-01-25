import React from 'react';
import {SlBasket} from "react-icons/sl";
import {useDispatch} from "react-redux";
import {addToBasket} from "../../../redux/ActionCreators/BasketActions";

const AddToBasketBtn = ({product}) => {
    const dispatch = useDispatch()


    return (
        <div>
            <button onClick={() => dispatch(addToBasket(product)) }
                    className="flex items-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                добавить в &nbsp; <SlBasket/>
            </button>
        </div>
    );
};

export default AddToBasketBtn;