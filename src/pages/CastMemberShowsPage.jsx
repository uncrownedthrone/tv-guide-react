import React from 'react'
import CastMemberInfo from '../components/C - CastMemberShows'

const CastMemberShowsPage = props => {
  return (
    <>
      <CastMemberInfo member={props.match.params.member} />
    </>
  )
}

export default CastMemberShowsPage
