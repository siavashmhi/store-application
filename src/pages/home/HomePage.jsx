import React from 'react';
import Product from '../../components/product/Product'
import Layout from '../../layout/Layout';
import * as data from '../../data.js'
import { useDispatchProducts, useProducts} from '../../context/ProductContextProvider';
import { toast } from 'react-toastify'

const HomePage = () => {
    const { products } = useProducts()
    const dispatch = useDispatchProducts()
    
    const addProductHandler = product => {
        dispatch({type: "ADD_TO_CART", payload: product})
        if(products.find(p => p.id === product.id)) {
            toast.error('this product has been added to cart')
        } else {
            toast.success(`${product.name} added to cart`)
        }
    }

    return (
        <Layout>
            <main className='homePageContainer'>
                <div className='productList'>
                    {
                        data.products.map((product) => {
                            return (
                                <Product key={product.id} product={product}
                                  addProductHandler={addProductHandler}/>
                            )
                        })
                    }
                </div>
            </main>
        </Layout>
    );
};

export default HomePage;