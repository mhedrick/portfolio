import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SkillList from "../components/experience/skills";
import JobList from "../components/experience/workhistory";
import EducationList from "../components/experience/educationlist";
import CertList from "../components/experience/certlist";

// add tags of skills used?

// interests - what I like, what I'm learning

const Experience = () => {

    const { contactinfo, jobs, education, companies, skills, certs } = useStaticQuery(graphql`
    query {
        contactinfo: contactJson {
            email
            github
            linkedin
            phone
          }
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
          education: allEducationJson {
            nodes {
              major
              minor
              school
              range
              degree
            }
          }
        certs: allCertificationsJson {
              nodes {
                name
              }
            }
          skills: allSkillsJson {
              nodes {
                header
                values
              }
          }
    }`);

    return (<Row className="d-flex justify-content-center">
        <Col md={9}>
            <h1 className="display-1 mt-5">Hi! My name is <span>Maggie</span>.</h1>
            <p>
                I'm a former <b>web developer</b> turned <b>product owner</b>.  JavaScript is my passion.
            </p>
            <div className="contact-info d-flex justify-content-between mb-3">
                <span>{contactinfo.email}</span>
                <span>{contactinfo.linkedin}</span>
                <span>{contactinfo.github}</span>
                <span>{contactinfo.phone}</span>
            </div>
            {/*good place for contact info ;) */}
            <JobList jobs={jobs.nodes} companies={companies.group} />
            <EducationList education={education.nodes[0]} />
            <SkillList skills={skills.nodes} />
            <CertList certs={certs.nodes} />
        </Col>
    </Row>);
}

export default Experience;  