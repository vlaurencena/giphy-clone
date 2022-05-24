import React, { useState } from "react";
import { Link } from "wouter";

const NavBar = () => {
    const [clicked, setClicked] = useState(true);

    return (
        <div>
            <Link to={"/"}><img src="/media/menu-icon.svg" /></Link>
        </div>
    )
}

export default NavBar;