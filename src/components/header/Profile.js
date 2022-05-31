import React, { useState } from 'react'
//components 
import ProfileDropdown from "./ProfileDropdown"
//icons
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
//css
import "./Profile.css";


const Profile = () => {

    const [hover, setHover] = useState(false)


    const handleOnMouseEnter = () => {
        setHover(true) //true
    }
    const handleOnMouseLeave = () => {
        setHover(false) //false
    }
    return (
        <div
            className="Profile"
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
        >

            <img src="https://media.giphy.com/avatars/default3/80h.gif" alt="User's avatar" />
            <div className="Profile__username">vlaurencena</div>
            <ArrowDropDownIcon />
            {hover && <ProfileDropdown />}
        </div>
    )
}

export default Profile