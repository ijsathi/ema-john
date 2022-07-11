import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img className='header_img' src="https://ema-john.firebaseapp.com/static/media/logo.95f238a5.png" alt="" />
            <nav>
                <NavLink to="shop">Shop</NavLink>
                <NavLink to="order_review">Order Review</NavLink>
                <NavLink to="manage">Manage Inventory here</NavLink>
            </nav>
        </div>
    );
};

export default Header;