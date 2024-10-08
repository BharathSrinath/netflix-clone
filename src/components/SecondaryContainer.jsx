import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black box-border w-screen">
      <div className="xl:-mt-52 relative z-20">
        {movies.nowPlayingMovies && (
          <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        )}
        {movies.topRatedMovies && (
          <MovieList title="Top Rated" movies={movies.topRatedMovies} />
        )}
        {movies.popularMovies && (
          <MovieList title="Popular" movies={movies.popularMovies} />
        )}
        {movies.upcomingMovies && (
          <MovieList title="Upcoming" movies={movies.upcomingMovies} />
        )}
        {movies.favouriteMovies.length >= 1 && (
          <MovieList title="Favourites" movies={movies.favouriteMovies} />
        )}
      </div>
    </div>
  );
};

export default SecondaryContainer;
