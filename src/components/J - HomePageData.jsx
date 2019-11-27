import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import HomePage from '../pages/HomePage'
// import CastMemberList from '../components/CastMemberList'

const ShowAPIInfo = () => {
  const [shows, setShows] = useState([])
  const getShowData = async () => {
    const resp = await axios.post(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=17cb5378f871124dfc852a9d103647e3&language=en-US&page=1'
    )
    console.log('test')
    // setShows(resp.data)
  }

  useEffect(() => {
    getShowData()
  }, [])
}

export default HomePageData
