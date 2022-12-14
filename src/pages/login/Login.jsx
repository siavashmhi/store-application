import React, { useState, useEffect } from 'react';
import Layout from '../../layout/Layout';
import Input from '../../common/input/Input';
import { useAuthDispatch, useAuth } from '../../context/AuthContextProvider';
import { useFormik } from 'formik';
import { initialLoginValues } from '../../utilities/form';
import loginUser from '../../services/loginService';
import { useQuery } from '../../hooks/hooks';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import * as Yup from 'yup'
import './login.css'

const validation = Yup.object({
    email: Yup.string().email("Enter valide email")
    .required("Email is required"),
    password: Yup.string().required("Password is required")
})

const Login = ({history}) => {
    const authDispatch = useAuthDispatch()
    const [myError, setMyError] = useState(null)
    const query = useQuery()
    const redirect = query.get('redirect') || '/'
    const auth = useAuth()

    useEffect(() => {
        if(auth) history.push(redirect)
    }, [redirect, auth])

    const onSubmit = async(values) => {
        try {
            const { data } = await loginUser(values)
            setMyError(null)
            authDispatch(data)
            toast.success('Login is successfuly.')
            history.push(redirect)
        } catch (error) {
            if(error.response && error.response.data.message)
            setMyError(error.response.data.message)
        }
    }

    const formik = useFormik({
        initialValues: initialLoginValues,
        onSubmit,
        validationSchema: validation,
        validateOnMount: true,
        enableReinitialize: true,
    })

    return (
        <Layout>
            <div className='main-login-container'>
                <form className="login-container" onSubmit={formik.handleSubmit}>
                    <Input formik={formik} label='Email' nameProp="email"
                    errors={formik.errors.email}
                    touched={formik.touched.email} type='text'/>

                    <Input formik={formik} label='Password' nameProp="password"
                    errors={formik.errors.password}
                    touched={formik.touched.password} type='password'/>

                    {myError && <p className='loginError'>{myError}</p>}

                    <div>
                        <button type='submit'
                         className='login-btn' disabled={!formik.isValid}>
                            Login
                        </button>
                    </div>
                    <div className='mylink'>
                        <Link className='signup-link' to={`/signup?redirect=${redirect}`}>
                            Not signup yet ?
                        </Link>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default Login;