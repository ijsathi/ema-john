import React from 'react';
import './Inventory.css';

const Inventory = () => {
    return (
        <div className='inventor'>
            <div class="wrapper">
                <h1>coming soon<span class="dot">...</span></h1>
                <p>Put some text here.</p>
                <div class="inventor_icons">
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/i/flow/login"><i class="fa fa-twitter"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/"><i class="fa fa-youtube-play"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://telegram.org/"><i class="fa fa-paper-plane"></i></a>
                </div>
            </div>
        </div>
    );
};

export default Inventory;