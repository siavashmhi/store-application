import React from 'react';
import Layout from '../layout/Layout';
import { useProducts } from '../context/ProductContextProvider';

const CartPage = () => {
    const { products } = useProducts()

    return (
        <Layout>
            {
                products.length ? 
                    products.map(item => (
                        <div key={item.id}>
                            <p>{item.name}</p>
                        </div>
                    )) : <p>there is no any product</p>
            }
        </Layout>
    );
};

export default CartPage;