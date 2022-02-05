import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {Outlet, Navigate} from 'react-router';

const ProtectedRoutes = () => {
  
  const isLoggedIn = useSelector((state) => state);
  console.log("logueo", isLoggedIn);
    
    // return  isAuth ? <Outlet /> : <Navigate to='/' /> 
};


export default ProtectedRoutes;
