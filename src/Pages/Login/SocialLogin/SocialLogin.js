import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../Images/logo.png';
import './SocialLogin.css'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate=useNavigate()
    let errorElement;
    
    
    if (error ) {
        errorElement=
          <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
        
      }
      if(user){
          navigate('/home');
      }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='w-50 bg-primary'>
                </div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='w-50 bg-primary'>
                </div>
              
            </div>
            {errorElement}
            <div className=' button-update '> 
                  <button onClick={()=>signInWithGoogle()}  className='btn btn-primary d-block mx-auto w-50  '>
                      <img style={{width:'70px'}} src={logo} alt="" />
                      <span >Google Sign In</span></button>
 
              </div>
        </div>
    );
};

export default SocialLogin;