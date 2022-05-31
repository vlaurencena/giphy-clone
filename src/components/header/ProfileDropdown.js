import React, { useState } from 'react'
import { Link } from "wouter";
//css
import "./ProfileDropdown.css";
const ProfileDropdown = () => {
    
    return (
        <div className="ProfileDropdown">
            <div></div>
            <ul>
                <li id="">
                    <button>Collections</button>
                </li>
                <li id="">
                    <Link to="/settings">Settings</Link>
                </li>
                <li id="">
                    <Link to="/favorites">Favorites</Link>
                </li>
                <li id="">
                    <button>Logout</button>
                </li>
            </ul>
        </div>
    )
}

export default ProfileDropdown