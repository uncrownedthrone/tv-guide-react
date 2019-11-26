import React from 'react'

const CastMemberList = props => {
  const [showID, setShowID] = useState('')

  const getShowData = async () => {
    const showResp = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=beef9ba86ca8277fb3da8d91389f491d&language=en-US&page=1`
    )
    setShowID(showResp.data.results.id)
  }

  const getCastData = async () => {
    const castResp = await axios.get(
      `https://api.themoviedb.org/3/tv/${showID}/credits?api_key=beef9ba86ca8277fb3da8d91389f491d&language=en-US`
    )
    console.log(castResp.data.results)
  }
  return <section></section>
}

export default CastMemberList
