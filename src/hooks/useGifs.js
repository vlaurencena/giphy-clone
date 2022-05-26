import { useState, useEffect } from 'react';
import searchEndpoint from "../services/searchEndpoint";

const useGifs = ({ query }) => {

    const [loading, setLoading] = useState(true)
    const [gifs, setGifs] = useState([])

    useEffect(() => {
        setLoading(true)
        searchEndpoint(query).then(searchResult => {
            setGifs(searchResult)
            setLoading(false)
        })
    }, [query]);

    return { loading, gifs }
}

export default useGifs