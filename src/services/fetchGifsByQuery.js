const API_KEY = "h0NKZsVaHPxtxCaQlw4qCAPueRdJB0wB";

const fetchGifsByQuery = (query) => {
    const apiURL = `https://api.giphy.com/v1/gifs/search?q=${query}&limit=25&offset=0&lang=en&api_key=${API_KEY}`;
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

export default fetchGifsByQuery;