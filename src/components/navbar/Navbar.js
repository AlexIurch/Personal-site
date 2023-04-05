import React, { useState } from 'react';
import { Nav, Navbar} from "react-bootstrap";
import "./Navbar.css"
import { Link } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";

function Navigation() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
    document.querySelector('.navbar-toggler-icon').classList.toggle('animate')
  };

  const handleCollapse = () => {
    setExpanded(false);
  };

  return (
    <div className='nav-block '>

      <div className="headerOnline">
           <div className="greenCircle"></div>
           <p className="aviable" color='white'> Aviable for new projects</p>
      </div>
  
      <Navbar expand="lg" bg="dark" variant="dark" className=" ml-3" expanded={expanded}>
        <Navbar.Brand as={Link} to="/" className='px-3 order-1 order-sm-1' >Oleksii Iurchenko</Navbar.Brand>
        <Navbar.Toggle onClick={handleToggle} aria-controls="responsive-navbar-nav button ml-5" />
        <Navbar.Collapse id="navbar-nav" className="order-1 order-lg-1" onClick={handleCollapse}>
          <Nav className="me-auto">
          </Nav>
          <Nav className='px-3'>
            <Nav.Link as={Link} to="/" onClick={handleCollapse}>Home</Nav.Link>
            <Nav.Link as={Link} to="/projects" onClick={handleCollapse}>Projects</Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={handleCollapse}>About me</Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={handleCollapse}>Contact me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
     
    </div>
  );
}

export default Navigation;