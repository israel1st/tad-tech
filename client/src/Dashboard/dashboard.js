import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import axios from 'axios';

import jwt_decode from "jwt-decode";



//Style
import style from './dashboard.css';



//Images
import profilepic from '../Homepage/Testimonials/assets/profile.png';
// import thispic from '../../src/files/1678964356521_Blog Image (1).png';

import { useCookies } from 'react-cookie';

const classDetails = {
    dept: "Web Development",
    link: "webdevelopment",
    studentID: "TD-TCH412ar67WBC"
}


function Dashboard() {

    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const isAuthenticated = (cookies.isAuthenticated === 'true');



const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug","Sep","Oct","Nov","Dec"]
let dateFormat =
months[parseInt(cookies.JoinDate.slice(5,7))-1]
+ " "
+ cookies.JoinDate.slice(8,10)
+ ", " 
+cookies.JoinDate.slice(0,4);

// console.log(dateFormat);

// const token = localStorage.getItem("jwtToken");

// const decoded = jwt_decode(token);

// console.log(decoded);

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

// console.log(user);

useEffect(() => {    
    window.scroll(0,0);
 }, []);

    return (
        <div className='dashboard'>
          
            <div className='dash-main'>
                <div className='reg-course'>
                    <h2>Profile Details</h2> <br /> <br />
                    {
                user[0]?.profileimage?  <img className='prof-dpp' src={`/files/${user[0]?.profileimage}`}/> : <h1 className='dpp-alt'>{cookies.FirstName.slice(0,1)}{cookies.LastName.slice(0,1)}</h1>
              }
               
               

                    <h3>{cookies.Role.charAt(0).toUpperCase()+ cookies.Role.slice(1)}</h3>
                    <p><b>First Name:</b> {cookies.FirstName.charAt(0).toUpperCase()+ cookies.FirstName.slice(1)}</p> <br />
                    <p><b>Last Name:</b> {cookies.LastName.charAt(0).toUpperCase()+ cookies.LastName.slice(1)}</p> <br />
                    <p><b>Email:</b> <i>{cookies.Email}</i></p> <br />
                    {/* <p><b>Address:</b> 50 Apara Link Road, Port Harcourt</p> <br /> */}
                    <p><b>Registered:</b> {dateFormat}</p> <br />
                    <div className='online'>
                        <div></div>
                        <p>online</p>
                    </div>

                    <Link to="/editprofile"><button>Make Changes</button></Link>
                </div>
                {/* <img src={`./${user[0].profileimage}`}/> */}
                <div className='reg-course'>
                    <h2>Registered Course</h2> <br /> <br />
                    <p><b>Course:</b> {user[0]?.course}</p> <br />
                    <p><b>Student ID:</b> {user[0]?.studentID}</p> <br />
                    <p><b>Start Date:</b> 11th September 2022</p> <br />
                    <p><b>End Date:</b> 10th January 2023</p> <br />
                    <p><b>Current Week:</b> 5</p> <br />
                    <Link to={`/class/${user[0]?.course.replace(/\s/g,'').toLowerCase()}`}><button>Enter Class</button></Link>
                </div>
             
            </div>

        </div>
    );

}

export default Dashboard;
