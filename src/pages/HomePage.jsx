import React from 'react';
import Layout from '../layout/Layout';
import * as data from '../data.js'
import { useDispatchProducts } from '../context/ProductContextProvider';

const HomePage = () => {
    const dispatch = useDispatchProducts()

    const renderProducts = product => {
        return (
            <section key={product.id} className='product'>
                <div>
                    <img src={product.image} alt="img"/>
                </div>
                <div className='descContainer'>
                    <p>{product.name}</p>
                    <p>$ {product.price}</p>
                    <button className='btn' onClick={() => dispatch({type: "ADD_TO_CART", payload: product})}>
                        Add to cart
                    </button>
                </div>
                <button onClick={() => dispatch({type: "INCREASE", payload: product})}>
                    +
                </button>
            </section>
        )
    }

    return (
        <Layout>
            <main className='homePageContainer'>
                <div className='productList'>
                    {
                        data.products.map((product) => {
                            return (
                                renderProducts(product)
                            )
                        })
                    }
                </div>
            </main>
        </Layout>
    );
};

export default HomePage;