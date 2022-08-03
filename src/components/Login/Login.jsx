import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useNavigate();
    const redirect_uri = location.state?.from || '/shop'
    // console.log("came from", location.state?.from);

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className='login_form'>
            <div className='login_all'>
                <h2 style={{textAlign:"center"}}>Login</h2>
                <form>
                    <input className='email_input' type="email" name="" id="" placeholder='write your email' /><br />
                    <input className='pass_input' type="password" name="" id="" placeholder='your password' /><br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to ema-John ? <Link to='/register'>Create Account</Link></p>
                <p>-------------- or --------------</p>
                <button className='regular_btn' onClick={handleGoogleLogin}>Google sign in</button>
            </div>
        </div>
    );
};

export default Login;