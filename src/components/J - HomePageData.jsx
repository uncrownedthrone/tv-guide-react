import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import HomePage from '../pages/HomePage'

const ShowAPIInfo = () => {
  const [tvShow, setTvShow] = useState([])
  const [random, setRandom] = useState(0)
  const [page, setPage] = useState(1)
  const getAPIData = async () => {
    const resp = await axios.post(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=17cb5378f871124dfc852a9d103647e3&language=en-US&page=${page}`
    )
    console.log(resp.data.results)
    setTvShow(resp.data.results)
    setPage(resp.data.page)
    setRandom(Math.ceil(Math.random() * resp.data.results.length))
  }

  useEffect(() => {
    getAPIData()
  }, [page])

  return (
    <>
      <ul>
        {tvShow.map((show, i) => {
          return (
            <p key={i} show={show}>
              <h2>{show.name}</h2>
              <h3>Rating: {show.vote_average}</h3>
              <h3>ID: {show.id}</h3>
            </p>
          )
        })}
      </ul>
    </>
  )
}

{
  /* <Link
  className="show-name"
  to={{
    pathname: `/${show.id}`,
    state: { show },
  }}
>
  <img
    className="other-image"
    src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
  /> */
}
export default ShowAPIInfo
