import React from 'react'
import axios from 'axios'

const ShowApiInfop = () => {
  const apiUrl =
    'https://api.themoviedb.org/3/tv/top_rated?api_key=17cb5378f871124dfc852a9d103647e3&language=en-US&page=1'
  const [shows, setShows] = useState([])
  const getShowData = async () => {
    const resp = await axios.post(apiUrl)
  }

  useEffect(() => {
    getShowData()
  }, [])

  const ShowData = props => {
    return (
      <>
        <div>
          <img src={'' + props.image} alt="" />
          <li>{props.title}</li>
          <li>{props.overview}</li>
        </div>
      </>
    )
  }
}
export default HomePageData
