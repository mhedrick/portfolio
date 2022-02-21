import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/pacifico"
import "@fontsource/readex-pro"
import "@fontsource/raleway"

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "gatsby"

// markup 
const Layout = ({ children }) => {
    return (
        <main>
            <title>Maggie Hedrick Portfolio</title>
            <Navbar fixed="top" >
                <Container>
                    <Navbar.Brand style={{ fontFamily: "pacifico" }}>
                        <Link to="/">
                            maggie k hedrick
                        </Link>
                    </Navbar.Brand>
                    <Nav as="ul" className="justify-content-end">
                        <Nav.Link as={Link} to="/about" activeClassName="active">About</Nav.Link>
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