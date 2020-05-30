import axios from 'axios';

const API_KEY = process.env.REACT_APP_SKY_API_KEY;

export default axios.create({
  baseURL:
    'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/',
  headers: {
    'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
    'x-rapidapi-key': API_KEY,
  },
});
