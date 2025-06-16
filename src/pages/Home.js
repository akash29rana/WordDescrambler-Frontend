import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import WordForm from '../components/WordForm';
import WordResults from '../components/WordResults';
import MiddleSection from '../components/MiddleSection';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const Home = () => {
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (filters) => {
    console.log("Search filters:", filters);
    setResults(filters);
    navigate('/results', { state: { results: filters ,  title: "Word Descrambler"} });
  };

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Word descrambler helps you quickly find real words from jumbled letters. Use it to win word games or solve anagram puzzles easily."
        />
        <title>Word Unscrambler</title>
      </Helmet>
      <Header />
      <main>
        <WordForm onSearch={handleSearch} title="Word Descrambler" />
        <MiddleSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
