import React, { useEffect, useState } from "react"
//components
import HomeSection from "../components/homeSection/HomeSection"
//services
import trendingEndpoint from "../services/trendingEndpoint"
import artistsEndpoint from "../services/artistsEndpoint"
import HARDCODED_CLIPS from "../services/clipsTrendingEndpoint"
//css
import "./Home.css"

const Home = () => {
  const TRENDING_LIMIT = 23
  const [trending, setTrending] = useState([])
  const [artists, setArtists] = useState([])
  const [clips, setClips] = useState([])

  useEffect(() => {
    trendingEndpoint({ limit: TRENDING_LIMIT }).then(result => {
      setTrending(result)
      setClips(HARDCODED_CLIPS)
    })
    setArtists(artistsEndpoint())
  }, [])

  return (
    <div className="Home width-1040">
      {/* TRENDING */}
      <HomeSection
        content={trending}
        icon={"trending"}
        link_text={"All The GIFs"}
        link_url={"trending-gifs"}
        title={"Trending"}
      />
      {/* ARTISTS */}
      <HomeSection
        content={artists}
        icon={"artists"}
        link_text={"All GIPHY Artists"}
        link_url={"trending-gifs"}
        title={"Artists"}
      />
      {/* CLIPS */}
      <HomeSection
        content={clips}
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