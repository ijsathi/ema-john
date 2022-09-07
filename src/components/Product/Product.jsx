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
                <p className='product_name fs-6 fw-bold'>{name}</p>
                <div style={{ display: "flex" }}>
                    <div>
                        <p className=''><small>By: {seller}</small></p>
                        <p><small>Only {stock} left in stock - Order soon</small></p>
                        <p className='product_price'>$ {price}</p>
                        <br />
                        <button
                            onClick={() => props.handleAddToCart(props.product)}
                            className="regular_btn"><FontAwesomeIcon icon={faShoppingCart} /> <small>Add to Cart</small></button>
                    </div>
                    <div style={{ marginTop: 40, marginLeft: 60 }}>
                        <Rating
                            readonly
                            emptySymbol='far fa-star'
                            fullSymbol='fas fa-star'
                            initialRating={star}
                            style={{ color: "#ffbd00" }}
                        />
                        <h6 className='fw-bold'>Features</h6>
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