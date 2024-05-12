/* eslint-disable no-unused-vars */
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import SignUp from './components/sign-up';
import { routes } from './utils/routes';
import Dashboard from './components/dashboard';
import { getDataFromLocalStorage } from './utils/common_functions';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Permission from './components/employee/Permission';
// import
import '../src/utils/Global.css';

function App() {
  const token = useSelector((state) => state?.signIn?.token);


  // console.log(token, 'token'); // Assuming your token is stored in 'yourReducer'
  const PrivateRoute = (token) => {
    if (Object.keys(token?.token)?.length) {
      return <Navigate to="/dashboard" replace />;
    }
    return <Outlet />;
  };
  const PublicRoute = (token) => {
    if (Object.keys(token?.token)?.length <= 0) {
      return <Navigate to="/" />;
    }
    return <Outlet />;
  };

  return (
    <Routes>
      <Route element={<PrivateRoute token={token} />}>
        <Route path="/" element={<SignUp />} />
      </Route>
      <Route element={<PublicRoute token={token} />}>
        <Route path="" element={<Dashboard />}>
          {routes.map((route, key) => (
            <Route key={key} path={`${route.path}`} element={route.Comp} />
          ))}
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
