import React from 'react';
import Layout from '../../layout/Layout';
import { useFormik } from 'formik';
import Input from '../../common/input/Input';
import { initialLoginValues } from '../../utilities/form';
import * as Yup from 'yup'
import './login.css'

const onSubmit = value => { console.log(value) }

const validation = Yup.object({
    email: Yup.string().email("Enter valide email")
    .required("Email is required"),
    password: Yup.string().required("Password is required")
})

const Login = () => {
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

                    <div>
                        <button type='submit'
                         className='login-btn' disabled={!formik.isValid}>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default Login;