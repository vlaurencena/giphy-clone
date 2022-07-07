import React from "react"
import { Link } from "wouter";
//icons
import VerifiedIcon from "@mui/icons-material/Verified"
//css
import "./SingleArtistInfo.css"

const SingleArtistInfo = ({ avatar_url, display_name, isVerified, slug, title }) => {
    return (
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
    )
}

export default SingleArtistInfo