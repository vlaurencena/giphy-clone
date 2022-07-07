import React, { useState } from "react"
import { Link } from "wouter"
//css
import "./SingleGif.css"
//components
import SingleGifHover from "./SingleGifHover"

const SingleGif = ({ id, right, slug, title, src, avatar_url, username }) => {
    const [hovered, setHovered] = useState(false)//false

    const handleMouseEnter = () => {
        setHovered(true)
    }
    const handleMouseLeave = () => {
        setHovered(false)
    }
    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(`https://media.giphy.com/media/${id}/giphy.gif`)
        alert("you copied link to clipboard")
        //TODO TOAST
    }

    return (
        <div
            className="SingleGif"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ right: `${right}%` }}
        >
            {hovered && <SingleGifHover
                avatar_url={avatar_url}
                handleCopyToClipboard={handleCopyToClipboard}
                username={username}
            />}
            <Link to={`/gifs/${slug}`}>
                <img
                    alt={title}
                    src={src}
                />
            </Link>
        </div >
    )
}

export default SingleGif