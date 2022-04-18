import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Shipment.css';


const Shipment = () => {
    const handleButton=()=>{
        toast('Thank You for booking')
    }
    return (
        <div className='register-form'>
             <h1>Information for Shipment</h1>
             <form className='' >
                <input type="text" name="name" id="" placeholder='Your Name' />
                <br />
                <input type="email" name="email" id="" placeholder='Email Address' required /> <br />


                <input type="password" name="password" id="" placeholder='Password' required /><br />

               <div className='text-center'>
               <button onClick={handleButton} className='btn btn-primary w-50  '> Shipment</button>
               </div>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default Shipment;