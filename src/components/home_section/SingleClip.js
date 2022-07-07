import React, { useEffect, useState } from "react"
//components
import SingleArtistInfo from "./SingleArtistInfo"
//css
import "./SingleClip.css"
//icons
import FavoriteIcon from "@mui/icons-material/Favorite"
import LinkIcon from "@mui/icons-material/Link"
import VolumeOffIcon from "@mui/icons-material/VolumeOff"
import VolumeUpIcon from "@mui/icons-material/VolumeUp"
const SingleClip = ({ clip }) => {

    const [display, setDisplay] = useState({ display: "block" })
    const [hover, setHover] = useState(false)
    const [muted, setMuted] = useState(true)

    const handleOnMouseEnter = () => {
        setHover(true)
    }
    const handleOnMouseLeave = () => {
        setHover(false)
    }

    const toggleMuted = () => {
        setMuted(!muted)
    }

    useEffect(() => {
        if (hover) {
            setDisplay({ display: "flex" })
        } else {
            setDisplay({ display: "block" })
            setMuted(true)
        }
    }, [hover])

    return (
        <div className="single-clip">
            <div
                className="video-container"
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
                style={display}>
                <video autoPlay="autoplay" loop={true} muted={muted}>
                    <source src={`/media/clips/${clip.id}.mp4`} type="video/mp4" />
                </video>
                <div className="buttons">
                    {hover && <><LinkIcon /> <FavoriteIcon /></>}
                    <div onClick={toggleMuted}>{muted ? <VolumeOffIcon /> : <VolumeUpIcon />}</div>
                </div>
            </div>
            <div className="info">
                <SingleArtistInfo
                    alt={clip.title}
                    avatar_url={clip.user.avatar_url}
                    display_name={clip.user.display_name}
                    isVerified={clip.user.is_verified}
                    slug={clip.user.slug} />
            </div>
            {/* TODO Check GIPHY format */}
        </div >
    )
}
export default SingleClip