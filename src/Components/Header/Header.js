import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';
import Image  from '../Header/logo.png';
import './Header.css';
import ReactTooltip from 'react-tooltip';



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
                            <Link to="/home">Courses</Link>
                            <Link to="/blog">Blog</Link>
                            <Link to="/faq">FAQ</Link>
                            <Link to="/register">Register</Link>
                            <Link to="/login">Login</Link>
                           
                        </Nav>
                        <Nav>
                            <Nav.Link className='name'>{user?.displayName}</Nav.Link>
                            <Nav.Link>{
                                    user?.uid ?
                                    <>
                                        <img data-tip={user?.displayName} className='rounded rounded-circle profile' src={user?.photoURL} alt="" />
                                        <ReactTooltip />
                                    </>
                                    
                                    :
                                    <div className='icon'><FaUserAlt/></div>

                                }</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
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