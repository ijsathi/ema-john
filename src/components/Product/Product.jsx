import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props);
    const { name, price, seller, img, stock, star, category, features } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt={category} />
            </div>
            <div style={{ marginLeft: "20px" }}>
                <h4 className='product_name'>{name}</h4>
                <div style={{ display: "flex" }}>
                    <div>
                        <p><small>By: {seller}</small></p>
                        <p>Price : {price}</p>
                        <p><small>Only {stock} left in stock - Order soon</small></p>
                        <br />
                        <button
                            onClick={() => props.handleAddToCart(props.product)}
                            className="regular_btn"><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
                    </div>
                    <div style={{ marginTop: 40, marginLeft: 60 }}>
                        <Rating
                            readonly
                            emptySymbol='far fa-star'
                            fullSymbol='fas fa-star'
                            initialRating={star}
                            style={{ color: "#ffbd00" }}
                        />
                        <h4>Features</h4>
                        <ul className='feature'>
                            {features.map(({ description, value }) => {
                                return <>
                                    <li>{description}: <span className='feature_value'>{value}</span></li>
                                </>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;