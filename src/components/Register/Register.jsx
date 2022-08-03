import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css';

const Register = () => {
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
        <div className='register_form'>
            <div className='register_all'>
            <h2>Register</h2>
                <form onSubmit="">
                    <input className='email_input' type="email" name="" id="" placeholder='your email' /><br />
                    <input className='email_input' type="password" name="" id="" placeholder='your password'/><br />
                    <input className='email_input' type="password" name="" id="" placeholder='re-enter password'/><br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an Account ? <Link to='/login'>Login</Link></p>
                <p>-------------- or --------------</p>
                <button onClick={handleGoogleLogin} className='regular_btn'>Google sign in</button>
            </div>
        </div>
    );
};

export default Register;