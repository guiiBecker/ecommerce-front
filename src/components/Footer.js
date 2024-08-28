import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2>Funiro.</h2>
        <address>
          400 University Drive Suite 200 Coral Gables,<br />
          FL 33134 USA
        </address>
      </div>
      <div className="footer-section">
        <h3>Links</h3>
        <ul>
          <li><a href="#!">Home</a></li>
          <li><a href="#!">Shop</a></li>
          <li><a href="#!">About</a></li>
          <li><a href="#!">Contact</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Help</h3>
        <ul>
          <li><a href="#!">Payment Options</a></li>
          <li><a href="#!">Returns</a></li>
          <li><a href="#!">Privacy Policies</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Newsletter</h3>
        <form>
          <input type="email" placeholder="Enter  Email Address" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Funiro. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
