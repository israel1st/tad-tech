import React from 'react';
import { Link , useNavigate } from 'react-router-dom';


import { useState } from 'react';

import axios from "axios";

import style from './signUp.css';


//Images
import logo from "../Layout/Navigation/assets/newLogo.png";

//Components
import Form from '../Form/form';


function SignUp() {

    const linkStyle = {
        color: '#2960ec'
    }

    const navigate = useNavigate();


    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [errors, setErrors] = useState({});

    const newUser = {
            firstname: fName,
            lastname: lName,
            Email: email,
            Role: role,
            Psw: password,
            Psw2: password2
        }

    const registerUser = (e) => {
        e.preventDefault();

        axios
          .post("/api/users/register", newUser)
          .then(res => navigate('/signin'))
          .catch((err) => {
            const errors = err.response.data;
            setErrors(value => errors)
            console.log(errors.Email)
        })
          
      };

    const onChange = (b,a) => {
        b(value => a);

        // console.log(newUser)
    }

    





    return (
        <div className='SignIn'>

            <div className='contact-us-form'>
                <form onSubmit={registerUser} noValidate>
                    <div className="firstlast">
                        <div className="firstn">
                            <label htmlFor="firstname">First Name</label> <br />
                            <input
                             type="text"
                             onChange={(e)=>{onChange(setFName, e.target.value)}}
                             />
                             <p className='errors'>{errors.firstname}</p>
                        </div>
                        <div className="lastn">
                            <label htmlFor="lastname">Last Name</label> <br />
                            <input
                            type="text"
                            onChange={(e)=>{onChange(setLName, e.target.value)}}
                            />
                            <p className='errors'>{errors.lastname}</p>
                        </div>
                    </div>
                    <div className="email-add">
                        <label htmlFor="email">Email Address</label> <br />
                        <input
                        type="email"
                        onChange={(e)=>{onChange(setEmail, e.target.value)}}
                        />
                        <p className='errors'>{errors.Email}</p>
                    </div>
                    <div className="email-add">
                        <label htmlFor="email">Role</label> <br />
                        <select onChange={(e)=>{onChange(setRole, e.target.value)}}>
                            <option value="">Choose a Role</option>
                            <option value="instructor">Instructor</option>
                            <option value="student">Student</option>
                        </select>
                    </div> <br/>
                    <p className="errors">{errors.Role}</p>
                    <div className="email-add">
                        <label htmlFor="password" >Password</label> <br />
                        <input
                        type="password"
                        onChange={(e)=>{onChange(setPassword, e.target.value)}}
                        />
                        <p className='errors'>{errors.Psw}</p>
                    </div>
                    <div className="email-add">
                        <label htmlFor="password" >Confirm Password</label> <br />
                        <input
                        type="password"
                        onChange={(e)=>{onChange(setPassword2, e.target.value)}}
                        />
                        <p className='errors'>{errors.Psw2}</p>
                    </div>
                    <div className="snd-btn">
                        <button>Submit</button>
                    </div>

                </form>
                {/* <button onClick={registerUser}>test</button> */}
            </div>

            <p><Link to="/signin" style={linkStyle}>Login</Link> here if you already have an account</p>
        </div>
    );

}

export default SignUp;
