import axios from 'axios';

const Api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true
});

const getNews = () => Api.get('news');

export default {
  getNews
};
