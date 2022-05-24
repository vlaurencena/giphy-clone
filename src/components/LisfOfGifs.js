import React from "react";
import SingleGif from "./SingleGif";

const LisfOfGifs = ({ gifs }) => {

    return (
        <div>{gifs.map(gifItem => <SingleGif
            key={gifItem.id}
            title={gifItem.title}
            url={gifItem.url}
        />)}
        </div>
    )
}

export default LisfOfGifs;