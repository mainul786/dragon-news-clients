import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LeftSideNav from '../LeftSiideNav/LeftSideNav';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';
import { FaCircleUser } from 'react-icons/fa6';



const Header = () => {
  const {user} = useContext(AuthContext);
    return (
       
         <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand ><Link to='/'>Dragon News</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Category</Nav.Link>
            <Nav.Link href="#pricing">News</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">{user?.displayName}</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
             { user ? 
              <Image src={user.photoURL} style={{height:'60px'}} roundedCircle></Image>

              :
              
              <FaCircleUser />
              
              }
            </Nav.Link>
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