import React from "react"

// add tags of skills used?

const SkillList = ({ skills }) => {
    return (
        <React.Fragment>
            <h2>Skills</h2>
            {skills && skills.map((skill, i) => {
                return <div key={`skills-${i}`}>
                    <b>{skill.header}</b><br />
                    {skill.values.join(", ")}
                    </div>
            })}
        </React.Fragment>);
}

export default SkillList; 