import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {FaHeart} from "react-icons/fa";
import AddToBasketBtn from "../../components/ui/AddToBasketBtn";
import NavigateToBasketBtn from "../../components/ui/NavigateToBasketBtn";
import AddToFavoritesBtn from "../../components/ui/AddToFavoritesBtn";
import {likedToBasked} from "../../redux/ActionCreators";
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
    const {basket,currencies,defaultCurrency} = useSelector(s => s)
    const foundProduct = basket.some(el => el.id === product.id)
    return (

        <div
            className="max-w-sm basis-1/5 mx-8 my-5 border-gray-200 rounded-lg shadow-md bg-gray-800 dark:border-gray-700">
            <a>
               <div className='relative'>
                   <img onDoubleClick={likeFn} className="rounded-t-lg" src={product.image} alt=""/>
                   {
                       isLiked ? <FaHeart className='absolute top-1/2 left-[45%] text-6xl text-red-600 rotate-[-12deg] animate-ping '/> : ""
                   }
               </div>
            </a>
            <div className="p-5 text-center">
                <a >
                    <h5 className="mb-2 text-xl font-bold tracking-tight  text-white">{product.title}</h5>
                </a>
                <p className="mb-3 font-normal text-[15px] text-gray-700 text-gray-400">{product.description}</p>
                <p className="mb-3 font-normal text-[20px] text-gray-700 text-gray-400">{product.price * currencies[defaultCurrency]} {defaultCurrency}</p>

             <div className='flex justify-center'>
                 <AddToFavoritesBtn product={product}/>
                 <div >
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