import React from 'react';
import Layout from '../layout/Layout';
import { useDispatchProducts, useProducts } from '../context/ProductContextProvider';
import { BsFillTrashFill } from 'react-icons/bs'
import trashIcon from '../assets/images/trash.svg'
import '../assets/styles/cartpage.css'

const CartPage = () => {
    const { products, totalPrice } = useProducts()
    const dispatch = useDispatchProducts()

    if(!products.length) {
        return (
            <Layout>
                <h2>there is no any product</h2>
            </Layout>
        )
    }

    const renderProductsInCart = item => {
        return (
            <div key={item.id} className='productItem'> 
                <div className='productImage'>
                    <img src={item.image} alt="img"/>
                </div>
                <div className="productDesc">
                    <p>{item.name}</p>
                    <span>$ {item.price * item.quantity}</span>
                </div>
                <div className='productBtnContainer'>
                    {
                        item.quantity > 1 ? 
                        <button onClick={() => dispatch({type: "DECREASE", payload: item})}>-</button> 
                        : <button onClick={() => dispatch({type: "REMOVE", payload: item})}>
                            {/* <BsFillTrashFill /> */}
                            <img src={trashIcon} alt="icon" style={{width: "20px"}}/>
                        </button>
                        
                    }
                    <button>{item.quantity}</button>
                    <button onClick={() => dispatch({type: "INCREASE", payload: item})}>+</button>
                </div>
            </div>
        )
    }

    return (
        <Layout>
            <main className='mainProductContainer'>
                <div className='mainProductCenter'>
                    <section className='productItemsList'>
                        {
                            products.map(item => (
                                renderProductsInCart(item)
                            ))
                        }
                    </section>
                    <section className='productSummery'>
                        {totalPrice}
                    </section>
                </div>
            </main>
        </Layout>
    );
};

export default CartPage;