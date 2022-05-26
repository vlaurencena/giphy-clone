const API_KEY = "h0NKZsVaHPxtxCaQlw4qCAPueRdJB0wB";

const channelSearchEndpoint = (query) => {
    const apiURL = `https://api.giphy.com/v1/channels/search?q=${query}&api_key=${API_KEY}`;
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

export default channelSearchEndpoint;