import React from 'react';
import './Product.css'

const Product = ({product}) => {
    console.log(product);
    const {name,price, seller, img, stock, ratings, } = product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div style={{marginLeft:"20px"}}>
                <h4 className='product_name'>{name}</h4>
                <p><small>By: {seller}</small></p>
                <p>Price : {price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <button className="regular_btn">Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;