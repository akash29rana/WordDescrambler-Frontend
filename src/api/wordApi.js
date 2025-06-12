import axios from 'axios';

const BASE_URL = 'https://api.wordsdescrambler.com'; // Update this to your FastAPI endpoint
//const BASE_URL = 'http://localhost:8000'; // Local development URL, change as needed

export const findWords = async (queryParams) => {
  const res = await axios.get(`${BASE_URL}/unscramble?${queryParams}`);
  return res.data;
};

export const getWordMeaning = async (word) => {
  const res = await axios.get(`${BASE_URL}/meaning`, {
    params: { word },
  });
  return res.data;
};

export const goToHome = () => {
  window.location.href = '/';
}