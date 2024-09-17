import React from 'react'
import MovieCard from './MovieCard'
import useHorizontalScroll from '../hooks/useHorizontalScroll';

const MovieList = ({ title, movies}) => {

    const scrollRef = useHorizontalScroll();

  return (
    <div className="px-6 w-full">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div ref={scrollRef} className="flex w-full overflow-x-scroll no-scrollbar scroll-smooth">
        {/* Here no-scrollbar is not a tailwind class. It is an ordinary class. We have used that to hide the scrollbar */}
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} moviePoster={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList