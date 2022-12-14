import React from 'react';
import logo from '../../../../assets/images/logo.svg';
import main from '../../../../assets/images/main.svg';
import { Link } from 'react-router-dom';
import './SecondPage.css'
const SecondPage = () => {
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
                <input type="text" name="first-name"  className='border-b-2 first w-full mt-20 outline-none' placeholder='Write First Name'/>
                <input type="text" name="first-name"  className='border-b-2 first w-full mt-10 outline-none' placeholder='Write Last Name'/>
                </form>
                <span className='back'> <Link to='/'>Back</Link></span>  <Link to='/third'>  <button className='btn-second drop-shadow-2xl mt-16'>Next Step -></button></Link>
              
            </div>
            
            </div>
           
        </div>
    );
};

export default SecondPage;