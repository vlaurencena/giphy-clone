import React from 'react'
import LisfOfGifs from "../components/LisfOfGifs"
import useGifs from "../hooks/useGifs"

const Search = ({ params }) => {
    const { query } = params
    const { loading, gifs } = useGifs({ query })

    return (
        <>
            {loading
                ? <div>Loading</div>
                : <LisfOfGifs
                    gifs={gifs}
                />
            }
        </>

    )
}

export default Search