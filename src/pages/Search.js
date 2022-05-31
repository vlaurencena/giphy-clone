import React from "react"
import ListOfGifs from "../components/ListOfGifs"
import useGifs from "../hooks/useGifs"

const Search = ({ params }) => {
    const { query } = params
    const { loading, gifs } = useGifs({ query })

    return (
        <>
            {loading
                ? <div>Loading</div>
                : <ListOfGifs
                    gifs={gifs}
                />
            }
        </>

    )
}

export default Search