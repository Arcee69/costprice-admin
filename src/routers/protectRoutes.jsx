import React from 'react'
import { Navigate, useLocation, Outlet  } from 'react-router-dom';

import { isObjectEmpty } from '../utils/CheckLoginData';


import BoardLayout from '../layouts/BoardLayout';

export const ProtectRoutes = () => {

    const location = useLocation();
    const isAuthed = isObjectEmpty(JSON.parse(localStorage.getItem("userObj")))
    return !isAuthed ? (
      <BoardLayout> 
        <Outlet />
      </BoardLayout>
    ) : (
      <Navigate to="/" state={{ from: location }} replace />
    );
  };

  export const AuthProtectRoutes = () => {

    const location = useLocation();
    const isAuthed = isObjectEmpty(JSON.parse(localStorage.getItem("userObj")))
    return isAuthed ? (
      <>
        <Outlet />
      </>
    ) : (
      <Navigate to="/dashboard" state={{ from: location }} replace />
    );
  };