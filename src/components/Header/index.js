import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {chooseCurrency} from "../../redux/ActionCreators";

const Header = () => {
    const dispatch = useDispatch()
    const {defaultCurrency} = useSelector(s => s)
    const selectValues = {
        $:'USA',
        RUB:'RUB',
        SOM:'KGS',
        TENGE:'KZT',
    }
    return (
        <header>
            <nav className=" border-gray-200 px-4 lg:px-6 py-5 bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9"
                             alt="Flowbite Logo"/>
                        <span
                            className="self-center text-xl font-semibold whitespace-nowrap text-white">MOTION STORE</span>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <select onChange={(e) => dispatch(chooseCurrency(e))} id="countries"
                                className="bg-gray-500 border border-gray-700 text-gray-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                            {
                                Object.keys(selectValues).map(el => (
                                    <option value={el} selected={defaultCurrency === el}>{selectValues[el]}</option>
                                ))
                            }

                            {/*<option value="$" selected={defaultCurrency === '$'}>USA</option>*/}
                            {/*<option value="RUB" selected={defaultCurrency === 'RUB'}>RUB</option>*/}
                            {/*<option value="SOM" selected={defaultCurrency === "SOM"}>KGS</option>*/}
                            {/*<option value="TENGE" selected={defaultCurrency === "TENGE"}>KZT</option>*/}
                        </select>
                    </div>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                         id="mobile-menu-2">
                        <div className="header-menu flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <NavLink to='/'
                                   className="block py-2 pr-4 pl-3 text-gray-500 text-xl rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                                   aria-current="page">Home</NavLink>

                                <NavLink to="/favorites"
                                   className="block py-2 pr-4 pl-3 text-gray-500 text-xl border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                    Favorites</NavLink>

                                <NavLink to="/basket"
                                   className="block py-2 pr-4 pl-3 text-gray-500 text-xl border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                    Basket</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;