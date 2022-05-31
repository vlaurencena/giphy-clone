import React, { useEffect, useState } from "react"
//components
import SingleGif from "./SingleGif"
//css
import "./Slider.css"
//icons
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Slider = ({ limit, content }) => {

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
        {content.map((gif, index) => {
          return (
            <SingleGif
              id={gif.id}
              key={gif.id}
              right={right}
              slug={gif.slug}
              title={gif.title}
              url={gif.url}
              avatar_url={gif.avatar_url}
              username={gif.username}
            />
          )
        })}
      </div>

    </div >
  )
}

export default Slider