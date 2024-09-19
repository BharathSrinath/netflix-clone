import React from 'react'
import { IMAGE_CDN_URL } from '../utils/constants'

const MovieCard = ({moviePoster}) => {
  return (
    <div className='w-48 p-2 box-border'>
        <img src={IMAGE_CDN_URL + moviePoster} alt="movie poster" />
    </div>
  )
}

export default MovieCard