import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../store/slices/moviesSlice";
import { POPULAR_MOVIES_API } from "../utils/constants";

const useGetPopularMovies = () => {

  const popularMovies = useSelector((store) => store.movies.popularMovies)

  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const popularMoviesData = await fetch(POPULAR_MOVIES_API, API_OPTIONS);
    const jsonPopularMoviesData = await popularMoviesData.json();
    dispatch(addPopularMovies(jsonPopularMoviesData.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
     // eslint-disable-next-line
  }, []);
};

export default useGetPopularMovies;
