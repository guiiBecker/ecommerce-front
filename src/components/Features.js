import React from 'react';
import './Feature.css'
import quality from '../assets/images/Vectortrophy.png'
import verify from '../assets/images/Vectorverify.png'
import box from '../assets/images/Vectorbox.png'
import supp from '../assets/images/Vectorsupp.png'


const Features = () => {
  return (
    <div className="features-container">
      <div className="feature-item">
        <img src={quality} alt="High Quality" />
        <div>
          <h3>High Quality</h3>
          <p>crafted from top materials</p>
        </div>
      </div>
      <div className="feature-item">
        <img src={verify} alt="Warranty Protection" />
        <div>
          <h3>Warranty Protection</h3>
          <p>Over 2 years</p>
        </div>
      </div>
      <div className="feature-item">
        <img src={box} alt="Free Shipping" />
        <div>
          <h3>Free Shipping</h3>
          <p>Order over 150$</p>
        </div>
      </div>
      <div className="feature-item">
        <img src={supp} alt="24/7 Support" />
        <div>
          <h3>24/7 Support</h3>
          <p>Dedicated support</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
