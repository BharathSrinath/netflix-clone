import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        moviePoster: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        userQueriedMovies: null,
        movieToWatch: null,
        favouriteMovies: []
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addMoviePoster: (state, action) => {
            state.moviePoster = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addUserQueriedMovies: (state, action) => {
            state.userQueriedMovies = action.payload;
        },
        addMovieToWatch: (state, action) => {
            state.movieToWatch = action.payload;
        },
        addToFavourites: (state, action) => {
            state.favouriteMovies.push(action.payload);
        },
        removeFromFavourites: (state, action) => {
            state.favouriteMovies = state.favouriteMovies.filter(
                (movie) => movie.id !== action.payload.id
            );
        }
    }
})

export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addUserQueriedMovies, addMovieToWatch, addMoviePoster, addToFavourites, removeFromFavourites} = moviesSlice.actions
export default moviesSlice.reducer;