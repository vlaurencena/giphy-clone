import React from 'react'
import SingleArtistInfo from "./SingleArtistInfo";
//css
import "./SingleClip.css"

const SingleClip = ({ clip }) => {

    console.log(clip);

    return (
        <div className="SingleClip">
            <div
                className="SingleClip__image"
                style={{
                    backgroundImage: `url(${clip.url})`,
                    backgroundRepeat: "no-repeat",
                    // backgroundAttachment: "fixed",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                }}
            ></div>
            <div className="SingleClip__info">
                <SingleArtistInfo
                    slug={clip.username}
                    alt={clip.title}
                    avatar_url={clip.avatar_url}
                    display_name={clip.display_name}
                    isVerified={clip.is_verified}
                />
            </div>
        </div>
    )
}

export default SingleClip