import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/NotFound.css';

const NotFound = () => {
  return (
    <>
      <Header />
      <section className="not-found">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">Oops! The page you're looking for doesn't exist.</p>
        <a href="/" className="home-link">Go Back to Home</a>
      </section>
      <Footer />
    </>
  );
};

export default NotFound;
