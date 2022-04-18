import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location=useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;
   
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
        ] = useSignInWithEmailAndPassword(auth);
        const [sendPasswordResetEmail,sending] = useSendPasswordResetEmail(auth);
        if(user){
            navigate(from,{replace:true})
        }
        if(loading){
            return <Loading></Loading>
        }
        if (error ) {
            errorElement=
              <div>
                <p className='text-danger'>Error: {error.message}</p>
              </div>
            
          }

        const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
        }
    const navigateRegister = () => {
        navigate('/registration')
    }
    const resetPassword =async()=>{
        const email =emailRef.current.value;
        if(email){
         await sendPasswordResetEmail(email);
         toast('sent email')
        }
        else{
            toast ('please enter your email address')
        }
        

    }
    return (
        <div className='container w-50 mx-auto'>
            <h1 className='text-primary text-center mt-2'>Please Login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
               
                <Button className='px-5 mx-auto w-50 d-block' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p>New to medical health care? <Link to='/registration' className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Registration</Link></p>
            <p>Forget password? <button className='text-primary btn btn-link pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;