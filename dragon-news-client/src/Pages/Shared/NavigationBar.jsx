import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProviders';
import { Link, NavLink } from 'react-router-dom';
import './NavigationBar.css'

const NavigationBar = () => {
    const { user } = useContext(AuthContext);

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className='text-decoration-none me-2' to="/category/0">Home</Link>
                            <Link className='text-decoration-none me-2' to="/">About</Link>
                            <Link className='text-decoration-none me-2' to="/">Career</Link>
                            <NavLink className='text-decoration-none me-2' to="/login">Login</NavLink>
                            <NavLink className='text-decoration-none me-2' to='/register'>Register</NavLink>
                        </Nav>
                        <Nav>
                            {user &&
                                <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                            }
                            {user ?
                                <Link to="/logout"><Button variant="secondary">Logout</Button></Link>
                                :
                                <Link to="/login"><Button variant="secondary">Login</Button></Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;