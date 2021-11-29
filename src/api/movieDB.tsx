import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '305550e9f1e362e6905a57991803c458',
    language: 'es-ES',
  },
});

export default movieDB;
