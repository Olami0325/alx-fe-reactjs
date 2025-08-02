import axios from 'axios';

const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

const githubAPI = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: token ? `token ${token}` : '',
  },
});

export const searchUsers = (username) =>
  githubAPI.get(`/search/users?q=${username}`);
