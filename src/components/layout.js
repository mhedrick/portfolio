import * as React from "react"
import { useStaticQuery, graphql } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.json";
import "@fontsource/pacifico"
import "@fontsource/readex-pro"
import "@fontsource/raleway"

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "gatsby"

// todo: graphql site metadata, nav links https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
// https://www.gatsbyjs.com/docs/how-to/querying-data/page-query/
/**/

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
            <Navbar fixed="top" style={{backgroundColor: 'white', marginLeft: "calc(100vw - 100%)"}}>
                <Container>
                    <Navbar.Brand style={{ fontFamily: "pacifico" }}>
                        <Link to="/">
                            maggie k hedrick
                        </Link>
                    </Navbar.Brand>
                    <Nav as="ul" className="justify-content-end" style={{ fontFamily: "raleway" }}>
                        <Nav.Link as={Link} to="/about" activeClassName="active">About</Nav.Link>
                        <Nav.Link as={Link} to="/experience" activeClassName="active">Experience</Nav.Link>
                        <Navbar.Text><a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Résumé <i className="bi-alarm" /></a></Navbar.Text>
                    </Nav>
                </Container>
            </Navbar>
            <Container className="mt-5 pt-2 overflow-hidden" style={{ fontFamily: "readex pro", maxHeight: "100%" }}>
                {children}
            </Container>
        </main>
    )
}

export default Layout;