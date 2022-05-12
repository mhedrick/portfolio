import * as React from "react"
import { useStaticQuery, graphql } from "gatsby";
import "../components/layout.css"

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { AnchorLink } from "gatsby-plugin-anchor-links";

// todo: nav links?

// todo: darkmode / lightmode

// markup 
const Layout = ({ children }) => {
    const { site } = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `);

    return (
            <main>
                <title>{site.siteMetadata.title}</title>
                <Navbar id="main-nav" fixed="top" style={{ marginLeft: "calc(100vw - 100%)" }}>
                    <Container>
                        <Navbar.Brand>
                            <a href="/">maggie k hedrick</a>
                        </Navbar.Brand>
                        <Nav as="ul" className="justify-content-end">
                            <Nav.Item><Nav.Link as={AnchorLink} to="/#about">About</Nav.Link></Nav.Item>
                            <Navbar.Text>//</Navbar.Text>
                            <Nav.Item><Nav.Link as={AnchorLink} to="/#experience">Experience</Nav.Link></Nav.Item>
                            <Navbar.Text>//</Navbar.Text>
                            <Nav.Item><Nav.Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" active={false}>Résumé <i className="bi-box-arrow-up-right" /></Nav.Link></Nav.Item>
                        </Nav>
                    </Container>
                </Navbar>
                <Container style={{ width: "60%" }}>
                    {children}
                </Container>
            </main>
    )
}

export default Layout;