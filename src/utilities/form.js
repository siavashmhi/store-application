import * as Yup from 'yup'

const initialValues = {
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    confirmPassword: "",
}

//validation form data with yup pakage
const validationSchema = Yup.object({
    name: Yup.string().required('Name is required')
    .min(6, "length of name is not valide"),
    phoneNumber: Yup.string().required("Phone Number is required")
    .matches(/^[0-9]{11}$/, 'Invalide phone number'),
    email: Yup.string().email("Enter valide email")
    .required("Email is required"),
    password: Yup.string().required("Password is required")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    "your password do not strong!"),
    confirmPassword: Yup.string().required('Confirm Password is required')
    .oneOf([Yup.ref('password'), null], "Your password do not match!"),
})


export {initialValues, validationSchema}