import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import client from "../utils/openaiConfig";
import { API_OPTIONS, MOVIE_BY_SEARCH_QUERY } from "../utils/constants";
import { addUserQueriedMovies } from "../store/slices/moviesSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { closeSearchView } from "../store/slices/searchSlice";

const SearchBar = () => {
  const showSearch = useSelector((store) => store.search.showSearch);
  const searchElement = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const resultsPath = useLocation();

  useEffect(() => {
    showSearch && searchElement.current.focus();
  }, [showSearch]);

  const searchMovie = async (movie) => {
    const movieData = await fetch(MOVIE_BY_SEARCH_QUERY + movie, API_OPTIONS);
    const jsonMovieData = await movieData.json();
    const exactMatches = jsonMovieData.results.filter(
      (m) => m.title.toLowerCase() === movie.toLowerCase()
    );
    return exactMatches;
  };

  const fetchWithUserQuery = async (searchTerm) => {
    const results = await client.chat.completions.create({
      messages: [{ role: "user", content: searchTerm }],
      model: "gpt-3.5-turbo",
    });
    const movies = results.choices[0]?.message?.content.split(",");
    // Without split(","): Nanum rowdy than,Kanchana,Manithan,Aruvi,Dharmadurai
    // With split(","): [Nanum rowdy than, Kanchana, Manithan, Aruvi, Dharmadurai]
    // Now movies will store array of 5 movies
    // Now we will take each movies and fetch their details from tmdb
    const moviesPromises = movies.map((movie) => searchMovie(movie));
    // searchMovie is an async function. So we get the results of the movies.
    // Rather moviesPromises will hold array of promises. That is why we have named it as moviesPromises in the first place.
    const moviesData = await Promise.all(moviesPromises);
    dispatch(addUserQueriedMovies(moviesData));
    dispatch(closeSearchView());
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const userQuery = await searchElement.current.value;
    const searchTerm = `Consider that you are best movie recommender in the world. Suggest me some movies based on the query: ${userQuery}. You have to give me only 20 which are comma separated. There should be only commas and no spaces between each of the movies. No bullets, No numberings or anything of that sort. Just simple plain string like the example that I have given. Example result: Ghilli,Sivaji,Dhasavatharam,Asuran,Ayan`;
    if (searchTerm) {
      fetchWithUserQuery(searchTerm);
    }
    searchElement.current.value = "";
    resultsPath.path !== "/results" && navigate("/results");
  };

  return (
    <form
      className="text-white w-full flex justify-center items-center"
      onSubmit={handleFormSubmit}
    >
      <input
        ref={searchElement}
        className="w-1/2 rounded-lg bg-black border border-white px-2 py-1 mx-auto"
        type="text"
        placeholder="Search"
      />
    </form>
  );
};

export default SearchBar;
