import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";

const Slider = () => {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef();
    useEffect(() => getTrendingMovies(), []);
    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos
            .then((res) => {
                setMovieList(res.data.results);
            })
            .catch((err) => console.log({ err }));
    };

    const sliderRight = () => {
        elementRef.current.scrollLeft += window.innerWidth - 110;
    }
    const sliderLeft = () => {
        elementRef.current.scrollLeft -= window.innerWidth - 110;
    }
    return (
        <div>
            <HiChevronLeft className="text-[44px] absolute mx-3 mt-[152px] cursor-pointer hidden md:block" onClick={sliderLeft}/>
            <HiChevronRight className="text-[44px] absolute mx-3 mt-[152px] cursor-pointer right-0 hidden md:block" onClick={sliderRight}/>
            <div
                className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth"
                ref={elementRef}
            >
                {movieList.map((item, index) => (
                    <img
                        key={index}
                        src={`${import.meta.env.VITE_IMAGE_BASE_URL}/${
                            item.backdrop_path
                        }`}
                        className="min-w-full h-[310px] object-cover object-top mr-5 rounded-md hover:border-[4px] hover:border-gray-400 transition-all duration-100 ease-in"
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;
