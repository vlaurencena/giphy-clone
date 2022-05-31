import React from "react";
import { Link } from "wouter";
import "./NavBar.css";
//icons
import MoreVertIcon from "@mui/icons-material/MoreVert";
const NavBar = () => {

    const LINKS = ["Reactions", "Entertainment", "Sports", "Stickers", "Artists"];

    return (
        <nav className="NavBar">
            {LINKS.map(link => {
                return (
                    <div key={link} className={`NavBar__link-wrapper ${link.toLocaleLowerCase()}`}>
                        <div className="menu-button">
                            <Link
                                to={link.toLocaleLowerCase()}>
                                {link}
                            </Link>
                        </div>
                    </div>
                )

            })}
            <div className="NavBar__link-wrapper more-vert-icon">
                <div className="menu-button">
                    <MoreVertIcon />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;

// menu -> NavBar