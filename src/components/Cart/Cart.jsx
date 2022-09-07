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
        <div className='order_summer'>
            <span>
                <p className='summery'>Order summary</p>
                <div className='subtotal'>
                    <p>Subtotal ( {totalQuantity} items) </p>
                    <p>$ {total.toFixed(2)}</p>
                </div>
            </span>
            <span className="order_bill">
                {/* <p className='subtotal'><span>Items Total :</span> <span className='order_item_bill'>${total.toFixed(2)}</span></p> */}
                <p className='subtotal'><span>Shipping & Handling </span> <span className='order_item_bill'>${shipping}</span></p>
                <p className='subtotal'><span>Tax  </span><span className='order_item_bill'>${tax.toFixed(2)}</span></p>
            </span>
            <p className='grant_total subtotal'><span>Grand Total</span>  <span className='order_item_bill'>${grandTotal.toFixed(2)}</span></p>
            {props.children}
        </div>
    );
};

export default Cart;