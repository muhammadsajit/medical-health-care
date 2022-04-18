import React from 'react';
import './Contact.css';
import doctorProfile from '../../../Images/doctor.jpg'

const Contact = () => {
    return (
        <div id='contact' className='contact-container'>
            <h1 className='text-center text-primary'>Contact With doctor</h1>
            <div className="container mt-5">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6 col-12">
                        <h1 className="fw-bold">Chat With Doctor</h1>
                        <p> Patients can easily interacting with doctor by the help of digital telecommunication.Patients can easily call a doctor to tell disease and get treatment from doctor</p>
                        <button type="button" className="btn btn-light bg-info">
                            Start Chat</button>
                    </div>
                    <div className="col-md-6 col-12">
                        <img src={doctorProfile} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>





        </div>



    );
};

export default Contact;