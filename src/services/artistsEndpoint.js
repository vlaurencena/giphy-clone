
const artistsEndpoint = () => {

    const LIST_OF_ARTISTS = [
        "mentalbarf",
        "paulinebaines",
        "rupperttellac",
        "plastikiller",
        "xdelacra",
        "laplagainvade",
        "joetutwinograd"
    ]

    const artists = []
    LIST_OF_ARTISTS.forEach(artist => {
        const apiURL = `https://api.giphy.com/v1/channels/search?q=${artist}&api_key=${process.env.REACT_APP_GIPHY_API_KEY}`;
        return fetch(apiURL)
            .then(res => res.json())
            .then(response => {
                if (response.pagination.total_count > 0) {
                    return artists.push(response.data[0])
                }
            });
    })
    return artists
}


export default artistsEndpoint;