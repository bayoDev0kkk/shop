import React from 'react';
import BasketRow from "./BasketRow";
import {useSelector} from "react-redux";

const BasketTable = () => {
    const {currencies,defaultCurrency} = useSelector(s => s.main)
    const {basket} = useSelector(s => s.basket)
    const totalPrice = basket.reduce((acc,el) => {
        return acc + el.price * el.quantity
    },0) * currencies[defaultCurrency]
    return (
        <div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-500 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3 rounded-l-lg">
                        Product name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Image
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Qty
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Price <span className='text-yellow-500'>({defaultCurrency})</span>
                    </th>
                    <th scope="col" className="px-6 py-3 rounded-r-lg">

                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    basket.map(el => <BasketRow el={el}/>)
                }
                </tbody>
                <tfoot>
                <tr className=" text-xs text-gray-700 uppercase bg-gray-500 dark:bg-gray-700 dark:text-gray-400">
                    <th scope="row" className="rounded-l-lg px-6 py-3 text-base">Total</th>
                    <td className="px-6 py-3"></td>
                    <td className="px-6 py-3">

                    </td>
                    <td className="px-6 py-3">
                        {totalPrice} {defaultCurrency}
                    </td>
                    <td className="px-6 py-3 rounded-r-lg"></td>
                </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default BasketTable;