import React, { useState, useEffect } from "react"
import { Link } from "wouter"
//components
import Slider from "./Slider"
import ClipsContainer from "./ClipsContainer"
//css
import "./HomeSection.css"
//icons
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import StoriesContainer from "./StoriesContainer"

const HomeSection = ({ content, icon, link_text, link_url, title }) => {
    const [showSlider, setShowSlider] = useState(false)
    const [showClips, setShowClips] = useState(false)
    const [showStories, setShowStories] = useState(false)

    useEffect(() => {
        if (title === "Trending" || title === "Artists") {
            setShowSlider(true)
        }
        title === "Clips" && setShowClips(true)
        title === "Stories" && setShowStories(true)
    }, [title])

    return (
        <section className="HomeSection">
            <div className="HomeSection__heading">
                <Link to={`/${link_url}`}>
                    <img src={`/media/${icon}-icon.svg`} alt={title} />
                    <h3>{title}</h3>
                </Link>
                {link_text && <Link to={`/${link_url}`}>
                    <h5>{link_text}</h5>
                    <ChevronRightIcon />
                </Link>}
            </div>
            <div>
                {showSlider && content.length > 0 && <Slider
                    content={content}
                    type={title}
                />}
                {showClips && content.length > 0 && <ClipsContainer
                    content={content}
                />}
                {showStories && content.length > 0 && <StoriesContainer
                    content={content}
                />}
            </div>
        </section>
    )
}

export default HomeSection