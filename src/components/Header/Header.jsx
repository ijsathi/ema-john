import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const { user, logOut } = useFirebase();
    // console.log(user);
    return (
        <>
            <Navbar className='header' variant="dark" sticky='top' collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img className='header_img1' src="https://ema-john.firebaseapp.com/static/media/logo.95f238a5.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className='justify-text-end fw-normal'>
                        <Nav className="ms-auto ">
                            <Nav.Link>
                                <Link className='nav-text nav-shop' style={{ textDecoration: 'none' }} to='shop'><small>SHOP</small></Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className='nav-text' style={{ textDecoration: 'none' }} to='order_review'><small> ORDER REVIEW </small></Link>
                                {/* <Link className='nav-text' style={{ textDecoration: 'none' }} to='order_review'><small> <FontAwesomeIcon icon={faCartShopping} /> </small></Link> */}
                            </Nav.Link>

                            <NavDropdown title={<small className='nav-text'>MORE</small>} id="basic-nav-dropdown">
                                <NavDropdown.Item href="">
                                    <Nav.Link>
                                        <Link style={{ color: '#000', textDecoration: 'none' }} to='about_us' >About Us</Link>
                                    </Nav.Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="">
                                    <Nav.Link>
                                        <Link style={{ color: '#000', textDecoration: 'none' }} to='contact_us' >Contact Us</Link>
                                    </Nav.Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="">
                                    <Nav.Link>
                                        <Link style={{ color: '#000', textDecoration: 'none' }} to='opinion' >Share Your Opinion</Link>
                                    </Nav.Link>
                                </NavDropdown.Item>

                            </NavDropdown>
                        </Nav>
                        {!user.email ? (
                            <>
                                <Nav.Link as={NavLink} to="/login" className='nav-text'>
                                    <small>SIGNUP/LOGIN <FontAwesomeIcon icon={faRightToBracket} /></small>
                                    {/* <small>SIGNUP/LOGIN</small> */}
                                </Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link
                                    as={HashLink}
                                    to="manage"
                                    style={{ textDecoration: 'none' }}
                                    className="me-4 nav-text"
                                >
                                    Manage Inventory
                                </Nav.Link>

                                <NavDropdown
                                    title={
                                        <img
                                            style={{
                                                width: "35px",
                                                borderRadius: "50%",
                                            }}
                                            src={user.photoURL}
                                            alt=""
                                        />
                                    }
                                >
                                    <div className="text-center">
                                        <p>{user.displayName}</p>
                                        <p className="m-0 mb-2"><small>{user.email}</small></p>
                                        <button onClick={logOut} className="btn btn-primary fw-bold">
                                            Sign Out
                                        </button>
                                    </div>
                                </NavDropdown>
                            </>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;