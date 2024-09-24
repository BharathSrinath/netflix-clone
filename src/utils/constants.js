const API_KEY = "0c64f2720f633b1605d05e3f76562906";
const API_READ_ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzY0ZjI3MjBmNjMzYjE2MDVkMDVlM2Y3NjU2MjkwNiIsIm5iZiI6MTcyNjQ1ODg4Ni40OTM5NjQsInN1YiI6IjY2ZTdhYWIxZTgyMTFlY2QyMmIwZDQxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fofIStSFyayQX7Rg9lLY4oXkpxY0cgZ68zwNGKK2n_w";

// API_OPTIONS was obtained along with fetch call
// Example: https://developer.themoviedb.org/reference/movie-popular-list
const API_OPTIONS = {  method: 'GET',
    headers: {
      accept: 'application/json',
      // Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzY0ZjI3MjBmNjMzYjE2MDVkMDVlM2Y3NjU2MjkwNiIsIm5iZiI6MTcyNjQ2MTM4OC43MjY2NzUsInN1YiI6IjY2ZTdhYWIxZTgyMTFlY2QyMmIwZDQxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LaE5NVtOeKN3gqve5SE_oabx_8e3DZVFS4YgKRISDow"
    }};

const NOW_PLAYING_MOVIES_API = "https://api.themoviedb.org/3/movie/now_playing?page=1";
const POPULAR_MOVIES_API = "https://api.themoviedb.org/3/movie/popular?page=1";
const TOP_RATED_MOVIES_API = "https://api.themoviedb.org/3/movie/top_rated?page=1";
const UPCOMING_MOVIES_API = "https://api.themoviedb.org/3/movie/upcoming?page=1";
const MOVIE_VIDEOS_BY_ID = "https://api.themoviedb.org/3/movie/";
const MOVIE_BY_SEARCH_QUERY = "https://api.themoviedb.org/3/search/movie?query=";
const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w500";
const IMAGE_BY_MOVIE_ID = "https://api.themoviedb.org/3/movie/"

// const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY
const OPENAI_API_KEY = "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";

export {API_KEY, API_READ_ACCESS_TOKEN, API_OPTIONS, NOW_PLAYING_MOVIES_API, MOVIE_VIDEOS_BY_ID, IMAGE_CDN_URL, IMAGE_BY_MOVIE_ID, POPULAR_MOVIES_API, TOP_RATED_MOVIES_API, UPCOMING_MOVIES_API, OPENAI_API_KEY, MOVIE_BY_SEARCH_QUERY}