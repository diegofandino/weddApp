import React from 'react';
import { Routes, Route } from "react-router-dom";
import { DashboardScreen } from '../pages/DashboardScreen';
import { LoginScreen } from '../pages/LoginScreen';
import { RegisterPage } from '../pages/RegisterPage';
import ProtectedRoutes from './ProtectedRoutes';

export const AppRouter = () => {
  return (
        <Routes>
            <Route path='/' element={<LoginScreen />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route element={<ProtectedRoutes />}>
                <Route path='/dashboard' element={<DashboardScreen />} />
            </Route>
        </Routes>
  );
};
