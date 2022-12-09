import React from 'react';
import Layout from '../layout/Layout';
import * as data from '../data.js'

const HomePage = () => {
    const addProductHandler = product => {
        console.log(product);
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
                                            Add to cart
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