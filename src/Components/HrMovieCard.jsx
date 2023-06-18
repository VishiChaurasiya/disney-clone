import React from "react";

const HrMovieCard = ({ movie }) => {
    return (
        <section className="hover:scale-110 transition-all duration-150 ease-in">
            <img
                src={`${import.meta.env.VITE_IMAGE_BASE_URL}${
                    movie.backdrop_path
                }`}
                className="w-[110px] md:w-[260px] rounded-lg cursor-pointer hover:border-[3px] border-gray-400"
            />
            <h2 className="w-[110px] md:w-[260px]">{movie.title}</h2>
        </section>
    );
};

export default HrMovieCard;
