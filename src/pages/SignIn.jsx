
import React, { useState } from 'react';
import '../css/SignIn.css';
import { FaGooglePlusG } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TiVendorMicrosoft } from "react-icons/ti";
import { MdOutlineEmail } from "react-icons/md";

function SignIn() {
    const [isActive, setIsActive] = useState(false);

    const handleRegisterClick = () => {
        setIsActive(!isActive);
    };

    const handleLoginClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div className='bodyforSignIn'>
            <div className={`container ${isActive ? 'active' : ''}`} id='container'>
                <div className='form-container sign-up'>
                    <form>
                        <h1>Create Account</h1>
                        <div className='social-icons'>
                            <a href="#" className='icon'><FaGooglePlusG /></a>
                            <a href="#" className='icon'><MdOutlineEmail /></a>
                            <a href="#" className='icon'><FaFacebookF /></a>
                            <a href="#" className='icon'><TiVendorMicrosoft /></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder='Name' />
                        <input type="email" placeholder='@gmail.com' />
                        <input type="password" placeholder='Password' />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className='form-container sign-in'>
                    <form>
                        <h1>Sign In</h1>
                        <div className='social-icons'>
                            <a href="#" className='icon'><FaGooglePlusG /></a>
                            <a href="#" className='icon'><MdOutlineEmail /></a>
                            <a href="#" className='icon'><FaFacebookF /></a>
                            <a href="#" className='icon'><TiVendorMicrosoft /></a>
                        </div>
                        <span>or use your email password</span>
                        <input type="email" placeholder='@gmail.com' />
                        <input type="password" placeholder='Password' />
                        <a href="#">Forget Your Password? </a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>Welcome Back!</h1>
                            <p>Enter your personal details to use all of size features</p>
                            <button
                                className='hidden'
                                id='login'
                                onClick={handleLoginClick}>
                                Sign In
                            </button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1>Hello!</h1>
                            <p>Register with your personal details to use all of size features</p>
                            <button
                                className='hidden'
                                id='register'
                                onClick={handleRegisterClick}>
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
