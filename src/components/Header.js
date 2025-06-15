import React, { useState, useEffect } from 'react';
import '../css/Header.css';
import { goToHome } from '../api/wordApi';
import Menu from './Menu';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = (e) => {
    if (menuOpen && !e.target.closest('.menu-bar') && !e.target.closest('.menu-icon')) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeMenu);
    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, [menuOpen]);

  return (
    <>
      <header className="header">
        <div className="logo" onClick={goToHome}>Word Descrambler<span className="logo-x"></span></div>
        <div className="menu-icon" onClick={toggleMenu}>☰</div>
      </header>
      <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Header;
