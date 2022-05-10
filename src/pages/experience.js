import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SkillList from "../components/experience/skills";
import JobList from "../components/experience/workhistory";
import EducationList from "../components/experience/educationlist";
import CertList from "../components/experience/certlist";

// add tags of skills used?

// interests
// contact meta

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
                    <h1>Maggie Hedrick</h1>
                    <div className="d-flex justify-content-between">
                        <span>{contactinfo.email}</span>
                        <span>{contactinfo.linkedin}</span>
                        <span>{contactinfo.github}</span>
                        <span>{contactinfo.phone}</span>
                    </div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                    {/*good place for contact info ;) */}
                    <JobList jobs={jobs.nodes} companies={companies.group} />
                    <EducationList education={education.nodes[0]} />
                    <SkillList skills={skills.nodes} />
                    <CertList certs={certs.nodes} />
                </Col>
            </Row>);
}

export default Experience;  