import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const { name, price, seller, img, stock, ratings, } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div style={{ marginLeft: "20px" }}>
                <h4 className='product_name'>{name}</h4>
                <p><small>By: {seller}</small></p>
                <p>Price : {price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className="regular_btn"><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;