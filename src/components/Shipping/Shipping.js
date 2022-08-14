import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import './Shipping.css';

const Shipping = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        const savedCart = getStoredCart();
        data.order = savedCart;

        fetch('http://localhost:5000/orders', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("Order Processed Successfully✅");
                    clearTheCart();
                    reset();
                }
            })
    }

    // console.log(watch("example"));
    return (
        <div>
            <form className='shipping_form' onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} placeholder="your name" {...register("name")} />

                <input defaultValue={user.email} placeholder='your mail' {...register("email", { required: true })} />
                {errors.email && <span className='err'>This field is required</span>}

                <input placeholder="your address" {...register("address")} />
                <input placeholder="city" {...register("city")} />
                <input placeholder="your phone" {...register("phone")} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;