import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    //  ei ekta system (bangla system)

    /* let total = 0;
    for (const product of cart) {
        total = total + product.price;
    } */

    //  ei arekta system (reduce)
    const totalReducer = (previous, currentProduct) => previous + currentProduct.price;
    const total = cart.reduce(totalReducer, 0);

    const shipping = 15;
    const tax = (total + shipping) / 10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h3>Order summer</h3>
            <h5>Items Orders: {props.cart.length}</h5>
            <p>Total : {total.toFixed(2)}</p>
            <p>Shipping : {shipping}</p>
            <p>Tax : {tax.toFixed(2)}</p>
            <p>Grand Total : {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;