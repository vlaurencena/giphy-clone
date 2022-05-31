const autocomplete = (query) => {
    const apiURL = `https://api.giphy.com/v1/gifs/search/tags?q=${query}&api_key=${process.env.REACT_APP_GIPHY_API_KEY}`;
    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const { data } = response;
            const names = data.map(item => {
                const { name } = item;
                return name;
            });
            return names;
        });
}

export default autocomplete