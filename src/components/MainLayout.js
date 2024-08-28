import React from 'react';
import Header from './Header'; // Import the Header component
import Banner from './Banner';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header /> 
      <Banner/>
      <main>
        {children} 
      </main>
    </div>
  );
};

export default MainLayout;
