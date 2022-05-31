import React from "react";
import SingleGif from "./SingleGif";
import "./ListOfGifs.css"

const ListOfGifs = ({ gifs }) => {
    return (
        <div className="ListOfGifs">
            {gifs.map(gifItem => <SingleGif
                key={gifItem.id}
                title={gifItem.title}
                url={gifItem.url}
                id={gifItem.id}
                slug={gifItem.slug}
                avatar_url={gifItem.avatar_url}
                username={gifItem.username}

            />)}
        </div>
    )
}

export default ListOfGifs
