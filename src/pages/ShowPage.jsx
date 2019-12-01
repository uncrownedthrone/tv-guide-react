import React from 'react'
import ShowInfo from '../components/N - ShowPageData'

const ShowPage = props => {
  console.log(props)
  return (
    <div>
      <section></section>
      <section>
        <ShowInfo show={props.match.params.show} />
      </section>
    </div>
  )
}

export default ShowPage
