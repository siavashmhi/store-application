import React from 'react';
import Layout from '../layout/Layout';
import { useDispatchProducts, useProducts } from '../context/ProductContextProvider';
import { NavLink } from 'react-router-dom';
import trashIcon from '../assets/images/trash.svg'
import '../assets/styles/cartpage.css'

const CartPage = () => {
    const { products, totalPrice, itemsCounter, checkout} = useProducts()
    const dispatch = useDispatchProducts()

    const renderProductsInCart = item => {
        return (
            <div key={item.id} className='productItem'> 
                <div className='productImage'>
                    <img src={item.image} alt="img"/>
                </div>
                <div className="productDesc">
                    <p>{item.name}</p>
                    <span>$ {item.price * item.quantity}</span>
                </div>
                <div className='productBtnContainer'>
                    {
                        item.quantity > 1 ? 
                        <button onClick={() => dispatch({type: "DECREASE", payload: item})}>-</button> 
                        : <button onClick={() => dispatch({type: "REMOVE", payload: item})}>
                            <img src={trashIcon} alt="icon" style={{width: "20px"}}/>
                        </button>
                        
                    }
                    <button>{item.quantity}</button>
                    <button onClick={() => dispatch({type: "INCREASE", payload: item})}>+</button>
                </div>
            </div>
        )
    }

    return (
        <Layout>
            <main className='mainProductContainer'>
                <div className='mainProductCenter'>
                    <section className='productItemsList'>
                        {
                            products.map(item => (
                                renderProductsInCart(item)
                            ))
                        }
                    </section>
                    <section className='productSummery'>
                        {
                            itemsCounter > 0 && 
                            <section className='summery'>
                                <p>Total Items: <span>{itemsCounter}</span></p>
                                <p>Total Price: <span>{totalPrice}</span></p>
                                <div className='btns-summery'>
                                    <button onClick={() => dispatch({type: "CHECKOUT"})}>Check Out</button>
                                    <button onClick={() => dispatch({type: "CLEAR"})}>Clear</button>
                                </div>
                            </section>
                        }

                        {
                            checkout && 
                            <section className='checkot'>
                                <h3 className='checkout-title'>checkout is successfuly.....</h3>
                                <NavLink to='/'>Back to Shop</NavLink>
                            </section>
                        }

                        {
                            itemsCounter === 0 && !checkout &&
                            <section className='clear'>
                                <h3>there is no any products</h3>
                                <NavLink to='/'>Back to Shop</NavLink>
                            </section>
                        }
                    </section>
                </div>
            </main>
        </Layout>
    );
};

export default CartPage;