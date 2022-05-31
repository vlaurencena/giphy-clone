import React from "react"
import { Link } from "wouter"
//components
import NavBar from "./NavBar"
import Profile from "./Profile"
//css
import "./Header.css"

const Header = () => {

    return (
        <header className="Header width-1040">
            <Link to="/"><img className="cliphy-logo" src="/media/cliphy-logo.svg" alt="Cliphy logo" /></Link>
            <NavBar />
            <div className="Header__buttons">
                <button>Upload</button>
                <button>Create</button>
            </div>
            <Profile />
        </header>
    )
}

export default Header;

