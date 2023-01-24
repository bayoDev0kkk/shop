import React from 'react';
import {useSelector} from "react-redux";
import BasketTable from "./BasketTable";
import {Link} from "react-router-dom";
// import BasketRow from "./BasketRow";

const Basket = () => {
    const {basket} = useSelector(s => s)
    return (
        <div className='container'>
            <div className="relative overflow-x-auto my-14">
                {
                    basket.length ? <BasketTable/> :
                       <Link to={'/'}>
                           <div
                               className='flex justify-center items-center w-[30%] mx-auto border-2 font-bold h-16 mt-28 text-2xl text-gray-700 bg-zinc-500 rounded-lg'>
                               ADD PRODUCTS 
                           </div>
                       </Link>
                }
            </div>

        </div>
    );
};

export default Basket;