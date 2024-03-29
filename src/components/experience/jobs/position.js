import * as React from "react"

// markup 
const Position = ({ title, start, end, skills, html }) => {
    return (
        <li className="position">
            <h4 className="d-flex justify-content-between"><span>{title}</span><span>{`${start} - ${end ?? "now"}`}</span></h4>
            <span dangerouslySetInnerHTML={{ __html: html }} />
        </li>);
}


export default Position;