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
        <>

            <div>
                <form className='shipping_form' onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Company Name(Optional)" title='Company Name' {...register("company name")} />

                    <div className='input_name'>
                        <input defaultValue={user.displayName} title="name" placeholder="Name*" {...register("name")} />

                        <input className='ms-4' type="email" id="email" name="email" title="email" required defaultValue={user.email} placeholder='Email*' {...register("email", { required: true })} />
                        {errors.email && <span className='err'>This field is required</span>}
                    </div>
                    <div className='input_name'>
                        <input type="text" id="city" name="city" title="city" required placeholder="City*" {...register("city")} />
                        <input className='ms-4' type="text" id="zip" name="zip" title="zip" placeholder="Zip" {...register("zip")} />
                    </div>
                    <div className="input_name">
                        <input type="number" id="number" name="number" title="phone" required placeholder="Phone*" {...register("phone")} />
                        <input className='ms-4' type="number" id="pincode" name="pincode" title="Pin Code" placeholder="Pin Code" {...register("pincode")} />
                    </div>
                    <input type="text" id="address" title="address" name="address" required placeholder="Address*" {...register("address")} />

                    <input className='submit_input' type="submit" value="Place Order" />
                </form>
            </div>
        </>
    );
};

export default Shipping;