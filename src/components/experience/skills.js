import React from "react"
import { useStaticQuery, graphql } from 'gatsby';

import Container from 'react-bootstrap/Container';

// add tags of skills used?

const SkillList = () => {
    const { skills } = useStaticQuery(graphql`
    query {
        skills: allSkillsJson {
          edges {
            node {
              header
              values
            }
          }
        }
      }
    `);


    return (
        <Container fluid>
            <h2>Skills</h2>
            {skills.edges && skills.edges.map(({node}, i) => {
                return <Container key={`skills-${i}`}>
                    <b>{node.header}</b><br />
                    {node.values.join(", ")}
                    </Container>
            })}
        </Container>);
}

export default SkillList; 