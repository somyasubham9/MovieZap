import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from '../hooks/context'
import useFetch from '../hooks/useFetch'
const SingleMovie = () => {
  const { id } = useParams()
  const { isLoading, error, data: movie } = useFetch(`&i=${id}`)

  if (isLoading) {
    return <div className='loading'></div>
  }
  if (error.show) {
    return (
      <div className='page-error'>
        <h1>{error.msg}</h1>
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    )
  }
  console.log(movie);
  const { Poster: poster, Title: title,BoxOffice,Awards,Genre,Director,Runtime,imdbRating, Plot: plot, Released: year,Language } = movie
  return (
    <section className='single-movie'>
      <img src={poster} alt={title} />
      <div className='single-movie-info'>
        <h2>{title}</h2>
        <h4>Release Date: {year}</h4>
        <p><strong>Plot: </strong>{plot}</p>
        <p><strong>Director: </strong>{Director}</p>
        <p><strong>Genre: </strong>{Genre}</p>
        <p><strong>Language: </strong>{Language}</p>
        <p><strong>Runtime: </strong>{Runtime}</p>
        <p><strong>IMDB: </strong>{imdbRating}/10</p>
        <p><strong>Awards:</strong> {Awards}</p>
        <p><strong>BoxOffice: </strong> {BoxOffice}</p>
        
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    </section>
  )
}

export default SingleMovie