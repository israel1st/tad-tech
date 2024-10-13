import { Navigate } from 'react-router-dom';
import { useCookies, useLocation } from 'react-cookie';

// import { history } from '_helpers';

import SignIn from '../SignIN/signIn';

function PrivateRoute({ children }) {
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const isAuthenticated = (cookies.isAuthenticated === 'true');


    return isAuthenticated ? children : <Navigate to="/signin" />;
    

}


export default PrivateRoute;
