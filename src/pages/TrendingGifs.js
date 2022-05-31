import React, { useState, useEffect } from "react"
import ListOfGifs from "../components/ListOfGifs"
import trendingEndpoint from "../services/trendingEndpoint"
import "./TrendingGifs.css"

const TrendingGifs = () => {
    const [trending, setTrending] = useState([])
    const TRENDING_LIMIT = 23

    useEffect(() => {
        trendingEndpoint({ limit: TRENDING_LIMIT }).then(result => {
            setTrending(result)
        })
    }, [])
    return (
        <div className="TrendingGifs width-1040">
            <h1>Trending GIFs</h1>
            <ListOfGifs
                gifs={trending}
            />
        </div>
    )
}

export default TrendingGifs