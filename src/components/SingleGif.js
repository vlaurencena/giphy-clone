import React from "react";

const SingleGif = ({ title, url }) => {
    return (
        <div>
            <h4>{title}</h4>
            <img alt={title} src={url} />
        </div>
    )
}

export default SingleGif;