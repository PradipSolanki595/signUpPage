import React, { useState, useRef, useEffect } from 'react';
import { ValidationForm, TextInput, Checkbox } from 'react-bootstrap4-form-validation';
import validator from '../../node_modules/validator'
import { useHistory } from "react-router-dom";

function LogIn() {


    let history = useHistory();
    const formRef = useRef();
    const [userData, setUserData] = useState({})
    const [isError, setisError] = useState(false)
    const [data, setData] = useState({
        email: "",
        password: "",
        isError: false,
        isSuccess:false,
    });



    useEffect(() => {
        setUserData(JSON.parse(localStorage.getItem('user')))
      }, []);


    function handleChange (e) {
         setData({
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e, formData, inputs){
        e.preventDefault();
        if(localStorage.getItem('user')){
            if((userData.email == formData.email) && (userData.password == formData.password )){
                 history.push("/profile");
            } else { alert("Error!  Email not Found Or Wrong Password")}
        }
        else setisError(true)
        
    
    } 

    function handleErrorSubmit (e, formData, errorInputs) {
        console.error(errorInputs)
    }


    return (
 
        
        <ValidationForm onSubmit={ handleSubmit} onErrorSubmit={ handleErrorSubmit} ref={ formRef} style={{width : "320px"}}>

            <h4 className="text-center mb-4">Log In</h4>

            <div className="form-group">
                <label htmlFor="email">Email*</label>
                <TextInput name="email" id="email" type="email" placeholder="Email"
                    validator={validator.isEmail} 
                    errorMessage={{validator:"Please enter a valid email"}}
                    value={ data.email}
                    onChange={ handleChange}
                    />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password*</label>
                <TextInput name="password" id="password" type="password" placeholder="Password" required  
                    pattern="(?=.*[A-Z]).{6,}"
                    errorMessage={{required:"Password is required", pattern: "Password should be at least 6 characters and contains at least one upper case letter"}}
                    value={ data.password}
                    onChange={handleChange}
                />
            </div>


            <div className="form-group text-center mt-3">
                <button className="login_btn btn btn-primary px-5">Log In</button>
            </div>

            { isError ? 
            <div className="alert alert-danger m-3" role="alert">
             <strong> Error! </strong> User not registed <a href="#" onClick={()=> history.push('/signup')} className="alert-link">Sign up</a> to creat new account.
         </div> : null }
            

        </ValidationForm>
    )

}



  export default LogIn