import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart, removeItem } from '../features/cart/cartSlice';
import './CartSidebar.css';

const CartSidebar = () => {
  const dispatch = useDispatch();
  const { items, isOpen } = useSelector(state => state.cart);

  const totalAmount = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={() => dispatch(toggleCart())}></div>
      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="cart-sidebar-header">
          <h3>Shopping Cart</h3>
          <button className="close-button" onClick={() => dispatch(toggleCart())}>X</button>
        </div>
        <div className="cart-sidebar-content">
          {items.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {items.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={item.imageUrl} alt={item.name} />
                  <div className="item-details">
                    <p>{item.name}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: Rs {item.price.toLocaleString()}</p>
                  </div>
                  <button onClick={() => dispatch(removeItem({ id: item.id }))}>Remove</button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="cart-sidebar-footer">
          <p>Total: Rs {totalAmount.toLocaleString()}</p>
          <button className="checkout-button">Checkout</button>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
