import React from "react"
import Badge from 'react-bootstrap/Badge';

import Position from './position'

// add tags of skills used?

const Company = ({ company, positions, skills, html }) => {
    return (
        <li className="company">
            <h3>{company}</h3>
            
            <section className="skills my-2">
                {skills && skills.map((skill, i) => <Badge key={company + skill} bg="secondary" className="me-2">{skill}</Badge>)}
            </section>
            <span dangerouslySetInnerHTML={{ __html: html }} />
            <ul>
                {positions && positions.map((position, i) => <Position {...position.frontmatter} html={position.html} key={`position-${i}`} />)}
            </ul>
        </li>);
}

export default Company; 