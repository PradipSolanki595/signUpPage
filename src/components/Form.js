import React, { useState} from 'react';
import { ValidationForm, TextInput } from 'react-bootstrap4-form-validation';
import validator from 'validator'


function Form(props) {


    const [data, setData] = useState({
        first_name: "",
        last_name: "",
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


    return (
 
        <ValidationForm data-testid="form" id="form" onSubmit={props.onSubmit}  >

            <h4 className="text-center mb-4">Creat Your Account</h4>

            <div className="row">
                <div className="col">
                    <div className="form-group">
                        <label htmlFor="first_name">First name*</label>
                        <TextInput name="first_name" id="first_name" placeholder="First name" required
                        data-testid="firstname-input"
                            value={data.first_name}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="col">
                    <div className="form-group">
                        <label htmlFor="last_name">Last name*</label>
                        <TextInput name="last_name" id="last_name" placeholder="Last name" minLength="4"
                        data-testid="lastname-input"
                            value={data.last_name}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>


            <div className="form-group">
                <label htmlFor="email">Email*</label>
                <TextInput name="email" id="email" type="email" placeholder="Email"
                    data-testid="email-input"
                    validator={validator.isEmail}
                    errorMessage={{ validator: "Please enter a valid email" }}
                    value={data.email}
                    onChange={handleChange}
                />
            </div>


            <div className="form-group">
                <label htmlFor="password">Password*</label>
                <TextInput name="password" id="password" type="password" placeholder="Password" required
                    data-testid="password-input"
                    pattern="(?=.*[A-Z]).{6,}"
                    errorMessage={{ required: "Password is required", pattern: "Password should be at least 6 characters and contains at least one upper case letter" }}
                    value={data.password}
                    onChange={handleChange}
                />
            </div>


            <div className="form-group text-center mt-3">
                <button className="signup_btn btn btn-primary px-5" type="submit" onClick={props.onSubmit} >SIGN UP</button>
            </div>

    </ValidationForm>
        
    

    )
}



  export default Form



  