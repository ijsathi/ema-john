import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css';

const Register = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useNavigate();
    const redirect_uri = location.state?.from || '/'
    // console.log("came from", location.state?.from);

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className='reg_form'>
            <div>
                <div className='new_user_reg'>
                    <p>Create your ema-John account </p>
                    <p className='new_user2'><small>Already member ? <Link style={{ textDecoration: "none" }} to='/login'>Login </Link>Here</small></p>
                </div>
                <div className='reg_all'>
                    <div>
                        <form onSubmit="">
                            <div className='reg-form'>
                                <div>
                                    <label className='input_label_reg' htmlFor="email">Email*</label>
                                    <input className='email_input' type="email" name="" id="" placeholder='Please enter your email' required />
                                    <label className='input_label_reg mt-3' htmlFor="email">Password*</label>
                                    <input className='email_input' type="password" name="" id="" placeholder='Please enter your password' /><br />
                                </div>
                                <div className='ms-5'>
                                    <label className='input_label_reg' htmlFor="email">Re-password*</label>
                                    <input className='email_input' type="password" name="" id="" placeholder='Please re-enter your password' /><br />
                                    <input className='reg_input' disabled type="submit" value="SIGN UP" />
                                </div>
                            </div>
                        </form>
                        <p className='text-center'><small style={{ color: "#757575" }}>Or, sign up with</small></p>
                        <div className='fb_ggl'>
                            <div>
                                <button onClick={handleGoogleLogin} className='regular_btn_google'>Google</button>
                            </div>
                            <div>
                                <button disabled onClick={handleGoogleLogin} className='regular_btn_fb'>Facebook</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;