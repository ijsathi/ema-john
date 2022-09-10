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
                                <Link className='nav-text nav-shop me-5' style={{ textDecoration: 'none' }} to='shop'><small>SHOP</small></Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className='nav-text me-5' style={{ textDecoration: 'none' }} to='order_review'><small> ORDER REVIEW </small></Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className='nav-text me-5' style={{ textDecoration: 'none' }} to='about_us'><small> ABOUT US</small></Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className='nav-text me-5' style={{ textDecoration: 'none' }} to='about_us'><small> CONTACT US</small></Link>
                            </Nav.Link>
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
                                    className="me-5 nav-text"
                                >
                                   <small>MANAGE INVENTORY</small> 
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
                                        <button onClick={logOut} className="btn">
                                           <small>SIGN OUT <FontAwesomeIcon icon={faRightToBracket} /></small>
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