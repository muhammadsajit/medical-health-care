import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Registration.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Registration = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login')
    }
    if (user) {
        navigate('/home');
    }
    const handleRegistration = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;
        //  if(agree){
        //     createUserWithEmailAndPassword(email,password)
        //  }
        await createUserWithEmailAndPassword(email, password);
        // await updateProfile({ displayName:name });
        // console.log('Updated profile');
        // navigate('/home')



    }
    return (
        // registration form
        <div className='register-form'>
            <h1 className='textAlign:center'>Please Registration</h1>
            <form onSubmit={handleRegistration} >
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Eamil Address' required />

                <input type="password" name="password" id="" placeholder='Password' required />

                <input

                    className='btn btn-primary w-50 mx-auto mt-2'
                    type="submit"
                    value="Registration" />
            </form>
            <p>Already have an account? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Registration;