

const channelSearchEndpoint = (query) => {
    const apiURL = `https://api.giphy.com/v1/channels/search?q=${query}&api_key=${process.env.REACT_APP_GIPHY_API_KEY}`;
    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const { data } = response;
            const channels = []
            data.forEach((channel, index) => {
                index <= 1 && channels.push({
                    avatar: channel.user.avatar_url,
                    name: channel.display_name,
                    url: channel.slug
                })
            })
            return channels
        });
}

export default channelSearchEndpoint