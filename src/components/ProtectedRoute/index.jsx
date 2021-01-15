import React from 'react';
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ loginIn, ...props  }) => {
  return loginIn ? <Route {...props} /> : <Redirect to="/" />
}

export default ProtectedRoute;