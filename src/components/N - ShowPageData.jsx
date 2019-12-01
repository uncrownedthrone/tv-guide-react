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
      {' '}
      <p>{showData.name}</p>
      {castData.map(member => {
        return <Link to={'/CastPage/' + member.id}>{member.name}</Link>
      })}
    </>
  )
}
export default ShowInfo
