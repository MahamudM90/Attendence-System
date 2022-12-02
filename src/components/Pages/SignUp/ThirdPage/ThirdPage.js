import React from 'react';
import logo from '../../../../assets/images/logo.svg';
import main from '../../../../assets/images/main.svg';
import { Link } from 'react-router-dom';
import './ThirdPage.css'
const ThirdPage = () => {
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
                <h5 className='signup'>SignUp Form</h5>
                <form>
                <input type="text" name="first-name"  className='border-b-2 first w-full my-24 outline-none' placeholder='Write Password'/>
                
                </form>
                <span className='back'> <Link to='/second'>Back</Link></span>  <Link to='/'>  <button className='btn-third drop-shadow-2xl my-20'>Sign Up</button></Link>
              
            </div>
            
            </div>
           
        </div>
    );
};

export default ThirdPage;