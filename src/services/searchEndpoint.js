const searchEndpoint = (query) => {
    const apiURL = `https://api.giphy.com/v1/gifs/search?q=${query}&limit=25&offset=0&lang=en&api_key=${process.env.REACT_APP_GIPHY_API_KEY}`;
    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const { data } = response;
            const gifs = data.map(image => {
                const { images, title, id } = image;
                const { url } = images.downsized_medium;
                return { title, id, url };
            });
            return gifs;
        });
}

export default searchEndpoint;