import React from 'react';
import { useState } from 'react'; // Import useState
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Header from '../components/Header'; // Import Header
import Footer from '../components/Footer'; // Import Footer
import WordForm from '../components/WordForm'; // Import WordForm
import '../css/styles.css';

const AnagramSolver = () => {
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
          <h2>What is Anagram Solver?</h2>
          <p>
            Solve anagrams effortlessly. Discover hidden words and enhance your puzzle-solving skills.
          </p>
        </section>
      </div>
      <Footer /> {/* Add Footer */}
   </>
      

  );
};

export default AnagramSolver;
