import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css';

const Header = () => {
    const { user, logOut } = useFirebase();
    console.log(user);
    return (
        <div className='header'>
            <img className='header_img' src="https://ema-john.firebaseapp.com/static/media/logo.95f238a5.png" alt="" />
            <nav>
                <NavLink to="shop">Shop</NavLink>
                <NavLink to="order_review">Order Review</NavLink>
                <NavLink to="manage">Manage Inventory here</NavLink>
                {
                    user.email && <span style={{color:'white', marginRight:10}}>Hello {user.displayName}</span>
                    // user.email && <span>
                    //     <img className='user_img' src={user.photoURL} alt="" />
                    // </span>
                }
                {
                    user.email ? <button onClick={logOut}>Logout</button> :
                        <NavLink to="login">Login</NavLink>
                }
            </nav>
        </div>
    );
};

export default Header;