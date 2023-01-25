import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {FaHeart} from "react-icons/fa";
import AddToBasketBtn from "../../ui/AddToBasketBtn";
import NavigateToBasketBtn from "../../ui/NavigateToBasketBtn";
import AddToFavoritesBtn from "../../ui/AddToFavoritesBtn";
import {likedToBasked} from "../../../redux/ActionCreators/FavoritesActions";
import {Link} from "react-router-dom";

const ProductCard = ({product}) => {
    const dispatch = useDispatch()
    const [isLiked,setIsLaked] = useState(false)
    const likeFn = () => {
        dispatch(likedToBasked(product))
        if (!product.isLiked){
            setIsLaked(true)
            setTimeout(() => setIsLaked(false),1000)
        }
    }
    const {currencies,defaultCurrency} = useSelector(s => s.main)
    const {basket} = useSelector(s => s.basket)
    const foundProduct = basket.some(el => el.id === product.id)
    return (

        <div
            className="relative max-w-sm basis-1/5 mx-8 my-5 border-gray-200 rounded-lg shadow-md bg-gray-800 dark:border-gray-700">
            <a>
               <div className='relative'>
                  <Link to={`/${product.id}`}> <img style={{
                      width:'100%',
                      height:'320px'
                  }} onDoubleClick={likeFn} className="rounded-t-lg" src={product.image} alt=""/></Link>
                   {
                       isLiked ? <FaHeart className='absolute top-1/2 left-[40%] text-6xl text-red-600 rotate-[-12deg] animate-ping '/> : ""
                   }
               </div>
            </a>
            <div className="p-5 text-center">
                <a >
                    <h5 className="mb-2 text-xl font-bold tracking-tight  text-white">{product.title.slice(0,36)}</h5>
                </a>
                <p className="mb-10 font-normal text-[20px] text-gray-700 text-gray-400">{Math.round(product.price * currencies[defaultCurrency])} {defaultCurrency}</p>
             <div className='absolute bottom-2 left-8  flex justify-center'>
                 <AddToFavoritesBtn product={product}/>
                 <div>
                     {
                         foundProduct ? <NavigateToBasketBtn/> :
                             <AddToBasketBtn product={product}/>
                     }
                 </div>
             </div>
            </div>
        </div>

    );
};

export default ProductCard;