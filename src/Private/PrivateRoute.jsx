import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    console.log(location.pathname);

    if(loading){
        return (
           <div className='flex justify-center items-center h-screen'>
             <progress className="progress w-56"></progress>
           </div>
        )
    }

    if(user?.email){
        return children
    }

    return <Navigate state={location.pathname} to={'/login'} replace></Navigate>
};

export default PrivateRoute;