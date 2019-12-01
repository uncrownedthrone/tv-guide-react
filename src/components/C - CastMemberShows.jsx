import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CastMemberInfo = props => {
  const [memberData, setMemberData] = useState([])

  const getMemberData = async () => {
    // pull API data according to the ID in the URL that was <Linked
    const memberResp = await axios.post(
      `https://api.themoviedb.org/3/person/${props.match.params.memberID}?api_key=17cb5378f871124dfc852a9d103647e3&language=en-US&append_to_response=tv_credits'`
    )
    setMemberData(memberResp.data)
  }

  useEffect(() => {
    getMemberData()
  }, [])

  return (
    <div>
      <section>
        <img
          src={`https://image.tmdb.org/t/p/w500${memberData.profile_path}`}
        />
        <p>
          {memberData.name} - {memberData.biography}
        </p>
      </section>
      <ul>
        {memberData.cast.map(credits => {
          return (
            <li>
              <p>
                {credits.character} in {credits.original_name}
              </p>
              <p>{credits.first_air_date}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CastMemberInfo
