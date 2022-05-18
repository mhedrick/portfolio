import * as React from "react"
import Badge from 'react-bootstrap/Badge';

// markup 
const Position = ({ title, start, end, skills, html }) => {
    return (
        <li>
            <h4 className="d-flex justify-content-between"><span>{title}</span><span>{`${start} - ${end ?? "now"}`}</span></h4>
            <span dangerouslySetInnerHTML={{ __html: html }} />
            <section className="skills ps-3">
                {skills && skills.map((skill, i) => <Badge key={start + skill} bg="secondary" className="me-2">{skill}</Badge>)}
            </section>
        </li>);
}


export default Position;