import React from 'react';
import logo from '../../../images/logo.png'
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
                <Container>
                    <Navbar.Brand as={Link} to="/home#home"> <img
                        src={logo}
                        height="40"
                        className="d-inline-block align-top"
                        alt="hot onion logo"
                    /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                            <NavDropdown title="Menu" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={HashLink} to="/menu#breakfast">Breakfast</NavDropdown.Item>
                                <NavDropdown.Item as={HashLink} to="/menu#lunch">Lunch</NavDropdown.Item>
                                <NavDropdown.Item as={HashLink} to="/menu#dinner">Dinner</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={HashLink} to="/details">Food Details</Nav.Link>

                            <p className='ms-3 text-white me-3'>{user?.displayName}</p>
                            <p className='ms-2 text-white'>{user?.email}</p>

                        </Nav>


                        <Nav>

                            {user?.email ? <Button onClick={logOut} variant="dark">Logout</Button> : <Nav.Link as={HashLink} to="/login"><Button variant="dark" className='text-white rounded-pill'>Login</Button>
                            </Nav.Link>}
                            {user?.email ? <p>{' '}</p> : < Nav.Link as={HashLink} to="/signup">
                                <Button variant="danger" className='rounded-pill'>Sign Up</Button>
                            </Nav.Link>}


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;