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
                end(formatString: "MMM YYYY")
                start(formatString: "MMM YYYY")
                title
                key
              }
            }
          }
          companies:   allMarkdownRemark(
            filter: {fileAbsolutePath: {regex: "/experience/companies/"}}
            sort: {order: DESC, fields: [frontmatter___order]}
          ) {
            nodes {
              frontmatter {
                company
                key
                skills
              }
              html
            }
          }
    }`);

    return (
        <section>
            <h2>Work History</h2>
            <ul>
                {companies.nodes.map((company) => {
                    let positions = jobs.nodes.filter((j) => j.frontmatter.key === company.frontmatter.key);

                    return <Company {...company.frontmatter} html={company.html} positions={positions} />
                })}
            </ul>
        </section>);
}

export default Jobs; 