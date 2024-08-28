import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Checkout.css';
import { removeItem, updateQuantity, toggleCart } from '../features/cart/cartSlice';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.cart);
  const navigate = useNavigate();

  const totalAmount = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const handleCheckout = () => {
    navigate('/checkout'); 
  };
  const handleQuantityChange = (id, newQuantity) => {
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem({ id }));
  };

  return (
    <div className="checkout-page">
      <div className="cart-summary">
        <div className="cart-items">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id} className="cart-item">
                  <td>
                    <div className="cart-item-details">
                      <img src={item.imageUrl} alt={item.name} />
                      <span>{item.name}</span>
                    </div>
                  </td>
                  <td>Rs {item.price.toLocaleString()}</td>
                  <td>
                    <div className="cart-item-quantity">
                      <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                      <input 
                        type="number" 
                        min="1" 
                        max={item.stock} 
                        value={item.quantity} 
                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                      />
                      <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                    </div>
                  </td>
                  <td>Rs {(item.price * item.quantity).toLocaleString()}</td>
                  <td>
                    <button onClick={() => handleRemoveItem(item.id)}>🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="cart-totals">
          <h3>Cart Totals</h3>
          <p><span>Subtotal</span> <span>Rs {totalAmount.toLocaleString()}</span></p>
          <p><span>Total</span> <span>Rs {totalAmount.toLocaleString()}</span></p>
          <button className="checkout-button" onClick={handleCheckout}>Check Out</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
