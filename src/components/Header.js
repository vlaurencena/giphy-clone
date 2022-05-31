import React from "react";
import { Link } from "wouter";
//components
import NavBar from "./NavBar";
//css
import "./Header.css";
//icons
import { KeyboardArrowDown } from "@mui/icons-material";

const Header = () => {

    return (
        <header className="Header width-1040">
            <Link to="/"><img className="cliphy-logo" src="/media/cliphy-logo.svg" alt="Cliphy logo" /></Link>
            <NavBar />
            <div className="Header__buttons">
                <button>Upload</button>
                <button>Create</button>
            </div>
            <div className="Header__profile">
                <img src="/media/user-avatar.jpeg" alt="User's avatar" />
                <button>Victor</button>
                <KeyboardArrowDown />
            </div>
        </header>
    )
}

export default Header;

