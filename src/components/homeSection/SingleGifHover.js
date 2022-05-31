import React from 'react'
import { Link } from "wouter"
import "./SingleGifHover.css"
//icons
import FavoriteIcon from '@mui/icons-material/Favorite';
import LinkIcon from '@mui/icons-material/Link';
const SingleGifHover = ({ username, avatar_url, handleCopyToClipboard }) => {
    console.log(avatar_url);
    return (
        <div className="SingleGifHover">
            <div className="SingleGifHover__buttons">
                <button onClick={handleCopyToClipboard}>
                    <LinkIcon />
                </button>
                <button>
                    <FavoriteIcon />
                </button>
            </div>
            {username && <Link to={`/${username}`}>
                <img
                    alt={username}
                    className="SingleGifHover__channel-avatar"
                    src={avatar_url}
                />
            </Link>}
        </div>
    )
}

export default SingleGifHover