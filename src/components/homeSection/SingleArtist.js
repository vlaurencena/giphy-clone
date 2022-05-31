import React, { useState } from "react"
import { Link } from "wouter"
//css
import "./SingleArtist.css"
//components
//icons
import VerifiedIcon from '@mui/icons-material/Verified';

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
            <div className="SingleArtist__info">
                <Link to={`/${slug}`}>
                    <img
                        alt={title}
                        src={avatar_url}
                    />
                    <div>
                        <div className="SingleArtist__display_name">{display_name}</div>
                        <div className="SingleArtist__display_slug"><span>@{slug}</span>{isVerified && <VerifiedIcon />}</div>
                    </div>
                </Link>
            </div>
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