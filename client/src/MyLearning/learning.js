import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


import { useCookies } from 'react-cookie';

import style from './learning.css';

import PreviousTopics from '../ClassApp/prevclasses';



function MyLearning() {
    const [cookies, setCookie, removeCookie] = useCookies(['user']);


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


    return (
        <div className='MyLearning'>
            <br />
            <h1>{user[0]?.firstname}'s Learning Progress (<span className='tech'>{Math.floor((12 / user[0]?.duration) * 100)}</span>%)</h1> <br />
            <hr />
            <h2>ID: <span className='tech'>{user[0]?.studentID}</span> </h2> <hr />
            <h2>COURSE: <span className='tech'>{user[0]?.course}</span> </h2> <hr />
            {/* <h2>START DATE: <span style={{color: "orange"}}>5</span> of <span style={{color: "orange"}}>8</span></h2> <hr /> */}
            <h2>WEEK: <span className='tech'>5</span> of <span className='tech'>{user[0]?.duration}</span></h2> <hr />
            <h2>TOPICS COVERED: <span className='tech'>12</span> of <span className='tech'>28</span></h2> <hr />
            <h2>TASKS: <span className='tech'>6</span></h2> <hr />
            <br /> <br />

            <h2>PREVIOUS TOPICS</h2> <br />
            <div className="weeklearns">
                <Link className="weeklearn" to="/class/webdevelopment/react-class">
                    <h2>REACT CLASS</h2> <br />
                    <p style={{ color: "grey" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea esse molestias veritatis alias....</p>
                    <br />
                    <h4>Date: 21/07/2022</h4>
                </Link>
                <Link className="weeklearn">
                    <h2>HEADING TAGS</h2> <br />
                    <p style={{ color: "grey" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea esse molestias veritatis alias....</p>
                    <br />
                    <h4>Date: 21/07/2022</h4>
                </Link>
                <Link className="weeklearn">
                    <h2>CSS STYLES</h2> <br />
                    <p style={{ color: "grey" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea esse molestias veritatis alias....</p>
                    <br />
                    <h4>Date: 21/07/2022</h4>
                </Link>
                <Link className="weeklearn">
                    <h2>NEW TASK</h2> <br />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea esse molestias veritatis alias....</p>
                    <br />
                    <h4>Date: 21/07/2022</h4>
                </Link>

                

            </div>

        </div>
    );

}

export default MyLearning;
