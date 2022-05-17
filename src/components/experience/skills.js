import React from "react"
import { useStaticQuery, graphql } from 'gatsby';

const Skills = () => {
    const { skills } = useStaticQuery(graphql`
    query {
          skills: allSkillsJson {
              nodes {
                header
                values
              }
          }
    }`);

    return (
        <section>
            <h2>Skills</h2>
            <ul>
            {skills.nodes && skills.nodes.map((skill, i) => {
                return <li key={`skills-${i}`}>
                    <h3>{skill.header}</h3>
                    {skill.values.join(", ")}
                    </li>
            })}
            </ul>
        </section>);
}

export default Skills; 