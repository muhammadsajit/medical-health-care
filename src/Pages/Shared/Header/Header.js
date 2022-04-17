import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <>
     {/* Navbar created here */}
       <Navbar style={{position:'sticky'}} fixed="top"
       collapseOnSelect   expand="lg"  bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Health Care</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home#services">Services</Nav.Link>
              <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
              
            </Nav>
            <Nav>
              <Nav.Link as={Link} to ='/about'>About</Nav.Link>
              <Nav.Link eventKey={2} as={Link} to ='/login'>
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
  
    </>
  );
};

export default Header;