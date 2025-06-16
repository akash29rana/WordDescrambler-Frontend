import React, { useState } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet
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
    navigate('/results', { state: { results: filters, title: "Anagram Solver" } }); // Pass title to /results
  };

  return (
   <>      
      <Helmet>
        <meta
          name="description"
          content="Anagram solver helps you quickly rearrange letters to form valid words. Ideal for solving puzzles, games, and boosting vocabulary skills."
        />
        <title>Anagram Solver</title>
      </Helmet>
      <Header /> {/* Add Header */}
      <div className="page-container">
        <WordForm onSearch={handleSearch} title="Anagram Solver" />
        <section className="middle-section">
          <h1>
            What is Word Anagram Solver?
          </h1>
          <p>
          An <b>anagram solver</b> is a helpful tool that rearranges scrambled letters to find meaningful words or phrases. Whether you’re solving word puzzles, playing Scrabble, or boosting your vocabulary, this tool simplifies the process. It's popular among students, puzzle lovers, and competitive word gamers alike for its accuracy and speed.
          </p>


          <h2>How Does an Anagram Solver Work?</h2>
          <p>
            An <b>anagram solver</b> works by taking a mix of letters and comparing every possible combination to real words in a dictionary. Once you input your letters, the solver uses algorithms to find valid matches. It displays all possible words, usually sorted by length or point value if designed for games.
            These tools are also useful in decrypting hidden phrases, solving riddles, or even cracking creative writing challenges.
          </p>

          <h2>When to Use an Anagram Solver</h2>
          <p>There are many occasions where using an <b>anagram solver</b> can be useful:
          <ul>
            <li>Solving anagram puzzles or crosswords</li>
            <li>Playing games like Scrabble, Words With Friends, or Wordscapes</li>
            <li>Brain training and memory improvement</li>
            <li>Learning new words and improving spelling</li>
          </ul>
            Using it regularly also improves your pattern recognition and critical thinking.
          </p>

          <h2>Benefits of Using an Anagram Solver</h2>
          <p>Let’s look at some benefits of using an <b>anagram solver</b>:
          <ul>
            <li>Time-saving – Find words instantly without trial and error</li>
            <li>Great for learning – Discover words you didn’t know existed</li>
            <li>Boosts game scores – Maximize your points in word games</li>
            <li>Easy to access – Available on mobile, tablet, or desktop</li>
          </ul>
            For word enthusiasts, this <a href='https://wordsdescrambler.com/' target='_blank'>tool</a>  is both a game enhancer and a vocabulary builder.
          </p>

          <h2>Is It Fair to Use an Anagram Solver?</h2>
          <p>
            Using an <b>anagram solver</b> is fair in most non-competitive or personal settings. It’s similar to using a calculator in math—if your goal is to learn or improve, it’s a great tool. For tournaments or official matches, always check the rules.
            To learn more about puzzle-solving ethics, visit <a href='https://www.merriam-webster.com' target='_blank'> Merriam-Webster</a>.
          </p>

          <h2>Tips for Getting the Most Out of Anagram Solvers</h2>
          <p>Here’s how to maximize your results when using an <b>anagram solver</b>:
          <ul>
            <li>Input fewer letters to get broader results</li>
            <li>Try common letter patterns first (like “ing” or “ed”)</li>
            <li>Use it as a daily brain exercise</li>
            <li>Keep a personal word list from your results</li>
          </ul>
            Using it daily can help train your brain to spot anagrams without assistance over time.
          </p>

          <h2>Popular Uses Beyond Word Games</h2>
          <p>
            While most people use an <b>anagram solver</b> for games, it also has other creative uses:
          <ul>
            <li><b>Writers</b> use it to come up with interesting pseudonyms or book titles</li>
            <li><b>Marketers</b> use it for catchy brand names</li>
            <li><b>Teachers</b> use it as a fun classroom activity</li>
            <li><b>Cryptography enthusiasts</b> use it to solve letter-based puzzles</li>
          </ul>
            Its utility goes far beyond fun—it’s also a great learning and brainstorming tool.
          </p>

          <h2>Final Thoughts</h2>
          <p>
            An <b>anagram solver</b> is a versatile and easy-to-use tool for word lovers of all ages. Whether you're playing games, solving riddles, or learning new vocabulary, it offers instant help and long-term skill-building. Try it today to boost both your word game and your brainpower.
          </p>
          <div className="image-container">
            <img src="/images/anagram-solver.png" alt="Anagram solver showing valid words from scrambled letters." />
        </div>
        </section>
      </div>
      <Footer /> {/* Add Footer */}
   </>
  );
};

export default AnagramSolver;
