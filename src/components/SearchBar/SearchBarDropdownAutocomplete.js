import React from "react"
import { Link } from "wouter"

const SearchBarDropdownAutocomplete = ({ names, qty }) => {
    return (
        <>
            {names.map((name, index) => {
                if (index < qty) {
                    return <Link
                        key={name}
                        to={`/search/${name}`}>
                        {name}
                    </Link>
                } else {
                    return <></>
                }
            })}
        </>

    )
}

export default SearchBarDropdownAutocomplete