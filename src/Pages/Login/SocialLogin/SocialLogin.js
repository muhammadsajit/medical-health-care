import React from 'react';
import logo from '../../../Images/logo.png';
import './SocialLogin.css'

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='w-50 bg-primary'>
                </div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='w-50 bg-primary'>
                </div>
              
            </div>
            <div className=' button-update '> 
                  <button   className='btn btn-primary d-block mx-auto w-50  '>
                      <img style={{width:'70px'}} src={logo} alt="" />
                      <span >Google Sign In</span></button>
 
              </div>
        </div>
    );
};

export default SocialLogin;