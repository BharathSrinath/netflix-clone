import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../store/slices/moviesSlice";
import { UPCOMING_MOVIES_API } from "../utils/constants";

const useGetUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const upcomingMoviesData = await fetch(UPCOMING_MOVIES_API, API_OPTIONS);
    const jsonUpcomingMoviesData = await upcomingMoviesData.json();
    dispatch(addUpcomingMovies(jsonUpcomingMoviesData.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useGetUpcomingMovies;
