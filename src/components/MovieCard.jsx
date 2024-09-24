import React from 'react';
import useGetImageByMovieId from '../hooks/useGetImageByMovieId';
import heartEmptyIcon from '../assets/heart-empty-svgrepo-com.svg';
import heartFilledIcon from '../assets/heart-filled-svgrepo-com.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavourites, removeFromFavourites } from '../store/slices/moviesSlice';
import useGetFavMovieById from '../hooks/useGetFavMovieById';

const MovieCard = ({ movieId }) => {
  const dispatch = useDispatch();
  const favouriteMovies = useSelector((store) => store.movies.favouriteMovies);
  const moviePoster = useGetImageByMovieId(movieId);

  const isLiked = favouriteMovies.some(movie => movie.id === movieId);

  const movieData = useGetFavMovieById(movieId);

  const handleHeartClick = (e) => {
    e.stopPropagation();
    !isLiked ? dispatch(addToFavourites(movieData)) : dispatch(removeFromFavourites(movieData));
  };

  return (
    <div className='relative w-64 m-2 aspect-video box-border'>
      <Link to={`/watch?id=${movieId}`} key={movieId}>
        <img className='absolute w-64 aspect-video' src={moviePoster} alt="movie poster" />
      </Link>
      <img
        className="absolute top-2 right-2 w-6 h-6 cursor-pointer"
        onClick={handleHeartClick}
        src={isLiked ? heartFilledIcon : heartEmptyIcon}
        alt="favourites button"
      />
    </div>
  );
};

export default MovieCard;
