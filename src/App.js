import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Use HashRouter
import Menu from './components/Menu';
import WordUnscrambler from './pages/WordUnscrambler';
import Unscramble from './pages/Unscramble';
import WordsWithFriendsWordFinder from './pages/WordsWithFriendsWordFinder';
import AnagramSolver from './pages/AnagramSolver';
import WordsOfWondersAnswers from './pages/WordsOfWondersAnswers';
import WordscapesAnswers from './pages/WordscapesAnswers';
import WordCookiesAnswers from './pages/WordCookiesAnswers';
import WordSolver from './pages/WordSolver';
import WordTripAnswers from './pages/WordTripAnswers';
import ScrabbleGoWordFinder from './pages/ScrabbleGoWordFinder';
import CookieConsent from './components/CookieConsent';
import './App.css';
import Home from './pages/Home';
import Results from './pages/Results';
import NotFound from './pages/NotFound';

const App = () => (
  <>
    <Router>
      {/* <Menu menuOpen={true} toggleMenu={() => {}} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/word-descrambler" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/word-unscrambler" element={<WordUnscrambler />} />
        <Route path="/unscramble" element={<Unscramble />} />
        <Route path="/words-with-friends" element={<WordsWithFriendsWordFinder />} />
        <Route path="/anagram-solver" element={<AnagramSolver />} />
        <Route path="/words-of-wonders-answers" element={<WordsOfWondersAnswers />} />
        <Route path="/wordscapes-answers" element={<WordscapesAnswers />} />
        <Route path="/word-cookies-answers" element={<WordCookiesAnswers />} />
        <Route path="/word-solver" element={<WordSolver />} />
        <Route path="/word-trip-answers" element={<WordTripAnswers />} />
        <Route path="/scrabble-go-word-finder" element={<ScrabbleGoWordFinder />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    <CookieConsent />
  </>
);

export default App;
