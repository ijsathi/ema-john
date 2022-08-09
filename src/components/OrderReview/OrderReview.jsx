import React from 'react';
import useCart from '../../hooks/useCart';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { useNavigate } from 'react-router-dom';

const OrderReview = () => {
    const [cart, setCart] = useCart();
    const navigate = useNavigate();

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }

    const handleProceedToShipping = () => {
        // navigate.push('/shipping')
        navigate("/shipping");
        // setCart([]); /* eta korle sudhu live site theke remove hbe */
        // clearTheCart(); /* eta korle  live site & storage theke remove hbe */
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove} />)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} >
                    <button onClick={handleProceedToShipping} className='order_btn'>Proceed to Shipping</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;