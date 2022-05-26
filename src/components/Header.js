import React from "react";
import { Link } from "wouter";
//components
import NavBar from "./NavBar";
//css
import "./Header.css";
const Header = () => {

    return (
        <header className="Header width-1040">
            <Link to="/"><div>CLIPHY</div></Link>
            <NavBar />
        </header>
    )
}

export default Header;