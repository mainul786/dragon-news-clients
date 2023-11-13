import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LeftSideNav from '../LeftSiideNav/LeftSideNav';



const Header = () => {
    return (
       
         <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Category</Nav.Link>
            <Nav.Link href="#pricing">News</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    <div className="d-lg-none">
        <LeftSideNav></LeftSideNav>
    </div>
    </Navbar>

       
    );
};

export default Header;