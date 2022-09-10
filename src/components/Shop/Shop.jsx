import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb } from '../../utilities/fakedb';
import {Form } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import ExtraPart1 from '../Shered/ExtraPart1/ExtraPart1';

const Shop = () => {
    // for all product
    const [products, setProducts] = useState([]);

    // for add to cart
    const [cart, setCart] = useState([]);

    // single page 
    const [page, setPage] = useState(0);

    // for shop_pagination
    const [pageCount, setPageCount] = useState(0);

    // for search product
    const [displayProduct, setDisplayProduct] = useState([]);

    const size = 10;
    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setDisplayProduct(data.products);
                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            });
    }, [page]);

    // for localStorage
    // useEffect(() => {
    //     if (products.length) {
    //         const savedCart = getStoredCart();
    //         const storedCart = [];
    //         for (const key in savedCart) {
    //             // console.log(key, savedCart[key]);
    //             const addedProduct = products.find(product => product.key === key);
    //             if (addedProduct) {
    //                 const quantity = savedCart[key];
    //                 addedProduct.quantity = quantity;
    //                 // console.log(addedProduct);
    //                 storedCart.push(addedProduct);
    //             }
    //         }
    //         setCart(storedCart);
    //     }
    // }, [products])

    const handleAddToCart = (product) => {
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product]
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        // save to database when my add to cart(for now)
        addToDb(product.key)
        alert("Added Successfully ✅")
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
            {/* <Navbar className='header2' variant="dark" sticky='top' collapseOnSelect expand="lg"> */}
                <div className="search_container">
                    <div className="row w-100">
                        <div className="col-4">
                            <div className="col-6 col-md-4 ms-5">
                                <div>
                                    <img style={{ width: "100px" }} src="https://www.citypng.com/public/uploads/small/116610558473zd5aqcwoehrryolbpo80wkpyhwadulu7fynvezhi1bronkajt04bd5mmd1pp46270t6yl5bn6gf8btpckgcyvg3lcgv0hwpyepx.png" alt="" />
                                </div>
                                <div >
                                    <Form.Select style={{ fontSize: "13px" }} aria-label="Default select example">
                                        <option>CATEGORY'S</option>
                                        <option disabled value="mobile">Mobile</option>
                                        <option disabled value="laptop">Laptop</option>
                                        <option disabled value="charger">Charger</option>
                                        <option disabled value="charger">Cable</option>
                                        <option disabled value="charger">Torch</option>
                                        <option disabled value="charger">Backpack</option>
                                    </Form.Select>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="">
                                <form className="" role="search">
                                    <div className="input-group add-on">
                                        <input className="form-control" type="text"
                                            placeholder='Search in ema-john'
                                            onChange={handleSearch} />
                                        <div className="input-group-btn">
                                            <button className="btn btn-default" type="text">
                                                <i className="fa fa-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="">
                                <img className='header_img' src="https://icms-image.slatic.net/images/ims-web/e6fd2baf-e763-44e8-9c7a-6cb0da66a49f.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            {/* </Navbar> */}
            <div className='shop-container'>
                <div className="product-container">
                    {
                        displayProduct.map(product => <Product
                            product={product}
                            key={product.key}
                            handleAddToCart={handleAddToCart} />)
                    }
                    <div className="shop_pagination">
                        {
                            [...Array(pageCount).keys()]
                                .map(number => <button
                                    className={number === page ? 'selected' : ''}
                                    key={number}
                                    onClick={() => setPage(number)}
                                >{number + 1}</button>)
                        }
                    </div>
                </div>
                <div className="cart-container">
                    <Cart cart={cart} >
                        <Link to='/order_review'>
                            <button className='r-order_btn'>Review your order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
            <ExtraPart1 />
        </div>
    );
};

export default Shop;