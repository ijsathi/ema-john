import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Login.css';

const Login = () => {
    const {user, signInUsingGoogle} = useFirebase();
    return (
        <div className='login_form'>
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" /><br />
                    <input type="password" name="" id="" /><br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to ema-John ? <Link to='/register'>Create Account</Link></p>
                <p>-------------- or --------------</p>
                <button className='regular_btn' onClick={signInUsingGoogle}>Google sign in</button>
            </div>
        </div>
    );
};

export default Login;