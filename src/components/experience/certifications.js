import React from "react";
import { useStaticQuery, graphql } from 'gatsby';

const Certifications = () => {
    const { certs } = useStaticQuery(graphql`
    query {
        certs: allCertificationsJson {
              nodes {
                name
              }
            }
    }`);

    return (
        <section>
            <h2>Certifications</h2>
            <ul>
                {certs.nodes && certs.nodes.map((cert, i) => {
                    return <li key={`certs-${i}`}>
                        {cert.name}
                    </li>
                })}
            </ul>
        </section>);
}

export default Certifications; 