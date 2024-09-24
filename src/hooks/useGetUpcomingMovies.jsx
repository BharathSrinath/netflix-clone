import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../store/slices/moviesSlice";
import { UPCOMING_MOVIES_API } from "../utils/constants";

const useGetUpcomingMovies = () => {

  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const upcomingMoviesData = await fetch(UPCOMING_MOVIES_API, API_OPTIONS);
    const jsonUpcomingMoviesData = await upcomingMoviesData.json();
    dispatch(addUpcomingMovies(jsonUpcomingMoviesData.results));
  };

  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
    // eslint-disable-next-line
  }, []);
};

export default useGetUpcomingMovies;
