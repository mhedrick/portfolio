import * as React from "react"
import { useStaticQuery, graphql } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
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
            <Navbar fixed="top" >
                <Container>
                    <Navbar.Brand style={{ fontFamily: "pacifico" }}>
                        <Link to="/">
                            maggie k hedrick
                        </Link>
                    </Navbar.Brand>
                    <Nav as="ul" className="justify-content-end" style={{ fontFamily: "raleway" }}>
                        <Nav.Link as={Link} to="/about" activeClassName="active">About</Nav.Link>
                        <Nav.Link as={Link} to="/experience" activeClassName="active">Experience</Nav.Link>
                        <Nav.Link as={Link} to="/projects" activeClassName="active">Projects</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container className="mt-5" style={{ fontFamily: "readex pro" }}>
                {children}
            </Container>
        </main>
    )
}


export default Layout