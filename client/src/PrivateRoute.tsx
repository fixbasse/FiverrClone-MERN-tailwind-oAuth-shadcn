import { useContext } from 'react'
import { AuthContext } from './context/auth/AuthContext'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const { user } = useContext(AuthContext);
    
    return (
        user?.isSeller
            ? <Outlet />
            : <Navigate to='/' />
    )
}

export default PrivateRoute