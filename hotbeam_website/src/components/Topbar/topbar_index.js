import { Link } from 'react-router-dom';
import './topbar_index.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


const Topbar = () => (
    <>
    <Navbar bg="light" expand="lg" sticky="top">
        <Container className="topbar" class="container-fluid">
            <Navbar.Brand href='/home'>
                <img src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                /> {' '}
                HotBeam Productions <br/>
                DJ Services and Lighting Solutions
            </Navbar.Brand>
            <Nav className="linksBox">
                <Nav.Link className="navLink" href="/home">Home</Nav.Link>
                <Nav.Link className="navLink" href="/services">Services</Nav.Link>
                <Nav.Link className="navLink" href="/meet">Meet the DJs</Nav.Link>
                <Nav.Link className="navLink" href="/mission">Our Mission</Nav.Link>
                <Nav.Link className="navLink" href="/contact">Contact Us</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    </>
)

export default Topbar;