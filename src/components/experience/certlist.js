import React from "react"
import { useStaticQuery, graphql } from 'gatsby';

import Container from 'react-bootstrap/Container';

const CertList = () => {
    const { certs } = useStaticQuery(graphql`
    query {
        certs: allCertificationsJson {
            edges {
              node {
                name
              }
            }
          }
      }
    `);


    return (
        <Container fluid>
            <h2>Certifications</h2>
            {certs.edges && certs.edges.map(({node}, i) => {
                return <Container key={`certs-${i}`}>
                    {node.name}
                    </Container>
            })}
        </Container>);
}

export default CertList; 