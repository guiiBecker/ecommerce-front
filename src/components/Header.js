import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you are using a separate CSS file for styling
import logo from '../assets/images/Meubel House_Logos-05.png'; // Path to your logo image
import userIcon from '../assets/images/Vectoruser.png'; // Path to your user icon
import cartIcon from '../assets/images/Vectorcart.png'; // Path to your cart icon

const Header = () => {
    return (
      <header className="header">
        <div className="header__logo">
          <img src={logo} alt="Furniro Logo" className="header__logo-image" />
          <span className="header__logo-text">Furniro</span> 
        </div>
        <nav className="header__nav">
          <Link to="/" className="header__link">Home</Link>
          <Link to="/shop" className="header__link">Shop</Link>
          <Link to="/about" className="header__link">About</Link>
          <Link to="/contact" className="header__link">Contact</Link>
        </nav>
        <div className="header__icons">
          <Link to="/profile">
            <img src={userIcon} alt="User" className="header__icon" />
          </Link>
          <Link to="/cart">
            <img src={cartIcon} alt="Cart" className="header__icon" />
          </Link>
        </div>
      </header>
    );
  };
  
  export default Header;