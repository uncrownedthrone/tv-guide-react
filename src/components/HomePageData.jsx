import React, { useState, useEffect } from 'react'
import axios from 'axios'

const HomePageData = () => {
  const ShowApiInfop = () => {
    const [movies, setMovies] = useState([])
    const getShowData = async () => {
      const resp = await axios.post(
        `https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=release_date.desc&api_key=17cb5378f871124dfc852a9d103647e3`
      )
    }

    useEffect(() => {
      getShowData()
    }, [])

    const ShowData = props => {
      return (
        <>
          <div>
            <img
              src={
                'https://image.tmdb.org/t/p/w185_and_h278_bestv2/' + props.image
              }
              alt="movie poster"
            />
            <li className="title">{props.title}</li>
            <li>{props.overview}</li>
          </div>
        </>
      )
    }
  }
}
export default HomePageData
