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
            <div>
                <div className='new_user'>
                    <p>Welcome to ema-John! Please login.</p>
                    <p className='new_user2'><small>New to ema-John ? <Link to='/register' style={{ textDecoration: "none" }}>Register </Link>Here</small></p>
                </div>
                <div className='login_all'>

                    <div className='log_work'>
                        <form className='me-5'>
                            <label className='input_label' htmlFor="email" >Email*</label>
                            <input type="email" name="" id="" placeholder='Please enter your email' required/><br />
                            <label className='input_label' htmlFor="password">Password*</label>
                            <input type="password" name="" id="" placeholder='Please enter your password' required/><br />
                            <input className='login_input' type="submit" disabled value="LOGIN" />
                        </form>
                        <div className=''>
                            <p style={{ fontSize: "13px", color: "#424242", fontWight: 400 }}>Or, login with</p>
                            <button disabled className='regular_btn_fb' onClick={handleGoogleLogin}>Facebook</button><br /><br />
                            <button className='regular_btn_google' onClick={handleGoogleLogin}>Google </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;