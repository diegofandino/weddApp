import React, { useEffect, useState } from 'react';
import { useSelector, RootStateOrAny} from 'react-redux';
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { DashboardScreen } from '../pages/DashboardScreen';
import { LoginScreen } from '../pages/LoginScreen';
import { RegisterPage } from '../pages/RegisterPage';
import ProtectedRoutes from './ProtectedRoutes';

export const AppRouter = () => {

  const authState = useSelector((state:RootStateOrAny) => state.auth);
  console.log(authState);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if(authState.isLoggedIn){
      setIsLoggedIn(authState.isLoggedIn);
      // navigate("/dashboard");
    }
  }, [authState]);

  return (
        <Routes>
            <Route path='/' element={<LoginScreen />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route element={ isLoggedIn ? <Outlet /> : <Navigate to="/" /> }>
                <Route path='/dashboard' element={<DashboardScreen />} />
            </Route>
        </Routes>
  );
};
