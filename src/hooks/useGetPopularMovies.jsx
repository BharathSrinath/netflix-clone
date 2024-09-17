import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../store/slices/moviesSlice";
import { POPULAR_MOVIES_API } from "../utils/constants";

const useGetPopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const popularMoviesData = await fetch(POPULAR_MOVIES_API, API_OPTIONS);
    const jsonPopularMoviesData = await popularMoviesData.json();
    dispatch(addPopularMovies(jsonPopularMoviesData.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default useGetPopularMovies;
