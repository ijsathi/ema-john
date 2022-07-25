import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className='register_form'>
            <div>
            <h2>Register</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder='your email' /><br />
                    <input type="password" name="" id="" placeholder='your password'/><br />
                    <input type="password" name="" id="" placeholder='re-enter password'/><br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an Account ? <Link to='/login'>Login</Link></p>
                <p>-------------- or --------------</p>
                <button className='regular_btn'>Google sign in</button>
            </div>
        </div>
    );
};

export default Register;