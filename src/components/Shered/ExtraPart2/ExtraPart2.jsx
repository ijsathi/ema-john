import React from 'react';
import { Link } from 'react-router-dom';
import ExtraPart from '../ExtraPart/ExtraPart';
import './ExtraPart2.css';

const ExtraPart2 = () => {
    return (
        <>
            <div className='d-flex justify-content-between extra_part2'>
                <div className="card extra_part_card" style={{ width: "16rem" }}>
                    <div>
                        <h5>Create with strip lights</h5>
                    </div>
                    <img style={{ height: "280px", width: "100%" }} src="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Striplighting_758x608_2X_en_US._SY608_CB418597463_.jpg" className="card-img-top" alt="..." />
                    <div className='mt-2'>
                        <p><Link style={{ textDecoration: "none" }} to='/shop'><small>see more</small></Link></p>
                    </div>
                </div>
                <div className="card extra_part_card" style={{ width: "16rem" }}>
                    <div>
                        <h5>For your Fitness Needs</h5>
                    </div>
                    <img style={{ height: "280px", width: "100%" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmDLPPp6Y5Cuhhvf_ESj0AST2ypnQB7uLcDw&usqp=CAU" className="card-img-top" alt="fitness img" />
                    <div className='mt-2'>
                        <p><Link style={{ textDecoration: "none" }} to='/shop'><small>see more</small></Link></p>
                    </div>
                </div>
                <div className="card extra_part_card" style={{ width: "16rem" }}>
                    <div>
                        <h5>Electronics</h5>
                    </div>
                    <img style={{ height: "280px", width: "100%" }} src="https://sgp1.digitaloceanspaces.com/cosmosgroup/news/4688722_walton%20home%20applaince%20products.jpg" className="card-img-top" alt="..." />
                    <div className='mt-2'>
                        <p><Link style={{ textDecoration: "none" }} to='/shop'><small>see more</small></Link></p>
                    </div>
                </div>
                <div className="card extra_part_card" style={{ width: "16rem" }}>
                    <div>
                        <h5>Shop Laptops & Tablets</h5>
                    </div>
                    <img style={{ height: "280px", width: "100%" }} src="https://www.popsci.com/uploads/2019/01/07/I4AII6N6NPMKM5A5NTDQH5DYQM.jpg?auto=webp" className="card-img-top" alt="laptop near window" />
                    <div className='mt-2'>
                        <p><Link style={{ textDecoration: "none" }} to='/shop'><small>see more</small></Link></p>
                    </div>
                </div>
            </div>
            <ExtraPart />
        </>
    );
};

export default ExtraPart2;