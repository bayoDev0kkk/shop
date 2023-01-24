import React from 'react';
import {FcEmptyTrash} from "react-icons/fc";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {addToBasket, DeleteFromBasket, MinusQuantity} from "../../redux/ActionCreators";

const BasketRow = ({el}) => {
    const dispatch = useDispatch()
    const {currencies,defaultCurrency} = useSelector(state => state)
    return (
        <tr className="bg-gray-800">
            <th scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap text-white">
                {el.title}
            </th>
            <td className="px-6 py-4">
                <img src={el.image} width={50} alt=""/>
            </td>
            <td className=" flex items-center mt-7 py-4">
                <span
                    onClick={() => dispatch(MinusQuantity(el.id))}
                    className={`mr-2 cursor-pointer text-xl ${el.quantity > 1 ? 'text-blue-600' : ''}`}>
                    <AiOutlineMinus/>
                </span>
                {el.quantity}
                <span
                    onClick={() => dispatch(addToBasket(el))}
                    className='ml-2 cursor-pointer text-xl text-blue-600'>
                    <AiOutlinePlus/>
                </span>
            </td>
            <td className="px-6 py-4">
                {el.price * el.quantity * currencies[defaultCurrency]}
            </td>
            <td className="px-6 py-4 text-xl">
                <FcEmptyTrash onClick={() => dispatch(DeleteFromBasket(el.id))} className='cursor-pointer'/>
            </td>
        </tr>
    );
};

export default BasketRow;