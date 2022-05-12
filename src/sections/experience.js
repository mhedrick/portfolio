import * as React from "react"
import Skills from "../components/experience/skills";
import Jobs from "../components/experience/jobs";
import Education from "../components/experience/education";
import Certifications from "../components/experience/certifications";

const Hero = () => {

    return (
        <section id="experience">
            <h2>Work History</h2>
            <Jobs/>
            <Education />
            <Skills />
            <Certifications />
        </section>);
}


export default Hero;