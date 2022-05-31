import React, { useEffect, useState } from "react"
import { Link } from "wouter";
import autocomplete from "../../services/autocomplete";
import channelSearchEndpoint from "../../services/channelSearchEndpoint";
//css 
import "./SearchBarDropdown.css"
import SearchBarDropdownAutocomplete from "./SearchBarDropdownAutocomplete";
import SearchBarDropdownChannels from "./SearchBarDropdownChannels";

const SearchBarDropdown = ({ query }) => {
    const [names, setNames] = useState([])
    const [channels, setChannels] = useState([])
    const [autocompleteQty, setAutocompleteQty] = useState(3)

    useEffect(() => {
        autocomplete(query).then(result => {
            setNames(result)
        })
        channelSearchEndpoint(query).then(result => {
            setChannels(result)
        })

    }, [query])

    useEffect(() => {
        setAutocompleteQty(channels.length !== 0 ? 3 : 5)
    }, [channels])

    return (
        <div className="SearchBarDropdown width-1040">
            {names && <SearchBarDropdownAutocomplete
                names={names}
                qty={autocompleteQty}
            />}
            {channels.length !== 0 && <SearchBarDropdownChannels
                channels={channels}
            />}
        </div>
    )
}

export default SearchBarDropdown