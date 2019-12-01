import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ShowInfo = props => {
  console.log(props.show)
  const [showData, setShowData] = useState('')
  const [castData, setCastData] = useState([])
  const getShowData = async () => {
    const showResp = await axios.get(
      `https://api.themoviedb.org/3/tv/${props.show}?api_key=0e8aba4bfd1f0badefbdd05a4949c889&language=en-US&page=1`
    )
    setShowData(showResp.data)
    console.log(showResp.data)
  }

  const getCastData = async () => {
    const castResp = await axios.get(
      `https://api.themoviedb.org/3/tv/${props.show}/credits?api_key=0e8aba4bfd1f0badefbdd05a4949c889&language=en-US`
    )
    console.log(castResp.data.cast)
    setCastData(castResp.data.cast)
  }

  useEffect(() => {
    console.log('using the effect')
    getShowData()
  }, [])

  useEffect(() => {
    console.log('using the effect')
    getCastData()
  }, [])

  return (
    <>
      <section className="ShowInfo">
        <h1 className="ShowTitle">{showData.title}</h1>
        <img
          className="ShowPoster"
          src={`https://image.tmdb.org/t/p/w500${showData.poster_path}`}
        ></img>
        <h2 className="AirDate">{showData.first_air_date}</h2>
        <p className="ShowOverview">{showData.overview}</p>
      </section>

      <section className="CastInfo">
        <ul>
          {castData.map(member => {
            return (
              <li>
                <h3 className="CharacterInfo">{castData.character}</h3>
                <h4 className="CastInfo">{castData.name}</h4>
                <img
                  className="CastImage"
                  src={`https://image.tmdb.org/t/p/w500${castData.profile_path}`}
                ></img>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}

export default ShowInfo
