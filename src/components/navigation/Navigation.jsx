import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiShoppingCart as Cart } from 'react-icons/fi'
import './navigation.css'
import { useProducts } from '../../context/ProductContextProvider';

const Navigation = () => {

    const { itemsCounter } = useProducts()

    return (
        <header className='navigation'>
            <nav className='navbar'>
                <ul className='navContainer'>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/cart'>Cart</NavLink>
                    </li>
                    <p>{itemsCounter}</p>
                </ul>
                <Cart fontSize='1.5rem' className='cart-icon' />
            </nav>
        </header>
    );
};

export default Navigation;