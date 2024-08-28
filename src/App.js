import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import ProductPage from './components/ProductPage';
import ProtectedRoute from './components/ProtectedRoute';
import MainLayout from './components/MainLayout';
import Checkout from './components/Checkout';
import BillingDetails from './components/BillingDetails'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Redireciona a página inicial para o Dashboard */}
          <Route path="/" element={
            <ProtectedRoute>
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </ProtectedRoute>
          } />
          <Route path="/login" element={<Login />} />
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
          <Route path="/product/:id" element={
            <MainLayout>
              <ProductPage />
            </MainLayout>
          } /> 
          <Route path="/cart" element={<MainLayout><Checkout /></MainLayout>} />
          <Route path="/checkout" element={<MainLayout><BillingDetails /></MainLayout>} /> 
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
