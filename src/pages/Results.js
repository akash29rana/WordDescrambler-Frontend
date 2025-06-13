import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import WordForm from '../components/WordForm';
import WordResults from '../components/WordResults';
import Footer from '../components/Footer';

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [results, setResults] = useState(location.state?.results || []);

  useEffect(() => {
    if (!results || results.length === 0) {
      navigate('/'); // Redirect to main URL if no data
    }
  }, [results, navigate]);

  const handleSearch = (filters) => {
    console.log("Search filters:", filters);
    setResults(filters); // Update the results state with new filters
  };

  return (
    <>
      <Header />
      <main className="results-page">
        <div className="search-options">
          <WordForm onSearch={handleSearch} />
        </div>
        <div className="results">
          <WordResults results={results} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Results;
