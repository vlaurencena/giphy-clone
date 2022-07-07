import React from 'react'
import "./StoriesContainer.css"
//components
import SingleStory from "./SingleStory";

const StoriesContainer = ({ content }) => {

    const gridConfig = [
        ["landscape-left-row", 3],
        ["landscape-right-row", 3],
        ["landscape-middle-row", 3],
        ["no-landscape-row", 4]
    ]
    console.log(content);
    const createStory = (number, row) => {
        const stories = []
        for (let i = 0; i < number; i++) {
            console.log(i + row * 10);
            console.log(content[i].title);
            console.log(content[i].url);
            stories.push(<SingleStory
                alt={content[i + row * 4].title}
                key={content[i + row * 4].url}
                src={content[i + row * 4].url}
            />)
        }
        return stories
    }
    return (
        <div className="stories-container">
            {gridConfig.map(([layout, columns], index) => {
                const story = createStory(columns, index + 1)
                return <div className={layout}>
                    {story}
                </div>
            })}
        </div>
    )
}

export default StoriesContainer