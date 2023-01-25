import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getOneProduct} from "../../../redux/ActionCreators/MainActions";
import {useParams} from "react-router-dom";

const ProductDetail = () => {
    const dispatch = useDispatch()
    const detail = useSelector(state => state.main.oneProduct)
    const {id} = useParams()
    useEffect(() => {
        dispatch(getOneProduct(id))
    }, [])
    return (
        <div className='detail'>
            <div className='flex items-start container'>
                <img className='w-1/4 mt-14' src={detail.image} alt=""/>
                <div className='mt-36 text-start ml-10'>
                    <h1 className='font-bold text-gray-900 text-3xl mb-6'>{detail.title}</h1>
                    <p className='text-gray-700'>{detail.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;