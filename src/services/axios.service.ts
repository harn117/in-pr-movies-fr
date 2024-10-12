import axios, { AxiosInstance } from 'axios';

const apiBackend: AxiosInstance = axios.create({
    baseURL: process.env.BACKEND_URL || 'http://localhost:4000/api/v1/',
    headers: {
        'Content-Type': 'application/json',
    },
});
const apiMovie: AxiosInstance = axios.create({
    baseURL: process.env.MOVIE_URL || 'https://api.themoviedb.org/3/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.MOVIE_API_KEY}`,
    },
});

export { apiBackend, apiMovie };