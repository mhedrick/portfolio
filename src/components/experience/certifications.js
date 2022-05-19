import React from "react";
import { useStaticQuery, graphql } from 'gatsby';

function VerificationLink({verificationURL}) {
    if(verificationURL){
        return <a href={verificationURL}>verify here  <i className="bi-box-arrow-up-right" /></a>
    }
    return;
  }

const Certifications = () => {
    const { certs } = useStaticQuery(graphql`
    query {
        certs: allCertificationsJson {
              nodes {
                name
                org
                issue(formatString: "MMM YYYY")
                expiry(formatString: "MMM YYYY")
                credentialID
                verificationURL
              }
            }
    }`);

    return (
        <section>
            <h2>Certifications</h2>
            <ul>
                {certs.nodes && certs.nodes.map((cert, i) => {
                    return <li key={`certs-${i}`} className="d-flex flex-column">
                        <h3>{cert.name}</h3>
                        <h4>{cert.org}</h4>
                        <span>Issued {cert.issue} • Expires {cert.expiry}</span>
                        <span>Credential ID: {cert.credentialID} {<VerificationLink verificationURL={cert.verificationURL} />}</span>
                    </li>
                })}
            </ul>
        </section>);
}

export default Certifications; 