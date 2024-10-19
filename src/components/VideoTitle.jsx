import React from 'react'
import infoIcon from '../assets/info-svgrepo-com.svg'
import playIcon from '../assets/play-svgrepo-com.svg'
import { Link } from 'react-router-dom'

const VideoTitle = ({title, overview, movieId}) => {
  return (
    <div className='w-screen aspect-video absolute bg-gradient-to-r from-black flex items-center'>
        <div className='mt-10 sm:mt-20 md:mt-0 w-4/5 md:w-2/3 lg:w-1/2 pl-[4%] text-white '>
            <h1 className='text-xl sm:text-4xl lg:text-6xl font-bold my-2'>{title}</h1>
            <p className='hidden md:block lg:text-lg w-2/3'>{overview}</p>
            <div className='flex w-full md:w-4/5 text-black text-xl'>
                <Link to={`/watch?id=${movieId}`}>
                  <button className='hidden bg-white mr-2 mt-2 py-2 px-10 rounded hover:bg-opacity-50 md:flex items-center'><img className='w-6 h-6 mx-2' src={playIcon} alt="play movie icon" />Play</button>
                </Link>
                <button className='hidden md:flex bg-neutral-500 ml-2 mt-2 py-2 px-4 rounded hover:bg-opacity-50 items-center'><img className='w-6 h-6 mx-2' src={infoIcon} alt="movie info icon" />More Info</button>
            </div>
        </div>
    </div>
  )
}

export default VideoTitle