import React from 'react';
import Layout from '../layout/Layout';
import * as data from '../data.js'
import '../styles/cartpage.css'

const CartPage = () => {
    return (
        <Layout>
            <main className='carPageContainer'>
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

export default CartPage;