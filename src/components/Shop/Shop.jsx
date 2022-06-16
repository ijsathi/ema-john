import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    // for all product
    const [products, setProducts] = useState([]);
    // for add to cart
    const [cart, setCart] = useState([]);
    // for search product
    const [displayProduct, setDisplayProduct] = useState([])
    useEffect(() => {
        fetch("./products.json")
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProduct(data);
            })
    }, []);

    // for localStorage
    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                console.log(key, savedCart[key]);
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    // console.log(addedProduct);
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    }, [products])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        // save to database when my add to cart(for now)
        addToDb(product.key)
    }

    // for search filter
    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProduct(matchedProduct);
        console.log(matchedProduct.length);
    }
    return (
        <div>
            <div className="search_container">
                <input type="text"
                    placeholder='type here to search'
                    onChange={handleSearch} />
            </div>
            <div className='shop-container'>
                <div className="product-container">
                    {
                        displayProduct.map(product => <Product
                            product={product}
                            key={product.key}
                            handleAddToCart={handleAddToCart} />)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart} />
                </div>
            </div>
        </div>
    );
};

export default Shop;