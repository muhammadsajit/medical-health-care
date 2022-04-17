import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const{id,name,img,description,price}=service;
    const navigate= useNavigate()
    const navigateCheckout= (id)=>{
       navigate(`/service/${id}`)  
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price:{price}</p>
            <p><small>{description}</small></p>
            <button onClick={()=>navigateCheckout(id)} className='btn btn-primary'>Detail</button>
        </div>
    );

};

export default Service;