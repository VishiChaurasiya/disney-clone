import axios from "axios";

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const getTrendingVideos = axios.get(
    `${baseUrl}/trending/all/day?api_key=${apiKey}`
);

const getMovieByGenreId = (id) =>
    axios.get(`${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=${id}`);

export default {
    getTrendingVideos,
    getMovieByGenreId,
};
