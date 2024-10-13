import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import axios from 'axios';

// import jwt_decode from "jwt-decode";



//Style
import style from './dashboard.css';



//Images
import profilepic from '../Homepage/Testimonials/assets/profile.png';


import { useCookies } from 'react-cookie';



function EditProfile() {

    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    // const isAuthenticated = (cookies.isAuthenticated === 'true');

    const navigate = useNavigate();


    const [user, setUser] = useState([]);
   


    const getUser = (a, b) => {
        axios.get("api/users/fetchusers")
            .then((response) => {
                setUser(response.data.filter(user => { return user.email === cookies.Email }));
            });
    };

    useEffect(() => {
        getUser()
    }, []);

    useEffect(() => {    
   window.scroll(0,0);
}, []);


    const [image, setImage] = useState();

    async function sendImg(e) {
        e.preventDefault();



        let imageUrl = "";

        const instance = axios.create()

        const data = new FormData()
        data.append("file", image);
        data.append("id", user[0]?._id);

  if (image === undefined) {
    alert('Please, choose a file');
  } else {
     await axios.post("/api/users/uploaddp", data, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }).then(res=>{console.log(res);navigate('/dashboard');
        setTimeout(()=>window.location.reload(),1200)
        })
            .catch(err => {
                console.log(err.response)
            })

  }


       
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
      //   Log user out
    const logoutUser = () => {
        // Remove token from local storage
        localStorage.removeItem("jwtToken");
        // Remove auth header for future requests
        setAuthToken(false);
        // Set current user to empty object {} which will set isAuthenticated to false
        setCookie('isAuthenticated', false, { path: '/' });
        removeCookie('FirstName', { path: '/' });
        removeCookie('LastName', { path: '/' });
        removeCookie('Email', { path: '/' });
        removeCookie('Role', { path: '/' });
        window.location.reload();
      };

    const [oldPassword, setOldPassword] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [errors, setErrors] = useState({});

    const newPsw = {
        id: user[0]?._id,
        OPsw: oldPassword,
        Psw: password,
        Psw2: password2
    }


    const updatePassword = (e) => {
        e.preventDefault();

        axios
          .post("/api/users/updatepassword", newPsw)
          .then(res =>{
            if (res.status === 200) {
            logoutUser();
            alert("Please, Log in to continue");
            console.log(res)
            }})
          .catch((err) => {
            const errors = err.response.data;
            setErrors(value => errors)
    
        })
          
      };

    const onChange = (b,a) => {
        b(value => a);

        console.log(newPsw)
    }


    // console.log(user, user[0]?._id);

    return (
        <div className="imageupload">
            <h3>Update Profile Photo</h3>
            <form
                onSubmit={sendImg}
            >
                <input
                    type="file"
                    name="picture-message"
                    id="pictureMsg"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                />
                <br/>

                <button
                   
                >change</button>
            </form>

            <br/> <br/>

            {/* <hr/> */}

            <br/> <br/>

            <h3>New Password</h3>
            <form
                onSubmit={updatePassword}
            >
                <input
                    placeholder='Old Password'
                    type="password"
                        onChange={(e)=>{onChange(setOldPassword, e.target.value)}}
                /> <br/>
                <p className='errors'>{errors.passwordincorrect}</p> 
                 <br/>
                <input
                    placeholder='New Password'
                    type="password"
                    onChange={(e)=>{onChange(setPassword, e.target.value)}}
                /> <br/>
                   <p className='errors'>{errors.Psw}</p> 
                 <br/>
                <input
                    placeholder='Confirm New Password'
                    type="password"
                    onChange={(e)=>{onChange(setPassword2, e.target.value)}}
                /> <br/>
                   <p className='errors'>{errors.Psw2}</p> 
                   <p className='errors'>{errors.samepassword}</p>
                 <br/>
                <button
                    
                >change</button>
            </form>
        </div>
    )

}


export default EditProfile;
