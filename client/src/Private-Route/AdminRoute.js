import { Navigate } from 'react-router-dom';
import { useCookies, useLocation } from 'react-cookie';


import SignIn from '../SignIN/signIn';

function AdminRoute({ children }) {
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    // const isAuthenticated = (cookies.isAuthenticated === 'true');


    return cookies.Role === "admin" ? children : <Navigate to="/" />;
    

}


export default AdminRoute;
