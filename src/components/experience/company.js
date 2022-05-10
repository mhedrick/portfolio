import React from "react"

import Job from './job'

// add tags of skills used?

const Company = ({ names, positions }) => {

    return (
        <React.Fragment>
            <h3>{names.join(" / ")}</h3>
            {positions && positions.map((job, i) =>  <Job {...job.frontmatter} html={job.html} key={`job-${i}`} />)}
        </React.Fragment>);
}

export default Company; 