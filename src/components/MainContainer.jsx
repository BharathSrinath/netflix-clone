import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
// This container represents the trailer that automatically plays once logged-in
// Since only one movie trailer is required, we will get that as movies[0].
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    
    if(!movies) return;
    
    const mainMovie = movies[0];
    const {original_title, overview, id} = mainMovie;

  return (
    <div className='bg-black relative mt-14 sm:mt-10 md:mt-0 lg:-mt-10'>
        <VideoTitle title={original_title} overview={overview} movieId={id}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer;