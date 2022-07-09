import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img className='header_img' src="https://ema-john.firebaseapp.com/static/media/logo.95f238a5.png" alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/order_review">Order Review</a>
                <a href="/manage">Manage Inventory here</a>
            </nav>
        </div>
    );
};

export default Header;