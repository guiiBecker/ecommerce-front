// Ensure this is in your ProtectedRoute.js file
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('Token'); 

  if (!token) {
    console.log("No token found, redirecting to login"); 
    return <Navigate to="/" />; 
  }

  console.log("Token found, rendering child components"); 
  return children; 
};

export default ProtectedRoute;
