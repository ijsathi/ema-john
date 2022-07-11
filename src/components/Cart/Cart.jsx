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
            <span className='order_summer'>
                <h3>Order summer</h3>
                <p>Items Orders: {totalQuantity}</p>
            </span>
            <span className="order_bill">
                <p>Items Total : <span className='order_item_bill'>${total.toFixed(2)}</span></p>
                <p>Shipping & Handling : <span className='order_item_bill'>${shipping}</span></p>
                <p>Tax : <span className='order_item_bill'>${tax.toFixed(2)}</span></p>
            </span>
            <p className='grant_total'>Grand Total : <span className='order_item_bill'>${grandTotal.toFixed(2)}</span></p>
            {props.children}
        </div>
    );
};

export default Cart;