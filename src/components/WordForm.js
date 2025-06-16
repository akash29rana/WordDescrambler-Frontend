import React, { useState, useEffect } from 'react'; // Add useEffect
import '../css/WordForm.css';
import { findWords } from '../api/wordApi'; // Import findWords
import ReactGA from "react-ga4"; // Import ReactGA

const WordForm = ({ onSearch, title }) => {
  const [word, setWord] = useState('');
  const [startsWith, setStartsWith] = useState('');
  const [endsWith, setEndsWith] = useState('');
  const [contains, setContains] = useState('');
  const [length, setLength] = useState('');
  const [dictionary, setDictionary] = useState('all');
  const inputRef = React.useRef(null); // Create a ref for the input field

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focus the cursor on the input field
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if consent is given before tracking event
    if (window.localStorage.getItem('site_cookie_consent') === 'true') {
      ReactGA.event({
        category: 'Search',
        action: 'Search Button Clicked',
        label: word,
      });
    }

    // Construct the query parameters
    const queryParams = new URLSearchParams();

    if (word) queryParams.append('word', word);
    if (startsWith) queryParams.append('start', startsWith);
    if (contains) queryParams.append('contains', contains);
    if (endsWith) queryParams.append('end', endsWith);
    if (length) queryParams.append('length', length);

    try {
      // Use findWords function
      const data = await findWords(queryParams.toString());
      console.log('API response:', data);
      onSearch(data); // Ensure this triggers the parent component's function

      // Scroll the page by 500px after receiving results
      window.scrollBy({ top: 500, behavior: 'smooth' });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
     
      <section className="word-form">
        <h1 className="main-title">{title}</h1>
        <p className="subtitle">Unscramble letters and solve word games </p>

        <form onSubmit={handleSubmit} className="form-container">
          <div className="input-group top-input">
            <input
              type="text"
              placeholder="Enter Letters"
              value={word}
              onChange={(e) => setWord(e.target.value)}
              maxLength={15}
              ref={inputRef} // Attach the ref to the input field
            />
            <button type="submit" className="search-icon">🔍</button>
          </div>

          <div className="filter-box">
            <div className="input-row">
              <input type="text" placeholder="Starts With" value={startsWith} onChange={(e) => setStartsWith(e.target.value)} />
              <input type="text" placeholder="Ends With" value={endsWith} onChange={(e) => setEndsWith(e.target.value)} />
            </div>
            <div className="input-row">
              <input type="text" placeholder="Contains" value={contains} onChange={(e) => setContains(e.target.value)} />
              <input type="number" placeholder="Length" value={length} onChange={(e) => setLength(e.target.value)} />
            </div>
         
            <button type="submit" className="submit-btn">SEARCH</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default WordForm;
