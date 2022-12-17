import React from 'react';
import Layout from '../../layout/Layout';
import { useAuth } from '../../context/AuthContextProvider';
import './profile.css'

const Profile = () => {
    const auth = useAuth()

    return (
        <Layout>
            {
                auth ? 
                <div className='profile-container'>
                    <div className='profile'>
                        <h2>{auth.name} Profile Page</h2>
                        <p>name: <span>{auth.name}</span></p>
                        <p>email: <span>{auth.email}</span></p>
                        <p>tel: <span>{auth.phoneNumber}</span></p>
                    </div>
                </div> : <p>there is no data!</p>
            }
        </Layout>
    );
};

export default Profile;