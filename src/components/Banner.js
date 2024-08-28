import React from 'react';
import { useLocation } from 'react-router-dom';
import './Banner.css'; // Assuming you are using a separate CSS file for styling
import backgroundImage from '../assets/images/banner.png'; // Import your background image

const Banner = () => {
  const location = useLocation();

  // Define banner content based on the current route
  const getBannerContent = () => {
    switch (location.pathname) {
      case '/shop':
        return { title: 'Shop', subtitle: 'Home > Shop' };
      case '/about':
        return { title: 'About Us', subtitle: 'Home > About' };
      case '/contact':
        return { title: 'Contact Us', subtitle: 'Home > Contact' };
      case '/dashboard':
        return { title: 'Dashboard', subtitle: 'Home > Dashboard' };
      default:
        return { title: 'Welcome', subtitle: 'Home' };
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
