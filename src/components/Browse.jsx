import React from 'react'
import Header from './Header'
import useGetNowPlayingMovies from '../hooks/useGetNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  const nowPlayingMovies = useGetNowPlayingMovies();

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse