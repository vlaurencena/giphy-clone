import React from 'react'
//css
import "./ClipsContainer.css"
import SingleClip from "./SingleClip";
const ClipsContainer = ({ content }) => {
    console.log(content);
    return (
        <div className="ClipsContainer">
            <div className="ClipsContainer__main">
                <SingleClip clip={content[0]} />
            </div>
            <div className="ClipsContainer__secondary">
                <SingleClip clip={content[1]} />
                <SingleClip clip={content[2]} />
            </div>

        </div>
    )
}

export default ClipsContainer