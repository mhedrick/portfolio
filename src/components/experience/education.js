import React from "react";
import { useStaticQuery, graphql } from 'gatsby';

const Education = () => {

    const { education } = useStaticQuery(graphql`
    query {
        education: allEducationJson {
            nodes {
              major
              minor
              school
              range
              degree
            }
          }
        
    }`);


    return (
        <section>
            <h2>Education</h2>
            <ul>
            {education.nodes.map((ed, i) => {
                let { major, minor, school, range, degree } = ed;
                return <li key={`education-${i}`}>
                    <h3>{degree} in {major}</h3>
                    <h4>{`${school} // ${range}`}</h4>
                    <p>minor in {minor}</p>
                </li>
            })}
            </ul>
        </section>);
}

export default Education; 