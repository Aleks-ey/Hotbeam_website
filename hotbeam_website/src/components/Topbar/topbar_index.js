import './topbar_index.css';
import Logo from '../../assets/hb_logo.png';
import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Topbar() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="custom" sticky="top" expanded={expanded} onToggle={handleToggle}>
      <Container className="topbar container-fluid" id='navbar_override'>
        <Navbar.Brand as={Link} to="/" className='hb_logo_div'>
          <img src={Logo} className="hb_logo img-responsive" alt="" />
        </Navbar.Brand>
        <div className="brand_name">
            <div className="hb">Hot Beam Productions </div>
            <div className="dj">DJ Services and Lighting Solutions</div>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="hamburger"/>
        <Navbar.Collapse id="responsive-navbar-nav" className="linksBox">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" className="navLink">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/services" className="navLink">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/meet" className="navLink">
              Meet the DJs
            </Nav.Link>
            <Nav.Link as={Link} to="/mission" className="navLink">
              Our Mission
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="navLink">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topbar;

// -------------------------------------------------------------------------

// const Topbar = () => (
//     <>
//     <Navbar bg="dark" expand="lg" sticky="top" id="navbar_override">
//         <Container className="topbar container-fluid">
//             <div className='hb_logo_div'>
//                 <Navbar.Brand href='/'>
//                     <img src={Logo} className="hb_logo img-responsive" alt=''/> {' '}
//                 </Navbar.Brand>
//             </div>
//             <div className="brand_name">
//                 <div className="hb">Hot Beam Productions </div>
//                 <div className="dj">DJ Services and Lighting Solutions</div>
//             </div>
//             <Nav className="linksBox" id="links_override">
//                 <Nav.Link className="navLink" href="/">Home</Nav.Link>
//                 <Nav.Link className="navLink" href="/services">Services</Nav.Link>
//                 <Nav.Link className="navLink" href="/meet">Meet the DJs</Nav.Link>
//                 <Nav.Link className="navLink" href="/mission">Our Mission</Nav.Link>
//                 <Nav.Link className="navLink" href="/contact">Contact Us</Nav.Link>
//             </Nav>
//         </Container>
//     </Navbar>
//     </>
// )

// export default Topbar;