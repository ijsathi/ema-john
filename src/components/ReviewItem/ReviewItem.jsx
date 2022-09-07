import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const { key, name, price, quantity } = props.product;
    const { handleRemove } = props;
    return (
        <div className='review-product'>
            <div>
                <h5 className='review-product-name'>{name}</h5>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <button onClick={() => handleRemove(key)} className='remove_btn'>Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;