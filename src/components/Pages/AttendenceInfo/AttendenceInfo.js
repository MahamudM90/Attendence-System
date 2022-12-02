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
            <div className='flex justify-evenly items-center py-16'>
                <div>
                    <h5>Date</h5>
                    <p>lol</p>
                    <p>lala</p>
                </div>
                <div>
                    <h5>name</h5>
                    <p>tar</p>
                </div>
                <div>
                    <h5>Attendence</h5>
                    <p>tor</p>
                </div>
            </div>
        </div>
    );
};

export default AttendenceInfo;