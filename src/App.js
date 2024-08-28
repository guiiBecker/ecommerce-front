import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import MainLayout from './components/MainLayout'; 

import './App.css';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        
        <Route path="/" element={<Login />} />
        
        
        <Route path="/signup" element={
          <MainLayout>
            <SignUp />
          </MainLayout>
        }/>
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <MainLayout>
              <Dashboard />
            </MainLayout>
          </ProtectedRoute>
        }/>
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
