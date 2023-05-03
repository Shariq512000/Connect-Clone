import { useState } from "react";
import { TextField , Button } from '@mui/material';
import axios from "axios";
import {Formik , Form , Field , useFormik} from 'formik';
import * as yup from 'yup';


function Signup(){
    const validationSchema = yup.object({
        firstName: yup
        .string("enter a valid Name")
        .required("Name is required"),
        lastName: yup
        .string("Enter a valid Name")
        .required("Name is Required"),
        email: yup
        .string()
        .email("Enter a valid Email")
        .required("Email is required"),
        password: yup
        .string()
        .required()
        .min(6)
        .max(12)
    });
    const formik = useFormik({
        initialValues: {
            firstName:'',
            lastName:'',
            email:'',
            password:''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log("values" , values)
            // axios.post(api/v1/signup,{
            //     firstName: formik.values.firstName,
            //     lastName: formik.values.lastName,
            //     email: formik.values.email,
            //     password: formik.values.password
            // }

            // )
            // .then(response => {
            //     console.log("Response" , response.data);
            //     formik.resetForm()
            // }
            // )
            // .catch(err => {
            //     console.log("Error" , err.data);
            // }

            // )
        }
    })

    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                id="firstName"
                name="firstName"
                label="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
                />
                <br />
                <TextField
                id="lastName"
                name="lastName"
                label="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName} 
                />
                <br />
                <TextField 
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                />
                <br />
                <TextField 
                id="password"
                name="password"
                label="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                />
                <br />
                <br />
                <Button color="primary" variant="outlined" type="submit">
                    Submit
                </Button>
            </form>
        </div>
    )

}

export default Signup;