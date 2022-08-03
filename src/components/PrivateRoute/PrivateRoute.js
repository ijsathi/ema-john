// import React from 'react';
// import useAuth from '../../hooks/useAuth';
// import {  Route, Navigate } from "react-router-dom";

// const PrivateRoute = ({children, ...rest}) => {
//     const {user} = useAuth();
//     return (
//         <Route
//         {...rest}
//         render={({location}) => user.email? children:<Navigate 
//             to={{
//                 pathname:'login',
//                 state:{from:location}
//             }}></Navigate>
//         }>

//         </Route>
//     );
// };

// export default PrivateRoute;

import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user } = useAuth();
    let location = useLocation();
    if (user.email) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} />
};

export default PrivateRoute;