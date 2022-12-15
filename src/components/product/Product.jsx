import React from 'react';
import { useProducts } from '../../context/ProductContextProvider';
import { checkInCart } from '../../utilities/functions';
import './product.css'

const Product = ({product, addProductHandler}) => {
    const { products } = useProducts()

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
                        checkInCart(products, product) ? "In cart" : "Add to cart"
                    }
                </button>
            </div>
        </section>
    );
};

export default Product;