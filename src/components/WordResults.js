import React, { useState, useEffect } from 'react'; // Add useEffect
import Modal from './Modal';
import ReactGA from "react-ga4"; // Import ReactGA
import '../css/WordResults.css';
import { getWordMeaning } from '../api/wordApi'; // Import getWordMeaning

const WordResults = ({ results }) => {
  const [modalData, setModalData] = useState({ isOpen: false, title: '', content: 'Loading...' });

  // useEffect(() => {
  //   // Check if consent is given before tracking pageview
  //   if (window.localStorage.getItem('site_cookie_consent') === 'true') {
  //     ReactGA.pageview('/word-results'); // Track pageview for WordResults
  //   }
  // }, []);

  const handleWordClick = async (word) => {
    // Check if consent is given before tracking event
    if (window.localStorage.getItem('site_cookie_consent') === 'true') {
      ReactGA.event({
        category: 'Word Interaction',
        action: 'Word Clicked',
        label: word,
      });
    }

    setModalData({ isOpen: true, title: word, content: 'Loading...' }); // Show modal immediately with loading message
    try {
      // Use getWordMeaning function
      const response = await getWordMeaning(word);
      const meaning = response.meaning || 'No meaning found.';
      setModalData({ isOpen: true, title: word, content: meaning });
    } catch (error) {
      console.error('Error fetching word meaning:', error);
      setModalData({ isOpen: true, title: word, content: 'Error fetching meaning.' });
    }
  };

  const closeModal = () => {
    setModalData({ isOpen: false, title: '', content: '' });
  };

  return (
    <section className="results-section">
      {(!results || Object.keys(results).length === 0) ? (
        <div className="no-results-message">No Word Found</div>
      ) : (
        Object.keys(results).map((key) => {
          const words = results[key];
          if (!Array.isArray(words)) return null;

          return (
            <div key={key} className="word-category">
                <h2 className="category-header">
                  {key.replace('_letter_words', ' Letters')} Words
                </h2>              <div className="word-list">
                {words.map((wordObj, index) => (
                  <div
                    key={index}
                    className="word-item"
                    onClick={() => handleWordClick(wordObj.word)}
                  >
                    <span className="word">{wordObj.word}</span>
                    <span className="points">Points: {wordObj.points}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })
      )}

      <Modal isOpen={modalData.isOpen} onClose={closeModal} title={modalData.title} content={modalData.content} />
    </section>
  );
};

export default WordResults;
