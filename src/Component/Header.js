import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../src/assets/images/logo-horizontal.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '.././App.scss';

function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#"><img src={Logo} width="217" height={"34"} alt="Invision" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="header-navs">
                        <Nav.Link href="#">Find Space</Nav.Link>
                        <Nav.Link href="#">How It Works</Nav.Link>
                        <Nav.Link href="#">List Your Space</Nav.Link>
                        <Nav.Link href="#" className='login-btn'>
                            <span>Register/Login</span>

                            <i className='icon-login' />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
