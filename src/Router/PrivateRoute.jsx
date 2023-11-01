import React, { Children, useContext } from 'react';
import { authContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(authContext)
    const location = useLocation()

    if(user?.email){
       return children
    }
    else if(loading){
        return <progress className="flex items-center justify-center progress w-56"></progress>
    }
    return <Navigate state={location.pathname} to = '/login' replace></Navigate>
};

export default PrivateRoute;