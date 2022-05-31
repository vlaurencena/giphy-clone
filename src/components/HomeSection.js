import React from "react"
import { Link } from "wouter"
//components
import Slider from "./Slider"
//css
import "./HomeSection.css"
//icons
import ChevronRightIcon from "@mui/icons-material/ChevronRight"

const HomeSection = ({ content, icon, link_text, link_url, title }) => {
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
                {content && <Slider
                    content={content}
                />}
            </div>
        </section>
    )
}

export default HomeSection