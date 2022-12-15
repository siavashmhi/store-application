import React from 'react';
import './input.css'

const Input = ({formik, label, nameProp, errors, touched, type}) => {
    return (
        <div className='form-control'>
            <label>{label}</label>
            <input type={type} name={nameProp}
            {...formik.getFieldProps(nameProp)}
            />
            {
                errors && touched &&
                <div className='error'>{errors}</div>
            }
        </div>
    );
};


export default Input;