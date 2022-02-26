import * as React from "react"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// markup 
const Job = ({ title, company, start, end, location, html }) => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <span><b>{title}</b> @ {company}</span>
                </Col>
            </Row>
            <Row>
                <Col>
                    <span>{start} - {end} | {location}</span>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                </Col>
            </Row>
        </Container>);
}


export default Job;