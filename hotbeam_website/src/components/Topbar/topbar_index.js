import './topbar_index.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Logo from '../../assets/hb_logo.png';


const Topbar = () => (
    <>
    <Navbar bg="dark" expand="lg" sticky="top">
        <Container className="topbar container-fluid">
            <Navbar.Brand href='/home'>
                <img src={Logo}
                    alt=''
                    width="130"
                    height="125"
                    className="d-inline-block align-top"
                /> {' '}
                
            </Navbar.Brand>
            <div className="brand_name">
                <div className="hb">Hot Beam Productions </div>
                <div className="dj">DJ Services and Lighting Solutions</div>
            </div>
            <Nav className="linksBox" id="links_override">
                <Nav.Link className="navLink" href="/">Home</Nav.Link>
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