import React from 'react';
import { NavLink } from 'react-router-dom';
import shopCart from '../../assets/images/shop.svg'
import './navigation.css'
import { useProducts } from '../../context/ProductContextProvider';

const Navigation = () => {

    const { itemsCounter } = useProducts()

    return (
        <header className='navigation'>
            <nav className='navbar'>
                <ul className='navContainer'>
                    <li><NavLink to='/'>Products</NavLink></li>
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