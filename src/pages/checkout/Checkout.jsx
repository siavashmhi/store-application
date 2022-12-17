import React from 'react';
import Layout from '../../layout/Layout';
import { useAuth } from '../../context/AuthContextProvider';
import './checkout.css'

const Checkout = () => {
    const auth = useAuth()
    return (
        <Layout>
            {
                auth ? 
                    <div className='checkout-page-container'>
                        <div className='checkout-page'>
                            <p>name: <span>{auth.name}</span></p>
                            <p>email: <span>{auth.email}</span></p>
                            <p>tel: <span>{auth.phoneNumber}</span></p>
                            <h2>checkout is successfuly.</h2>
                        </div>
                    </div> : <p>there is no data!</p>
            }
        </Layout>
    );
};

export default Checkout;