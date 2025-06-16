import React from 'react';
import { useState } from 'react'; // Import useState
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Header from '../components/Header'; // Import Header
import Footer from '../components/Footer'; // Import Footer
import WordForm from '../components/WordForm'; // Import WordForm
import '../css/styles.css'; // Import styles.css
import { Helmet } from 'react-helmet'; // Import Helmet for SEO

const WordSolver = () => {
  const [results, setResults] = useState([]); // Add state for results
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSearch = (filters) => {
    console.log("Search filters:", filters);
    setResults(filters);
    navigate('/results', { state: { results: filters, title: "Word Solver" } }); // Redirect to /results with state
  };

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Need a word solver? Find the perfect solutions for your crossword, Scrabble, and puzzle challenges with our quick and reliable word solver tool."
        />
        <title>Word Solver</title>
      </Helmet>
      <Header /> {/* Add Header */}
      <div className="page-container">
        <WordForm onSearch={handleSearch} title="Word Solver" />
        <section className="middle-section">
          <h1>What is Word Solver?</h1>
          <p>
            A <a href='https://wordsdescrambler.com/' target='_blank'>word solver</a> is a tool designed to help users find possible word combinations based on given letters or a set of constraints. These tools are commonly used for solving puzzles, playing word games, and enhancing vocabulary. For crossword enthusiasts, Scrabble players, or anyone who loves a good word challenge, a word solver is an indispensable resource.
            <br /><br />
            When you encounter a tricky crossword or word puzzle, a reliable word solver can make all the difference. Whether you're struggling with an anagram or playing a game of Scrabble, having the right tools at your disposal can turn frustration into satisfaction. In this article, we’ll explore how to use a word solver effectively and how it can enhance your puzzle-solving skills.
          </p>

          <h2>How to Use a Word Solver for Scrabble</h2>
          <p>
            Scrabble players know that making the best possible word with your tiles is crucial. A word solver can help by suggesting words based on the letters you currently have. Simply enter your tiles, and the solver will generate a list of potential words that fit within the rules of Scrabble. This tool can help you score higher and outsmart your opponents by giving you new word options.
          </p>

          <h2>Enhancing Your Crossword Puzzle Strategy</h2>
          <p>
            Crossword puzzles often require deep thinking and a broad vocabulary. Using a word solver can help you find the right words when you're stuck. Enter known letters, or use the solver to suggest words based on the number of available spaces in a puzzle. Word solvers are especially useful when you’re in the middle of a challenging puzzle and need that final word to finish the grid.
          </p>

          <h2>Word Solvers for Anagrams</h2>
          <p>
            Anagram puzzles are a fun way to test your word skills, but they can also be tricky. If you’re stuck on an anagram, simply input the mixed-up letters into a word solver, and it will provide you with all possible word combinations. This is not only helpful for solving anagrams quickly but also for expanding your vocabulary.
          </p>

          <h2>Benefits of Using a Word Solver</h2>
          <p>
            Using a word solver isn’t just about solving puzzles faster – it’s about improving your game strategy and vocabulary. With regular use, you'll start recognizing common letter patterns, and your word game skills will improve. Additionally, solving puzzles with a word solver can be a fun and educational way to pass the time while learning new words.
            <br /><br />
            For more guidance, check <a href="https://www.merriam-webster.com" target="_blank">Merriam-Webster</a>.
          </p>

          <h2>Where to Find Reliable Word Solvers</h2>
          <p>
            Many word solvers are available online, and they range from free tools to premium services. Some offer simple functionalities, while others provide advanced features, such as customizable settings for specific games. It’s important to choose a word solver that best fits your needs. Always verify that the solver complies with the rules of the game you're playing, whether it’s Scrabble, a crossword puzzle, or a word search.
            <br /><br />
            For more about the best tools available, check out this guide on choosing the right word solver.
          </p>
        </section>
      </div>
      <Footer /> {/* Add Footer */}
    </>
  );
};

export default WordSolver;
