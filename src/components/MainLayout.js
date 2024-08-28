import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import CartSidebar from './CartSidebar';
import { toggleCart } from '../features/cart/cartSlice'; 
import Banner from './Banner'
import Features from './Features';
import { useLocation } from 'react-router-dom';

const MainLayout = ({ children }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isCartOpen = useSelector((state) => state.cart.isOpen);

  const handleOverlayClick = () => {
    if (isCartOpen) {
      dispatch(toggleCart());
    }
  };
  const isProductPage = location.pathname.includes('/product/');


  return (
    <div>
      <Header />
      {!isProductPage && <Banner />}
      <div className={`overlay ${isCartOpen ? 'active' : ''}`} onClick={handleOverlayClick}></div>
      <CartSidebar />
      <main>
        {children}
      </main>
      {!isProductPage && <Features />}
      <Footer />
    </div>
  );
};

export default MainLayout;
