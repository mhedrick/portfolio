import * as React from "react"

// markup 
const Position = ({ title, start, end, html }) => {
    return (
        <li>
            <h4>{`${title} // ${start} - ${end ?? "now"}`}</h4>
            <span dangerouslySetInnerHTML={{ __html: html }} />
        </li>);
}


export default Position;