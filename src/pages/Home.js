import React, { useEffect, useState } from "react"
//components
import HomeSection from "../components/homeSection/HomeSection"
//services
import trendingEndpoint from "../services/trendingEndpoint"
import artistsEndpoint from "../services/artistsEndpoint"
//css
import "./Home.css"

const Home = () => {
  const [trending, setTrending] = useState([])
  const TRENDING_LIMIT = 23
  const [artists, setArtists] = useState([])

  useEffect(() => {
    trendingEndpoint({ limit: TRENDING_LIMIT }).then(result => {
      setTrending(result)
    })
    setArtists(artistsEndpoint())
  }, [])

  return (
    <div className="Home width-1040">
      <HomeSection
        content={trending}
        icon={"trending"}
        link_text={"All The GIFs"}
        link_url={"trending-gifs"}
        title={"Trending"}
      />
      <HomeSection
        content={artists}
        icon={"artists"}
        link_text={"All GIPHY Artists"}
        link_url={"trending-gifs"}
        title={"Artists"}
      />
      <HomeSection
        icon={"clips"}
        link_text={"All Clips"}
        link_url={"trending-gifs"}
        title={"Clips"}
      />
      <HomeSection
        icon={"stories"}
        title={"Stories"}
      />
    </div>
  )
}

export default Home;