import React, { useEffect } from 'react';
import { Route, Redirect, useLocation } from "react-router-dom";

const ProtectedRoute = ({ loginIn, ...props  }) => {
  const {handlePopupLogin} = props;
  const location = useLocation();

  useEffect(() => {
    (!loginIn&&location.pathname === '/saved-news') ? handlePopupLogin() : <></>;
  }, [])
  
  return loginIn ? <Route {...props} /> : <Redirect to="/" />
}

export default ProtectedRoute;