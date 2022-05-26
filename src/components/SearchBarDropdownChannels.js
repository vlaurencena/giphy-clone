import React from 'react'
import { Link } from "wouter"
//css
import './SearchBarDropdownChannels.css'

const SearchBarDropdownChannels = ({ channels }) => {
    return (
        <div className="SearchBarDropdownChannels width-1040">
            <div className="SearchBarDropdownChannels__title">Channels</div>
            {
                channels.map(channel => {
                    return <Link
                        className="SearchBarDropdownChannels__item"
                        key={channel.name}
                        to={`/${channel.url}`}>
                        <img src={channel.avatar} alt={channel.name} />
                        <div>{channel.name}</div>
                    </Link>
                })
            }
        </div>
    )
}

export default SearchBarDropdownChannels