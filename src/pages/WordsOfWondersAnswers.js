import React from 'react';
import { useState } from 'react'; // Import useState
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Header from '../components/Header'; // Import Header
import Footer from '../components/Footer'; // Import Footer
import WordForm from '../components/WordForm'; // Import WordForm
import '../css/styles.css'; // Import styles.css

const WordsOfWondersAnswers = () => {
  const [results, setResults] = useState([]); // Add state for results
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSearch = (filters) => {
    console.log("Search filters:", filters);
    setResults(filters);
    navigate('/results', { state: { results: filters } }); // Redirect to /results with state
  };

  return (
    <>
      <Header /> {/* Add Header */}
      <div className="page-container">
        <WordForm onSearch={handleSearch} />
        <section className="middle-section">
          <h2>What is Words Of Wonders Answers?</h2>
          <p>
            Get answers for Words Of Wonders puzzles. Solve levels quickly and enjoy the game to the fullest.
          </p>
        </section>
      </div>
      <Footer /> {/* Add Footer */}
    </>
  );
};

export default WordsOfWondersAnswers;
