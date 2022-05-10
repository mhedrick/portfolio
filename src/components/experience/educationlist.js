import React from "react";

const EducationList = ({ education }) => {

    let { major, minor, school, range, degree } = education;


    return (
        <React.Fragment>
            <h2>Education</h2>
            <h3>{degree} in {major}</h3>
            <h4>{`${school} // ${range}`}</h4>
            <p>minor in {minor}</p>
        </React.Fragment>);
}

export default EducationList; 