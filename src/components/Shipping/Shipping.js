import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Shipping.css';

const Shipping = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data);
    }

    console.log(watch("example"));
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