import React from "react";

const MovieCard = ({ movie }) => {
    return (
        <img
            src={`${import.meta.env.VITE_IMAGE_BASE_URL}${movie.poster_path}`}
            className="w-[110px] md:w-[200px] rounded-lg cursor-pointer hover:border-[3px] border-gray-400 hover:scale-110 transition-all duration-150 ease-in"
        />
    );
};

export default MovieCard;
