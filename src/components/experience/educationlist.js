import React from "react"
import { useStaticQuery, graphql } from 'gatsby';

import Container from 'react-bootstrap/Container';

const EducationList = () => {
    const { education } = useStaticQuery(graphql`
    query {
        education: allEducationJson {
          edges {
            node {
              major
              minor
              school
              range
              degree
            }
          }
        }
      }
    `);


    return (
        <Container fluid>
            <h2>Education</h2>
            {education.edges && education.edges.map(({node}, i) => {
                const {major, minor, school, range, degree} = node;
                return <Container key={`education-${i}`}>
                    <b>{major} {degree} {school}</b> {range}<br />
                    </Container>
            })}
        </Container>);
}

export default EducationList; 