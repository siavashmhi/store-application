import React from 'react';
import Layout from '../../layout/Layout';
import { useDispatchProducts, useProducts } from '../../context/ProductContextProvider';
import { renderProductsInCart } from '../../utilities/functions';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './cartpage.css'

const CartPage = () => {
    const { products, totalPrice, itemsCounter, checkout} = useProducts()
    const dispatch = useDispatchProducts()

    //for checkout in cart component
    const checkOutHandler = () => {
        dispatch({type: "CHECKOUT"})
        toast.success('checkout is successfuly.')
    }

    //for clear cart in cart component
    const clearCartHandler = () => {
        dispatch({type: "CLEAR"})
        toast.success('your cart has been cleared.')
    }

    if(checkout) {
        return (
            <Layout>
                <div className='checkoutContainer'>
                    <section className='checkout'>
                        <h3 className='checkout-title'>checkout is successfuly</h3>
                        <Link className='link' to='/'>Back to Shop</Link>
                    </section>
                </div>
            </Layout>
        )
    }

    if(itemsCounter === 0 && !checkout) {
        return (
            <Layout>
                <div className="checkoutContainer">
                    <section className='clear'>
                        <h3>there is no any products</h3>
                        <Link className='link' to='/'>Back to Shop</Link>
                    </section>
                </div>
            </Layout>
        )
    }

    return (
        <Layout>
            <main className='mainProductContainer'>
                <div className='mainProductCenter'>
                    <section className='productItemsList'>
                        {
                            products.map(item => (
                                renderProductsInCart(item, dispatch)
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
                                    <button onClick={() => checkOutHandler()}>Check Out</button>
                                    <button className='clearBtn' onClick={() => clearCartHandler()}>Clear</button>
                                </div>
                            </section>
                        }
                    </section>
                </div>
            </main>
        </Layout>
    );
};

export default CartPage;