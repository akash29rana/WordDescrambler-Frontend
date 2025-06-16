import React from 'react';
import { useState } from 'react'; // Import useState
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Header from '../components/Header'; // Import Header
import Footer from '../components/Footer'; // Import Footer
import WordForm from '../components/WordForm'; // Import WordForm
import '../css/styles.css'; // Import styles.css
import { Helmet } from 'react-helmet'; // Import Helmet for SEO

const WordUnscrambler = () => {
  const [results, setResults] = useState([]); // Add state for results
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSearch = (filters) => {
    console.log("Search filters:", filters);
    setResults(filters);
    navigate('/results', { state: { results: filters, title: "Word Unscrambler" } }); // Redirect to /results with state
  };

  return (
    <>
        <Helmet>
        <meta
          name="description"
          content="Word unscrambler helps you quickly solve jumbled letters into real words. Great for word games, anagrams, and brain training challenges."
        />
        <title>Word Unscrambler</title>
      </Helmet>
      <Header /> {/* Add Header */}
      <div className="page-container">
        <WordForm onSearch={handleSearch}  title="Word Unscrambler" />
        <section className="middle-section">
          <h1>What is Word Unscrambler?</h1>
          <p>
          A <b>word unscrambler</b> is a smart tool that helps you turn mixed-up letters into real words. If you've ever been stuck in a word game or puzzle, this tool can help you find all possible correct words. It’s great for casual players, students, and anyone who loves solving anagrams.
          </p>
        
          <h2>How Does a Word Unscrambler Work?</h2>
          <p>
            The <a href='https://wordsdescrambler.com/' target="_blank">word unscrambler</a> works by taking the letters you input and comparing every possible arrangement with a real dictionary. It quickly displays a list of valid words that can be formed. Some tools also let you filter by word length or specific letters, making it easier to find what you need.
          </p>
        
          <h2>Why Use a Word Unscrambler?</h2>
          <p>
            There are many reasons to use a <b>word unscrambler</b>, such as:
          <ul>
            <li>Solving hard word puzzles</li>
            <li>Winning games like Scrabble or Word Cookies</li>
            <li>Improving spelling and vocabulary</li>
            <li>Learning new words in a fun way</li>
          </ul>
            Whether you're preparing for a quiz or just relaxing with a word game, this tool saves time and boosts confidence.
          </p>
        
          <h2>Key Benefits of Using a Word Unscrambler</h2>
          <p>Here’s how a <b>word unscrambler</b> helps:
          <ul>
            <li> <b>Fast results</b> – See all word options in seconds</li>
            <li> <b>Fun and educational</b> – Learn new words while playing</li>
            <li> <b>Better performance</b> – Higher scores in games</li>
            <li> <b>Accessible on all devices</b> – Use it anytime, anywhere</li>
          </ul>
          </p>
        
          <h2>Is It Okay to Use One?</h2>
          <p>
            Yes, it’s okay as long as you’re not breaking game rules. Many people use it for learning or when playing solo. In competitive games, just make sure the rules allow it. For more guidance, check <a href='https://www.merriam-webster.com' target='_blank'  >Merriam-Webster</a>.
          </p>
        
          <h2>Tips to Use a Word Unscrambler Smartly</h2>
          <ul>
            <li>Type all letters you have, even if you're unsure</li>
            <li>Use filters to narrow results</li>
            <li>Try daily practice with puzzles or games</li>
            <li>Let kids use it to learn spelling and word building</li>
          </ul>
          <p>
            As you practice, you'll find that your own word-solving skills improve.
          </p>
        
          <h2>Conclusion</h2>
          <p>
            A <b>word unscrambler</b> is a simple yet powerful tool for anyone who enjoys playing with words. From solving puzzles to learning new terms, it helps make word challenges more fun and rewarding. Try one today and see how easily you can crack any jumble!
          </p>
          <div className="image-container">
            <img src="/images/word-unscrambler.png" alt="Using a word unscrambler tool during a word game." />
        </div>
        </section>
      </div>
      <Footer /> {/* Add Footer */}
    </>
  );
};

export default WordUnscrambler;
