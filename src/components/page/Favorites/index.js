import React from 'react';
import ProductCard from "../ProductCard";
import {useSelector} from "react-redux";

const Favorites = () => {
    const {favorites} = useSelector(state => state.favorites)
    return (
        <div className='container'>
            <div className='flex flex-wrap  py-16'>
                {
                    favorites.map(el => (
                        <ProductCard product={el}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Favorites;