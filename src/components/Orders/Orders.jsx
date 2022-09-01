import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Orders = () => {
    const [orders, setOrder] = useState([]);
    const {user} = useAuth();
    const history = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`, {
            headers:{
                "authorization":`Bearer ${localStorage.getItem("idToken")}`
            }
        })
            .then(res => {
                if(res.status === 200){
                    return res.json()
                }
                else if(res.status === 401){
                    history.push('/login')
                }
            })
            .then(data => setOrder(data))
    }, [])
    return (
        <div>
            <h1>My: {orders.length} Orders</h1>
            <ul>
                {
                    orders.map(order => <li key={order._id}>{order.name} : {order.email}</li>)
                }
            </ul>
        </div>
    );
};

export default Orders;