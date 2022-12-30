import React, { useContext } from 'react';
import { userContext } from '../Components/Context/AuthContext';
import { Navigate } from 'react-router-dom';
import Loader from '../Components/Loader/Loader';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(userContext);
if(loading){
    return <div className='flex justify-center'><Loader></Loader></div>
}
    if (!user) {
        return <Navigate to='/login'></Navigate>
    }
    return children;
};

export default PrivateRoute;