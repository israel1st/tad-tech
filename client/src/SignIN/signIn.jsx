import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


import { useCookies } from 'react-cookie';

import { useState } from 'react';

import axios from "axios";

import jwt_decode from "jwt-decode";

import style from './signIn.css';


//Images
import logo from "../Layout/Navigation/assets/newLogo.png";


//Components
import Form from '../Form/form';




function SignIn() {
  
    const [cookies, setCookie] = useCookies(['user']);


   const printCookies = () => {
    console.log(cookies)
   }

    const navigate = useNavigate();

    const [userDetails, setUserDetails] = useState({});
    
    const [email, setEmail] = useState("");
   
    const [password, setPassword] = useState("");
    
    const [errors, setErrors] = useState({});

    const logUser = {
        Email: email,
        Psw: password,
    }

    const setAuthToken = token => {
        if (token) {
          // Apply authorization token to every request if logged in
          axios.defaults.headers.common["Authorization"] = token;
        } else {
          // Delete auth header
          delete axios.defaults.headers.common["Authorization"];
        }
      };

    // Login - get user token
const loginUser = (e) => {

    e.preventDefault();

    axios
      .post("/api/users/login", logUser)
      .then(res => {
        // Save to localStorage
        // Set token to localStorage
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        // Set token to Auth header
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set current user
        // dispatch(setCurrentUser(decoded));
        console.log(res.data);
        setCookie('isAuthenticated', res.data.success, { path: '/' });
        setCookie('FirstName', res.data.userFirstName, { path: '/' });
        setCookie('LastName', res.data.userLastName, { path: '/' });
        setCookie('Email', res.data.userEmail, { path: '/' });
        setCookie('Role', res.data.userRole, { path: '/' });
        setCookie('JoinDate', res.data.userJoinDate, { path: '/' });

        navigate('/dashboard');
        window.location.reload();

      })
      .catch(err => {
        const errors = err.response.data;
        setErrors(value => errors)
    
    });

  };
  
  
  
  
  // User loading
//   const setUserLoading = () => {
//     return {
//       type: USER_LOADING
//     };
//   };
  
// //   Log user out
//   const logoutUser = () => {
//     // Remove token from local storage
//     localStorage.removeItem("jwtToken");
//     // Remove auth header for future requests
//     setAuthToken(false);
//     // Set current user to empty object {} which will set isAuthenticated to false
//     removeCookie('cookie-name',{path:'/'});
//     removeCookie('isAuthenticated', { path: '/' });
//     removeCookie('FirstName', { path: '/' });
//     removeCookie('LastName', { path: '/' });
//     removeCookie('Email', { path: '/' });
//     removeCookie('Role', { path: '/' });
//   };


const onChange = (b,a) => {
    b(value => a);

    // console.log(logUser)
}



    const linkStyle = {
        color: '#2960ec',
    }

    return (
        <div className='SignIn'>

{/* <button onClick={printCookies}> print cookies </button>  */}
{/* <h1>{cookies.FirstName}</h1> */}

            <div className='contact-us-form'>
                <form onSubmit={loginUser} noValidate>
                    
                    <div className="email-add">
                        <label htmlFor="email">Email Address</label> <br />
                        <input
                        type="email"
                        onChange={(e)=>{onChange(setEmail, e.target.value)}}
                        />
                        <p className='errors'>
                            {errors.Email}
                            {errors.emailnotfound}
                        </p>
                    </div>
                    <div className="email-add">
                        <label htmlFor="password" >Password</label> <br />
                        <input
                        type="password"
                        onChange={(e)=>{onChange(setPassword, e.target.value)}}
                        />
                        <p className='errors'>
                            {errors.Psw}
                            {errors.passwordincorrect}
                        </p>
                    </div>
                    <div className="snd-btn">
                        <button>Submit</button>
                    </div>

                </form>
            </div>


            <p><Link style={linkStyle}>Forgot Password?</Link></p> <br />

            <p>or <Link to="/signup" style={linkStyle}>sign up</Link> if you don't have an account yet</p>

        </div>
    );

}

export default SignIn;
