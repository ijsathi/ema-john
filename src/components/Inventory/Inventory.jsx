import React from 'react';
import './Inventory.css';

const Inventory = () => {
    return (
        <div className='inventor'>
            <div className="wrapper">
                <h1>coming soon<span className="dot">...</span></h1>
                <p>Put some text here.</p>
                <div className="inventor_icons">
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/i/flow/login"><i className="fa fa-twitter"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/"><i className="fa fa-youtube-play"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://telegram.org/"><i className="fa fa-paper-plane"></i></a>
                </div>
            </div>
        </div>
    );
};

export default Inventory;