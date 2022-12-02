import React from 'react';
import logo from '../../../assets/images/logo.svg';
import './AttendenceInfo.css'
const AttendenceInfo = () => {
    return (
        <div>
           <div className='logo-part p-5'>
                <img src={logo} alt=''/>
            </div>
            <div className='attendence mx-auto'>
            <h5 className='information'>Attendance information</h5>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default AttendenceInfo;