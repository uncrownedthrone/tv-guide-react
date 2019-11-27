import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CastMemberList = () => {
  const [showID, setShowID] = useState('')
  const [castData, setCastData] = useState()

  // get show id for cast API call
  const getShowData = async () => {
    const showResp = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=beef9ba86ca8277fb3da8d91389f491d&language=en-US&page=1`
    )
    setShowID(showResp.data.results.id)
  }

  // get cast member API data
  const getCastData = async () => {
    const castResp = await axios.get(
      `https://api.themoviedb.org/3/tv/${showID}/credits?api_key=beef9ba86ca8277fb3da8d91389f491d&language=en-US`
    )
    console.log(castResp.data)
    setCastData(castResp.cast)
  }

  useEffect(() => {
    getShowData()
    getCastData()
  }, [])

  return (
    <ul>
      {castData.map(member => {
        return (
          <li>
            <section className="cast-member-container">
              <section className="cast-info-container">
                <p className="cast-name">{castData.name}</p>
                <p className="character-name">{castData.character}</p>
              </section>
              <section className="cast-picture-container">
                <img
                  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${castData.profile_path}`}
                />
              </section>
            </section>
          </li>
        )
      })}
    </ul>
  )
}

export default CastMemberList
