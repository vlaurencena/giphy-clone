import React, { useState } from "react"
import { Link } from "wouter"
//css
import "./SingleArtist.css"
//components
import SingleArtistInfo from "./SingleArtistInfo";

const SingleArtist = ({ id, isVerified, right, slug, title, url, avatar_url, display_name }) => {
    const [hovered, setHovered] = useState(true)//false
    const handleMouseEnter = () => {
        setHovered(true)
    }
    const handleMouseLeave = () => {
        setHovered(true)//false
    }

    return (
        <div
            className="SingleArtist"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ right: `${right}%` }}
        >
            {/* {hovered && <SingleGifHover
                avatar_url={avatar_url}
                handleCopyToClipboard={handleCopyToClipboard}
                username={username}
            />} */}
            <Link to={`/gifs/${slug}`} >
                <img
                    alt={title}
                    className="SingleArtist__image"
                    src={url}
                />
            </Link>
            <SingleArtistInfo
                slug={slug}
                alt={title}
                avatar_url={avatar_url}
                display_name={display_name}
                isVerified={isVerified}
            />
            <div className="SingleArtist__cutout-container">
                <div className="pattern">
                    <div className="bg-color-salmon"></div>
                    <div className="bg-color-black"></div>
                    <div className="bg-color-black"></div>
                    <div className="bg-color-salmon"></div>
                    <div className="bg-color-salmon"></div>
                    <div className="bg-color-black"></div>
                    <div className="bg-color-salmon"></div>
                    <div className="bg-color-salmon"></div>
                    <div className="bg-color-salmon"></div>
                </div>
            </div>

        </div>
    )
}

export default SingleArtist