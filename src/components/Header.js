import React from 'react';
import '../css/Header.css';
import { goToHome } from '../api/wordApi'; // Import goToHome function

const Header = () => {
  return (
    <header className="header">
      <div className="logo" onClick={goToHome}>Word Descrambler<span className="logo-x"></span></div>
    </header>
  );
};

export default Header;
