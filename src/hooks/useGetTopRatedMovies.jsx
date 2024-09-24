import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../store/slices/moviesSlice";
import { TOP_RATED_MOVIES_API } from "../utils/constants";

const useGetTopRatedMovies = () => {

  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

    const dispatch = useDispatch();

    const getPTopRatedMovies = async () => {
      const topRatedMoviesData = await fetch(TOP_RATED_MOVIES_API, API_OPTIONS);
      const jsonTopRatedMoviesData = await topRatedMoviesData.json();
      dispatch(addTopRatedMovies(jsonTopRatedMoviesData.results));
    };
  
    useEffect(() => {
      !topRatedMovies && getPTopRatedMovies();
         // eslint-disable-next-line
    }, []);
}

export default useGetTopRatedMovies;