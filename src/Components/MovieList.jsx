import React, { useEffect, useRef, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import GlobalApi from "../Services/GlobalApi";
import HrMovieCard from "./HrMovieCard";
import MovieCard from "./MovieCard";

const MovieList = ({ genreId, ind }) => {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef();
    useEffect(() => {
        getMovieByGenreId();
    }, []);

    const getMovieByGenreId = () => {
        GlobalApi.getMovieByGenreId(genreId).then((res) => {
            setMovieList(res.data.results);
        });
    };

    const sliderRight = () => {
        elementRef.current.scrollLeft += window.innerWidth - 110;
    };
    const sliderLeft = () => {
        elementRef.current.scrollLeft -= window.innerWidth - 110;
    };
    return (
        <div>
            <HiChevronLeft
                className={`text-[44px] absolute mx-3 ${
                    ind % 3 == 0 ? "mt-[75px]" : "mt-[157px]"
                } cursor-pointer left-0 hidden md:block`}
                onClick={sliderLeft}
            />
            <HiChevronRight
                className={`text-[44px] absolute mx-3 ${
                    ind % 3 == 0 ? "mt-[75px]" : "mt-[157px]"
                } cursor-pointer right-0 hidden md:block`}
                onClick={sliderRight}
            />
            <div
                className="flex overflow-x-auto gap-8 scrollbar-hide px-3 py-5 scroll-smooth"
                ref={elementRef}
            >
                {movieList.map((item, index) => (
                    <>
                        {ind % 3 === 0 ? (
                            <HrMovieCard movie={item} />
                        ) : (
                            <MovieCard movie={item} />
                        )}
                    </>
                ))}
            </div>
        </div>
    );
};

export default MovieList;
