import * as React from "react"
import Skills from "../components/experience/skills";
import Jobs from "../components/experience/jobs";
import Education from "../components/experience/education";
import Certifications from "../components/experience/certifications";

const Hero = () => {

    return (
        <section id="experience">
            <h1>My Experience</h1>
            <p>I'm currently a <em>product owner</em> working at Carvana, due to the sale 
            of ADESA from <em>KAR Global.</em> My team is focusing on the migration of infrastructure and site resources from KAR to Carvana.</p>
            <Jobs/>
            <Education />
            <Skills />
            <Certifications />
        </section>);
}


export default Hero;