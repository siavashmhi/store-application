import React, { useState } from 'react';
import { useFormik } from 'formik';
import { initialValues, validationSchema} from '../../utilities/form';
import signupUser from '../../services/signupService';
import { toast } from 'react-toastify';
import { useAuthDispatch } from '../../context/AuthContextProvider';
import Input from '../../common/input/Input';
import Layout from '../../layout/Layout';
import { useQuery } from '../../hooks/hooks';
import { Link } from 'react-router-dom';
import './signup.css'


const Signup = ({history}) => {
    const authDispatch = useAuthDispatch()
    const [myError, setMyError] = useState(null)
    const query = useQuery()
    const redirect = query.get('redirect') || '/'
    const onSubmit = async (values) => {
        const {name, email, password, phoneNumber} = values
        const userData = {
            name,
            email,
            password,
            phoneNumber,
        }

       try {
        const { data } = await signupUser(userData)
        setMyError(null)
        authDispatch(data)
        toast.success('Signup is successfuly.')
        history.push(redirect)

       } catch (error) {
        if(error.response && error.response.data.message) {
            setMyError(error.response.data.message)
        }
       }
    }

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true,
        enableReinitialize: true,
    })

    if(myError) toast.error(`${myError}`)

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

                    {myError && <p className='myError'>{myError}</p>}

                    <div>
                        <button className='submitBtn'
                         type='submit' disabled={!formik.isValid}>
                            submit
                        </button>
                    </div>
                    <div className='login-page-link'>
                        <Link to='/login'>go to login page</Link>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default Signup;