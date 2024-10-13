import { Navigate } from 'react-router-dom';
import { useCookies, useLocation } from 'react-cookie';

import { useState, useEffect } from 'react';

import axios from 'axios';


import SignIn from '../SignIN/signIn';

function HasPaidRoute({ children, userr }) {
    const [cookies, setCookie, removeCookie] = useCookies(['user']);

    const [user, setUser] = useState("loading");


    const getUser = () => {
        axios.get("api/users/fetchusers")
            .then((response) => {
                setUser(response.data.filter(user => { return user.email === cookies.Email })[0].hasPaid);
            });
    };

    // useEffect(() => {
    //     getUser()
    // }, []);

                console.log(user);
                if (user==="loading"){
                    getUser()
                } else if (user){
                    return children
                } else {
                    return <Navigate to="/application" />
                }


    return user ? children : <Navigate to="/application" />;
    

}


export default HasPaidRoute;
