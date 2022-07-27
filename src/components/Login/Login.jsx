import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useNavigate();
    const redirect_uri = location.state?.from || '/'
    console.log("came from", location.state?.from);

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className='login_form'>
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name="" id="" /><br />
                    <input type="password" name="" id="" /><br />
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