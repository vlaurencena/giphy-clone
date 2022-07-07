import React from "react"
//css
import "./ClipsContainer.css"
//components
import SingleClip from "./SingleClip"
const ClipsContainer = ({ content }) => {
    return (
        <div className="clips-container">
            <div className="first-column">
                <SingleClip clip={content[0]} />
            </div>
            <div className="second-column">
                <SingleClip clip={content[1]} />
                <SingleClip clip={content[2]} />
            </div>

        </div>
    )
}

export default ClipsContainer