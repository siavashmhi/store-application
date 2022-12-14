import React from 'react';
import { NavLink } from 'react-router-dom';
import shopCart from '../assets/images/shop.svg'
import { useProducts } from '../context/ProductContextProvider';
import '../assets/styles/navigation.css'

const Navigation = () => {
    const { itemsCounter } = useProducts()

    return (
        <header className='navigation'>
            <nav className='navbar'>
                <ul className='navContainer'>
                    <li><NavLink to='/'>Products</NavLink></li>
                    <li><NavLink to='/signup'>Sign up</NavLink></li>
                    <li><NavLink to='/login'>Login</NavLink></li>
                </ul>
                <div className='cartIconContainer'>
                    <NavLink to='/cart'>
                        <img src={shopCart} alt="img" className='cart-icon'/>
                    </NavLink>
                    <span>{itemsCounter}</span>
                </div>
            </nav>
        </header>
    );
};

export default Navigation;