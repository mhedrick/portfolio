import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby';

const Hero = () => {

    const { contactinfo } = useStaticQuery(graphql`
    query {
        contactinfo: contactJson {
            email
            github
            linkedin
            phone
          }
        }`);

    return (
        <section id="about" className="hero d-flex align-items-center">
        <div className="w-100">
            <h1 className="display-1">Hi! My name is <span>Maggie</span>.</h1>
            <p>
                I'm a former <b>web developer</b> turned <b>product owner</b>.  JavaScript is my passion.
            </p>
            <div className="contact-info d-flex justify-content-between mb-5 pb-5">
                <span>{contactinfo.email}</span>
                <span>{contactinfo.linkedin}</span>
                <span>{contactinfo.github}</span>
                <span>{contactinfo.phone}</span>
            </div>
        </div>
    </section>);
}


export default Hero;