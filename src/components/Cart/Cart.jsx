import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;

    /* total */
    let total = 0;

    /* total added product quantity */
    let totalQuantity = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        /* total */
        total = total + product.price * product.quantity;

        /* total added product quantity */
        totalQuantity = totalQuantity + product.quantity;
    }

    //  ei arekta system (reduce)
    /* const totalReducer = (previous, currentProduct) => previous + currentProduct.price;
    const total = cart.reduce(totalReducer, 0);
 */
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h3>Order summer</h3>
            <h5>Items Orders: {totalQuantity}</h5>
            <p>Total : {total.toFixed(2)}</p>
            <p>Shipping : {shipping}</p>
            <p>Tax : {tax.toFixed(2)}</p>
            <p>Grand Total : {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;