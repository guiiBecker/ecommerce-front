import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import MainLayout from './components/MainLayout'; // Import MainLayout

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Page - No Header */}
        <Route path="/" element={<Login />} />
        
        {/* SignUp Page - With Header */}
        <Route path="/signup" element={
          <MainLayout>
            <SignUp />
          </MainLayout>
        }/>
        
        {/* Dashboard Page - With Header and Protected */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <MainLayout>
              <Dashboard />
            </MainLayout>
          </ProtectedRoute>
        }/>
      </Routes>
    </Router>
  );
}

export default App;
