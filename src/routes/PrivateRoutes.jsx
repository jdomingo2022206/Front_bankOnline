import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hook/useAuth.js';

const PrivateRoute = ({ element }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? element : <Navigate to="/" />;
};

export default PrivateRoute;
