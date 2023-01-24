import React from 'react';
import {SlBasket} from "react-icons/sl";
import {useNavigate} from "react-router-dom";

const NavigateToBasketBtn = () => {
    const navigate = useNavigate()
    return (
        <button onClick={() => navigate('/basket')}
                className="flex items-center text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            перейти в <SlBasket/>
        </button>
    );
};
export default NavigateToBasketBtn;