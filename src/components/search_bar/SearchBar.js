import React, { useEffect, useState } from "react"
import { useLocation } from "wouter"

//css 
import "./SearchBar.css"
//components
import SearchBarDropdown from "./SearchBarDropdown"

const SearchBar = ({ params }) => {
    const [value, setValue] = useState("")
    const [location, setLocation] = useLocation()
    const [searchDropdown, setSearchDropdown] = useState(false)

    const handleChange = e => {
        setValue(e.target.value)
        setSearchDropdown(true)
    }

    const handleSubmit = e => {
        e.preventDefault();
        setLocation(`/search/${value}`)
    }

    useEffect(() => {
        let newValue = location.replace("/search/", "");
        location.includes("/search/") ? setValue(decodeURI(newValue)) : setValue("");
    }, [location])

    useEffect(() => {
        setSearchDropdown(false)
    }, [])

    return (
        <div className="SearchBar width-1040">
            <form onSubmit={handleSubmit}>
                <div className="SearchBar__input-container">
                    <div className="SearchBar__Placeholder">
                        <div className={`SearchBar__Placeholder__options ${value.length !== 0 ? "visibility-hidden" : ""}`}>
                            <p>@username + tag to search within a verified channel</p>
                            <p>Search all the GIFs and Stickers</p>
                            <p>@username + tag to search within a verified channel</p>
                            <p>Search all the GIFs and Stickers</p>
                        </div>
                    </div>
                    <input onChange={handleChange} type="text" value={value} />
                    {searchDropdown && <SearchBarDropdown query={value} />}
                </div>
                <button type="submit">
                    <img onClick={handleSubmit} src="/media/search-icon.svg" alt="Search Icon" />
                </button>
            </form>
        </div>
    )
}

export default SearchBar