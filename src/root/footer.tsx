import {Container, Navbar, NavbarBrand} from "react-bootstrap";
function Footer() {
    return (
        <div className="fixed-bottom">
            <Navbar className='sticky-bottom' bg="dark" variant="dark">
                <Container>
                    <NavbarBrand color='white'>Footer</NavbarBrand>
                </Container>
            </Navbar>
        </div>
    )
}


export default Footer;
