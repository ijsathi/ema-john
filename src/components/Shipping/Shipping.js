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
                <input defaultValue={user.displayName} placeholder="Name*" {...register("name")} />

                <input type="email" id="email" name="email" required defaultValue={user.email} placeholder='Email*' {...register("email", { required: true })} />
                {errors.email && <span className='err'>This field is required</span>}

                <input type="text" id="address" name="address" required placeholder="Address*" {...register("address")} />
                <input type="text" id="city" name="city" required placeholder="City*" {...register("city")} />
                <input type="number" id="number" name="number" required placeholder="Phone*" {...register("phone")} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;