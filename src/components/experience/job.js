import * as React from "react"

// markup 
const Job = ({ title, start, end, html }) => {
    return (
        <React.Fragment>
            <h4>{title} // {start} - {end ?? "now"}</h4>
            <span dangerouslySetInnerHTML={{ __html: html }} />
        </React.Fragment>);
}


export default Job;