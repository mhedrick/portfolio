import React from "react";

import Container from 'react-bootstrap/Container';

const CertList = ({certs}) => {
    return (
        <React.Fragment>
            <h2>Certifications</h2>
            {certs && certs.map((cert, i) => {
                return <Container key={`certs-${i}`}>
                    {cert.name}
                    </Container>
            })}
        </React.Fragment>);
}

export default CertList; 