const trendingEndpoint = ({ limit }) => {
    const apiURL = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=${limit}`;
    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const { data } = response;
            console.log(data);
            const gifs = data.map(singleGif => {
                // console.log(singleGif);
                const { id, slug, title } = singleGif;
                const { url } = singleGif.images.downsized;
                let avatar_url, username, display_name
                if (singleGif.user) {
                    avatar_url = singleGif.user.avatar_url
                    username = singleGif.user.username
                    display_name = singleGif.user.display_name
                }
                return { id, slug, title, url, avatar_url, username, display_name }
            });
            return gifs;
        });
}

export default trendingEndpoint;