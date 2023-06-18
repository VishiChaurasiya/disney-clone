import axios from "axios";

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const getTrendingVideos = axios.get(
    `${baseUrl}/trending/all/day?api_key=${apiKey}`
);

export default {
    getTrendingVideos,
};
