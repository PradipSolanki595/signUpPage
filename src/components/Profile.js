import React, { useState, useRef, useEffect } from 'react';
import { ValidationForm, FileInput } from 'react-bootstrap4-form-validation';
import validator from '../../node_modules/validator'
import { useHistory } from "react-router-dom";
import user from "../img/user.svg"

function Profile() {


    let history = useHistory();

    function handleLogOut(){
        localStorage.removeItem('user')
        history.push("/login");
    }

    const [userData, setUserData] = useState({})

    useEffect(() => {
        setUserData(JSON.parse(localStorage.getItem('user')))
    }, []);

    useEffect(()=>{
        if(!localStorage.getItem('user'))
        {
            history.push("/login");
        }
    }, []);

    const [imageChange, setImageChange] = useState({ file: '', imagePreviewUrl: user })

    function _handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            setImageChange({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file)
    }

    let { imagePreviewUrl } = imageChange;


    return (
        <div className="profile_content">

            <div className="text-right" style={{textAlign : "right"}}>
                <button className="logout_btn btn btn-primary " onClick={handleLogOut}>Log Out</button>
            </div>


            <div className="card">
                <h3 className="mb-5">My Profile</h3>
                <img className="card-img-side m-3" width="140px" src={imagePreviewUrl} alt="Card image cap" />

                <div class="file-input">
                    <input type="file" id="file" className="file"
                        onChange={(e) => _handleImageChange(e)} />
                    <label for="file"> <i class="fas fa-pencil-alt"></i> Change Profile </label>
                </div>

                <div className="card-body">
                    <table className="table table-borderless">
                        <tbody>
                            <tr>
                                <th scope="row"> First Name</th>
                                <td>{userData.first_name}</td>
                            </tr>
                            <tr>
                                <th scope="row"> Last Name</th>
                                <td>{userData.last_name}</td>
                            </tr>
                            <tr>
                                <th scope="row"> Phone </th>
                                <td>{userData.phone}</td>
                            </tr>
                            <tr>
                                <th scope="row"> Email </th>
                                <td>{userData.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>



            </div>
        </div>
    )

}



  export default Profile