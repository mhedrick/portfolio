import React from "react"
import { useStaticQuery, graphql } from 'gatsby';

import Job from './job'

import Container from 'react-bootstrap/Container';

// add tags of skills used?

const JobList = () => {
    const { experience } = useStaticQuery(graphql`
      query {
        experience: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/experience/jobs/" } }
          sort: { fields: [frontmatter___start], order: DESC }
        ) {
          edges {
            node {
              frontmatter {
                start
                end 
                title
                company
                location
              }
              html
            }
          }
        }
      }
    `);


    return (
        <Container fluid>
            <h2>Relevant Experience</h2>
            {experience.edges && experience.edges.map(({node}, i) =>  <Job {...node.frontmatter} html={node.html} key={`job-${i}`} />)}
        </Container>);
}

export default JobList; 