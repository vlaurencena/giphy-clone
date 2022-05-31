import React, { useEffect, useState } from "react"
//components
import HomeSection from "../components/HomeSection"
//services
import trendingEndpoint from "../services/trendingEndpoint"
//css
import "./Home.css"

const Home = () => {
  const [trending, setTrending] = useState([])
  const TRENDING_LIMIT = 23

  useEffect(() => {
    trendingEndpoint({ limit: TRENDING_LIMIT }).then(result => {
      setTrending(result)
    })
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