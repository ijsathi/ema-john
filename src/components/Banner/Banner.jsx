import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/717OO5QwJnL._SX3000_.jpg" },
    { url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61jovjd+f9L._SX3000_.jpg" },
    { url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71qid7QFWJL._SX3000_.jpg" },
    { url: "https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61DUO0NqyyL._SX3000_.jpg" },
];

const Banner = () => {
    return (
        <div>
            <div>
                <SimpleImageSlider
                    // style={{ width: "100%" }}
                    width="100%"
                    height={304}
                    images={images}
                    showBullets={true}
                    showNavs={true}
                    loop={true}
                />
            </div>
        </div>
    );
};

export default Banner;