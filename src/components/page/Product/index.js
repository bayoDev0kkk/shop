import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ProductCard from "../ProductCard";
import {getProduct} from "../../../redux/ActionCreators/MainActions";

const Product = () => {
    const dispatch = useDispatch()
    const {product} =useSelector(s => s.main)
    useEffect(() => {
        dispatch(getProduct())
    },[])
    return (
        <div className='container'>
           <div className='flex flex-wrap  py-16'>
               {
                   product.map(el => (
                       <ProductCard product={el}/>
                   ))
               }
           </div>
        </div>
    );
};

export default Product;