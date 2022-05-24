import { useState, useEffect } from 'react';
import fetchGifsByQuery from "../services/fetchGifsByQuery";

const useGifs = ({ query }) => {

    const [loading, setLoading] = useState(true)
    const [gifs, setGifs] = useState([])

    useEffect(() => {
        setLoading(true)
        fetchGifsByQuery(query).then(searchResult => {
            setGifs(searchResult)
            setLoading(false)
        })
    }, [query]);

    return { loading, gifs }
}

export default useGifs