import React from 'react'
//css
import "./SingleStory.css"
const SingleStory = ({ alt, src }) => {
    return (
        <div className="single-story">
            <img
                alt={alt}
                src={src}
            />
            <div className="text-container">
                <div>{alt}</div>
                <div>{alt}</div>
            </div>
        </div>
    )
}

export default SingleStory