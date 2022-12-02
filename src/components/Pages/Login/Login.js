import React from 'react';
import logo from '../../../assets/images/logo.svg';
import main from '../../../assets/images/main.svg';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
        <div>
              <div className='logo-part p-12'>
                <img src={logo} alt=''/>
            </div>
            <div className='flex justify-evenly'>
            <div className='image-part'>
                <img src={main} alt=''/>
            </div>
            <div className='main drop-shadow-lg'>
                <h5 className='signup'>Log in Form</h5>
                <form>
                <input type="email" name="first-name"  className='border-b-2 first w-full mt-20 outline-none' placeholder='Write Email Address'/>
                <input type="text" name="first-name"  className='border-b-2 first w-full mt-10 outline-none' placeholder='Write Password'/>
                </form>
              <Link to='/attendence'>  <button className='btn-login drop-shadow-2xl mt-16'>Log In</button></Link>
              <h1 className='text-right mt-36 account'>Already have an account? <Link to='/'><span className='login'>SIGNUP HERE!</span></Link> </h1>
            </div>
            
            </div>
        </div>
    );
};

export default Login;