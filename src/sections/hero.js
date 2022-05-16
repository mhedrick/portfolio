import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby';

const Hero = () => {

    const { contacts } = useStaticQuery(graphql`
    query {
        contacts: allContactJson {
            nodes {
              icon
              type
              link
              display
            }
          }
        }`);

    return (
        <section id="about" className="hero d-flex align-items-center">
        <div className="w-100">
            <h1 className="display-1">Hi! My name is <em>Maggie</em>.</h1>
            <p>
                I'm a former <em>web developer</em> turned <em>product owner</em>.  JavaScript is my passion.
            </p>
            <ul id="contact-info" class="d-flex justify-content-between">
                {
                    contacts.nodes.map((contact, i) => {
                        return <li key={`contact-${i}`}>
                                <a href={`${contact.type != "link" ? `${contact.type}:` : ""}${contact.link}`}><i className={contact.icon}></i> {contact.display}</a>
                            </li>
                    })
                }
            </ul>
        </div>
    </section>);
}


export default Hero;