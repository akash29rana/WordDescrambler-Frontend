import React from 'react';
import '../css/Menu.css';

const Menu = ({ menuOpen, toggleMenu }) => {
  return (
    <div className={`menu-bar ${menuOpen ? 'open' : ''}`}>
      <div className="menu-header">
        {/* <img src="/logo.png" alt="Logo" className="menu-logo" /> */}
        <h1 className="menu-title">Word Descrambler</h1>
      </div>
      <ul className="menu-options">
        <li className="menu-item">
          <a href="/word-unscrambler/">Word Unscrambler</a>
          <hr className="menu-divider" />
        </li>
        <li className="menu-item">
          <a href="/unscramble/">Unscramble</a>
          <hr className="menu-divider" />
        </li>
        <li className="menu-item">
          <a href="/words-with-friends-word-finder/">Words With Friends Word Finder</a>
          <hr className="menu-divider" />
        </li>
        <li className="menu-item">
          <a href="/anagram-solver/">Anagram Solver</a>
          <hr className="menu-divider" />
        </li>
        <li className="menu-item">
          <a href="/words-of-wonders-answers/">Words of Wonders Answers</a>
          <hr className="menu-divider" />
        </li>
        <li className="menu-item">
          <a href="/wordscapes-answers/">Wordscapes Answers</a>
          <hr className="menu-divider" />
        </li>
        <li className="menu-item">
          <a href="/word-cookies-answers/">Word Cookies Answers</a>
          <hr className="menu-divider" />
        </li>
        <li className="menu-item">
          <a href="/word-solver/">Word Solver</a>
          <hr className="menu-divider" />
        </li>
        <li className="menu-item">
          <a href="/word-trip-answers/">Word Trip Answers</a>
          <hr className="menu-divider" />
        </li>
        <li className="menu-item">
          <a href="/scrabble-go-word-finder/">Scrabble go Word Finder</a>
          <hr className="menu-divider" />
        </li>
      </ul>
    </div>
  );
};

export default Menu;
