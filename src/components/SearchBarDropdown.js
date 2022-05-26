import React, { useEffect, useState } from 'react'
import { Link } from "wouter";
import autocomplete from "../services/autocomplete";
import channelSearchEndpoint from "../services/channelSearchEndpoint";
//css 
import './SearchBarDropdown.css'
import SearchBarDropdownChannels from "./SearchBarDropdownChannels";

const SearchBarDropdown = ({ query }) => {
    const [names, setNames] = useState([])
    const [channels, setChannels] = useState([])

    useEffect(() => {
        autocomplete(query).then(result => {
            setNames(result)
        })
        channelSearchEndpoint(query).then(result => {
            setChannels(result)
        })
    }, [query])

    return (
        <div className="SearchBarDropdown width-1040">
            {names.length > 0 && names.map(name => {
                return <Link
                    key={name}
                    to={`/search/${name}`}>
                    {name}
                </Link>
            })}
            {channels && <SearchBarDropdownChannels 
            channels={channels} 
            />}
        </div>
    )
}

export default SearchBarDropdown