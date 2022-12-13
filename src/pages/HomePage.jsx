import React from 'react';
import Layout from '../layout/Layout';
import * as data from '../data.js'
import { useDispatchProducts, useProducts } from '../context/ProductContextProvider';
import { toast } from 'react-toastify'
import { checkInCart } from '../utilities/functions';

const HomePage = () => {
    const cartProducts = useProducts()
    const dispatch = useDispatchProducts()

    const addProductHandler = product => {
        dispatch({type: "ADD_TO_CART", payload: product})
        toast.success(`${product.name} added to cart`)
    }

    return (
        <Layout>
            <main className='homePageContainer'>
                <div className='productList'>
                    {
                        data.products.map((product) => {
                            return (
                                <section key={product.id} className='product'>
                                    <div>
                                        <img src={product.image} alt="img"/>
                                    </div>
                                    <div className='descContainer'>
                                        <p>{product.name}</p>
                                        <p>$ {product.price}</p>
                                        <button className='btn' onClick={() => addProductHandler(product)}>
                                            {
                                                checkInCart(cartProducts, product) ? "In cart" : "Add to cart"
                                            }
                                        </button>
                                    </div>
                                </section>
                            )
                        })
                    }
                </div>
            </main>
        </Layout>
    );
};

export default HomePage;