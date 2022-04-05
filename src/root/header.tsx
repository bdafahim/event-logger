import {Container, Nav, Navbar} from "react-bootstrap";

function Header() {
    return (
        <Navbar className='sticky-top' bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>Basic App</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href={'/home'}>Home</Nav.Link>
                        <Nav.Link href={'/home'}>Chart</Nav.Link>
                        <Nav.Link href={'/query-builder'}>Query Builder</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
