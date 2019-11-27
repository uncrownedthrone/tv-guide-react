import React from 'react'
import axios from 'axios'
import HomePageData from '../components/HomePageData'
import CastMemberList from '../components/CastMemberList'

const HomePage = () => {
  return (
    <>
      <h1>Netflix and...</h1>
      <h2>The Top Rated TV Shows</h2>
      <div>
        {/* <ul>
          {movies.map(movie => {
            return (
              <MovieData
                key={movie.id}
                image={movie.poster_path}
                title={movie.title}
                releaseDate={movie.release_date}
                overview={movie.overview}
              />
            )
          })}
        </ul> */}
      </div>
    </>
  )
}

export default HomePage
