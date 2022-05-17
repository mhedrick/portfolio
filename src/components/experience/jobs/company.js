import React from "react"

import Position from './position'

// add tags of skills used?

const Company = ({ names, positions }) => {
    return (
        <li>
            <h3>{names.join(" / ")}</h3>
            <ul className="position">
                {positions && positions.map((position, i) => <Position {...position.frontmatter} html={position.html} key={`position-${i}`} />)}
            </ul>
        </li>);
}

export default Company; 