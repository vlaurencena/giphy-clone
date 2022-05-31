import React, { useState } from "react"
import { Link } from "wouter"
//css
import "./SingleGif.css"

const SingleGif = ({ id, right, slug, title, url, avatar_url, username }) => {
    const [hovered, setHovered] = useState(false)
    const handleMouseEnter = () => {
        // console.log([id, right, slug, title, url, avatar_url, username]);
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
            {hovered && <>
                <div className="SingleGif__buttons">
                    <button onClick={handleCopyToClipboard}>
                        <img
                            alt="Copy to clipboard"
                            src="/media/copy-to-clipboard.svg" />
                    </button>
                    <button>
                        <img
                            alt="Add to favorites"
                            src="/media/copy-to-clipboard.svg" />
                    </button>
                </div>
                {username && <Link to={`/${username}`}>
                    <img
                        alt={username}
                        className="SingleGif__channel-avatar"
                        src={avatar_url}
                    />
                </Link>}
            </>
            }
            <Link to={`/gifs/${slug}`}>
                <img
                    alt={title}
                    src={url}
                />
            </Link>
        </div>
    )
}

export default SingleGif