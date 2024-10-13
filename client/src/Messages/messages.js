import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


import { useCookies } from 'react-cookie';

import style from './messages.css';




function Messages() {
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
        <div className='Messages'>
            
hrllo msgs
        </div>
    );

}

export default Messages;
