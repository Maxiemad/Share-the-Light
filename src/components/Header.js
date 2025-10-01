import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header" role="banner">
      <div className="header-container">
        <img src="/nst_logo.png" alt="Newton School of Technology" className="header-logo left" />
        <img src="/Setu_logo.png" alt="SETU Club" className="header-logo right" />
      </div>
    </header>
  );
};

export default Header;


