import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import WordForm from '../components/WordForm';
import WordResults from '../components/WordResults';
import MiddleSection from '../components/MiddleSection';
import Footer from '../components/Footer';

const Home = () => {
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (filters) => {
    console.log("Search filters:", filters);
    setResults(filters);
    navigate('/results', { state: { results: filters} });
  };

  return (
    <>
      <Header />
      <main>
        <WordForm onSearch={handleSearch} />
        <MiddleSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
