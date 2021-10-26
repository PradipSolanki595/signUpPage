import React, { useState, useRef } from 'react';
import { ValidationForm, TextInput, Checkbox } from 'react-bootstrap4-form-validation';
import validator from '../../node_modules/validator'
import { useHistory } from "react-router-dom";

function SignUpFunc() {

    const formRef = useRef();
    let history = useHistory();
    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        password: "",
        isError: false,
        isSuccess:false,
    });

    function handleChange (e) {
         setData({
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e, formData, inputs){
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify(formData));
        alert("Sign up successfully")
        history.push("/login");
    }

    function handleErrorSubmit (e, formData, errorInputs) {
        console.error(errorInputs)
    }


    return (
 
        <ValidationForm onSubmit={ handleSubmit} onErrorSubmit={ handleErrorSubmit} ref={ formRef}>

            <h4 className="text-center mb-4">Creat Your Account</h4>

            <div className="row">
                <div className="col">
                    <div className="form-group">
                        <label htmlFor="first_name">First name*</label>
                        <TextInput name="first_name" id="first_name" placeholder="First name" required
                            value={data.first_name}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="col">
                    <div className="form-group">
                        <label htmlFor="last_name">Last name*</label>
                        <TextInput name="last_name" id="last_name" placeholder="Last name" minLength="4"
                            value={data.last_name}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>


            <div className="form-group">
                <label htmlFor="email">Email*</label>
                <TextInput name="email" id="email" type="email" placeholder="Email"
                    validator={validator.isEmail}
                    errorMessage={{ validator: "Please enter a valid email" }}
                    value={data.email}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="phone">Phone*</label>
                <TextInput name="phone" id="phone" placeholder="Phone" required
                    type="number"
                    minLength={10}
                    value={data.phone}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password*</label>
                <TextInput name="password" id="password" type="password" placeholder="Password" required
                    pattern="(?=.*[A-Z]).{6,}"
                    errorMessage={{ required: "Password is required", pattern: "Password should be at least 6 characters and contains at least one upper case letter" }}
                    value={data.password}
                    onChange={handleChange}
                />
            </div>


            <div className="form-group text-center mt-3">
                <button className="signup_btn btn btn-primary px-5">SIGN UP</button>
            </div>
    </ValidationForm>

    )
}



  export default SignUpFunc