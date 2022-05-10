import React from "react";

import Company from './company'


const JobList = ({jobs, companies}) => {
    // there is a bug in gatsby's graphql that prevents grouped items from storing max/min dates and thus sorting them
    let sortedCompanies = companies.map(c => ({key: c.key, names: c.names, start: new Date(c.nodes[0].frontmatter.start)})).sort((a,b) => b.start - a.start)

    return (
        <React.Fragment>
            <h2>Work History</h2>
            {jobs && sortedCompanies.map((company) => {
                let positions = jobs.filter((j) => j.frontmatter.key === company.key);

                return <Company {...company} positions={positions} />
            })}
        </React.Fragment>);
}

export default JobList; 