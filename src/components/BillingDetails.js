import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import './BillingDetails.css';

const BillingDetails = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('bank');
  const [isLoading, setIsLoading] = useState(false);
  const cartItems = useSelector(state => state.cart.items); // Dados do carrinho
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0); // Calcular o total do carrinho

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem('Token');
        const response = await axios.get('http://localhost:4000/user/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserInfo({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
          address: response.data.address,
          city: response.data.city,
          state: response.data.state,
          zip: response.data.zip,
          country: response.data.country,
        });
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, []);

  const handleInputChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem('Token');
      const response = await axios.post(
        'http://localhost:4000/order',
        {
          ...userInfo,
          paymentMethod,
          cartItems, // Incluir os itens do carrinho no pedido
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      );
      // Redirect to a success page or show success message
      alert('Order placed successfully!');
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="billing-details">
      <div className="billing-form">
        <h2>Billing details</h2>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={userInfo.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={userInfo.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Company Name (Optional)</label>
          <input
            type="text"
            name="companyName"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>ZIP code</label>
          <input
            type="text"
            name="zip"
            value={userInfo.zip}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Country / Region</label>
          <input
            type="text"
            name="country"
            value={userInfo.country}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Street address</label>
          <input
            type="text"
            name="address"
            value={userInfo.address}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Town / City</label>
          <input
            type="text"
            name="city"
            value={userInfo.city}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Province</label>
          <input
            type="text"
            name="state"
            value={userInfo.state}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email address</label>
          <input
            type="email"
            name="email"
            value={userInfo.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Additional Information</label>
          <textarea name="additionalInfo" onChange={handleInputChange} />
        </div>
      </div>
      <div className="order-summary">
        <h2>Product</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="order-item">
            <span>{item.name} x {item.quantity}</span>
            <span>Rs. {item.price.toLocaleString()}</span>
          </div>
        ))}
        <div>
          <p>Subtotal: Rs. {totalAmount.toLocaleString()}</p>
          <p>Total: <strong>Rs. {totalAmount.toLocaleString()}</strong></p>
        </div>
        <div className="payment-methods">
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="bank"
              checked={paymentMethod === 'bank'}
              onChange={() => setPaymentMethod('bank')}
            />
            Direct Bank Transfer
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="cash"
              checked={paymentMethod === 'cash'}
              onChange={() => setPaymentMethod('cash')}
            />
            Cash On Delivery
          </label>
        </div>
        <button
          className="place-order-button"
          onClick={handlePlaceOrder}
          disabled={isLoading}
        >
          {isLoading ? 'Placing order...' : 'Place order'}
        </button>
      </div>
    </div>
  );
};

export default BillingDetails;
