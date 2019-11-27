import React, { useState, useEffect } from 'react'
import axios from 'axios'

const getShowData = async () => {
  const showResp = await axios.get(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=0e8aba4bfd1f0badefbdd05a4949c889&language=en-US&page=1`
  )
  setShowID(showResp.data.results.id)
}

const getCastData = async () => {
  const castResp = await axios.get(
    `https://api.themoviedb.org/3/tv/${showID}/credits?api_key=0e8aba4bfd1f0badefbdd05a4949c889&language=en-US`
  )
  console.log(castResp.data)
  setCastData(castResp.cast)
}

useEffect(() => {
  console.log('using the effect')
  getShowData()
  getCastData()
}, [])

return (
  <ul>
    {showData.map(show => {
      return (
        <section className="ShowInfo">
          <h1 className="ShowTitle">{showData.title}</h1>
          <img className="ShowPoster" src={showData.poster_path}></img>
          <h2 className="AirDate">{showData.first_air_date}</h2>
          <p className="ShowOverview">{showData.overview}</p>
        </section>
      )
    })}
  </ul>
)
export default ShowData
