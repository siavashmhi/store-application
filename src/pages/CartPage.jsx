import React from 'react';
import Layout from '../layout/Layout';
import { useDispatchProducts, useProducts } from '../context/ProductContextProvider';
import { renderProductsInCart, checkOutInCart, clearCartInCart} from '../utilities/functions';
import { toast } from 'react-toastify';
import '../assets/styles/cartpage.css'

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

                        {checkout && checkOutInCart()}

                        {itemsCounter === 0 && !checkout && clearCartInCart()}

                    </section>
                </div>
            </main>
        </Layout>
    );
};

export default CartPage;