import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';
import Image  from '../Header/logo.png';
import './Header.css'


const Header = () => {
    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
        .then(() => {

        })
        .catch(error => console.error(error));
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link to='/home'><div className='logo'><img src={Image} alt="" /></div></Link>
                    <div className='title'><Link to='/home'>Tech-Education-School</Link></div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto nav-link">
                            <Link to="/home">Home</Link>
                            <Link to="/blog">Blog</Link>
                            <Link to="/register">Register</Link>
                            <Link to="/login">Login</Link>
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">{user?.displayName}</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <img className='rounded rounded-circle w-25' src={user?.photoURL} alt="" />
                                {
                                    user?.uid ?
                                    <button onClick={handleLogOut} className='btn btn-primary m-2'>Sign Out</button>
                                    :
                                    <button className='btn btn-primary'><Link to='/login'>Log In</Link></button>
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;