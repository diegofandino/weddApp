import React, { useEffect, useState } from 'react';
import { useSelector, RootStateOrAny, useDispatch} from 'react-redux';
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { checkingAuth } from '../actions/auth';
import { DashboardScreen } from '../pages/DashboardScreen';
import { LoginScreen } from '../pages/LoginScreen';
import { RegisterPage } from '../pages/RegisterPage';
import ProtectedRoutes from './ProtectedRoutes';

export const AppRouter = () => {

  const dispatch = useDispatch();
  const authState = useSelector((state:RootStateOrAny) => state.auth);
  console.log(authState.isLoggedIn);

  useEffect(() => {
    dispatch(checkingAuth());
  }, [dispatch]);
  

  return (
        <Routes>
            <Route path='/login' element={!authState.isLoggedIn ? <LoginScreen /> : <Navigate to="/" />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path="/" element={ authState.isLoggedIn ? <DashboardScreen /> : <Navigate to="/login" /> }>
                <Route path='/dashboard' element={<DashboardScreen />} />
            </Route>
        </Routes>
  );
};
