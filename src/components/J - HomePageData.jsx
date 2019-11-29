// DONE get JSON data from api
// DONE add random show picker for top div
// DONE show all needed data on home page

// TODO main page set up and styling

import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ShowAPIInfo = () => {
  const [tvShow, setTvShow] = useState([[]])
  const [random, setRandom] = useState(0)
  const [page, setPage] = useState(1)
  const show = { show }
  const getAPIData = async () => {
    const resp = await axios.post(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=17cb5378f871124dfc852a9d103647e3&language=en-US&page=${page}`
    )
    console.log(resp.data.results)
    setTvShow(resp.data.results)
    setPage(resp.data.page)
    setRandom(Math.floor(Math.random() * resp.data.results.length))
  }

  useEffect(() => {
    getAPIData()
  }, [page])

  return (
    <>
      <section className="mainPage">
        <section className="randomShow">
          <img
            className="randomShowCover"
            src={`https://image.tmdb.org/t/p/w500${tvShow[random].poster_path}`}
          />
          <section className="randomShowName">
            <h2>{tvShow[random].name}</h2>
            <p>Rating: {tvShow[random].vote_average}</p>
          </section>
        </section>
        <section className="allShows">
          <h1>Top Rated Shows</h1>
          <section>
            <ul className="showDetails">
              {tvShow.map((show, i) => {
                return (
                  <div key={i} show={show}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                    />
                    <li className="title">{show.name}</li>
                    <br></br>
                    <li>Rating: {show.vote_average}</li>
                    <li>Overview: {show.overview}</li>
                  </div>
                )
              })}
            </ul>
          </section>
        </section>
      </section>
    </>
  )
}

// test push to verify clone done correctly

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
