import React from 'react';
import Header from './Header'; // Import the Header component
import Banner from './Banner';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header /> 
      <Banner/>
      <main>
        {children} 
      </main>
      <Footer/>
    </div>
  );
};

export default MainLayout;
