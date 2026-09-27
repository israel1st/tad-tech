import { Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useState, useEffect } from 'react';
import axios from 'axios';

function HasPaidRoute({ children }) {
    const [cookies] = useCookies(['user']);
    const [user, setUser] = useState("loading");

    const getUser = () => {
        axios.get("api/users/fetchusers")
            .then((response) => {
                const match = response.data.find(u => u.email === cookies.Email);
                setUser(match ? match.hasPaid : false);
            })
            .catch(err => {
                console.log(err);
                setUser(false);
            });
    };

    useEffect(() => {
        getUser();
    }, []);

    if (user === "loading") {
        return <p>Loading...</p>;
    }

    return user ? children : <Navigate to="/application" />;
}

export default HasPaidRoute;