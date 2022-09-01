import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    let location = useLocation();
    if (loading) return 'loading...';
    if (user.email) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} />
};

export default PrivateRoute;