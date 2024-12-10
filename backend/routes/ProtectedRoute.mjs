import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, isAdmin }) => {
    return (
        <Route
            element={isAdmin ? element : <Navigate to="/beranda" />}
        />
    );
};

export default ProtectedRoute;