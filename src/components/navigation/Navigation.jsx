import React from 'react';
import { useAuth } from '../../context/AuthContextProvider';
import { NavLink } from 'react-router-dom';
import shopCart from '../../assets/images/shop.svg'
import { useProducts } from '../../context/ProductContextProvider';
import './navigation.css'

const Navigation = () => {
    const { itemsCounter } = useProducts()
    const userData = useAuth()

    return (
        <header className='navigation'>
            <nav className='navbar'>
                <ul className='navContainer'>
                    <li><NavLink className='product-li' to='/'>Products</NavLink></li>
                    <li>
                        <NavLink to={userData ? '/profile' : '/login'}>
                            {userData ? "Profile" : "Login / signup"}
                        </NavLink>
                    </li>
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