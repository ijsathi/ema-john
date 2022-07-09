import React from 'react';
import useProducts from '../../hooks/useProducts';

const OrderReview = () => {
    const [products] = useProducts();
    return (
        <div>
            <h3>{products.length}</h3>
            <h1>This is OrderReview</h1>
        </div>
    );
};

export default OrderReview;