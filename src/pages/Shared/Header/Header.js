import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LeftSideNav from '../LeftSiideNav/LeftSideNav';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';
import { FaCircleUser } from 'react-icons/fa6';
import Button from 'react-bootstrap/Button';



const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.error(error))
  }
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
            <Nav.Link>
              {
                user?.uid ?
                  <>
                    <span>{user?.displayName}</span>
                    <Button onClick={handleLogOut} variant="outline-info">Log Out</Button>
                  </>
                  :
                  <>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                  </>
              }
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              {user?.photoURL ?
                <Image src={user?.photoURL}
                  style={{ height: '30px' }}
                  rounded>
                </Image>
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