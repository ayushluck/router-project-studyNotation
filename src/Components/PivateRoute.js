import React from 'react'
import { Navigate } from 'react-router-dom';
const PivateRoute = ({isLoggedIn,children}) => {
   if(isLoggedIn){
        return children;
    }
    else{
        return <Navigate to="/login"/>;
    }
}

export default PivateRoute;