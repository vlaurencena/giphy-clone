import React, { useEffect, useState } from "react"
import { useLocation } from "wouter"
//css 
import './SearchBar.css';

const SearchBar = ({ params }) => {
    const [value, setValue] = useState("")
    const [location, setLocation] = useLocation()


    const handleChange = e => {
        setValue(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        setLocation(`/search/${value}`)
    }

    useEffect(() => {
        let newValue = location.replace("/search/", "");
        location.includes("/search/") ? setValue(newValue) : setValue("");
    }, [location])

    return (
        <div className="SearchBar">
            <form onSubmit={handleSubmit}>
                <div className="SearchBar__input-container">

                    {value.length === 0 &&
                        <div className="SearchBar__Placeholder">
                            <div className="SearchBar__Placeholder__options">
                                <p>@username + tag to search within a verified channel</p>
                                <p>Search all the GIFs and Stickers</p>
                                <p>@username + tag to search within a verified channel</p>
                                <p>Search all the GIFs and Stickers</p>
                            </div>
                        </div>}
                    <input onChange={handleChange} type="text" value={value} />
                </div>
                <button type="submit">
                    <img onClick={handleSubmit} src="/media/search-icon.svg" alt="Search Icon" />
                </button>
            </form>
        </div>
    )
}

export default SearchBar