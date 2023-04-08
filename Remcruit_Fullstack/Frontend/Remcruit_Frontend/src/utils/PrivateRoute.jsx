import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'


function PrivateRoute() {
    let  {user} = useContext(AuthContext)
  return user ? <Outlet/> : <Navigate to='/login'/> ;
}

export default PrivateRoute