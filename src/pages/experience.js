import React from "react";

import Layout from "../components/layout";
import SkillList from "../components/experience/skills";
import JobList from "../components/experience/joblist";
import EducationList from "../components/experience/educationlist";
import CertList from "../components/experience/certlist";

// add tags of skills used?

// interests
// contact meta

const Experience = () => {
   
    return (<Layout>
        <SkillList />
        <JobList />
        <EducationList />
        <CertList />
    </Layout>);
}

export default Experience;  