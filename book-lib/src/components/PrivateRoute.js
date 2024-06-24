import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ component }) => {
  const isAuthenticated = false;
  return isAuthenticated ? component : <Navigate to="/" />;
};
