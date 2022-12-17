import React, { useState, useEffect } from 'react';
import Product from '../../components/product/Product'
import Layout from '../../layout/Layout';
import * as data from '../../data.js'
import getProductsFromDb from '../../services/productService';
import { useDispatchProducts, useProducts} from '../../context/ProductContextProvider';
import { toast } from 'react-toastify'

const HomePage = () => {
    //this is products data in mongodb
    const [mydata, setMyData] = useState([])
    
    const { products } = useProducts()
    const dispatch = useDispatchProducts()

    useEffect(() => {
        const getData = async() => {
            try {
                const { data } = await getProductsFromDb()
                setMyData(data)
            } catch (error) {
                console.log(error);
            }
        }

        getData()
    }, [ ])
    
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