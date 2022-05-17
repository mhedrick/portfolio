import * as React from "react"
import { useStaticQuery, graphql } from "gatsby";


// markup 
const Contact = ({ display, className }) => {
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
        <ul id="contact-info" className={className}>
        {
            contacts.nodes.map((contact, i) => {
                return <li key={`contact-${i}`} className={display ? "" : "px-3"}>
                        <a href={`${contact.type !== "link" ? `${contact.type}:` : ""}${contact.link}`} target="_blank" rel="noopener noreferrer" >
                            <i className={contact.icon}></i> {display ? contact.display : ""}
                        </a>
                    </li>
            })
        }
    </ul>
    )
}

export default Contact;