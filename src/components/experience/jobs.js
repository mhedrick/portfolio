import React from "react";
import { useStaticQuery, graphql } from 'gatsby';

import Company from './jobs/company'


const Jobs = () => {
    const { jobs, companies } = useStaticQuery(graphql`
    query {
        jobs: allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "/experience/jobs/"}}
            sort: {fields: [frontmatter___start], order: DESC}
          ) {
            nodes {
              html
              frontmatter {
                company
                end(formatString: "MMM YYYY")
                location
                start(formatString: "MMM YYYY")
                title
                key
                skills
              }
            }
          }
          companies: allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "/experience/jobs/"}}
            sort: {fields: [frontmatter___start], order: ASC}
          ) {
            group(field: frontmatter___key) {
              names: distinct(field: frontmatter___company)
              key: fieldValue
              nodes {
                frontmatter {
                  start
                }
              }
            }
          }
    }`);
    // there is a bug in gatsby's graphql that prevents grouped items from storing max/min dates and thus sorting them
    let sortedCompanies = companies.group
        .map(c => ({ key: c.key, names: c.names, start: new Date(c.nodes[0].frontmatter.start) }))
        .sort((a, b) => b.start - a.start);

    return (
        <section>
            <h2>Work History</h2>
            <ul>
                {sortedCompanies.map((company) => {
                    let positions = jobs.nodes.filter((j) => j.frontmatter.key === company.key);

                    return <Company {...company} positions={positions} />
                })}
            </ul>
        </section>);
}

export default Jobs; 