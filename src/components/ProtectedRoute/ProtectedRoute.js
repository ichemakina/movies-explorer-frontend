import React from 'react';
import { Navigate } from "react-router-dom";

function ProtectedRoute({ authorized, element }) {
    return (
        authorized ? element : <Navigate to="/signin" replace />
    )
}

export default ProtectedRoute;