import React, { useEffect, useState } from "react"
//components
import SingleGif from "./SingleGif"
import SingleArtist from "./SingleArtist"
//css
import "./Slider.css"
//icons
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Slider = ({ content, limit, type }) => {

  const [count, setCount] = useState(0)
  const [right, setRight] = useState(0)
  useEffect(() => {
    setRight(90 * count)
  }, [count])
  const handleMore = () => {
    setCount(count + 1)
  }
  const handleLess = () => {
    setCount(Math.max(count - 1, 0))
  }
  return (
    <div className="Slider">
      {count > 0 && <button className="Slider__less" onClick={handleLess}><ArrowBackIosNewIcon /></button>}
      <button className="Slider__more" onClick={handleMore}><ArrowForwardIosIcon /></button>
      <div className="Slider__content">
        {type === "Trending" && content.map(gif => {
          return (
            <SingleGif
              id={gif.id}
              key={gif.id}
              right={right}
              slug={gif.slug}
              title={gif.title}
              src={gif.url}
              avatar_url={gif.avatar_url}
              username={gif.username}
            />
          )
        })}
        {type === "Artists" && content.map(artist => {
          return (
            <SingleArtist
              id={artist.id}
              key={artist.id}
              url={artist.featured_gif.images.downsized.url}
              slug={artist.slug}
              right={right}
              display_name={artist.user.display_name}
              isVerified={artist.user.is_verified}
              avatar_url={artist.user.avatar_url}
            />
          )
        })}
      </div>
    </div >
  )
}

export default Slider