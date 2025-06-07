import axios from 'axios';

const BASE_URL = 'http://192.168.1.3:8000'; // Update this to your FastAPI endpoint

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