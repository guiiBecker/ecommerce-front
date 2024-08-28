import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import CartSidebar from './CartSidebar';
import { toggleCart } from '../features/cart/cartSlice'; // Ensure this import is correct

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector((state) => state.cart.isOpen);

  const handleOverlayClick = () => {
    if (isCartOpen) {
      dispatch(toggleCart());
    }
  };

  return (
    <div>
      <Header />
      <div className={`overlay ${isCartOpen ? 'active' : ''}`} onClick={handleOverlayClick}></div>
      <CartSidebar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
