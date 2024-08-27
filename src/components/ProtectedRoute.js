// Ensure this is in your ProtectedRoute.js file
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('Token'); // Check if token is present

  if (!token) {
    console.log("No token found, redirecting to login"); // Debugging message
    return <Navigate to="/" />; // Redirect to login if no token
  }

  console.log("Token found, rendering child components"); // Debugging message
  return children; // Render the child components (i.e., the dashboard)
};

export default ProtectedRoute;
