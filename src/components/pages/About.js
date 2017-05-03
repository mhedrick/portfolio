import React, { Component } from 'react';
import SkillBar from '../SkillBar'

class About extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <h1 className="text-center">who am I?</h1>
                        <p className="text-justify">
                            My name is Maggie.  I'm a full-stack web-developer specializing in javascript.
                            I graduated from IUPUI with a BS in Computer Science in 2013.
                            I live in Indianapolis IN. I spend my free time reading, gaming, and making web sites.
                            You can contact me at maggiekhedrick@gmail.com, or through any of the links above to the right.
                        </p>
                    </div>
                    <div className="col">
                        <h1>skills</h1>
                        <SkillBar Skill="Javascript" SkillAmount="80" />
                        <SkillBar Skill="HTML & CSS" SkillAmount="90" />
                        <SkillBar Skill="Agile/Scrum" SkillAmount="100" />
                        <SkillBar Skill="Knockout" SkillAmount="80" />
                        <SkillBar Skill="Bootstrap (3&4)" SkillAmount="100" />
                        <SkillBar Skill="React" SkillAmount="20" />
                    </div>
                </div>
            </div>
        );
    }
}
export default About;
