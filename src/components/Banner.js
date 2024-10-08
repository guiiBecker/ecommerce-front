import React from 'react';
import { useLocation } from 'react-router-dom';
import './Banner.css';
import backgroundImage from '../assets/images/banner.png'; 
const Banner = () => {
  const location = useLocation();

  const getBannerContent = () => {
    switch (location.pathname) {
      case '/dashboard':
        return { title: 'Shop', subtitle: 'Home > Shop' };
      case '/cart':
        return { title: 'Cart', subtitle: 'Home > Cart' };
      case '/checkout':
        return { title: 'Checkout', subtitle: 'Home > Checkout' };
      case '/':
        return { title: 'Shop', subtitle: 'Home > Shop' };
      default:
        return { title: 'Shop', subtitle: 'Home > Shop' };
    }
  };

  const { title, subtitle, background } = getBannerContent();

  return (
    <div className="banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1 className="banner__title">{title}</h1>
      <p className="banner__subtitle">{subtitle}</p>
    </div>
  );
};

export default Banner;
