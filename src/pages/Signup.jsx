import React from 'react';
import { useFormik } from 'formik';
import { initialValues, validationSchema} from '../utilities/form';
import Input from '../common/input/Input';
import Layout from '../layout/Layout';
import '../assets/styles/signup.css'

const onSubmit = value => {
    console.log(value);
}

const Signup = () => {
    const formik = useFormik({
        initialValues: initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true,
        enableReinitialize: true,
    })

    return (
        <Layout>
            <div className="main-form-container">
                <form className="form-container" onSubmit={formik.handleSubmit}>
                    <Input formik={formik} label='Name' nameProp='name'
                    errors={formik.errors.name}
                    touched={formik.touched.name} type='text'/>

                    <Input formik={formik} label='Phone Number' nameProp="phoneNumber"
                    errors={formik.errors.phoneNumber}
                    touched={formik.touched.phoneNumber} type='tel'/>

                    <Input formik={formik} label='Email' nameProp="email"
                    errors={formik.errors.email}
                    touched={formik.touched.email} type='text'/>

                    <Input formik={formik} label='Password' nameProp="password"
                    errors={formik.errors.password}
                    touched={formik.touched.password} type='password'/>

                    <Input formik={formik} label='Confirm Password' nameProp="confirmPassword"
                    errors={formik.errors.confirmPassword}
                    touched={formik.touched.confirmPassword} type='password'/>
                </form>
            </div>
        </Layout>
    );
};

export default Signup;